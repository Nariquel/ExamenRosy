
var datos=[
['"El pasado puede doler pero, tal y como yo lo veo, puedes: o huir de él o aprender"','leon.jpg', 'yellow','Lobste'],
['"La flor que florece en la adversidad es la más rara y hermosa de todas"','Mulan.jpg', 'blue','arial'],
['"La vida no es un deporte de mirones. Si pasas el tiempo observando, verás tu vida pasar y tú te quedarás atrás".','jorobado.jpg', 'red','Lora'],
['"Algunas veces el camino correcto no es el más fácil"','Pocahontas.jpg', 'green','verdana'],
['"Nuestro destino vive en nosotros. Sólo debes ser lo suficientemente valiente para verlo"','Brave.jpg', 'black','sans-serif']
]
function aleatorio(maximo) {
    var cantidad = Math.floor(Math.random() * maximo);
    return cantidad;
}

function cambiar() {
    var disney=aleatorio(datos.length);
    document.getElementById("frases").innerHTML = datos[disney][0];
    document.getElementById("frases").style.backgroundImage ="url(img/"+datos[disney][1]+")";
    document.getElementById("frases").style.color=datos[disney][2];
    document.getElementById("frases").style.fontFamily=datos[disney][3];
}
cambiar();