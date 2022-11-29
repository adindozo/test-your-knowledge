document.addEventListener("DOMContentLoaded", function () {
   let l1=document.getElementById('loader1');
   let l2=document.getElementById('loader2');
   let filters=document.getElementById('filters');
   l1.style.display='none';
   l2.style.display='none';
   filters.style.display='none';
   const countryAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'http://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'http://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';
   let getPromises = function () {
      try {
         let countries = fetch(countryAPI).then( response => response.json() );
         let city = fetch(cityAPI).then( response => response.json() );
         let content = fetch(continentAPI).then( response => response.json() );
         let user = fetch(userAPI).then( response => response.json() );
         
        
         return Promise.all([countries, city, content, user]);
      }
      catch (err) {
         console.log(err);
      }
   }
   let useData=async function(){
      let arr = await getPromises();
      let a =arr[3].sort((a,b) => {
         return a.firstName.localeCompare(b.firstName);
      })
      arr[3]=a;
      document.getElementById('continents').innerHTML='<option value="0">Select a continent</option> ';
      for(let continent of arr[2]){
         
         let opt = document.createElement('option');
         opt.value=continent.code;
         opt.innerHTML=continent.name;
         document.getElementById('continents').appendChild(opt);
      }
      document.getElementById('countries').innerHTML='<option value="0">Select a country</option> ';

      for(let country of arr[0]){
         let opt = document.createElement('option');
         opt.value=country.iso;
         opt.innerHTML=country.name;
         document.getElementById('countries').appendChild(opt);
      }
      document.getElementById('cities').innerHTML='<option value="0">Select a city</option> ';

      for(let city of arr[1]){
         let opt = document.createElement('option');
         opt.value=city.id;
         opt.textContent=city.name;
         document.getElementById('cities').appendChild(opt);
      }
      document.getElementById('users').innerHTML='<option value="0">Select a user</option> ';

      for(let user of arr[3]){
         let opt = document.createElement('option');
         opt.value=user.id;
         opt.textContent=user.lastName;
         document.getElementById('users').appendChild(opt);
      }
      console.log(arr);
      l1.style.display='none';
      filters.style.display='block';
   }
   document.getElementById('fetchButton').addEventListener('click',() => {
      l1.style.display='block';
      filters.style.display='none';
      useData();
   })
   // document.getElementById('filters').addEventListener('change',(e) => {
   //    if(e.target.nodeName=='select'){
   //       console.log(2)
   //    }
   // })
   let selects = document.querySelectorAll('select');
   selects.forEach((select) => {
      select.addEventListener('change',(e) => {
         l2.style.display='block';
         let value = e.target.value;
         let selects = document.querySelectorAll('select');
         for(let select of selects){
            select.value='0';
         }
         e.target.value=value;
         let queryString='?';
         if(e.target.id=='continents'){
            queryString+='continent='+value;
         }
         if(e.target.id=='countries'){
            queryString+='iso='+value;
         }
         if(e.target.id=='cities'){
            queryString+='city='+value;
         }
         if(e.target.id=='users'){
            queryString+='user='+value;
         }
         fetch(photoAPI+queryString)
         .then((res) => {
            return res.json();
         })
         .then((photos) => {
            l2.style.display='none';
            document.getElementById('results').innerHTML='';
            for(let photo of photos){
               const img = document.createElement('img');
               img.src=imageURL+ photo.filename;
               img.alt=photo.title;
               img.title=photo.title;
               document.getElementById('results').appendChild(img);
            }
         })
         
      })
   })

});