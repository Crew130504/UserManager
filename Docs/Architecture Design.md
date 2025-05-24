Entendido. Aquí tienes el documento de arquitectura **actualizado sin emojis**, con un tono profesional y limpio:

---

# Architecture Design - User Manager (Angular App)

## Overview

**User Manager** is a modular Angular application designed for managing users. It implements clean architecture principles, adheres to Angular's best practices, and integrates a Postman mock API to simulate backend behavior.

---

## Framework and Stack

* **Framework:** Angular 17+
* **Language:** TypeScript
* **Styling:** SCSS (custom design system)
* **Mock API:** json-server (Postman-based)
* **UI/UX:** Flexbox layout, SCSS modules, Bootstrap 5 utilities
* **Routing:** Lazy-loaded modules

---

## Application Structure

The app is organized by feature-based modules with encapsulated concerns.

```plaintext
src/app/
├── auth/              # Login form and authentication
├── users/             # User list and detail views
├── core/              # Global services, layout, guards, models
├── shared/            # (Optional) Reusable UI components
├── app.module.ts
├── app-routing.module.ts
```

### Module Descriptions

**auth/**

* Login form
* Password visibility toggle
* Form validation and error feedback

**users/**

* User list with action buttons
* User detail view with return functionality
* Protected by AuthGuard
* Responsive design with styled layout

**core/**

* `AuthService`, `UserService`
* `AuthGuard`
* `LayoutComponent` for consistent navbar and structure

---

## Routing Design

* **AppRoutingModule** manages lazy-loaded entry points `/auth` and `/users`
* **AuthRoutingModule** includes `/auth/login`
* **UsersRoutingModule** provides `/users/home` and `/users/:id` inside `LayoutComponent`

---

## UI and UX

The application implements a coherent design system based on the following color palette:

* Primary: `#1D6768`
* Accent: `#D65D39`
* Background: `#e0b889`

Features include:

* Gradient animated login background
* Consistent typography and spacing
* Animated buttons with hover and click transitions
* Fade-in animation for key components
* Structural directives: `*ngIf`, `*ngFor`
* Attribute directives: `ngClass`, `ngStyle`

---

## API Simulation

* `json-server` simulates backend at `localhost:3000`
* Users are defined in `db.json`
* Login is matched by username and password
* Services (`AuthService`, `UserService`) interact with the mock API via Angular `HttpClient`

---

## Main Pages

**Login Page**

* Centered login card
* Toggle password visibility
* Error feedback and transition animations

**User List Page**

* Responsive table with list of users
* Styled "Details" buttons per user
* Fade and hover animations

**User Detail Page**

* Centered card layout
* Styled "Back" button
* Animations on load

---

## File System Overview

```plaintext
user-manager/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   └── login/
│   │   ├── users/
│   │   │   ├── users-home/
│   │   │   └── user-detail/
│   │   ├── core/
│   │   │   ├── layout/
│   │   │   ├── services/
│   │   │   └── guards/
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/
│   │   ├── logo.png
│   │   └── icon.png
│   └── styles.scss
├── angular.json
├── package.json
└── README.md
```

---

## Repository Branches

```plaintext
main           # Production-ready code
users          # User list, detail, layout and design
login          # Login functionality and styling
mock           # Mocks bd.json
docs           # Documentation and architecture files
```
