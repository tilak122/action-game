console.log("drogo")
score=0;
cross=true;
let audiogame=new Audio('game.mp3')


document.onkeydown=function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');


        },700);
    }
    if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX-112+"px";
    }

}
setInterval(()=>{
    dino=document.querySelector('.dino');
    obstacle=document.querySelector('.obstacle');
    gameover=document.querySelector('.gameover');

dx=window.parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));

dy=window.parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

ox=window.parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));

oy=window.parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
offsetX=Math.abs(dx-ox);
offsetY=Math.abs(dy-oy);
if(offsetX< 100 && offsetY< 52){
    gameover.style.visibility='visible';

    obstacle.classList.remove('obstacleani')
    audiogame.play();
    setTimeout(()=>{
        
        audiogame.pause();
    

        
    },1000);
}
else if(offsetX< 145 && cross){
    score+=1;
    updatescore(score);
    cross=false;
    setTimeout(()=>{
        cross=true;
    },1000)
    setTimeout(()=>{
        anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
        newdur=anidur-0.3;
        obstacle.style.animationDuration=newdur + 's';


    },500);
}
},10);
function updatescore(score){
    scorecount.innerHTML="Your Score :"+ score;
}
