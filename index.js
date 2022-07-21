let tabImg = document.querySelectorAll('.images > div');
let leftArrow = document.querySelector('.fleches > i.fa-chevron-left');
let rightArrow = document.querySelector('.fleches > i.fa-chevron-right');
let imgActive = 0;

tabImg[imgActive].classList.add('show');

//hide all pictures except the first
for(let i = 1; i<tabImg.length; i++){
    tabImg[i].classList.add('hidden');
}

//function next picture
const next = function(){
    tabImg[imgActive].classList.remove('show');
    tabImg[imgActive].classList.add('hidden');
    imgActive ++;
    if(imgActive >= tabImg.length){
        imgActive = 0;
    }
    tabImg[imgActive].classList.remove('hidden');
    setTimeout(()=>{
        tabImg[imgActive].classList.add('show'),
        600;
    })
}
//function precedent picture
const before = function(){
    tabImg[imgActive].classList.remove('show');
    tabImg[imgActive].classList.add('hidden');
    imgActive --;
    if(imgActive < 0){
        imgActive = tabImg.length-1;
    }
    tabImg[imgActive].classList.remove('hidden');
    setTimeout(()=>{
        tabImg[imgActive].classList.add('show'),
        600
    })
}

//click sur bouton right
rightArrow.addEventListener('click', function(){
    next();
})
//click sur bouton left
leftArrow.addEventListener('click', function(){
    before();
})

    
let play;
document.querySelector('#playButton').addEventListener('click', function(){
    play = setInterval(next, 2000);
})
document.querySelector('#pauseButton').addEventListener('click', function(){
    clearInterval(play);
})

window.addEventListener('keydown', function(e){
    if(e.key == 'ArrowRight'){
        next();
        console.log(e.key);
    }
})
window.addEventListener('keydown', function(e){
    if(e.key == 'ArrowLeft'){
        before();
        console.log(e.key);
    }
})