const topBtn = document.getElementById("topBtn");
topBtn.addEventListener('click',topFunction);

window.onscroll =()=> {
    scrollFunction()
};

function scrollFunction() {
  if(document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}