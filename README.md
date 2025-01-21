# Login System 🔒

A user-friendly login system built with Node.js, Express, MongoDB, and EJS, providing secure user authentication and easy navigation.

🌟 ## Features

User Authentication: Secure login and registration system with password encryption
Responsive Design: Optimized for seamless use across devices
Templating with EJS: Dynamic rendering of pages for better user experience
MongoDB Integration: Robust data storage for user credentials
Clean UI: Simplistic and intuitive interface for users

🚀 ## Tech Stack

Backend: Node.js, Express.js
Database: MongoDB (Mongoose for object data modeling)
Templating: EJS
Styling: CSS (Modular styles for different pages)

📦 ## Installation

Clone the repository:


# Login System This is a simple login system built with Node.js, Express, MongoDB, and EJS for templating. ## Project Structure ``` login-system/ ├── package.json ├── public/ │   ├── styles.css │   └── welcome.css ├── server.js ├── views/ │   ├── login.ejs │   ├── register.ejs │   └── welcome.ejs ``` ## Prerequisites - Node.js - MongoDB ## Installation 1. Clone the repository: ```sh git clone https://github.com/yourusername/login-system.git cd login-system ``` 2. Install dependencies: ```sh npm install ``` 3. Set up MongoDB: Make sure you have MongoDB installed and running. Update the MongoDB connection string in `server.js` if necessary. ## Running the Application Start the server: ```sh node server.js ``` The application will be running at `http://localhost:3000`. ## Project Details ### Routes - `/` - Login page - `/login` - Handle login - `/register` - Registration page - `/register` - Handle registration ### Views - `views/login.ejs` - Login page template - `views/register.ejs` - Registration page template - `views/welcome.ejs` - Welcome page template ### Styles - `public/styles.css` - General styles for login and registration pages - `public/welcome.css` - Styles for the welcome page ## License This project is licensed under the ISC License.
