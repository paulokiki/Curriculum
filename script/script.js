
var btnReadMore = document.getElementById("btnReadMore");
var btnReadLess = document.getElementById("btnReadLess");

btnReadMore.addEventListener('click', () =>{
        

        document.getElementById("longText").style.display = "inline"
        btnReadMore.style.display = "none";
        btnReadLess.style.display = "inline";

});







btnReadLess.addEventListener('click', () =>{

        document.getElementById("longText").style.display = "none"
        btnReadLess.style.display = "none";
        btnReadMore.style.display = "inline";
        
});


