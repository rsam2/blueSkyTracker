function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.69165350854625, lng: -98.99359807855247 },
    zoom: 5.1,
  });

  const contentString =
    '<h1 id="firstHeading" class="firstHeading">Blue Sky Solar Racing</h1>' +
    `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="Capture.jpg" class="d-block w-100" alt="1">
      </div>
      <div class="carousel-item">
        <img src="7.jpg" class="d-block w-100" alt="2">
      </div>
      <div class="carousel-item">
        <img src="8.jpg" class="d-block w-100" alt="3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>`;

  const contentString2 = "<h1>Scrutineering at Topeka</h1>";

  const marker = new google.maps.Marker({
    position: { lat: 43.659916247538504, lng: -79.39533314607847 },
    map,
    title: "Blue Sky Solar Racing",
    animation: google.maps.Animation.DROP,
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 39.04119773289724, lng: -95.67537822419101 },
    map,
    title: "Topeka",
    animation: google.maps.Animation.DROP,
  });

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
      shouldFocus: false,
    });
  });
}
//39.04119773289724, -95.67537822419101
