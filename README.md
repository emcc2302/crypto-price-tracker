# 💰 Crypto Price Tracker

A simple and clean React web app to track cryptocurrency prices in real-time using the CoinGecko API. Users can switch between different currencies (USD, EUR, INR), view a list of coins, and click for detailed information.

---

## 🚀 Features

- 🌍 Real-time crypto market data via CoinGecko API
- 💱 Currency switcher (USD, EUR, INR)
- 📊 Coin detail view with dynamic routing
- 📦 React Context for global state (currency, coin list)
- 🧭 Client-side routing with React Router
- 💅 Clean, responsive UI with custom CSS

----

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [CoinGecko API](https://www.coingecko.com/en/api)
- [Vite](https://vitejs.dev/)
- Context API for global state management

---

## 🧩 Folder Structure

src/

├── assets/ # Logos and icons

├── components/

│ └── Navbar/ # Navbar component

├── context/

│ ├── CoinContext.js # Context object (createContext)

│ └── CoinContext.jsx # Context provider with state + API logic

├── pages/

│ ├── Home/ # Homepage showing all coins

│ └── Coin/ # Single coin details page

├── App.jsx # Main App with Routes

├── main.jsx # App entry point

└── index.css # Global styles
