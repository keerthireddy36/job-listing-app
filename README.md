# Job Listing App – Cygnus Assignment

## Overview
This project is a simple **Job Board UI** built using **React + Vite**.  
It allows users to browse, search, and filter job listings efficiently.  
The application uses mock data (static JSON) and runs fully on the frontend.

---

## Features
- Display job cards (title, company, location, type)
- Search jobs by title (real-time)
- Filter by location (Remote / On-site)
- Filter by job type (Internship / Full-time)
- Alphabetical sorting (Bonus)
- Highlight searched keyword (Bonus)
- Responsive design (mobile-friendly)

---

## Tech Stack
- React (Hooks for state management)
- Vite (Fast development build tool)
- JavaScript (ES6)
- CSS3 (Responsive layout)

---

## Project Structure
src/
├── components/
│ ├── JobCard.jsx
│ └── Filters.jsx
├── data/
│ └── jobs.js
├── App.jsx
├── main.jsx
└── App.css

---

## Installation & Setup

### 1. Clone repository
```bash
git clone https://github.com/keerthireddy36/job-listing-app.git
cd job-listing-app
2. Install dependencies
 npm install
3. Run locally
npm run dev
Open browser → http://localhost:5173

Deployment

The app can be deployed using Vercel or Netlify.

Improvements (Future Work)

Connect to real job API

Add pagination

Add dark mode

Add loading skeleton

Better UI with Tailwind

Save filters in local storage
