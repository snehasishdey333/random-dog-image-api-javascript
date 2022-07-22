//https://dog.ceo/api/breeds/image/random

let dogImageDiv=document.getElementById("dogImageDiv");
let loadBtn=document.getElementById("loadImage");
let loadImage=()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=>response.json())
    .then(json=>{
       console.log(json.message)
        dogImageDiv.innerHTML=`<img src='${json.message}' alt="" height=200 width 200>`
    });
}
function load(){
    return loadImage();
}