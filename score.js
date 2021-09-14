var counterValue=document.getElementById("counter-value");
var random=0;
var col;
var r = 255;
var g = 255;
var b = 255;
function decrease()
{
    if(random!=0)
    {
        random--;
        g+=25;
        b+=25;
    }
    col = "rgb(" + r + "," + g + "," + b + ")";
    counterValue.style.color=col;
    counterValue.innerHTML=random;
}

function reset()
{
    random=0;
    g=255;
    b=255;
    r=255;
    col = "rgb(" + r + "," + g + "," + b + ")";
    counterValue.style.color=col;
    counterValue.innerHTML=random;
}

function increase()
{
    random++;
    g-=25;
    b-=25;
    col = "rgb(" + r + "," + g + "," + b + ")";
    counterValue.style.color=col;
    counterValue.innerHTML=random;
}

counterValue.innerHTML=random;