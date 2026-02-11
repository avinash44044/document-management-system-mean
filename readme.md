#  Document Management System (MEAN Stack)
<img width="1918" height="968" alt="upload documents" src="https://github.com/user-attachments/assets/baef1d63-6e81-4976-aa2b-1ba0da7dc106" />
<img width="1918" height="962" alt="set permission" src="https://github.com/user-attachments/assets/74d05733-b09d-4cd2-8037-bcfe68288605" />
<img width="1918" height="922" alt="upload new version" src="https://github.com/user-attachments/assets/9aea6967-adf1-4cf2-9693-ac9c6acd4a2e" />
<img width="1917" height="961" alt="dashboard" src="https://github.com/user-attachments/assets/930c16b2-2c1b-4904-b34e-457d51d3e723" />
<img width="1916" height="968" alt="register" src="https://github.com/user-attachments/assets/e3932a5c-e58a-4e0d-a848-a43e738cd8db" />
<img width="1918" height="1007" alt="login" src="https://github.com/user-attachments/assets/faea3e43-1272-43ec-94a3-1da13fb201db" />


A full-stack Document Management System built using the MEAN stack (MongoDB, Express.js, Angular, Node.js).

This application allows users to upload documents, manage document versions, search and filter documents, and assign role-based permissions (Viewer / Editor).

---

## Features

###  Authentication
- User Registration & Login
- JWT-based authentication
- Protected routes

###  Document Management
- Upload documents (PDF, Images, etc.)
- Categorize and tag documents
- Search by title, category, or tags
- View documents

###  Version Control
- Upload new versions of documents
- Maintain version history
- Track upload timestamps

###  Role-Based Permissions
- Owner can assign:
  - Viewer → Can view document only
  - Editor → Can upload new version
- Backend-enforced access control

###  Responsive UI
- Clean dashboard
- Mobile-friendly layout

---

# 🛠 Tech Stack

## Frontend
- Angular (v17+)
- TypeScript
- HTML / CSS

## Backend
- Node.js (v22+)
- Express.js (v4+)
- MongoDB (v6+)
- Mongoose (v8+)
- Multer (file upload)
- JSON Web Token (JWT)

---


Installation Guide (Local Setup)

##  Prerequisites

Make sure the following are installed:

- Node.js v22+
- npm v10+
- MongoDB v6+
- Angular CLI v17+

Check versions:

```bash
node -v
npm -v
ng version
mongod --version



Backend Setup

// Navigate to backend folder:

cd backend

// Install dependencies:

npm install

// Start backend server:

npm start

// Backend will run at:

http://localhost:5000


Frontend Setup


// Open a new terminal and navigate to frontend:

cd frontend

// Install dependencies:

npm install

// Start Angular development server:

ng serve

Frontend will run at:

http://localhost:4200
