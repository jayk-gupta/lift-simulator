const btnUpFloor1 = document.querySelector('.btn-up-floor-1');
const btnUpFloor2 = document.querySelector('.btn-up-floor-2');
const btnUpFloor3 = document.querySelector('.btn-up-floor-3');

const btndownFloor3 = document.querySelector('.btn-down-floor-3');
const btndownFloor2 = document.querySelector('.btn-down-floor-2');
// 
const doorLeft = document.querySelector('.left-door');
const doorRight = document.querySelector('.right-door');





const lift = document.querySelector('.lift');



const move = function (floorName,positionValue){
  floorName.addEventListener('click', function () {
      lift.style.bottom = `${positionValue}px`;
    new Audio('sounds/ElevatorDoorWoodenFenceSlideOp PEHD091705.mp3').play();
  //
    setTimeout(() => {
      lift.classList.add('lift-open')
      doorLeft.classList.add('left-door-open');
      doorRight.classList.add('right-door-open'); 
      new Audio('sounds/20131106_elevator-door-opening_zoomh6xy-105335.mp3').play();
    }, 2500)
    
    setTimeout(() => {
      doorLeft.classList.remove('left-door-open');
      doorRight.classList.remove('right-door-open');
    }, 6000);
  })
  
}

// up
move(btnUpFloor1,215);
move(btnUpFloor2, 215);
move(btnUpFloor3, 430);

// down
move(btndownFloor3, 215);
move(btndownFloor2, 0);