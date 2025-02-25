alert("this page is not responsive");
var drumlen = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumlen; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function1);
    function function1()
    {
        var clickbtn = this.innerHTML;
        switch (clickbtn)
        {
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
                
            case "a":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
                
            case "s":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
                
            case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
                
            case "j":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
                
            case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
                
            case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            default:
                console.log(clickbtn);
                break;
        }
    }
}