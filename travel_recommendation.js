document.addEventListener('DOMContentLoaded', function () {
    // Fetch the travel recommendation JSON data
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())  // Parse the JSON from the response
        .then(data => displayRecommendations(data))  // Call the display function
        .catch(error => console.error('Error fetching data:', error));
});

function displayRecommendations(data) {
    const recommendationsContainer = document.querySelector('.recommendations'); // Assume we have a container for recommendations

    // Loop through the countries in the JSON data
    data.countries.forEach(country => {
        // Create a country section
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');

        // Add country name as a header
        const countryHeader = document.createElement('h2');
        countryHeader.textContent = country.name;
        countryDiv.appendChild(countryHeader);

        // Loop through the cities for each country
        country.cities.forEach(city => {
            // Create a city section
            const cityDiv = document.createElement('div');
            cityDiv.classList.add('city');

            // City Name
            const cityName = document.createElement('h3');
            cityName.textContent = city.name;
            cityDiv.appendChild(cityName);

            // City Image
            const cityImage = document.createElement('img');
            cityImage.src = `./Images/${city.imageUrl}`; // Assuming images are in the 'Images' folder
            cityImage.alt = city.name;
            cityImage.style.width = '400px'; // Adjust image size if needed
            cityDiv.appendChild(cityImage);

            // City Description
            const cityDescription = document.createElement('p');
            cityDescription.textContent = city.description;
            cityDiv.appendChild(cityDescription);

            // Append the city to the country div
            countryDiv.appendChild(cityDiv);
        });

        // Append the country section to the recommendations container
        recommendationsContainer.appendChild(countryDiv);
    });
}