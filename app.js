// getText("quotes.txt")


// async function getText(file){
//     let myObj = await fetch(file);
  
//     let myT = await myObj.text()
//     // let tRegex = /\"/g
//     // let result = myT.match(tRegex)
//     // for(let y=0; y< result.length; y+2){
   
//     //     text = "";

//     // text += myT[y] +`<br>`
// document.querySelector(".text").innerHTML = myT
// }  
 
    
 
   let qT = ["When God doesn't answer, remember: the teacher doesn't speak during tests. -Oskar Bekaert-" , 
   "Stick around to see how the story ends. -An Verbeeck-" ,
   "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book. -Groucho Marx-",
   "Sometimes a cigar is just a cigar. -Sigmund Freud-" , 
   "Just enjoy it, her and now, something else doesn't exist -An Verbeeck-",
   "I have not failed. I've just found 10.000 ways that won't work. -Thomas A. Edison-",
   "Some cause happiness wherever they go, others whenever they go. -Oscar Wilde-",
   "Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game. -Voltaire-"
   ] 

   y =0
   let slideT =  document.querySelector(".text")
//   slideT.innerHTML = qT

   let slideIndex = 0
     function showSlides(){

 for(let i = 0; i< qT.length; i++){
    text = ""
    text = qT[i]
    slideT.innerHTML = text
    slideT.style.display = "none"
    slideT.style.animation = "fade 10s infinite" ;

 }

   
slideIndex++;

    if(slideIndex > qT.length){ 
      slideIndex = 1
    }
  slideT.style.display = "block"
         slideT.innerHTML =  qT[slideIndex - 1]
  slideT.style.animation = "fade 10s infinite" ;
setTimeout(showSlides, 10000);
      } 
 


      //slideshow


      showSlides();
      
     