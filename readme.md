#  Document Management System (MEAN Stack)

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