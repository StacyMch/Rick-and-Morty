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


function paintBackground() {
    document.getElementById('frame').style.backgroundColor = 'rgba(189,255,164, 0.9)';
}

function back() {
    document.getElementById('frame').style.backgroundColor = 'rgb(198 198 198 / 90%)';
}

// function paintCharacters() {
//     document.getElementById('card-text').style.backgroundColor = 'rgba(189,255,164, 0.9)';
//     document.getElementById('h2').style.color = 'rgba(189,255,164, 0.9)';
// }

// function backCharacters() {
//     document.getElementById('card-text').style.backgroundColor = 'rgb(232 232 232)';
//     document.getElementById('h2').style.color = 'beige';
// }
