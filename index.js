for(var i =0; i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var key=this.innerHTML;
    makesound(key);
    buttonfcn(key);
  });
}
document.addEventListener("keypress", function(event) {console.log(event);

  makesound(event.key);
  buttonfcn(event.key);

});
  function makesound(key){
    switch (key) {
            case "w":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
            break;
            case "a":
            var kick = new Audio("snare.mp3");
            kick.play();
            break;
            case "s":
            var kick = new Audio("crash.mp3");
            kick.play();
            break;
            case "d":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
            case "j":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
            case "k":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
            case "l":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
    
        default:

            break;
    }
}
function buttonfcn(bkey) {
  var mainkey=document.querySelector( "."+bkey);
  mainkey.classList.add("pressed");
  setTimeout(() => {mainkey.classList.remove("pressed");
    
  }, 100);
}




















