import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private api = 'http://localhost:5000/api/documents';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  private getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.getToken()}`
      })
    };
  }

  uploadDocument(formData: FormData) {
    return this.http.post(
      `${this.api}/upload`,
      formData,
      this.getHeaders()
    );
  }

  getDocuments() {
    return this.http.get(
      this.api,
      this.getHeaders()
    );
  }

  searchDocuments(keyword: string) {
  return this.http.get(
    `${this.api}/search?q=${keyword}`,
    this.getHeaders()
  );
}

setPermission(id: string, data: any) {
  return this.http.put(
    `${this.api}/permission/${id}`,
    data,
    this.getHeaders()
  );
}


  uploadNewVersion(id: string, formData: FormData) {
    return this.http.put(
      `${this.api}/version/${id}`,
      formData,
      this.getHeaders()
    );
  }
}
