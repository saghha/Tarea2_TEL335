$("#polinomio").click(function () {
    $("#titulo").removeClass("invisible").addClass("visible");
    $('h1:contains("titulo")').text('polinomio');
    $('h1:contains("triangulo")').text('polinomio');
    $("#third").removeClass("invisible");
    $("#curva").removeClass("invisible").addClass("visible");
    $("#dibujo").removeClass("visible").addClass("invisible");
    $("#info").removeClass("visible").addClass("invisible");
});
$("#triangulo").click(function () {
    $("#titulo").removeClass("invisible").addClass("visible");
    $('h1:contains("titulo")').text('triangulo');
    $('h1:contains("polinomio")').text('triangulo');
    $("#third").addClass("invisible");
    $("#curva").removeClass("visible").addClass("invisible");
    $("#dibujo").removeClass("invisible").addClass("visible");
    $("#info").removeClass("invisible").addClass("visible");
});

function calcular() {
    var section = document.getElementById("title").innerHTML;
    if (section == 'polinomio') {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var c = document.getElementById('c').value;
        var eq = a + "*" + "x^2" + "+" + b + "*" + "x" + "+" + c;
        document.getElementById("test").innerHTML = eq;
        draw(eq);
    }
    else if (section == 'triangulo') {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var lado_a = 50 * parseInt(a) + 50;
        var lado_b = 50 * parseInt(b) + 50;
        document.getElementById("test").innerHTML = "triangulo" + lado_a + " " + lado_b;
        $('#results-graph').remove();
        $('#dibujo').append('<canvas id="results-graph"with="800" height="800"><canvas>');
        var hip = Math.sqrt(a * a + b * b);
        var ang_inf = Math.round(Math.asin(a / hip) * 57.3);
        var ang_sup = 90 - ang_inf;
        document.getElementById("hip").innerHTML = '<b>Hipotenusa:</b> ' + hip + ' cm';
        document.getElementById("angulo-inf").innerHTML = '<b>Angulo inferior:</b> ' + ang_inf + '°';
        document.getElementById("angulo-sup").innerHTML = '<b>Angulo superior:</b> ' + ang_sup + '°';
        var canvasElement = document.querySelector("#results-graph");
        var context = canvasElement.getContext("2d");
        context.beginPath();
        context.moveTo(50, 50);
        context.lineTo(50, lado_a);
        context.lineTo(lado_b, lado_a);
        context.closePath();

        context.lineWidth = 10;
        context.strokeStyle = '#666666';
        context.stroke();

        context.fillStyle = "#FFCC00";
        context.fill();
    }
}

function draw(eq) {
    try {
        functionPlot({
            target: '#plot',
            data: [{
                fn: eq,
                sampler: 'builtIn', 
                graphType: 'polyline'
            }]
        });
    }
    catch (err) {
        console.log(err);
        alert(err);
    }
}

 /* document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();*/
