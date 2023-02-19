const caja = document.getElementById("caja");

const campeones = ["teemo", "varus", "rengar", "jinx", "blitzcrank", "kennen", "aatrox", "ornn", "alistar", "veigar", "sivir", "zed", "twistedfate", "ezreal"];

const cartas = []; // Almacena las cartas creadas
let tarjetaActual = null; // Tarjeta clickeada por el usuario

function crearTarjeta(imagen) {
  const pareja = [];
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta", imagen);
  tarjeta.id = imagen;
  tarjeta.style.backgroundImage = `url("/img/${imagen}.jpg")`
  const tarjeta2 = tarjeta.cloneNode("true");

  pareja.push(tarjeta, tarjeta2);
  // pareja.forEach(carta => carta.onclick = () => {
  //   if (carta.classList.contains("activa")) return;
  //     carta.classList.add("activa");
  // });

  // caja.appendChild(tarjeta);
  // caja.appendChild(tarjeta2);
  cartas.push(tarjeta, tarjeta2);
}

// MEZCLA Y REPARTO DE CARTAS
function mezclarCartas() {
  while (cartas.length > 0) {
    // Se elige una carta al azar (carta es un nodo HTML -> <div>)
    const elegida = Math.floor(Math.random() * cartas.length);
    const carta = cartas[elegida]
    caja.appendChild(carta);
    cartas.splice(cartas.indexOf(carta), 1); // Se elimina carta de la lista
  }
}

campeones.forEach(campeon => crearTarjeta(campeon));
mezclarCartas();


// NO VAS A ENTENDER NADA DE ESTO MIJA PERO CREEME QUE HACE LO QUE DICE

let puedeJugar = true;
caja.addEventListener("click", (e) => {
  // CAMBIAR ID POR NOMBRES DE CLASES
  if (!puedeJugar) return;
  const elem = e.target
  console.log("Clickeado:", e.target.id);
  // Si se clickea una tarjeta y la tarjeta no está activa
  if (!elem.classList.contains("hallada") && elem.classList.contains("tarjeta") && !elem.classList.contains("activa")) {
    elem.classList.add("activa");
    const campeon = Array.from(elem.classList).find(clase => campeones.indexOf(clase) !== - 1) // Nombre del campeon 
    console.log("Se activa:", campeon);
    puedeJugar = false; // Deshabilita controles hasta terminar el turno
    // Chequea si ya hay una carta activa para comparar posible pareja
    if (tarjetaActual) {
      setTimeout(() => {
        if (chequearPareja(tarjetaActual, campeon)) {
          // Se encontró una pareja (Eliminar las tarjetas de la pantalla)
          Array.from(caja.getElementsByClassName(campeon)).forEach(carta => carta.classList.add("hallada"));
          tarjetaActual = null;
          console.log("Se halló pareja de", campeon);
        } else {
          // No se halló pareja. Volver a voltear las cartas
          console.log("No se halló pareja");
          // Reset de cartas
          Array.from(caja.childNodes).slice(1).filter(carta => carta.classList.contains("activa") && !carta.classList.contains("hallada")).forEach(carta => carta.classList.remove("activa"));
          tarjetaActual = null
        }
        puedeJugar = true;
      }, 1500)
    } else {
      // No hay tarjeta clickeada
      tarjetaActual = campeon;
      puedeJugar = true;
    } 
  }
});

function chequearPareja(actual, nueva) {
  return actual === nueva;
}

