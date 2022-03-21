'use strict';
const form = document.querySelector('.new-form');

// form.classList.remove('collapsed');

const list = document.querySelector('.js-list');

const card1 = `<li class="card">
<article>
  <img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le gusta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const card2 = `<li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le gusta estar tranquilo y que nadie le
  moleste. Es una maravilla acariciarle!
</p>
</li>`;

const card3 = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le gusta estar tranquilo y que nadie le
  moleste. Es una maravilla acariciarle!
</p>
</li>`;

// const cardList = card1 + card2 + card3;
// list.innerHTML = cardList;

// Interpolando variables
let kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
// Metodo con el cual eliminamos el https:// según su posición
let kittenImageOne = kittenImage1.slice(8);
console.log(kittenImage1);
console.log(kittenImageOne);

let kittenName1 = 'Anastacio';
// Utilizamos el metodo string toUpperCase para modificar el nombre y convertirlo en mayuscula
const kittenNameOne = kittenName1.toUpperCase();
const kittenDesc1 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace1 = 'British Shorthair';

let kittenImage2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
let kittenImageTwo = kittenImage2.slice(8);
let kittenName2 = 'Fiona';
kittenName2 = kittenName2.toUpperCase();
const kittenDesc2 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace2 = 'British Shorthair';

let kittenImage3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
let kittenImageThree = kittenImage3.slice(8);
let kittenName3 = 'Cielo';
kittenName3 = kittenName3.toUpperCase();
const kittenDesc3 =
  'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace3 = 'British Shorthair';

const cardKitten1 = `<li class="card">
<article>
  <img class="card_img" src=" https://${kittenImageOne}" alt="gatito" />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description"> ${kittenDesc1} </p>
</article>
</li>`;

const cardKitten2 = `<li class="card">
<img class="card_img"src= " https://${kittenImageTwo}"alt="gatito" />
<h3 class="card_title">${kittenName2}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description" > ${kittenDesc2} </p>
</li>`;

const cardKitten3 = `<li class="card">
<img class="card_img" src= "https://${kittenImageThree}"  alt="gatito" />
<h3 class="card_title">${kittenName3}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description" > ${kittenDesc3} </p>
</li> `;

// Pintamos en el HTML el contenido de las variables
const cardList2 = cardKitten1 + cardKitten2 + cardKitten3;
list.innerHTML = cardList2;
