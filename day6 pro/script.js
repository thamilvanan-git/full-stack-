let cities = [];
let weatherData = [];

// Fetch cities from JSON file
async function loadCities() {
  const response = await fetch("cities.json");
  cities = await response.json();
}

// Fetch weather for one city
async function fetchWeather(city) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    city: city.name,
    temperature: data.current_weather.temperature,
  };
}

// Main loader
async function loadWeather() {
  try {
    await loadCities();

    // Fetch all cities weather in parallel
    const results = await Promise.all(cities.map(fetchWeather));
    weatherData = results;

    // MAP → extract temperatures
    const temps = weatherData.map((w) => w.temperature);

    // FILTER → warm cities (>25°C)
    const warmCities = weatherData.filter((w) => w.temperature > 25);

    // REDUCE → max temperature
    const maxTemp = temps.reduce((max, t) => (t > max ? t : max), temps[0]);

    // Display results
    displayTable(warmCities);
    document.getElementById("maxTemp").innerText =
      `🔥 Maximum Temperature: ${maxTemp} °C`;

    document.getElementById("jsonViewer").textContent = JSON.stringify(
      weatherData,
      null,
      2,
    );
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}

// Display table dynamically
function displayTable(data) {
  const tbody = document.querySelector("#weatherTable tbody");
  tbody.innerHTML = "";

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.city}</td>
      <td>${item.temperature}</td>
    `;
    tbody.appendChild(row);
  });
}

// Toggle JSON viewer
function toggleJSON() {
  document.getElementById("jsonViewer").classList.toggle("hidden");
}

// Load on page start
loadWeather();
