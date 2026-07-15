# 📘 Assignment: Book Explorer Frontend

## 🎯 Objective

Build a small frontend app that connects to your FastAPI Books API. You will practice using Fetch to read and update server data, then render changes in the browser.

## 📝 Tasks

### 🛠️ Create The Page Layout And API Connection

#### Description
Set up a simple webpage with a title, a section to show books, and a status area for loading or error messages. Connect your JavaScript to the API base URL.

#### Requirements
Completed program should:

- Create an HTML page with a heading and an empty container for book cards or list items.
- Define an API base URL variable pointing to your FastAPI server.
- Show a loading message while requesting data.
- Show an error message if the API request fails.


### 🛠️ Load And Render Books From GET Endpoint

#### Description
Call the API to fetch all books and render them to the page. Each book should display its id, title, and author.

#### Requirements
Completed program should:

- Send a `GET /books` request using Fetch.
- Parse the JSON response correctly.
- Render each book dynamically to the DOM.
- Clear and re-render the list each time data is reloaded.


### 🛠️ Add Create And Delete Interactions

#### Description
Add a form to create new books and a delete button for each rendered book. Keep the UI in sync by refreshing the list after each action.

#### Requirements
Completed program should:

- Add a form with title and author fields.
- Send a `POST /books` request when the form is submitted.
- Add a delete control that sends `DELETE /books/{book_id}` for a selected item.
- Refresh the list after create and delete operations.
- Keep the page usable within one class session (about 1 hour).
