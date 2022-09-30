let http = new XMLHttpRequest();
http.open('get', 'image.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
               <img src="${item.image}" alt="${item.description} class="w-screen image">
         `;
      }
      document.querySelector(".background").innerHTML = output;
   }
}