let counter = 0;
let timer, carrouselItems, slides, slideWidth, carrouselItemTitle;

window.onload = () => {
    const containerCarrousel = document.querySelector(".container-carrousel");
    const carrouselItems = document.querySelector(".carrousel-items");
    const carrouselItem = document.querySelector(".carrousel-item");

    
    let firstImage = carrouselItems.firstElementChild.cloneNode(true);
    carrouselItems.appendChild(firstImage);
    
    slides = Array.from(carrouselItems.children);
    
    slideWidth = carrouselItem.getBoundingClientRect().width;

    let next = document.querySelector("#nav-right");
    let prev = document.querySelector("#nav-left");

    
    next.addEventListener("click", slideNext);
    prev.addEventListener("click", slidePrev);

    timer = setInterval(slideNext, 3500);

    containerCarrousel.addEventListener("mouseover", () => {
        stopTimer();
    });
    containerCarrousel.addEventListener("mouseout", () => {
        startTimer();
    });

    function slideNext(){
        counter++;
        carrouselItems.style.transition = "1s linear";

        let decal = -slideWidth * counter;
        carrouselItems.style.transform = `translateX(${decal}px)` ;

        setTimeout(function(){
            if (counter >= slides.length - 1) {
                counter = 0;
                carrouselItems.style.transition = "unset";
                carrouselItems.style.transform = "translateX(0)";
            }
        }, 1000)
    }
    
    function slidePrev(){
        // On décrémente le compteur
        counter--;
        carrouselItems.style.transition = "700ms linear";
    
        if(counter < 0){
            counter = slides.length - 1;
            let decal = -slideWidth * counter;
            carrouselItems.style.transition = "unset";
            carrouselItems.style.transform = `translateX(${decal}px)`;
            setTimeout(slidePrev, 1);
        }
    
        let decal = -slideWidth * counter;
        carrouselItems.style.transform = `translateX(${decal}px)`;
        
    }

    function stopTimer(){
        clearInterval(timer);
    }

    function startTimer(){
        timer = setInterval(slideNext, 2000 );
    }


}
