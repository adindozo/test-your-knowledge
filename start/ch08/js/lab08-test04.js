
// convert comma-separated values into an array
let countries = csv.split(',');
console.log(countries)

// convert array into delimited string
let countriesstring=countries.join(', ');
console.log(countriesstring); 

// check if these are arrays
let countriesArrayCheck=(Array.isArray(countries))  ? 'is' : 'is not';
let countriesstringArrayCheck=(Array.isArray(countriesstring))  ? 'is' : 'is not';
console.log('countries '+  countriesArrayCheck + ' array.');
console.log('countriesstring '+ countriesstringArrayCheck + ' array.');
//console.log(Array.isArray(countries))
//  sort a simple array 
countries.sort();
console.log(countries);

 
// reverse the sort

countries.reverse();
console.log(countries);
// remove the first element
countries.pop();
console.log(countries);

// remove the last element
countries.shift();
console.log(countries);


// add new elements to the front of the array
countries.unshift(1);
countries.unshift(2);
console.log(countries);


// search for element
console.log(countries.includes('Germany'));

// search for element index
console.log(countries.indexOf('Germany'));


// make a new array by extracting from another array


console.log('----------- s----------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for(let e of cities){
   if(e.continent=="NA")console.log(e.city);
}

console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for(let e of galleries){
   if(e.location.country=="USA"){
     console.log(e.name);
     break;
   }
}  


console.log('---------------------');

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75

for(let e of colors){
   if(e.luminance < 75){
      console.log(e.name);
      
      
   }
}
console.log('---------------------');

// use two nested loops - outer: loop thru colors name: rgb sum
for(let e of colors){
   let count=0;
   for(let rgbnumber of e.rgb){
      count+=rgbnumber;
   }
   console.log(e.name + ': ' + count);
}


console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */


document.write('<ul>')
for(let e of galleries){
   document.write("<li><a href='" +e.url+"'>" + e.name +"</a></li>")
}
document.write('</ul>')

document.write(2);
document.write(32);