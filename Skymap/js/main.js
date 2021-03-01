
const prev = document.getElementById('btn-prev'),
next = document.getElementById('btn-next'),
slides1 = document.querySelectorAll('.slide1');
const slides2 = document.querySelectorAll('.slide2');
const prev2 = document.getElementById('btn-prev2'),
next2 = document.getElementById('btn-next2');

let index = 0;

const activeSlide = n => {
for(slide1 of slides1) {
    slide1.classList.remove('active');
}
slides1[n].classList.add('active');
}


const prepareCurrentSlide = ind => {
    activeSlide(index);
}


const nextSlide = () => {
if(index == slides1.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
} else {
    index++;
    prepareCurrentSlide(index);
}


}

const prevSlide = () => {
if(index == 0) {
    index = slides1.length - 1;
    prepareCurrentSlide(index);
} else {
    index--;
    prepareCurrentSlide(index);
}
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

///end

let i = 0;

const activeSlide2 = n => {
    for(slide2 of slides2) {
        slide2.classList.remove('active');
    }
    slides2[n].classList.add('active');
    }
    
    
    const prepareCurrentSlide2 = ind => {
        activeSlide2(i);
    }
    
    const nextSlide2 = () => {
    if(i == slides2.length - 1) {
        i = 0;
        prepareCurrentSlide2(i);
    } else {
        i++;
        prepareCurrentSlide2(i);
    }
    }
    
    const prevSlide2 = () => {
    if(i == 0) {
        i = slides2.length - 1;
        prepareCurrentSlide2(i);
    } else {
        i--;
        prepareCurrentSlide2(i);
    }
    }
    
    next2.addEventListener('click', nextSlide2);
    prev2.addEventListener('click', prevSlide2);


var cards = document.querySelectorAll('.card__inner');

// you can use forEach here too
[].forEach.call(cards, el => {
  el.addEventListener('mouseover', btnClick, false)
  el.addEventListener('mouseout', btnClick, false)
})

function btnClick() {
  // use Array function for lexical this
  [].forEach.call(cards, el => {
    // except for the element clicked, remove active class
    if (el !== this) el.classList.remove('is-flipped');
  });

  // toggle active on the clicked button
  this.classList.toggle('is-flipped');
}

const accordion = document.getElementsByClassName('contentBx');

for(i=0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}




