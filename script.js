let btn = document.getElementById("btn")
let colorText = document.getElementById("color")
let wrap = document.getElementById("wrapper")
let colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function randHexValue(){
    let randIndex = Math.floor(Math.random()*16)
    return colors[randIndex]
}

btn.addEventListener("click",function(){
    let hexCode = "#";
    for(let i=1;i<=6;i++){
        hexCode += randHexValue()
    }
    colorText.innerHTML = hexCode
    colorText.style.color = hexCode
    wrap.style.backgroundColor = hexCode
})
