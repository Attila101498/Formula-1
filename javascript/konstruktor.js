var hely = 5;

// Gombnyomásra elinduló autók
function osszesIndul() {
    let k1 = document.getElementById("kep1");
    let aktualPointMer = 739;
    document.getElementById("demo").innerHTML = aktualPointMer + " pont.";
    if (hely < aktualPointMer) {
        hely += 0.3;
        k1.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k2 = document.getElementById("kep2");
    let aktualPointRedB = 417;
    document.getElementById("demo2").innerHTML = aktualPointRedB + " pont.";
    if (hely < aktualPointRedB) {
        hely += 0.3;
        k2.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k3 = document.getElementById("kep3");
    let aktualPointFer = 504;
    document.getElementById("demo3").innerHTML = aktualPointFer + " pont.";
    if (hely < aktualPointFer) {
        hely += 0.3;
        k3.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k4 = document.getElementById("kep4");
    let aktualPointRp = 73;
    document.getElementById("demo4").innerHTML = aktualPointRp + " pont.";
    if (hely < aktualPointRp) {
        hely += 0.3;
        k4.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k5 = document.getElementById("kep5");
    let aktualPointWill = 1;
    document.getElementById("demo5").innerHTML = aktualPointWill + " pont.";
    if (hely < aktualPointWill) {
        hely += 0.3;
        k5.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k6 = document.getElementById("kep6");
    let aktualPointMcl = 145;
    document.getElementById("demo6").innerHTML = aktualPointMcl + " pont.";
    if (hely < aktualPointMcl) {
        hely += 0.3;
        k6.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k7 = document.getElementById("kep7");
    let aktualPointTr = 85;
    document.getElementById("demo7").innerHTML = aktualPointTr + " pont.";
    if (hely < aktualPointTr) {
        hely += 0.3;
        k7.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k8 = document.getElementById("kep8");
    let aktualPointHaas = 28;
    document.getElementById("demo8").innerHTML = aktualPointHaas + " pont.";
    if (hely < aktualPointHaas) {
        hely += 0.3;
        k8.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k9 = document.getElementById("kep9");
    let aktualPointRen = 91;
    document.getElementById("demo9").innerHTML = aktualPointRen + " pont.";
    if (hely < aktualPointRen) {
        hely += 0.3;
        k9.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }

    let k10 = document.getElementById("kep10");
    let aktualPointAlfa = 57;
    document.getElementById("demo10").innerHTML = aktualPointAlfa + " pont.";
    if (hely < aktualPointAlfa) {
        hely += 0.3;
        k10.style.left = hely + "px";
        setTimeout("osszesIndul()", 40);
    }
}


// Oldal tetejére gomb
$(document).ready(function () {
    let btn = $('#button');

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


// Json fájl lekérése 
var gomb = document.getElementById("btn");

gomb.addEventListener('click', function() {
    let beker = new XMLHttpRequest();

    beker.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(beker.responseText);
            let Bajnokok = response.Bajnokok;

            let output = "<table border='1' align='center'>";
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
    beker.open("GET", "https://attila101498.github.io/Formula-1/konstruktorbajnok.json", true);
    beker.send();
});