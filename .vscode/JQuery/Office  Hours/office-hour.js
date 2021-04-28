var dogAPI = 'https://dpg.ceo/api/breed/weimaraner/images'

function renderDogs(data) {
    var dogImgs = [...data.message];
    var ul = document.querySelector('#my-list');
    for (var dogImgURL of dogImgs) {
        var img = document.createElement('img');
        img.src = dogImgURL;
        img.classList = 'dog-img';
        ul.appendChild(img);
    }
}

function fetchDogs() {
    fetch(dogAPI)
        .then(res => res.json())
        .then(data => renderDogs(data))
        .catch(err => console.error());
}

var btn = document.querySelector("#dog-btn");

btn.addEventListener('click', fetchDogs);

// $('img').click(function () {             $(this) call all selector
//    $(this).attr('src', 'img/sloth.jpg')  attribute all will change source link to new image
// });

// fetch getting API

funciton renderDogsImgs(data) {
    var imgArr = [...data.message];
    var container = Document.querySelector('.container')
    for (var i = 0; i < imgArr.length; i++) {
        var img = document.createElement('img');
        img.src = imgArr[i];
        container.appendChild(img);
    }
}