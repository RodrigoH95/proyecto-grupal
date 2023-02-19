console.log("Funcionando");
const caja = document.getElementById("caja");

const campeones = ["teemo", "varus", "rengar", "jinx"]

function crearTarjeta(imagen) {
  const pareja = [];
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.id = imagen;
  tarjeta.style.backgroundImage = `url("./img/${imagen}.jpg")`
  const tarjeta2 = tarjeta.cloneNode("true");

  pareja.push(tarjeta, tarjeta2);

  for (carta of pareja) {
    carta.onclick = () => {
      if (carta.classList.contains("activa")) return;
      console.log(carta.id)
      carta.classList.add("activa");
    };
  }

  caja.appendChild(tarjeta);
  caja.appendChild(tarjeta2);
}

campeones.forEach(campeon => crearTarjeta(campeon))

