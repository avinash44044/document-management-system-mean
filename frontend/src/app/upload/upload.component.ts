import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DocumentService } from '../core/services/document.service';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './upload.component.html'
})
export class UploadComponent {

  title: string = '';
  category: string = '';
  tags: string = '';
  selectedFile!: File;

  constructor(private docService: DocumentService,
              private router: Router) {}

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('category', this.category);
    formData.append('tags', this.tags);
    formData.append('file', this.selectedFile);

    this.docService.uploadDocument(formData)
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}
