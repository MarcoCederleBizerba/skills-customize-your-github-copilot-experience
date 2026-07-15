# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a simple REST API with FastAPI for managing books. You will learn how to create endpoints, validate request data, and return correct HTTP responses.

## 📝 Tasks

### 🛠️ Create The FastAPI App And First Endpoints

#### Description
Set up a FastAPI application and add basic endpoints so the API can be started and tested in a browser or API client.

#### Requirements
Completed program should:

- Create a FastAPI app instance.
- Add a `GET /` endpoint that returns a welcome JSON message.
- Add a `GET /health` endpoint that returns a JSON status like `{"status": "ok"}`.
- Run successfully with Uvicorn.


### 🛠️ Add In-Memory CRUD Endpoints For Books

#### Description
Create REST endpoints to list, create, update, and delete books using an in-memory list as storage.

#### Requirements
Completed program should:

- Store books as dictionaries with `id`, `title`, and `author`.
- Add `GET /books` to return all books.
- Add `POST /books` to create a new book with a unique `id`.
- Add `PUT /books/{book_id}` to update an existing book.
- Add `DELETE /books/{book_id}` to remove a book.


### 🛠️ Validate Input And Return Proper Errors

#### Description
Use Pydantic models for request validation and return clear errors when users request a book that does not exist.

#### Requirements
Completed program should:

- Define a Pydantic model for incoming book data.
- Reject invalid requests automatically with FastAPI validation.
- Return `404` for update/delete of a missing `book_id`.
- Return JSON responses that are consistent and easy to read.
