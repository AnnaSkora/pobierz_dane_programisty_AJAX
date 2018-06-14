function ajax(method, url) {

    let httpReq = new XMLHttpRequest();
    httpReq.open(method, url);
    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }

    httpReq.onsuccess = function (response) {

        let jsonObj = JSON.parse(response);
        console.log(jsonObj);

        //
        //        let userId = document.createElement('p');
        //        userId.innerHTML = ('Imię: ' + jsonObj.imie);
        //        document.body.appendChild(userId);
        //
        //        let userName = document.createElement('p');
        //        userName.innerHTML = ('Nazwisko: ' + jsonObj.nazwisko);
        //        document.body.appendChild(userName);
        //
        //        let userJob = document.createElement('p');
        //        userJob.innerHTML = (' Zawód: ' + jsonObj.zawod);
        //        document.body.appendChild(userJob);
        //
        //        let userBrand = document.createElement('p');
        //        userBrand.innerHTML = (' Firma: ' + jsonObj.firma);
        //        document.body.appendChild(userBrand);


    }

    httpReq.send();

}


function pobierzDane() {
    $('#btn').on('click', function () {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
            $('#dane-programisty').html('<p>' + 'Imię: ' + data.imie + '</p><p>' + 'Nazwisko: ' + data.nazwisko + '</p><p>' + 'Zawód: ' + data.zawod + '</p><p>' + 'Firma: ' + data.firma + '</p>');
        });
    });
}

$(document).ready(function () {

    pobierzDane();

});




//var $div = $("#dane-programisty");
//
//$("button").after($div);
//document.getElementById('btn').addEventListener('click', function pobierzDane() {
//    ajax('GET', 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
//
//})
//$(document).ready(function () {
//
//    pobierzDane();
//
//});
