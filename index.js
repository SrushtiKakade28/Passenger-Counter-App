//document.getElementById("count-el").innerText =5

//let count =0

//console.log(count)
 
//let myAge =21
//console.log(myAge)
 
//initialize the count as 0
//increment button work
//listen for click

//change the count-el in the html to reflet the new count


//to display the final count on the website
//in the 1st part we are asking for th ehtml element
//in the 2nd part we are modifying it
let countEl=document.getElementById("count-el")
console.log(countEl)
let count=0
function increment(){
    console.log(" clicked")
    count=count+1
    countEl.innerText=count
   
   
}



let saveEl=document.getElementById("save-el")

function save() {
    let countStr = count + "-" 
    saveEl.textContent += countStr 
    countEl.innerText=0
    count=0
}
//instead of innertext we can use textcontent  for reducing the space
