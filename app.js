// let http = new XMLHttpRequest();
// http.open('get', 'image.json', true);
// http.send();
// http.onload = function(){
//    if(this.readyState == 4 && this.status == 200){
//       let products = JSON.parse(this.responseText);
//       let output = "";
//       for(let item of products){
//          output += `
//                <img src="${item.image}" alt="${item.description} class="w-screen p-3">
//          `;
//       }
//       document.querySelector(".background").innerHTML = output;
//    }
// }

const fetchData = () =>{
    fetch('image.json')
    .then(res => res.json())
    .then(data => images(data))
}
fetchData();

const images = (data) =>{
    for(i=0; i < data.length; i++){
        const imageShow = document.getElementById('imageadd');
        const newAdd = document.createElement('img');
        newAdd.src= data[i].image;
        newAdd.classList.add('w-screen');
        newAdd.classList.add('image');
        imageShow.appendChild(newAdd);
    }
}