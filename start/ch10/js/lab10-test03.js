

document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';


   // first hide loaders and main element 
   let l1 = document.getElementById('loader1');
   let l2 = document.getElementById('loader2');
   document.getElementById('filters').style.display='none';
   l1.style.display='none';
   l2.style.display='none';
   // then handle button click 
   document.getElementById('fetchButton').addEventListener('click',(e) => {
      document.getElementById('filters').style.display='none';
      l1.style.display='block';
      fetch(countryAPI)
         .then(res => res.json())
         .then((countries) => {
            l1.style.display='none';
            document.getElementById('countries').innerHTML='';
            for(let country of countries){
               let option = document.createElement('option');
               option.innerHTML=country.name;
               option.value=country.iso;
               document.getElementById('countries').appendChild(option);
            }
            
            document.getElementById('filters').style.display='block';
         })

         
         
   })
   

   /* -------------------------------------------------------------
      When button is clicked, fetch data and populate select element 
   */

   document.getElementById("countries").addEventListener('change',(e) => {
      l2.style.display='block';
      let iso = e.target.value;
      document.getElementById('results').innerHTML='';
      fetch(photoAPI+"?iso="+iso)
      .then(res=>res.json())
      .then((photos) => {
         
         
         
         for(let photo of photos){
            let img=document.createElement('img');
            img.addEventListener('load',() => {
               l2.style.display='none';
            })
            img.alt=photo.title;
            img.src=imageURL+photo.filename;
            document.getElementById('results').appendChild(img);
         }
         
         
      })
   })
   /* -------------------------------------------------------------
      When user selects, fetch data and display images
   */



});