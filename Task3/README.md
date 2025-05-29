# 📚 Book REST API (Node.js + Express)

This is a simple in-memory REST API for managing a list of books. It supports basic **CRUD operations**: Create, Read, Update, and Delete — using Node.js and Express.js.

---

## 🚀 Features

- ✅ GET all books
- ✅ POST a new book
- ✅ PUT to update a book by ID
- ✅ DELETE a book by ID
- ✅ JSON body parsing
- ✅ In-memory storage (no database required)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Postman (for API testing)

---

## 📦 Setup Instructions

### 1. Clone the Repository (if applicable)

```bash
git clone https://github.com/your-username/book-api.git
cd book-api

``` 

### 2. Install Dependencies 

- npm install

### 3. Run the Server
- node index.js

- The server runs at: http://localhost:3000


## 📬 API Endpoints

 **•**  GET /books
- Description: Retrieve all books.

- Response: 200 OK
- Returns a JSON array of books.

**•**  POST /books
- Description: Add a new book.

- Request Body (JSON):

{
  "title": "Book Title",
  "author": "Author Name"
}

- Response: 201 Created
- Returns the added book object.

**•**  PUT /books/:id
- Description: Update a book by its ID.

- Request Body (JSON):
{
  "title": "Updated Title",
  "author": "Updated Author"
}


- Response: 200 OK
- Returns the updated book.

**•**  DELETE /books/:id
- Description: Delete a book by its ID.

- Response: 204 No Content
- Indicates successful deletion.

### 📌 Notes

This project does not use a database — books are stored in memory.

Data will be reset every time the server restarts.

Designed for learning and simple demos.

Test all CRUD operations:

### ✅ GET /books

### ✅ POST /books

### ✅ PUT /books/:id

### ✅ DELETE /books/:id


