const API_KEY = import.meta.env.VITE_NASA_API_KEY;

console.log("Welcome on APOD Console");

const appContainer = document.querySelector("#app");
const datePicker = document.querySelector("#dataPicker");

// Enable date picker to select a future date
datePicker.max = new Date().toISOString().split("T")[0];

// Get Nasa data
const fetchAPOD = (date = "") => {
  appContainer.innerHTML = "<p class='loading'>Universe is loading</p>";

  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  if (date) {
    url += `&date=${date}`;
  }
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let media;

      if (data.media_type === "image") {
        media = `<img src="${data.url}" alt="${data.title}"/>`;
      } else {
        media = `<iframe src="${data.url}" allowfullscreen></iframe>`;
      }

      appContainer.innerHTML = `
      <h1>${data.title}</h1>
      ${media}  
      <p>${data.explanation}</p>`;
    })
    .catch((error) => {
      appContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
};
fetchAPOD();
datePicker.addEventListener("change", (event) => {
  fetchAPOD(event.target.value);
});
