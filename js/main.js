let requestObj = new XMLHttpRequest();

requestObj.open('GET', 'https://rickandmortyapi.com/api/character/', false);
//https://anapioficeandfire.com/api/
//https://pokeapi.co/api/v2/

requestObj.send();

// console.log(requestObj.responseText);

let myArray = JSON.parse(requestObj.responseText);

console.log(myArray);

for(let i = 0; i < myArray['results'].length; i++) {
    
    document.getElementById('frame').innerHTML += `
        <div class="card">
            <div class="card-title">
                <img src='${myArray['results'][i]['image']}' class="card-img">
                <h2>${myArray['results'][i]['name']}</h2>
            </div>
            <div class="card-text">
                <p>${myArray['results'][i]['species']}, ${myArray['results'][i]['gender']}</p>
                <p class="status">${myArray['results'][i]['status']}</p>
                <!-- <p class="appearance">First appearance in:<br>${myArray['results'][i]['episode'][0]}</p> -->
            </div>
        </div>
        `;
}

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
