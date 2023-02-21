$(function() {
 "use strict"


// Dark mode start
let darkmode = document.querySelector(".darkmode");
let html = document.querySelector("html");
let light_icon = document.querySelector(".light_icon");
let dark_icon = document.querySelector(".dark_icon");
dark_icon.style.display = "none"

let number = 0;

function handleDarkMode() {
 html.classList.toggle("dark");

 if (number === 0) {
  light_icon.style.display="none"
  dark_icon.style.display="block"
  number = 1
 }
 else{
  light_icon.style.display="block"
  dark_icon.style.display="none"
  number = 0
 }

}

darkmode.addEventListener("click", handleDarkMode)
// Dark mode end ===================



// Menu start
const menu = document.querySelectorAll(".menu li a");
const menuArr = Array.from(menu);
const tab_itemArray = Array.from(document.querySelectorAll(".tab_item"));
const sideMenusArray = Array.from(document.querySelectorAll(".side_menu ul li a"));
const Home_info = document.querySelector(".Home_info");
const main_section = document.querySelector(".main_section");

// Tab item active function
const tabItemActive = (index) => {
  tab_itemArray.map( (item, i) => {
    item.classList.add("hidden");
   } )
   tab_itemArray[index].classList.remove("hidden");

}




// Big screen menu
menuArr.map( (menu, index) => {
 menu.addEventListener("click", (e) => {
  menuArr.map(item => {
   item.classList.remove("active");
  })
  sideMenusArray.map(item => {
    item.classList.remove("active")
  })
    e.currentTarget.classList.add("active");
    sideMenusArray[index].classList.add("active");
    tabItemActive(index)
  })
} )




// Hide and show on Screen width 
function handleAboutSection() {
  Home_info.classList.add("hidden");
  main_section.classList.remove("mt-40");
}

window.addEventListener("resize", function() {
  let screenWidth = screen.width;
  if (screenWidth > 1024) {
    $(".side_menu").css("display", "none")
  }
  if (screenWidth > 1023) {
    Home_info.classList.remove("hidden");
    main_section.classList.add("mt-40");
  }
  if(screenWidth < 1023 && sideMenusArray[1].classList.contains("active")){
    handleAboutSection()
  }
  if(screenWidth < 1023 && sideMenusArray[2].classList.contains("active")){
    handleAboutSection()
  }
  if(screenWidth < 1023 && sideMenusArray[3].classList.contains("active")){
    handleAboutSection()
  }
  if(screenWidth < 1023 && sideMenusArray[4].classList.contains("active")){
    handleAboutSection()
  }

})

// Toggle menu start
sideMenusArray.map((menu, index) => {
  menu.addEventListener("click", (e) => {
    $(".side_menu").slideToggle(300);

    sideMenusArray.map(item => {
      item.classList.remove("active")
    })
    menuArr.map(item => {
      item.classList.remove("active")
    })
    e.currentTarget.classList.add("active");
    menuArr[index].classList.add("active");
    tabItemActive(index);
    if (index === 0) {
      Home_info.classList.remove("hidden");
      main_section.classList.add("mt-40");
    }
    if (index === 1) {
      Home_info.classList.add("hidden");
      main_section.classList.remove("mt-40");
    }
    if (index === 2) {
      Home_info.classList.add("hidden");
      main_section.classList.remove("mt-40");
    }
    if (index === 3) {
      Home_info.classList.add("hidden");
      main_section.classList.remove("mt-40");
    }
    if (index === 4) {
      Home_info.classList.add("hidden");
      main_section.classList.remove("mt-40");
    }
    
    // console.log(index);
  } );
  
})
// Toggle menu end

$(".bars").click(function(e){
 $(".side_menu").slideToggle(300)
})
// Side menu end

// Tab item start

// Tab item end


// Menu end ===============

// New date
let currentYear = new Date().getFullYear()
document.getElementById("year").innerHTML = currentYear;

// About Section Brand slider
$(".brand_slider").slick({
 arrows: false,
 dots: false,
 slidesToShow: 5,
 slidesToScroll: 1,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 2000,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
    }
  }
]
})


})
