# Crowdcube: A Crowdfunding Application

Crowdcube is a modern crowdfunding platform where users can create campaigns, browse inspiring ideas, and support them financially. The project is built with React for the frontend, Node.js for the backend, and MongoDB as the database.

---
## Live Website Link

[Live Demo](https://my-assignment-ten-57a0d.web.app/)

## 🚀 Features

1. **Authentication**:
   - Email/Password login and registration.
   - Social login (Google or GitHub).
   - Protected routes for authenticated features like adding and managing campaigns.

2. **Campaign Management**:
   - Create, update, and delete campaigns.
   - Sort campaigns based on minimum donation amount.
   - View active campaigns with a "See More" button for details.

3. **Donation Tracking**:
   - Donate to active campaigns.
   - View donation history in a dedicated **My Donations** page.

4. **Responsive Design**:
   - Built using Tailwind CSS for a modern, mobile-first UI.

5. **Dark/Light Mode**:
   - Toggle between light and dark themes on the homepage.

---

## 🖥️ Technology Stack

### Frontend:
- **React.js**: Core framework for the UI.
- **Tailwind CSS**: For styling.
- **React Router**: To manage routes and protected pages.
- **Lottie React**: For animations.
- **React Awesome Reveal**: For transitions and effects.
- **React Simple Typewriter**: For dynamic text animations.

### Backend:
- **Node.js**: Runtime environment.
- **Express.js**: For building APIs.
- **MongoDB**: Database to store campaigns and donations.
- **Mongoose**: ODM for MongoDB.

---

## 📂 Project Structure

### **Frontend**
- `src/components`: Contains React components for pages like `Home`, `CampaignDetails`, `MyCampaigns`, etc.
- `src/pages`: Separate pages for login, registration, and dashboard.
- `src/context`: Contains authentication and theme context providers.

### **Backend**
- `routes/campaignRoutes.js`: Handles campaign-related CRUD operations.
- `routes/donationRoutes.js`: Manages donation data.
- `models`: MongoDB models for campaigns and donations.

---

