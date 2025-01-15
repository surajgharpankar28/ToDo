
# To-Do App

A simple and modern To-Do List web application built using **Bootstrap 5** and **vanilla JavaScript**. The app allows users to add, delete, and manage their tasks with a sleek and interactive UI. Tasks are saved in **localStorage** so that they persist even after a page reload.

## Features

- **Add Tasks:** Users can add new tasks via an input field.
- **Delete Tasks:** Tasks can be deleted by clicking the trash button.
- **Persistent Storage:** Tasks are saved in **localStorage** so that they persist across page reloads.
- **Modern UI:** Built with Bootstrap 5 for a clean and responsive design.
- **Mobile Friendly:** Fully responsive design, works well on all screen sizes.

## Technologies Used

- **HTML** for structure.
- **CSS** for styling (using **Bootstrap 5**).
- **JavaScript** for functionality (adding, deleting tasks, and local storage).
- **Bootstrap Icons** for interactive buttons.

## Live Demo

You can view the live demo of the project [here](https://to-do-ssg.vercel.app/).



## Setup Instructions

### Prerequisites

- **Node.js** installed on your local machine.
- A browser (Chrome, Firefox, etc.) to view the project.

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/surajgharpankar28/ToDo.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ToDo
   ```

3. **Install dependencies (if any):**

   This project uses Bootstrap 5, so you may need to install Bootstrap locally:

   ```bash
   npm install bootstrap
   ```

4. **Open the `index.html` file:**

   After setting up, open the `index.html` file in your browser to view the application.

5. **Optional (Run with live server):**

   You can run the project with a live server for automatic reloading. You can use extensions like "Live Server" in VS Code or run it with a local server setup.

### Adding Tasks and Managing

- Type a task in the input field and click the **Add Task** button to add it to the list.
- Click the trash icon next to a task to delete it.

### LocalStorage

- Tasks will persist even after refreshing the page or closing the browser, thanks to **localStorage**.
- Tasks are saved as a JSON string in localStorage and retrieved when the page loads.
  

---