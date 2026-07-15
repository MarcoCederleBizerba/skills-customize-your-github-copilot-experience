from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Books API")


class BookIn(BaseModel):
    title: str
    author: str


# In-memory storage for this assignment.
books = [
    {"id": 1, "title": "Clean Code", "author": "Robert C. Martin"},
    {"id": 2, "title": "The Pragmatic Programmer", "author": "Andrew Hunt"},
]


@app.get("/")
def root():
    return {"message": "Welcome to the Books API"}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/books")
def list_books():
    return books


@app.post("/books")
def create_book(book: BookIn):
    next_id = max((item["id"] for item in books), default=0) + 1
    new_book = {"id": next_id, **book.model_dump()}
    books.append(new_book)
    return new_book


@app.put("/books/{book_id}")
def update_book(book_id: int, book: BookIn):
    for item in books:
        if item["id"] == book_id:
            item["title"] = book.title
            item["author"] = book.author
            return item
    raise HTTPException(status_code=404, detail="Book not found")


@app.delete("/books/{book_id}")
def delete_book(book_id: int):
    for index, item in enumerate(books):
        if item["id"] == book_id:
            removed = books.pop(index)
            return {"deleted": removed}
    raise HTTPException(status_code=404, detail="Book not found")
