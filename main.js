function bigSize()
{
    document.querySelector("div").classList.remove('small');
    document.querySelector("div").classList.add('big');

}

document.querySelector(".plus").onclick=bigSize;

function smallSize()
{
    document.querySelector("div").classList.remove('big');
    document.querySelector("div").classList.add('small');

}

document.querySelector(".mines").onclick=smallSize;
