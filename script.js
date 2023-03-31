const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satifisied";


ratingsContainer.addEventListener('click', (e) => {
  if(
    e.target.parentNode.classList.contains("rating") && 
    e.target.nextElementSibling
  ) {
    removeActive();
    e.target.parentNode.classList.add("active")
    selectedRating = e.target.nextElementSibling.innerHTML;
  } 
});


sendBtn.addEventListener('click', (e) => {
  panel.innerHTML =  `
    <i class="fas fa-heart"></i>
    <strong>thank you</strong>
    <br>
    <strong>feedback: ${selectedRating}</strong>
    <p>details</p>
  `;
});


function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
 ratings[i].classList.remove("active")
  }
}


