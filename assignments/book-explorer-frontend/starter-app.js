const API_BASE_URL = "http://127.0.0.1:8000";

const statusEl = document.getElementById("status");
const listEl = document.getElementById("book-list");
const formEl = document.getElementById("book-form");

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? "#b91c1c" : "#1f2937";
}

function renderBooks(books) {
  listEl.innerHTML = "";

  for (const book of books) {
    const item = document.createElement("li");
    item.className = "book-item";

    const text = document.createElement("span");
    text.textContent = `${book.id}. ${book.title} by ${book.author}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
      await deleteBook(book.id);
      await loadBooks();
    });

    item.appendChild(text);
    item.appendChild(deleteButton);
    listEl.appendChild(item);
  }
}

async function loadBooks() {
  setStatus("Loading books...");

  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const books = await response.json();
    renderBooks(books);
    setStatus(`Loaded ${books.length} books.`);
  } catch (error) {
    setStatus(`Failed to load books: ${error.message}`, true);
  }
}

async function createBook(title, author) {
  const response = await fetch(`${API_BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author }),
  });

  if (!response.ok) {
    throw new Error(`Create failed with status ${response.status}`);
  }
}

async function deleteBook(bookId) {
  const response = await fetch(`${API_BASE_URL}/books/${bookId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Delete failed with status ${response.status}`);
  }
}

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();

  if (!title || !author) {
    setStatus("Please fill out both fields.", true);
    return;
  }

  try {
    setStatus("Adding book...");
    await createBook(title, author);
    formEl.reset();
    await loadBooks();
  } catch (error) {
    setStatus(`Failed to add book: ${error.message}`, true);
  }
});

loadBooks();
