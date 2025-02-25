# 📝 Full Stack Notes Project  
A **MERN Stack** application to create, edit, delete, and manage notes efficiently. Built using **React, Node.js, Express, and MongoDB** with authentication and CRUD operations.

## 🚀 Features  
✅ **User Authentication** (Signup, Login, JWT-based auth)  
✅ **Create, Read, Update, Delete (CRUD) Notes**  
✅ **Protected Routes** (Only logged-in users can access notes)  
✅ **Real-time Updates** (Notes refresh dynamically)  
✅ **Responsive Design** (Optimized for Mobile & Desktop)  
✅ **Secure Passwords** (Hashed using bcrypt)  

---

## 🛠 Tech Stack  

### **Frontend (React)**
- **React**
- **React Router DOM** (For navigation)
- **Axios** (For API calls)
- **React Toastify** (For notifications)
- **Bootstrap** (For responsive UI)

### **Backend (Node.js + Express + MongoDB)**
- **Express.js** (Backend framework)
- **MongoDB Atlas** (Database)
- **Mongoose** (ODM for MongoDB)
- **Bcrypt** (For password hashing)
- **JWT** (For authentication)
- **Dotenv** (For environment variables)

---

## 📦 Installation  

### 🖥️ **Frontend Setup**  
```sh
# Clone the repository
git clone https://github.com/dhruv-barapatre/full-stack_Notes_project.git

# Navigate to frontend directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 🖥 Backend Setup
```sh
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Start the backend server
npm run server

```
🚨 Ensure backend is running before starting the frontend.

## ⚙️ Environment Variables
 🚨Create a `.env` file in both the frontend and backend directories and add the following:

### 🖥 Backend `.env`
```sh
MONGO_URL=your_mongo_connection_string
PORT=8080
SECRET_KEY=your_secret_key
```

### 🖥️ Frontend `.env`
```sh
VITE_APP_BE_URL=http://localhost:8080
```

## 📚 Dependencies
### 🖥️ Frontend
```json
{
  "axios": "^1.7.9",
"bootstrap": "^5.3.3",
"react": "^18.3.1",
"react-bootstrap": "^2.10.4",
"react-router-dom": "^6.26.0",
"react-toastify": "^11.0.3"
}
```

### 🖥 Backend
```json
{
  "bcrypt": "^5.1.1",
"cors": "^2.8.5",
"dotenv": "^16.4.7",
"express": "^4.21.2",
"jsonwebtoken": "^9.0.2",
"mongoose": "^8.10.0",
"nodemon": "^3.1.9"
}
```

## 📂 Project Structure
### 🖥️ Frontend
```
├── public/          # Static assets  
├── src/  
│   ├── components/  # Reusable React components  
│   ├── pages/       # React components representing pages  
│   ├── services/    # API service functions  
│   ├── App.js       # Root component  
│   └── index.js     # Entry point of the React application  
├── .gitignore  
├── README.md  
├── package.json  
└── vite.config.js  

```

### 🖥 Backend
```
├── controllers/  # Handles logic for routes  
├── middleware/   # Middleware functions  
├── models/       # Mongoose schemas  
├── routes/       # Express routes  
├── utils/        # Utility functions  
├── .gitignore  
├── README.md  
├── index.js      # Entry point of the backend server  
└── package.json  

```
---
🚀 **Now your project is ready to run!** 🚀

