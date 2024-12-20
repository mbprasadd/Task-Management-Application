# Task Manager API

This is a RESTful API for managing tasks, built with **Node.js**, **Express.js**, and **MongoDB**. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks.

---

## Features
- Create tasks with a title, description, and status.
- Retrieve all tasks or a single task by ID.
- Update task details or status.
- Delete tasks.
- Error handling for invalid requests.

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- MongoDB Atlas account or local MongoDB installation
- Git (optional, for cloning the repository)

---

## Setup Instructions

### 1. Clone the repository
bash
git clone https://github.com/mbprasadd/Task-Management-Application.git
cd task-manager-application

---

### 2. Install dependencies
bash
Copy code
npm install


### 3. Set up environment variables
Create a .env file in the root of the project.

Add the following variables:
env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/taskManager?retryWrites=true&w=majority
Replace <username>, <password>, and <cluster> with your MongoDB credentials.



### 4. Start the development server

    bash
    nodemon server.js
     The server will start at http://localhost:5000



### 5. Test the API
    Use tools like Postman or cURL to test the API endpoints. Below are some sample requests:

    -Create a Task
    POST /tasks

    -Get a Task
    GET /tasks

    -Update a Task
    PATCH /tasks/:id

    -Delete a Task
    DELETE /tasks/:id

---

### Project Design Decisions

    -Separation of Concerns:
        The project is structured into routes, controllers, and middleware to keep code modular and maintainable.
        Routes handle HTTP requests, while controllers contain the business logic.

    -Database Connection:
        Mongoose is used as the ODM (Object Data Modeling) library to interact with MongoDB for schema validation and easy querying.

    -Environment Variables:
        Sensitive data such as the database URI is stored in an .env file to enhance security and portability.

    -Error Handling:
        A centralized error-handling middleware provides consistent and user-friendly error responses.

    -Development Efficiency:
        Nodemon is used for automatic server restarts during development.
        The API is built with REST principles for ease of integration with various clients.

    -Future Scalability:
        The app's structure allows easy addition of features like user authentication or more complex task management features (e.g., deadlines, priorities).

---

#### Dependencies
    Express.js - Web framework for Node.js.
    Mongoose - MongoDB object modeling for Node.js.
    dotenv - For environment variable management.
    Nodemon - Monitors for file changes during development.    #   T a s k - M a n a g e m e n t - A p p l i c a t i o n 
 
 
