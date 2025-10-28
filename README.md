Practice: React Weather App

Instructions

You will create a React application where:

1. The main page lists a few city options (e.g., "New York," "London," "Tokyo").

2. Clicking on a city displays the forecast for that city below the list.

3. The forecast component fetches mock weather data for the selected city
using useEffect when the city changes.

4. The application includes a button to scroll to the detailed weather section
using useRef.

This activity will help students combine and practice useEffect and useRef.
Tasks

Step 1: Set Up the Application

File Structure:

    ● App.jsx: Main component that manages the selected city and displays the
    CityList and CityForecast components.

    ● CityList.jsx: Component to list cities and handle user selection.

    ● CityForecast.jsx: Component to display the forecast for the selected city.

Step 2: Create Mock Weather Data

Define mock data to simulate weather details:
(see assignment instructions)

Step 3: Create the CityList Component

    ● The component displays a list of cities and calls a function when a city is
clicked.

Step 4: Create the CityForecast Component

1. The component receives the selected city as a prop.

2. Use useEffect to simulate fetching the weather data for the selected city.

3. Use useRef to scroll to the detailed weather section when a "View Details"
button is clicked.

Step 5: Bring it all Together in App.jsx

The main component should manage which city is selected and pass data to
children.


Extensions

● Handle Invalid City Names: Display a fallback message if the selected city does not match any entry in
weatherData.

● Add a Back Button: In CityForecast, add a button that clears the selected city so the user can
return to the city list view.

● Style the Application: Use CSS to improve the layout and appearance of the city list and forecast
pages.

Important Notes: 
State updates:
    - must happen in the right place
    - state updates that depend on props must go in useEffect 

Check for Null/undefined:
    - do not try to read properties that are null (runtime error)
    - use conditional rendering
Prop Names:
    - parents and children must use the same prop name

Use Consolelogs when nothing is rendering. They will still appear in console.
Comment out lines to check for changes. 