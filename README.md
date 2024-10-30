
# Incident Reporting and Management System

This is a full-stack **Incident Reporting and Management System** designed to help security teams log, track, and manage security incidents in real-time. Built with **Django** and **Django Rest Framework** (backend) and **React 18+** (frontend), this system offers a scalable and interactive platform for reporting and visualizing security incidents.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Setup Instructions](#setup-instructions)
  - [Backend (Django)](#backend-django)
  - [Frontend (React)](#frontend-react)
- [API Documentation](#api-documentation)
- [License](#license)

---

## Project Overview

The Incident Reporting and Management System enables security operators to report incidents, track severity, generate reports, and view live statistics. It is built with a **REST API** in Django and a **React** frontend for a modern, interactive user experience.

## Tech Stack

- **Backend**: Django, Django Rest Framework, PostgreSQL
- **Frontend**: React 18+ with TypeScript
- **Database**: PostgreSQL
- **APIs**: RESTful API with Django Rest Framework
- **Additional Libraries**: Axios, React Router, CORS headers, Django Channels (for real-time notifications)
- **DevOps**: Docker (optional for containerization), AWS (optional for deployment)

## Features

- **User Authentication & Role Management**: Secure login, role-based access control, with roles like Admin, Operator, and Viewer.
- **Incident Reporting**: Log incidents with details like title, description, severity, and timestamp.
- **Dashboard with Data Visualization**: View incident statistics, filtering, and visualization of real-time data.
- **REST API**: Manage incidents through secure, RESTful endpoints.
- **Real-Time Notifications**: Receive live updates when new incidents are logged.
- **Observability**: Logging and monitoring capabilities to track system health and performance.

## Getting Started

To run this project locally, ensure you have the following installed:

- Python 3.8+
- Node.js 14+
- PostgreSQL
- Docker (optional for containerization)

Clone the repository and follow the setup instructions for both the backend and frontend.

---

## Setup Instructions

### Backend (Django)

1. **Navigate to the backend directory** (assuming it's located in `incident_management`):

    ```bash
    cd incident_management
    ```

2. **Create a virtual environment** and activate it:

    ```bash
    python3 -m venv incident_env
    source incident_env/bin/activate  # For macOS/Linux
    incident_env\Scripts\activate     # For Windows
    ```

3. **Install dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

4. **Set up the PostgreSQL database**:
   - Create a new database in PostgreSQL.
   - Update the `.env` file with your database credentials.

5. **Apply database migrations**:

    ```bash
    python manage.py migrate
    ```

6. **Create a superuser** for the Django admin panel:

    ```bash
    python manage.py createsuperuser
    ```

7. **Run the Django development server**:

    ```bash
    python manage.py runserver
    ```

The backend API should now be running at `http://127.0.0.1:8000/`.

### Frontend (React)

1. **Navigate to the frontend directory**:

    ```bash
    cd ../frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the React development server**:

    ```bash
    npm start
    ```

The React frontend should now be running at `http://localhost:3000` and able to communicate with the Django API.

---

## API Documentation

The backend provides a RESTful API for managing incidents. Here are the main endpoints:

- **GET /api/incidents/**: Retrieve a list of incidents.
- **POST /api/incidents/**: Create a new incident.
- **GET /api/incidents/{id}/**: Retrieve details of a specific incident.
- **PUT /api/incidents/{id}/**: Update an existing incident.
- **DELETE /api/incidents/{id}/**: Delete an incident.

> **Note**: Authentication is required for accessing these endpoints. Use the Django admin to manage users and permissions.

## License

This project is licensed under the MIT License.
