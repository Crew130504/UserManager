# User Manager (Angular App)

## Overview

User Manager is a modular Angular application designed for user login, listing, and detail display. It implements best practices in UI/UX, SCSS design, and project architecture while using a Postman mock API via json-server.

---

## Features

* User login with password visibility toggle
* Authentication via mock server
* Protected user list view with table and actions
* User detail view with navigation
* Layout component with navbar and logout button
* Responsive UI with SCSS and Bootstrap utilities
* Animated gradient background and transitions

---

## Technologies Used

* Angular 17+
* TypeScript
* SCSS (custom design system)
* json-server (Postman mock API)
* Bootstrap 5 (utility classes)

---

## Project Structure

```plaintext
src/app/
├── auth/
│   └── login/
├── users/
│   ├── users-home/
│   └── user-detail/
├── core/
│   ├── layout/
│   ├── services/
│   └── guards/
├── app-routing.module.ts
└── app.module.ts
```

Other folders:

* `src/assets/` → logo and icon
* `src/styles.scss` → global styles

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repo-url>
cd user-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the mock server (on a separate terminal)

```bash
npx json-server --watch db.json --port 3000
```

### 4. Start the Angular app

```bash
ng serve
```

Open your browser at `http://localhost:4200`

---

## Mock API

The application uses a local mock server (`db.json`) for simulating backend operations.
Endpoints include:

* `GET /users`
* `GET /users/:id`
* `POST /login` (simulated in AuthService)

---

## Branches

```plaintext
main           # Stable release
users          # User list and detail features
login          # Login UI and logic
docs           # Architecture and documentation
```

---

## License

This project is for educational and demonstration purposes.

---

## Author

Created by the development team as part of a technical assignment.
