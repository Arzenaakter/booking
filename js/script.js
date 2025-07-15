let interestedProperty = "";
properties.slice(0, 2).map((item) => {
  interestedProperty += ` <div class="property-card">
          <div
            style="
              background-image: url('${item.image}');
              width: 280px;
              height: 200px;
            background-size: cover;
              background-position: center;
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
            <h4>${item.title}</h4>
            <p class="card-location">${item.location}</p>

            <div class="rewviw-rating-box">
              <div class="rating">${item.rating}</div>
              <div class="">
                <p class="comment">${item.ratingText}</p>
                <p class="reviews">${item.reviews} reviews</p>
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

// home guest slider
const slider = document.getElementById("propertySlider");

// Render cards
homes.forEach((item) => {
  const card = document.createElement("div");
  card.className = "property-card";
  card.innerHTML = `
    <div style="
      background-image: url('${item.image}');
      width: 280px;
      height: 200px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 10px 10px 0 0;
    ">
      <span class="heart-icon" title="Save" style="position: absolute; right: 8px; top: 8px">
        <i class="fa-regular fa-heart"></i>
      </span>
    </div>
    <div class="card-content">
      <h4>${item.title}</h4>
      <p class="card-location">${item.location}</p>
      <div class="rewviw-rating-box">
        <div class="rating">${item.rating}</div>
        <div>
          <p class="comment">${item.ratingText}</p>
          <p class="reviews">${item.reviews} reviews</p>
        </div>
       
      </div>
       <div  class="card-amount-box">
        <p>Starting from <span class="card-amount"> BDT ${item.bdt}</span></p>
        </div>
    </div>
  `;
  slider.appendChild(card);
});

const leftBtn = document.querySelector(".nav-btn.left");
const rightBtn = document.querySelector(".nav-btn.right");

function handleScrollLeft() {
  slider.scrollBy({ left: -350, behavior: "smooth" });
}

function handleScrollRight() {
  slider.scrollBy({ left: 350, behavior: "smooth" });
}

// browse slide
// home guest slider
const browseSlider = document.getElementById("browseByProperty");

// Render cards
browseByProperty.forEach((item) => {
  const card = document.createElement("div");

  card.innerHTML = `
    <div
    >
       <div style="
      background-image: url('${item.image}');
      width: 280px;
      height: 200px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-radius: 10px ;
      margin-bottom:10px;
    ">
      
   
    </div>
   <h4>${item.title}</h4>
    </div>
  `;
  browseSlider.appendChild(card);
});

const browseLeftBtn = document.querySelector(".nav-btn.left");
const browseRightBtn = document.querySelector(".nav-btn.right");

function handleBrowseScrollLeft() {
  browseSlider.scrollBy({ left: -350, behavior: "smooth" });
}

function handleBrowseScrollRight() {
  browseSlider.scrollBy({ left: 350, behavior: "smooth" });
}

function updateButtons() {
  const scrollLeft = slider.scrollLeft;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  leftBtn.style.display = scrollLeft > 0 ? "block " : "none";
  rightBtn.style.display = scrollLeft < maxScrollLeft ? "block" : "block";
}
function updateBrowsButtons() {
  const browsScrollLeft = browseSlider.browsScrollLeft;
  const browseMaxScrollLeft =
    browseSlider.scrollWidth - browseSlider.clientWidth;

  browseLeftBtn.style.display = browsScrollLeft > 0 ? "block " : "none";
  browseRightBtn.style.display =
    browsScrollLeft < browseMaxScrollLeft ? "block" : "block";
}

updateButtons();
updateBrowsButtons();
slider.addEventListener("scroll", updateButtons);
browseSlider.addEventListener("scroll", updateButtons);
