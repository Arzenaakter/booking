let interestedProperty = "";
properties.slice(0, 2).map((item) => {
  interestedProperty += ` <div class="property-card">
          <div
            style="
              background-image: url('./images/domki.PNG');
              width: 280px;
              height: 200px;
              object-fit: cover;
              position: relative;
              border-radius: 10px 10px 0 0;
            "
          >
            <span
              title="Save"
              class="heart-icon"
              style="position: absolute; right: 8px; top: 8px"
              ><i class="fa-regular fa-heart"></i
            ></span>
          </div>
          <div class="card-content">
            <h4>Domki Wierszyki Shelters</h4>
            <p class="card-location">Poland, Zakopane</p>

            <div class="rewviw-rating-box">
              <div class="rating">97</div>
              <div class="">
                <p class="comment">exceptiona</p>
                <p class="reviews">90 reviews</p>
              </div>
            </div>
          </div>
        </div>`;
});

document.querySelector(".interested-properties-grid").innerHTML =
  interestedProperty;

let domesticHtml = "";
domesticHotels.forEach((item) => {
  domesticHtml += `<div class="">
            <a href="#" class="tab-item-link">${item.title}</a>
          </div>`;
});

document.querySelector(".domestic-tab").innerHTML = domesticHtml;

let InternationCittiesHtml = "";
internationalHotels.forEach((item) => {
  InternationCittiesHtml += `<div class="">
            <a href="#" class="tab-item-link">${item.title}</a>
            <p class="internationa-country">${item.country}</p>
          </div>`;
});

document.querySelector(".internaional-cities-tab").innerHTML =
  InternationCittiesHtml;

let regionTabHtml = "";
regions.forEach((item) => {
  regionTabHtml += `<div class="">
            <a href="#" class="tab-item-link">${item.title}</a>
          </div>`;
});

document.querySelector(".region-cities-tab").innerHTML = regionTabHtml;

let countriesTabHtml = "";
countries.forEach((item) => {
  countriesTabHtml += `<div class="">
            <a href="#" class="tab-item-link">${item.title}</a>
          </div>`;
});

document.querySelector(".countires-tab").innerHTML = countriesTabHtml;

let placeToStayTabHtml = "";
hotelTypes.forEach((item) => {
  placeToStayTabHtml += `<div class="">
            <a href="#" class="tab-item-link">${item.title}</a>
          </div>`;
});

document.querySelector(".places-tab").innerHTML = placeToStayTabHtml;

function handlePopularTab(e, tabName) {
  const popularTab = document.getElementsByClassName("popular-tab");
  for (let i = 0; i < popularTab.length; i++) {
    popularTab[i].style.display = "none";
  }
  const popularTravelTabItem = document.getElementsByClassName(
    "popular-travel-tab-item"
  );
  for (let i = 0; i < popularTravelTabItem.length; i++) {
    popularTravelTabItem[i].classList.remove("popular-active-tab");
  }
  document.getElementById(tabName).style.display = "grid";

  e.currentTarget.classList.add("popular-active-tab");
}
