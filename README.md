# F1 Website
This website is dedicated to show all the info you need about Formula 1 races!

## Table of Content:
- Features
- Architecture
- Setup and Installation
- Usage
## Features:
-   **Race Details**: Access detailed information about each race, including date, location, and results.
-   **Driver Profiles**: View profiles of drivers with their career statistics and recent performances.
-   **Team Information**: Explore details about Formula 1 teams, their histories, and achievements.
-   **Interactive Charts**: Visualize performance data through interactive charts and graphs.
-   **Responsive Design**: Optimized for various devices, ensuring a seamless user experience across desktops, tablets, and smartphones.

## Architecture:
The application follows a modular architecture, separating concerns to enhance maintainability and scalability.

-   **Frontend**: Developed using **React.js** for building user interface. **Tailwind CSS** is utilized for styling. **Axios** for data fetching and **TanStack Query** for caching 
    
-   **Components**: The UI is divided into reusable components, each responsible for a specific piece of functionality, such as displaying race details, driver profiles, or performance information.
    
-   **State Management**: React's built-in state management is employed to handle component states and props, ensuring efficient data flow throughout the application.
    
-   **Routing**: React Router is used to manage navigation within the application, allowing users to move between different sections seamlessly.

## Setup and Installation:
- Clone the project using this command:
git clone https://github.com/HabibaaFarid/f1-website.git
- Navigate to the project directory 
- Install dependencies using this command:
npm install
- Lastly, you can start the project using this command:
npm start

## Usage:
Once the development server is running, you can explore the application:

-   **Home Page**: Provides an overview of all seasons of formula 1.
-   **Races**: Browse through the list of races, view details, and access historical data.
-   **Driver Details in Races**: View detailed information about drivers participating in a particular race, including their lap performance, nationality, rank, and team.

You can also visit the deployed website here: https://f1-website-mock.vercel.app/ 