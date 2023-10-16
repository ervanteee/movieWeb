// navbar scroll JS

const scrolls = document.getElementById ('scroll')

document.addEventListener('scroll', () =>{


    if(window.scrollY > 0){
        scrolls.classList.add('scroll-color');
        scrolls.classList.remove('scroll-none');

    }else{
        scrolls.classList.add('scroll-none')
        scrolls.classList.remove('scroll-color')

    }
});


// navbar search click JS

const searchBar = document.getElementById('hideSearch');
const searchClick = document.getElementById('srchIcon');
const judul = document.getElementsByClassName("judulFilm");
const footer = document.getElementsByClassName("footer")

searchClick.addEventListener('click', function(){
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});

function Search(item) {       
    var collection = document.getElementsByClassName("card");
    for (i = 0; i < collection.length; i++) {
      var productBox = collection[i];
      var productCaption = productBox.querySelector('.card-title');
      var displayValue = productCaption.innerText.toLowerCase().includes(item.toLowerCase()) ? "block" : "none";
      productBox.style.display = displayValue;
    }
  }
