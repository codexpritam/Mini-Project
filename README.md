# Spendora - Smart Expense Tracker

## Project Description

Spendora is a full-stack MERN application designed to simplify expense management by combining both personal and group expense tracking into a single platform.

Many existing applications focus either on personal expense tracking or group expense management separately. Spendora solves this problem by providing both functionalities in one application, eliminating the need to switch between multiple apps.

Users can track personal expenses, create groups, manage shared expenses, and monitor transaction history through a modern and responsive interface.

---

## Technology Stack and Tools Used

### Frontend

* React.js
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Tools & Platforms

* Git
* GitHub
* Postman
* Visual Studio Code

---

## Features and Functionalities

### Personal Expense Management

* Add income and expenses
* Categorize transactions
* Track spending history
* Manage personal finances

### Group Expense Management

* Create expense groups
* Join groups using invite codes
* Add shared expenses
* Split expenses among members
* View group transaction history

### Additional Features

* Responsive UI
* RESTful API integration
* MongoDB database storage
* Real-time expense updates
* User-friendly dashboard

---

## Environment Variables

Create a `.env` file inside the server directory and add the following variables:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:3000
```

> Note: Add only the variables that are actually used in your project.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/spendora.git
cd spendora
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## Execution Steps

### Start Backend Server

```bash
cd server
npm start
```

### Start Frontend Application

```bash
cd client
npm start
```

### Open Application

```text
http://localhost:3000
```

---

## Project Structure

```text
spendora/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## Screenshots

### Home Page

(Add Screenshot Here)

### Dashboard

(Add Screenshot Here)

### Personal Expenses

(Add Screenshot Here)

### Group Expenses

(Add Screenshot Here)

### Transaction History

(Add Screenshot Here)

---

## Future Scope

* User Authentication & Authorization
* Expense Analytics and Charts
* Budget Planning Module
* Monthly Expense Reports
* Export Data to PDF/Excel
* Notifications and Reminders
* AI-Based Spending Insights
* Mobile Application Support

---

## Team Members

* Preetam Raghuvanshi

---

## Conclusion

Spendora provides a centralized solution for managing both personal and group expenses efficiently. By integrating both functionalities into a single platform, it improves convenience, organization, and overall financial management for users.

---

## License

This project is developed for educational and learning purposes.
