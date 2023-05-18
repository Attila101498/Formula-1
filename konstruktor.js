var hely1 = 5;
var hely2 = 5;
var hely3 = 5;
var hely4 = 5;
var hely5 = 5;
var hely6 = 5;
var hely7 = 5;
var hely8 = 5;
var hely9 = 5;
var hely10 = 5;


//Gombnyomásra elinduló autók
function osszesIndul() {
    let k1 = document.getElementById("kep1");
    let aktualPointMer = 257;
    document.getElementById("demo").innerHTML = aktualPointMer + " pont.";
    if (hely1 < aktualPointMer) {
        hely1 += 0.5;
        k1.style.left = hely1 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k2 = document.getElementById("kep2");
    let aktualPointRedB = 110;
    document.getElementById("demo2").innerHTML = aktualPointRedB + " pont.";
    if (hely2 < aktualPointRedB) {
        hely2 += 0.5;
        k2.style.left = hely2 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k3 = document.getElementById("kep3");
    let aktualPointFer = 139;
    document.getElementById("demo3").innerHTML = aktualPointFer + " pont.";
    if (hely3 < aktualPointFer) {
        hely3 += 0.5;
        k3.style.left = hely3 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k4 = document.getElementById("kep4");
    let aktualPointRp = 17;
    document.getElementById("demo4").innerHTML = aktualPointRp + " pont.";
    if (hely4 < aktualPointRp) {
        hely4 += 0.5;
        k4.style.left = hely4 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k5 = document.getElementById("kep5");
    let aktualPointWill = 0;
    document.getElementById("demo5").innerHTML = aktualPointWill + " pont.";
    if (hely5 < aktualPointWill) {
        hely5 += 0.5;
        k5.style.left = hely5 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k6 = document.getElementById("kep6");
    let aktualPointMcl = 30;
    document.getElementById("demo6").innerHTML = aktualPointMcl + " pont.";
    if (hely6 < aktualPointMcl) {
        hely6 += 0.5;
        k6.style.left = hely6 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k7 = document.getElementById("kep7");
    let aktualPointTr = 16;
    document.getElementById("demo7").innerHTML = aktualPointTr + " pont.";
    if (hely7 < aktualPointTr) {
        hely7 += 0.5;
        k7.style.left = hely7 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k8 = document.getElementById("kep8");
    let aktualPointHaas = 16;
    document.getElementById("demo8").innerHTML = aktualPointHaas + " pont.";
    if (hely8 < aktualPointHaas) {
        hely8 += 0.5;
        k8.style.left = hely8 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k9 = document.getElementById("kep9");
    let aktualPointRen = 14;
    document.getElementById("demo9").innerHTML = aktualPointRen + " pont.";
    if (hely9 < aktualPointRen) {
        hely9 += 0.5;
        k9.style.left = hely9 + "%";
        setTimeout("osszesIndul()", 40);
    }

    let k10 = document.getElementById("kep10");
    let aktualPointAlfa = 13;
    document.getElementById("demo10").innerHTML = aktualPointAlfa + " pont.";
    if (hely10 < aktualPointAlfa) {
        hely10 += 0.5;
        k10.style.left = hely10 + "%";
        setTimeout("osszesIndul()", 40);
    }
}


//Oldal tetejére gomb
jQuery(document).ready(function () {

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});


//Json fájl lekérése 
var gomb = document.getElementById("btn");

gomb.addEventListener('click', function () {
    var beker = new XMLHttpRequest();
    beker.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(beker.responseText);
            var Bajnokok = response.Bajnokok;

            var output = "<table border='1' align='center'>";
            output += '<th style="background-color: DarkCyan;">' + "Idény" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Konstruktőr" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Motor" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Versenyző" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Csapatvezető" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Pole pozíció" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Győzelem" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Pont" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Előny" + '</th>';
            for (let i = 0; i < Bajnokok.length; i++) {               
                output += '<tr><td>' + Bajnokok[i].Idény + '</td>';
                output += '<td>' + Bajnokok[i].Konstruktőr + '</td>';
                output += '<td>' + Bajnokok[i].Motor + '</td>';               
                output += '<td>' + Bajnokok[i].Versenyzők + '</td>';
                output += '<td>' + Bajnokok[i].Csapatvezető + '</td>';
                output += '<td>' + Bajnokok[i].Polepozíció + '</td>';
                output += '<td>' + Bajnokok[i].Győzelem + '</td>'; 
                output += '<td>' + Bajnokok[i].Pont + '</td>';
                output += '<td>' + Bajnokok[i].Előny + '</td></tr>';
            }
            output += '<th style="background-color: DarkCyan;">' + "Idény" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Konstruktőr" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Motor" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Versenyző" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Csapatvezető" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Pole pozíció" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Győzelem" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Pont" + '</th>';
            output += '<th style="background-color: DarkCyan;">' + "Előny" + '</th>';
            output += "</table>";
            document.getElementById('kiir').innerHTML = output;
        }
    };
    beker.open("GET", "konstruktorbajnok.json", true);
    beker.send();
});