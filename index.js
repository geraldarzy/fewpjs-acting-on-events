// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4"; 

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
} 

function moveDodgerUp(){
    let bottom = parseInt(dodger.style.bottom.replace("px",""));
    if(bottom<380){
        dodger.style.bottom = `${bottom +1}px`;
    }
}   

function moveDodgerRight(){
    let left = parseInt(dodger.style.left.replace("px",""),10)
    if(left<360){
        dodger.style.left = `${left + 1}px`
    }
}

function moveDodgerDown(){
    let bottom = parseInt(dodger.style.bottom.replace("px",""),10);
    if(bottom>0){
        dodger.style.bottom = `${bottom-1}px`
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
    if(e.key === "ArrowUp"){
        moveDodgerUp();
    }
    if(e.key === 'ArrowRight'){
        moveDodgerRight();
    }
    if(e.key === 'ArrowDown'){
        moveDodgerDown();
    }
})