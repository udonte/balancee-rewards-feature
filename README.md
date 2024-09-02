# Rewards Summary Page - Balanceè Platform

This project is a frontend application built with React and Vite, designed to create a Rewards Summary Page for the Balanceè platform. The page allows customers to track their earnings, view their cashback history, and cash out their rewards through direct cashout or promo codes.

## Table of Contents

- [Rewards Summary Page - Balanceè Platform](#rewards-summary-page---balanceè-platform)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
  - [Design Choices](#design-choices)
  - [Challenges](#challenges)

## Project Overview

The Rewards Summary Page is part of the Balanceè platform, where users can earn cashback rewards by making bookings. This page provides an overview of the user's earnings, a detailed history of cashback transactions, and options for cashing out rewards.

## Features

- **Earnings Overview:** Displays total cashback earned and the current available balance.
- **Cashback History:** Shows a list of all cashback transactions, including the date, amount, and related booking details.
- **Cashout Options:** Users can cash out their rewards directly or convert them into promo codes.
- **Responsive Design:** The page is fully responsive, ensuring a seamless experience across devices.
- **Modal Interaction:** A modal is displayed for 5 seconds upon a successful cashout, providing feedback to the user.
- **Aesthetic Design:** Includes animations and styling to enhance the user experience.

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **State Management:** React useState, useEffect
- **Mock Data:** Simulated API calls using mock data
- **Deployment:** Netlify

## Project Structure

- src/

- │
- ├── components/
- │ ├── EarningsOverview.jsx
- │ ├── CashbackHistory.jsx
- │ ├── CashoutOptions.jsx
- │ └── Modal.jsx
- │
- ├── data/
- │ └── mockData.js
- │
- ├── pages/
- │ └── RewardsSummary.jsx
- │
- ├── App.jsx
- ├── main.jsx
- └── index.css

- components/: Contains reusable React components for the Rewards Summary page.
- data/: Contains mock data for simulating API responses.
- pages/: Contains the main page component (RewardsSummary) that ties everything together.
- App.jsx: The root component.
- main.jsx: Entry point for the application.
- index.css: Global CSS including Tailwind imports and custom styles.

## Design Choices

- React with Vite: Vite was chosen for its fast build times and modern development experience.
- Tailwind CSS: Used for styling due to its utility-first approach, allowing for rapid and responsive design implementation.
- Modal Interaction: Implemented a modal with smooth animations and automatic closure to enhance user feedback during cashout operations.
- Mock Data: Used to simulate API calls, making it easy to test the UI without relying on a backend.

## Challenges

- State Management: Managing the state of the modal visibility and ensuring that it closes automatically after a specified duration required careful handling of asynchronous operations.
- Responsive Design: Ensuring that the page looks good on all screen sizes involved significant effort, especially when dealing with complex layouts like the cashback history table.
