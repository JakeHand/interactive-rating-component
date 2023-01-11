// Capture rating value
const ratings = Array.from(document.getElementsByClassName('rating'));

let ratingValue;
const eventListener = ratings.map(rating => {
     rating.addEventListener('click', (e) => {
          ratingValue = e.target.innerHTML;
     });
});

// Rating submit
const submit = document.getElementById('submit');
const thankYou = document.getElementById('thank-you');
const form = document.getElementById('form');
const numSelected = document.getElementById('num-selected');

const displayThanks = function() {
     if (ratingValue) {
          thankYou.style.display = 'block';
          form.style.display = 'none';
          numSelected.innerHTML = `You selected ${ratingValue} out of 5`;
     }
};

submit.addEventListener('click', displayThanks);