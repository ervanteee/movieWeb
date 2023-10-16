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

searchClick.addEventListener('click', function(){
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});


// owl carousel

let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})