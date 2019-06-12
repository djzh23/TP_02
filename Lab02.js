var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var slider = document.getElementById("slider");
var himmel_label = document.getElementById("himmel_label");
var numberfield = document.getElementById("numberfield");


// ************** GLOBALE VARIABLES **************
var himmelsrichtungen = ["S", "SW", "W", "NW", "N", "NO", "O", "SO"];
var gradzahlen = [0, 45, 90, 135, 180, 225, 270, 315]
var canWidth = 800;
var isWind = true;
var size = 300;
var bw = size * 0.04 // breit Windpfeil


function Animate() {
    var xPos1 = 0;// XKoordinate für Wolken Animation
    var xPos2 = 0;
    var xPos3 = 0;
    var xPos4 = 0;
    var b = false;
    frame1();
    frame2();
    frame3();

    waterFrame();
    
    function frame1() {
        if (xPos1 == 730) {
            xPos1 = -450;
        }
        else {
            xPos1++;
            context.clearRect(0, 0, canvas.width, canvas.height);
            DrawAll(xPos1, xPos2, xPos3);
        }
        window.requestAnimationFrame(frame1);
    }
    function frame2() {
        if (xPos2 == 700) {
            xPos2 = -650;
        }
        else {
            xPos2 = xPos2 + 2;
            context.clearRect(0, 0, canvas.width, canvas.height);
            DrawAll(xPos1, xPos2, xPos3);
        }
        window.requestAnimationFrame(frame2);
    }
    function frame3() {
        if (xPos3 == 150) {
            xPos3 = -900;
        }
        else {
            xPos3 = xPos3 + 2.5;
            context.clearRect(0, 0, canvas.width, canvas.height);
            DrawAll(xPos1, xPos2, xPos3);
        }
        window.requestAnimationFrame(frame3);
    }
    function waterFrame() {
        if (b) {
            xPos4 = xPos4 + 0.5;
            context.clearRect(0, 0, canvas.width, canvas.height);
            DrawAll(xPos1, xPos2, xPos3, xPos4);
            if (xPos4 == 0) {
                b = false;
            }
        } else {
            xPos4 = xPos4 - 0.5;
            context.clearRect(0, 0, canvas.width, canvas.height);
            DrawAll(xPos1, xPos2, xPos3, xPos4);
            if (xPos4 == -400) {
                b = true;
            }
        }
        window.requestAnimationFrame(waterFrame);
    }
}

function Cloud(xPos1, xPos2, xPos3) {

    cloud1(xPos1);
    context.save();
    context.translate(300, -100);
    cloud2(xPos2);
    context.restore();
    context.save();
    context.translate(1000, 500);
    context.rotate(180 * Math.PI / 180);
    cloud2(-xPos3);
    context.restore();

    function cloud1(xPos1) {
        //cloud1
        context.beginPath();
        context.moveTo(145 + xPos1, 134);
        context.bezierCurveTo(186 + xPos1, 69, 248 + xPos1, 116, 250 + xPos1, 136);
        context.bezierCurveTo(251 + xPos1, 151, 284 + xPos1, 49, 337 + xPos1, 141);
        context.bezierCurveTo(344 + xPos1, 154, 439 + xPos1, 190, 351 + xPos1, 222);
        context.bezierCurveTo(339 + xPos1, 226, 421 + xPos1, 320, 308 + xPos1, 296);
        context.bezierCurveTo(293 + xPos1, 293, 178 + xPos1, 404, 184 + xPos1, 330);
        context.bezierCurveTo(185 + xPos1, 315, 119 + xPos1, 288, 107 + xPos1, 279);
        context.bezierCurveTo(65 + xPos1, 245, 61 + xPos1, 152, 124 + xPos1, 201);
        context.bezierCurveTo(136 + xPos1, 210, 68 + xPos1, 73, 145 + xPos1, 134);
        context.strokeStyle = "#FFFFFF";
        context.fillStyle = "#FFFFFF";
        context.fill();
        context.stroke();
        context.closePath();
    }
    
    function cloud2(xPos2) {
        //cloud2
        context.beginPath();
        context.moveTo(158 + xPos2, 173);
        context.bezierCurveTo(108 + xPos2, 171, 118 + xPos2, 156, 130 + xPos2, 148);
        context.bezierCurveTo(146 + xPos2, 137, 137 + xPos2, 98, 179 + xPos2, 112);
        context.bezierCurveTo(198 + xPos2, 118, 213 + xPos2, 128, 221 + xPos2, 115);
        context.bezierCurveTo(244 + xPos2, 78, 270 + xPos2, 88, 285 + xPos2, 131);
        context.bezierCurveTo(290 + xPos2, 145, 331 + xPos2, 127, 349 + xPos2, 164);
        context.bezierCurveTo(356 + xPos2, 177, 308 + xPos2, 215, 293 + xPos2, 218);
        context.bezierCurveTo(278 + xPos2, 221, 270 + xPos2, 223, 250 + xPos2, 192);
        context.bezierCurveTo(242 + xPos2, 179, 235 + xPos2, 223, 204 + xPos2, 188);
        context.bezierCurveTo(194 + xPos2, 177, 176 + xPos2, 218, 158 + xPos2, 173);
        context.strokeStyle = "#FFFFFF";
        context.fillStyle = "#FFFFFF";
        context.fill();
        context.stroke();
        context.closePath();
    }
}


//******************* Background **********************
function Water(xPos) {
        // *** Erster Teil "BLAUE Hintergrund" - TEIL 
        context.beginPath();
        context.moveTo(0, 800);
        context.lineTo(0, 500);
        context.lineTo(800, 500);
        context.lineTo(800, 800);
        context.strokeStyle = "#0A9BF5";
        context.fillStyle = "#0A9BF5";
        context.fill();
        context.stroke();
        context.closePath();

        // *** Zweiter TEIL  " DIE WELLEN " - TEIL
        var x = 120 + xPos;
        var firstWave = xPos;
        var i = 0;
        context.beginPath();
        context.moveTo(0, 500);
        context.bezierCurveTo(22 + firstWave, 496, 43 + firstWave, 478, 43 + firstWave, 438);
        context.bezierCurveTo(43 + firstWave, 450, 43 + firstWave, 496, 103 + firstWave, 500);
        while (i <= 10) {//Anzahl der Wellen i bis 10
            context.bezierCurveTo(x + 22, 496, x + 43, 478, x + 43, 438);
            context.bezierCurveTo(x + 43, 450, x + 43, 496, x + 103, 500);
            x = x + 120;
            i++;
    }
    context.strokeStyle = "#FFFFFF";
    context.fillStyle = "#0A9BF5";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
    context.closePath();

}

function lade_Pfeil(wrt) {
    context.save();
    context.translate(canWidth / 2, canWidth / 2);//mittig platzieren
    context.rotate(wrt * Math.PI / (180));// Winkel in Grad * Mathe.PI/180
    DrawPfeil(numberfield.value);
    context.restore();
}

function DrawPfeil(speed){

    var speed = Math.floor(speed)
    var countArrow = 0;
    var move = 0.1;
    var moveD = 0;
    var justfive = 0.1;
    var ten = 0;
    var count5 = Math.floor(speed / 5);
    var count10 = Math.floor(count5 / 2);
    var count50 = Math.floor(count5 / 10);
    var nec50 = count50;
    var nec10;
    var nec5;

    if (count50 >= 1) {
        nec10 = ((count10 * 10) - (count50 * 50)) / 10;
    } else {
        nec10 = count10;
    }
    nec5 = count5 - count10 * 2;    
    //console.log("nec50:" + nec50);// wie viel 50 ?
    //console.log("nec10:" + nec10);// wie viel 10 ? 
    //console.log("nec5:" + nec5);  // wie viel 5 ?

    if (speed != 0) {
        Windpfeil();
        //50Knotendreieck
        for (i = 0; i < nec50; i++) {
            context.save();
            context.translate(size - size, size - (size * (0.15 + moveD)));
            context.rotate((size * 0.45) * Math.PI / (size * 0.9));
            FünfzigKnotenDreieck()
            context.restore();
            moveD = moveD + 0.15;
            justfive = justfive * 1.3;
            ten = ten + 0.1;
            countArrow++;
            if (nec50 == 2 || nec50 == 1 && nec10 == 0) {
                ten = ten - ten;
            }
        }
        //10Knotenpfeil
        for (i = 0; i < nec10; i++) {
            context.save();
            context.translate(size * -0.015, size * ((0.93 - ten) - move * countArrow));
            context.rotate((size * 0.34) * Math.PI / (size * 0.9));
            ZehnKnotenStrich(size);
            context.restore();
            justfive = justfive - justfive;
            countArrow++;
        }
        //5Knotenpfeil
        for (i = 0; i < nec5; i++) {
            context.save();
            context.translate(size * -0.015, size * ((0.93 - justfive - ten) - move * countArrow));
            context.rotate((size * 0.34) * Math.PI / (size * 0.9));
            FünfKnotenStrich();
            context.restore();
            countArrow++;
        }
        isWind = true;
        himmel_label.innerHTML = himmelsrichtungen[slider.value];
    }
    else {
        Windpfeil_0kn();
        himmel_label.innerHTML = "-";
        isWind = false;
    }

}


//Windpfeil 0kn
function Windpfeil_0kn() {
    context.beginPath();
    context.arc(size - size, size - size, size / 5, 0, 2 * Math.PI); // x, y, r, start, stop
    context.strokeStyle = "#000000";// Style für Rand
    context.lineWidth = bw;
    context.stroke();// Rand zeichnen
    context.closePath();
}
//Windpfeil  
function Windpfeil() {
    context.beginPath();
    context.moveTo(size - size, size - size);//Startpunkt des Pfeils(die Mitte vom Canvas)
    context.lineTo(size - size, size);//Ausgangsposition (N);
    context.strokeStyle = "#000000";
    context.fill();
    context.lineWidth = bw;
    context.stroke();
    context.closePath();
}
//Geschwindigkeitssymbole
function FünfKnotenStrich() {
    context.beginPath();
    context.moveTo(size * 0.05, size - size);
    context.lineTo(size * 0.05, size * 0.2);//0.02=länge der Pfeils
    context.strokeStyle = "#000000";
    context.fill();
    context.lineWidth = bw;
    context.stroke();
    context.closePath();
}
function ZehnKnotenStrich() {
    context.beginPath();
    context.moveTo(size * 0.05, size - size);
    context.lineTo(size * 0.05, size * 0.3);//0.3=länge des Pfeils
    context.strokeStyle = "#000000";
    context.fill();
    context.lineWidth = bw;
    context.stroke();
    context.closePath();
}
function FünfzigKnotenDreieck() {
    context.beginPath();
    context.moveTo(size * 0.1, size * 0.25);
    context.lineTo(size * 0.15, size - size);
    context.lineTo(size - size, size - size);
    context.closePath();
    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";
    context.fill();
}



// ************* The main function *************
function DrawAll(xPosC1, xPosC2, xPosC3, xPosWater) {
    Cloud(xPosC1, xPosC2, xPosC3)
    Water(xPosWater);
    lade_Pfeil(gradzahlen[slider.value]);
}

window.addEventListener("load", DrawAll);
window.requestAnimationFrame(Animate);
