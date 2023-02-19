const caja = document.getElementById("caja");

const campeones = ["teemo", "varus", "rengar", "jinx", "blitzcrank", "kennen", "aatrox", "ornn", "alistar", "veigar", "sivir", "zed", "twistedfate", "ezreal"];


function crearTarjeta(imagen) {
  const pareja = [];
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.id = imagen;
  tarjeta.style.backgroundImage = `url("/img/${imagen}.jpg")`
  const tarjeta2 = tarjeta.cloneNode("true");

  pareja.push(tarjeta, tarjeta2);
  pareja.forEach(carta => carta.onclick = () => {
    if (carta.classList.contains("activa")) return;
      carta.classList.add("activa");
  });


  // Guardar las tarjetas en una lista global para poder mezclarlas y que no salgan juntas
  caja.appendChild(tarjeta);
  caja.appendChild(tarjeta2);
}

campeones.forEach(campeon => crearTarjeta(campeon))

