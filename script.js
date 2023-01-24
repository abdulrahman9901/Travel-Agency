const slideshow=document.querySelector('.slideshow');
const images=slideshow.querySelectorAll('img');
console.log(images);

let index=0;

function slideShowOn(){
    setTimeout(()=>{
        slideshow.innerHTML=images[index].outerHTML;
        console.log(index);
        index++;
        index %=3;
        slideShowOn();
    },4000);
}

slideShowOn();