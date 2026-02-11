import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DocumentService } from '../core/services/document.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  documents: any[] = [];
  search: string = '';
  userId: string = '';

  selectedDoc: any = null;
  selectedFile!: File;

  permissionUserId: string = '';
  selectedRole: string = 'viewer';
  selectedDocForPermission: any = null;

  constructor(
    private docService: DocumentService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.loadDocuments();
  }

  loadDocuments() {
    this.docService.getDocuments()
      .subscribe((res: any) => {
        this.documents = res;
      });
  }

  searchDocs() {
    if (!this.search) {
      this.loadDocuments();
      return;
    }

    this.docService.searchDocuments(this.search)
      .subscribe((res: any) => {
        this.documents = res;
      });
  }

  logout() {
    this.auth.logout();
  }

  /* ============================= */
  /* Permission Logic */
  /* ============================= */

  isOwner(doc: any) {
    return String(doc.owner) === String(this.userId);
  }

  canEdit(doc: any) {
    if (this.isOwner(doc)) return true;

    const permission = doc.permissions?.find(
      (p: any) => String(p.user) === String(this.userId)
    );

    return permission?.role === 'editor';
  }

  getPermissionRole(doc: any) {
    const permission = doc.permissions?.find(
      (p: any) => String(p.user) === String(this.userId)
    );

    return permission?.role || 'viewer';
  }

  openPermissionPanel(doc: any) {
    this.selectedDocForPermission = doc;
  }

  assignPermission() {
    if (!this.permissionUserId || !this.selectedDocForPermission) return;

    this.docService.setPermission(
      this.selectedDocForPermission._id,
      {
        userId: this.permissionUserId,
        role: this.selectedRole
      }
    ).subscribe(() => {
      this.permissionUserId = '';
      this.selectedDocForPermission = null;
      this.loadDocuments();
    });
  }

  /* ============================= */
  /* Version Upload */
  /* ============================= */

  selectDocument(doc: any) {
    this.selectedDoc = doc;
  }

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadNewVersion() {
    if (!this.selectedFile || !this.selectedDoc) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.docService.uploadNewVersion(
      this.selectedDoc._id,
      formData
    ).subscribe(() => {
      this.selectedDoc = null;
      this.loadDocuments();
    });
  }
}
