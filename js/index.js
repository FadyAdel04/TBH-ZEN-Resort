let span = document.querySelector(".up");
let logo = document.querySelector(".logo");
let home = document.querySelector(".home");
let aboutUs = document.querySelector(".aboutus");
let gallery = document.querySelector(".gallery");
let hotelRoomType = document.querySelector(".hotelRoomType");
let facilities = document.querySelector(".facilities");
let topOffer = document.querySelector(".topOffer");
let Attractions = document.querySelector(".Attractions");
let ourTeam = document.querySelector(".ourTeam");
let Reservation = document.querySelector(".Reservation");

window.onscroll = function () {
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

logo.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
home.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
aboutUs.onclick = function () {
    window.scrollTo({
        top: 815,
        behavior: "smooth",
    });
};
gallery.onclick = function () {
    window.scrollTo({
        top: 1700,
        behavior: "smooth",
    });
};
hotelRoomType.onclick = function () {
    window.scrollTo({
        top: 2450,
        behavior: "smooth",
    });
};
facilities.onclick = function () {
    window.scrollTo({
        top: 3100,
        behavior: "smooth",
    });
};
topOffer.onclick = function () {
    window.scrollTo({
        top: 4810,
        behavior: "smooth",
    });
};
Attractions.onclick = function () {
    window.scrollTo({
        top: 5600,
        behavior: "smooth",
    });
};
ourTeam.onclick = function () {
    window.scrollTo({
        top: 6200,
        behavior: "smooth",
    });
};
Reservation.onclick = function () {
    window.scrollTo({
        top: 7580,
        behavior: "smooth",
    });
};


