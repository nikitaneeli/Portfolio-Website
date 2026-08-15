$(document).ready(function () {
  let asteroidDisplay = document.querySelector("body");
  $.getJSON(
    "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=jQ3kveFfQzCrU9UJZ3qAt11AQLUbUzGFZfVieyKj",
    function (data) {
      var howMany = data.near_earth_objects.length;
      let dataSource = data.near_earth_objects;
      for (var i = 0; i < dataSource.length; i++) {
        let maxWidth =
          dataSource[i].estimated_diameter.kilometers.estimated_diameter_max;
        asteroidDisplay.innerHTML +=
          "<div style='width:" +
          maxWidth +
          "px;height:" +
          maxWidth +
          "px'></div>";
      }
    }
  );
});
