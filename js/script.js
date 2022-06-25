$(".toggleIcon").click(function () {

  if ($("nav").css("left") == "0px") {
    let movedNav = $(".navContent").outerWidth();
    $("nav").animate({ left: -movedNav }, 700);
    $('.toggleIcon').removeClass("fa-xmark").addClass("fa-bars");



  } 
  
  else {
    $("nav").animate({ left: 0 }, 700);
    $('.toggleIcon').removeClass("fa-bars").addClass("fa-xmark");

  }

});





var aflam =[];

getNowPlaying();
async function getNowPlaying(){
  var data = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=df8991a0d6534a169f00c8617e214c74&language=en-US&page=1");
  var resp = await data.json();
  aflam = resp.results;
  displayAflam();
}

async function getPopular(){
  var data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=df8991a0d6534a169f00c8617e214c74&language=en-US&page=1");
  var resp = await data.json();
  aflam = resp.results;
  displayAflam();
}

async function getTopRated(){
  var data = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=df8991a0d6534a169f00c8617e214c74&language=en-US&page=1");
  var resp = await data.json();
  aflam = resp.results;
  displayAflam();
}

async function getTrending(){
  var data = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=df8991a0d6534a169f00c8617e214c74&language=en-US&page=1");
  var resp = await data.json();
  aflam = resp.results;
  displayAflam();
}

async function getUpComing(){
  var data = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=df8991a0d6534a169f00c8617e214c74&language=en-US&page=1");
  var resp = await data.json();
  aflam = resp.results;
  displayAflam();
}





function displayAflam (){

  cartoona="";
  for (let i = 0; i < aflam.length; i++) {
    cartoona +=  ` <div class="col-4 text-center text-dark ">
    <div class=" movie w-100">
        <img src="https://image.tmdb.org/t/p/w500${aflam[i].poster_path}" alt="film1" class="w-100">

        <div class="layer bg-opacity-50 bg-light">
            <h2>${aflam[i].original_title}</h2>
            <p>${aflam[i].overview}</p>
            <h6>${aflam[i].vote_average}</h6>
            <h5>${aflam[i].release_date}</h5>
        </div>
    </div>


</div>`
    
  }

  document.getElementById("movies").innerHTML = cartoona;

}



$(".nowPlaying").click(function(){
  getNowPlaying();
});

$(".popular").click(function(){
  getPopular();
});

$(".topRated").click(function(){
  getTopRated();
});

$(".trending").click(function(){
  getTrending();
});

$(".upComing").click(function(){
  getUpComing();
});







var userName = document.querySelector('.name');
var email = document.querySelector(".email");
var phone = document.querySelector(".phone");
var age = document.querySelector(".age");
var password = document.querySelector(".password");
var repassword = document.querySelector(".repassword");

var rgxName = /^[a-zA-Z ]+$/
var rgxEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
var rgxPhone = /^(02)?01[0125][0-9]{8}$/
var rgxAge = /^([1-9]|[1-9][0-9]|100)$/
var rgxPassword = /^(?=.[0-9])(?=.[a-z]).{8,30}$/




$(".name").keyup(function () {
  if (rgxName.test(userName.value) == true) {
    $('#name').addClass("d-none");
  }

  else{
    $('#name').removeClass("d-none");

  }
})


$(".email").keyup(function () {
  if (rgxEmail.test(email.value) == true) {
    $('#email').addClass("d-none");
  }

  else{
    $('#email').removeClass("d-none");

  }
})

$(".phone").keyup(function () {
  if (rgxPhone.test(phone.value) == true) {
    $('#phone').addClass("d-none");
  }

  else{
    $('#phone').removeClass("d-none");

  }
})

$(".age").keyup(function () {
  if (rgxAge.test(age.value) == true) {
    $('#age').addClass("d-none");
  }

  else{
    $('#age').removeClass("d-none");

  }
})

$(".password").keyup(function () {
  if (rgxPassword.test(password.value) == true) {
    $('#password').addClass("d-none");
   
  }

  else{
    $('#password').removeClass("d-none");
  }
})

$(".repassword").keyup(function () {
  if (repassword.value == password.value) {
    $('#repassword').addClass("d-none");
  }

  else{
    $('#repassword').removeClass("d-none");

  }
})
