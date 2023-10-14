//document.addEventListener("keyup", dibujarTeclado)

var cuadro = document.getElementById("area");
var papel = area.getContext("2d")
var x = 150;
var y = 150; 
var estado;
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,

}

document.addEventListener("keyup", dibujarTeclado)

dibujarlinea("red", 149, 149, 151, 151, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 4;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

 function dibujarTeclado(evento)
{
    var colorcito = "red";
    var movimiento = 10;
    switch(evento.keyCode)
  {
       case teclas.UP:
             dibujarlinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento
       break;

        case teclas.DOWN:
            dibujarlinea(colorcito, x, y, x, y + movimiento, papel);
           y = y + movimiento
       break;

       case teclas.LEFT:
           dibujarlinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento
       break;

        case teclas.RIGHT:
        dibujarlinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento
       break;
   }
}



/*

cuadro.addEventListener("mousedown", pulsarMouse);
cuadro.addEventListener("mousemove", moverMouse);
cuadro.addEventListener("mouseup",levantarMouse);

function pulsarMouse(evento)
{
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento)
{
    if(estado == 1)
    {
        dibujarlinea("blue", x , y , evento.layerX, evento.layerY, papel);
    }else{
        x = evento.layerX;
        y = evento.layerY;
    }
}

function levantarMouse(evento)
{
    estado = 0;
}


*/
