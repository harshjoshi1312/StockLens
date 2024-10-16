# StockLens

**StockLens** is a powerful full-stack platform for real-time stock tracking, market analysis, and portfolio management. Leveraging modern web technologies, StockLens offers users a clear and comprehensive view of market trends, helping them make informed investment decisions.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Real-Time Stock Tracking**: Get live updates on stock prices and performance.
- **Market Analysis Tools**: Analyze market trends with visual graphs and financial indicators.
- **Portfolio Management**: Manage and track your investment portfolio with ease.
- **User-Friendly Dashboard**: Intuitive interface for better data visualization and decision-making.
- **API Integration**: Fetches stock data from external financial APIs.
- **Responsive Design**: Fully responsive web app accessible from any device.

---

## Tech Stack

### Frontend:
- React.js
- HTML5 / CSS3
- JavaScript (ES6+)
- Axios for API calls

### Backend:
- Node.js
- Express.js
- MongoDB for database
- Mongoose for ORM

### Additional:
- JWT for Authentication
- WebSocket for Real-Time Data
- Chart.js for data visualization

---

## Installation

### Prerequisites:
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/harshjoshi1312/StockLens.git
    cd StockLens
    ```

2. **Install Backend Dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Install Dashboard Dependencies**:
    ```bash
    cd ../dashboard
    npm install
    ```

5. **Set Up Environment Variables**:
    Create a `.env` file in the `backend` folder with the following details:
    ```bash
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    API_KEY=<API Key for stock data>
    ```

6. **Run the Application**:
    - **Backend**:
      ```bash
      cd backend
      npm run start
      ```

    - **Frontend**:
      ```bash
      cd ../frontend
      npm start
      ```

    - **Dashboard**:
      ```bash
      cd ../dashboard
      npm start
      ```

---

## Usage

After setting up and running the application, navigate to:

- **Frontend**: `http://localhost:3000` (React.js frontend)
- **Backend API**: `http://localhost:5000` (Node.js backend)
- **Dashboard**: `http://localhost:3001` (React-based admin dashboard)

Use the dashboard to monitor your portfolio, add new stock to your watchlist, and check market analysis.

---

## Folder Structure

Here's an overview of the project structure:

```bash
StockLens/
│
├── backend/             # Backend code (Node.js, Express, MongoDB)
│   ├── model/           # Mongoose models
│   ├── routes/          # API routes
│   ├── controller/      # Route controllers
│   ├── schemas/         # Mongoose schemas
│   └── server.js        # Entry point for backend
│
├── frontend/            # Frontend code (React.js)
│   ├── public/          # Static assets
│   ├── src/             # React components and hooks
│   └── package.json     # Frontend dependencies
│
├── dashboard/           # Admin dashboard code (React.js)
│   ├── public/          # Static assets for the dashboard
│   ├── src/             # Dashboard components
│   └── package.json     # Dashboard dependencies
│
├── README.md            # Project documentation
```

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
