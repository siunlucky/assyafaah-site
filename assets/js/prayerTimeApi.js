document.addEventListener("DOMContentLoaded", function() {
    const prayerTimesContainer = document.getElementById("prayer-times");
  
    // Replace this URL with the actual API endpoint you are using
    const apiUrl = "https://www.muis.gov.sg/api/pagecontentapi/GetPrayerTime?v=1718035200000";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const timings = data;
        const timingsList = `
          <tr>
            <th>Name of Salat</th>
            <th>Prayer Time</th>
          </tr>
          <tr>
            <td>Fajr</td>
            <td>${timings.Subuh} AM</td>
          </tr>
          <tr>
            <td>Sunrise</td>
            <td>${timings.Syuruk} AM</td>
          </tr>
          <tr>
            <td>Zuhur</td>
            <td>${timings.Zohor} PM</td>
          </tr>
          <tr>
            <td>Asar</td>
            <td>${timings.Asar} PM</td>
          </tr>
          <tr>
            <td>Magrib</td>
            <td>${timings.Maghrib} PM</td>
          </tr>
          <tr>
            <td>Isya</td>
            <td>${timings.Isyak} PM</td>
          </tr>
        `;
  
        prayerTimesContainer.innerHTML = timingsList;
      })
      .catch(error => {
        prayerTimesContainer.innerHTML = `<p>Failed to load prayer times. Please try again later.</p>`;
        console.error("Error fetching prayer times:", error);
      });
  });