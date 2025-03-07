# AI-Interviewer  

## 🎯 Objective  
This project aims to provide an AI-powered interview feature where users can upload their resume and chat with the AI. It simplifies the interview preparation process by simulating real interview questions based on the uploaded resume.  

### 🤖 AI Model Used: **Gemini-2.0-Flash**  
This project utilizes the **Gemini-2.0-Flash**, a free AI model provided by Google Gemini.  

---  

## 🚀 Project Setup  
Follow these steps to set up the project on your local machine:  

### **1️⃣ Clone the Repository**  
```bash  
git clone https://github.com/AdarshKumarSr/AI-InterViewer.git  
cd AI-InterViewer  
```  

### **2️⃣ Frontend Setup**  
```bash  
cd frontend  
npm install  
npm run dev  
```  

### **3️⃣ Backend Setup**  
Open another terminal:  
```bash  
cd backend  
npm install  
npm start  
```  

---  

## 📌 API Routes & Usage  

### 🔐 Authentication  

#### **1️⃣ Register User**  
**Request Method:** `POST`  

**Endpoint:**  
```bash  
http://localhost:5000/api/auth/register  
```

**Request Body:**  
```json  
{  
  "name": "Arpit",  
  "email": "arpit@example.com",  
  "password": "mypassword123"  
}  
```

**Response:**  
```json  
{  
    "message": "User registered successfully",  
    "user": {  
        "id": "65b8d1e0b1c9a54212345678",  
        "name": "Arpit",  
        "email": "arpit@example.com"  
    }  
}  
```

---  

#### **2️⃣ Login User**  
**Request Method:** `POST`  

**Endpoint:**  
```bash  
http://localhost:5000/api/auth/login  
```

**Request Body:**  
```json  
{  
  "email": "arpit@example.com",  
  "password": "mypassword123"  
}  
```

**Response:**  
```json  
{  
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjhkMWUwYjFjOWE1NDIxMjM0NTY3OCIsImlhdCI6MTcwOTUwMjAwMCwiZXhwIjoxNzA5Njg2MDAwfQ.ZZZZZZZZZZZZZZZZZZZ",  
    "user": {  
        "id": "65b8d1e0b1c9a54212345678",  
        "name": "Arpit",  
        "email": "arpit@example.com"  
    }  
}  
```

💡 **Note:** The token is used for authentication in protected routes via `Authorization: Bearer <your-token>`.  

---  

### 🤖 Chat with AI (Gemini-2.0-Flash)  

**Request Method:** `POST`  

**Endpoint:**  
```bash  
http://localhost:5000/api/chat  
```

**Request Body:**  
```json  
{  
    "question": "What is an API?"  
}  
```

**Headers:**  
```json  
{  
    "Content-Type": "application/json",  
    "Authorization": "Bearer <your-token>"  
}  
```

**Response Example:**  
```json  
{  
    "answer": "An API (Application Programming Interface) is a set of rules that allows one software application to interact with another."  
}  
```

---  

## ⚙ Environment Variables  

Create a `.env` file in the root directory and add the following values:  

```bash  
GEMINI_API_KEY=your-google-ai-studio-api-key  # Get this from Google AI Studio  
PORT=5000  # Port for running the backend server  
MONGO_URI=mongodb://localhost:27017/your-db-name  # MongoDB connection string  
JWT_SECRET=your-secret-key  # Secret key for JWT authentication  
```

---  

## ⭐ Star the Repo  
If you found this project useful, consider giving it a ⭐ on GitHub!  

[![GitHub Repo](https://img.shields.io/github/stars/AdarshKumarSr/AI-InterViewer?style=social)](https://github.com/AdarshKumarSr/AI-InterViewer)  

