const API_URL = "https://geo.ipify.org/api/v1?apiKey=";
const API_KEY = "at_G5ashzdXjIzK6yG5d88OHXZVkfBSI&";
const mapContainer = document.querySelector("#map");

// When window loaded //
window.addEventListener("DOMContentLoaded", () => {
  // Initialize the app
  initApp();
});

// Functions //

// Initialize the app
function initApp() {
  // Get user ip address
  getClient();

  const submitForm = document.querySelector("#submit-form");

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Get the ip address or domain name
    const ipOrDomain = getIpDomain();
    // Get the results
    const info = getData(ipOrDomain);
    // Display the result
    displayResult(info);
    // Get map
    getMap(info);
  });
}

// Get Client Ip
async function getClient() {
  const clientUrl = "https://api.ipify.org/?format=json";
  const res = await fetch(clientUrl);
  const data = await res.json();
  const url = `${API_URL}${API_KEY}ipAddress=${data.ip}`;
  const info = getData(url);
  displayResult(info);
  getMap(info);
}

// Get the ip address or domain name
function getIpDomain() {
  const inputValue = document.querySelector("#input-value").value;
  let searchBy;
  let url;

  const ipPattern =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
  const domainPattern = /\S+\.\S+/;

  if (ipPattern.test(inputValue)) {
    const ipAdd = inputValue;
    searchBy = "ipAddress=";
    url = `${API_URL}${API_KEY}${searchBy}${ipAdd}`;
  } else if (domainPattern.test(inputValue)) {
    const domain = inputValue;
    searchBy = "domain=";
    url = `${API_URL}${API_KEY}${searchBy}${domain}`;
  }

  return url;
}

// Get the form api
async function getData(url) {
  try {
    const response = await fetch(url);
    const info = await response.json();
    return info;
  } catch (err) {
    alert(err.message);
  }
}

// Display the data
function displayResult(info) {
  const ip = document.querySelector(".result-sec__ip");
  const location = document.querySelector(".result-sec__location");
  const time = document.querySelector(".result-sec__timezone");
  const isp = document.querySelector(".result-sec__isp");

  info.then((data) => {
    if (
      !data.location.region ||
      !data.location.city ||
      !data.location.geonameId
    ) {
      alert("Data Not Found!");
    } else {
      ip.innerText = data.ip;
      location.innerText = `${data.location.region}, ${data.location.city} ${data.location.geonameId}`;
      time.innerText = `UTC ${data.location.timezone}`;
      isp.innerText = data.isp;
    }
  });
}

// Get map
function getMap(info) {
  info.then((data) => {
    const lat = data.location.lat;
    const lng = data.location.lng;
    const location = `${data.location.region}, ${data.location.city}, ${data.location.geonameId}`;

    let isMap = L.DomUtil.get("map");
    if (isMap != null) {
      isMap._leaflet_id = null;
    }

    let mymap = L.map(mapContainer).setView([lat, lng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);

    let marker = L.marker([lat, lng]).addTo(mymap);
    marker.bindPopup(location);
  });
}
