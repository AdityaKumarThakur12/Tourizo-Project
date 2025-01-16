Solo Travel Website 🌍

A comprehensive and engaging solo travel platform designed to empower solo travelers with tools, recommendations, and resources to make their journeys unforgettable. Built with React and Firebase, this application provides a seamless and personalized user experience.

Website Deployment 🌐

The website is live at: https://travelzo.netlify.app/

Table of Contents 🗄

Features

Tech Stack

Installation

Usage

Folder Structure

Environment Variables

Screenshots

Website Deployment

Contributing

License

Contact

Features ✨

Dynamic Content: A homepage featuring curated blogs, tips, and travel inspiration for solo travelers.

User Authentication: Secure login and registration using Firebase Authentication.

Personalized Dashboard: Save and manage user preferences, travel plans, and trip ideas.

Real-Time Updates: Synchronize user data with Firebase Realtime Database.

Mobile-Friendly Design: Fully responsive for seamless browsing on all devices.

Interactive Navigation: Sticky navbar and smooth scrolling for a better UX.

Tech Stack 🛠️

Frontend:

React (with Vite for fast development)

CSS3

Backend:

Firebase Realtime Database

Firebase Authentication

Tools:

npm (package manager)

Git & GitHub (version control)

Installation 🚀

Follow these steps to set up and run the project locally:

Prerequisites

Node.js and npm installed on your machine.

A Firebase project set up in the Firebase Console.

Steps

Clone the Repository:

git clone https://github.com/your-username/solo-travel-website.git

Navigate to the Project Directory:

cd travel

Install Dependencies:

npm install

Set Up Firebase:

Create a Firebase project and add a web app to it.

Copy the Firebase configuration and add it to a .env file in the project root:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_DATABASE_URL=your-database-url
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id

Start the Development Server:

npm run dev

Open http://localhost:5173 in your browser to view the app.

Usage 🔥

Explore Travel Content:

Navigate through curated blogs and travel tips on the homepage.

Register/Login:

Create an account or log in using Firebase Authentication.

Personalized Dashboard:

Access your saved preferences and recommendations tailored to you.

Folder Structure 📁

travel/
├── public/
│   ├── _redirects
│   ├── data/
│   │   └── destinations.json
│   ├── sounds/
│   │   └── click.mp3
│   ├── tourLogo.png
│   ├── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── loading.jsx
│   │   └── navbar.jsx
│   ├── Context/
│   │   └── AuthContext.jsx
│   ├── firebaseConfig/
│   │   └── firebase.js
│   ├── images/
│   │   ├── loginBG.webp
│   │   ├── pixel1.webp
│   │   ├── pixel2.webp
│   │   ├── pixel3.webp
│   │   ├── pixel4.webp
│   │   └── tourLogo.png
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   ├── about.jsx
│   │   ├── bookingPage.jsx
│   │   ├── contact.jsx
│   │   ├── footer.jsx
│   │   ├── home.jsx
│   │   ├── login.jsx
│   │   ├── placeDetails.jsx
│   │   ├── places.jsx
│   │   └── signup.jsx
│   ├── styles/
│   │   ├── about.css
│   │   ├── booking.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── login.css
│   │   ├── navbar.css
│   │   ├── placeDetails.css
│   │   ├── places.css
│   │   └── signup.css
│   ├── utils/
│   │   └── protectedRoute.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

Environment Variables 🔒

The project uses a .env file to store sensitive Firebase credentials. Below is an example of the required variables:

VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_DATABASE_URL=your-database-url
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id




Homepage



Login Page



Dashboard





Contributing 🤝

We welcome contributions to make this project better! Here's how you can contribute:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Make your changes and commit them:

git commit -m "Add a meaningful message"

Push your branch:

git push origin feature-name

Create a pull request on GitHub.

License 📜

This project is licensed under the MIT License. You are free to use, modify, and distribute this software.

Contact 📨

If you have any questions, feedback, or suggestions, feel free to reach out:

Email: aditya3863297@gmail.com

GitHub: https://github.com/AdityaKumarThakur12

Happy Travels! 🚫🌟