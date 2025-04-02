## Waste Skip Selector

## Overview
The Waste Skip Selector is a React-based web application that allows users to select a waste skip for garden waste collection. The app retrieves skip options based on the user’s postcode and displays available skips with relevant information such as size, price (before VAT), and additional details like whether the skip can be placed on the road or allows heavy waste.

## Technologies Used
React: For building the user interface.
CSS: For styling and responsiveness.
JavaScript: For the app's functionality.
Git: For version control.
GitHub: For hosting the project repository.

## Working way
Fetches data from an external API to display skip options based on the user's postcode.
Each skip option includes details like size, price, VAT, and road placement.
Responsive Design: The app is fully responsive, providing an optimal experience on both desktop and mobile.
Scroll Indicator: A scroll-down arrow guides users to view the skip options below the fold.
Smooth Scrolling: Clicking the scroll arrow smoothly scrolls to the skip options section.
  
## Setup Instructions

git clone https://github.com/your-username/waste-skip-selector.git
Install Dependencies

cd waste-skip-selector
npm install

Run the Application: Once the dependencies are installed, start the development server:

npm start
Open the App: Open your web browser and go to http://localhost:3000 to see the app in action.

## Some Features
User Interaction:

The user enters a postcode and selects a garden waste option.

The app fetches the available skip options from the API based on the postcode.

The skip options are displayed with relevant details such as size, price, VAT, and whether they can be placed on the road.

Data Fetching:

The skip data is fetched from the following API: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft.

Scroll Indicator:

A scroll-down arrow is displayed at the top of the page to guide users to scroll down to the skip options section.

Responsive Design:

The app uses a responsive layout to ensure the content displays correctly on both mobile and desktop screens.

