function generarInforme() {
  const nicho = document.getElementById("nicho").value.trim();
  const visitas = Number(document.getElementById("visitas").value);
  const resultado = document.getElementById("resultado");

  if (!nicho || !visitas) {
    resultado.innerHTML = "⚠️ Escribe un nicho y las visitas mensuales estimadas.";
    return;
  }

  const texto = nicho.toLowerCase();

  let tipo = "informacional";
  let competencia = "media";
  let rpm = 7;
  let monetizacion = "AdSense, afiliación y productos digitales";
  let estrategia = "crear guías completas, artículos long tail y comparativas";

  if (
    texto.includes("salud") ||
    texto.includes("medicina") ||
    texto.includes("ansiedad") ||
    texto.includes("dietas") ||
    texto.includes("suplementos")
  ) {
    tipo = "YMYL / salud";
    competencia = "alta";
    rpm = 5;
    monetizacion = "AdSense con cuidado, ebooks, cursos y captación de leads";
    estrategia = "crear contenido muy fiable, con autores expertos y fuentes claras";
  } else if (
    texto.includes("finanzas") ||
    texto.includes("inversión") ||
    texto.includes("dinero") ||
    texto.includes("hipotecas") ||
    texto.includes("seguros")
  ) {
    tipo = "financiero";
    competencia = "muy alta";
    rpm = 18;
    monetizacion = "afiliación financiera, leads, AdSense premium y comparadores";
    estrategia = "atacar keywords long tail y comparativas muy específicas";
  } else if (
    texto.includes("viajes") ||
    texto.includes("hoteles") ||
    texto.includes("vuelos") ||
    texto.includes("turismo")
  ) {
    tipo = "viajes";
    competencia = "alta";
    rpm = 8;
    monetizacion = "Booking, GetYourGuide, seguros de viaje, AdSense y afiliación";
    estrategia = "crear guías por destino, itinerarios y rankings";
  } else if (
    texto.includes("cafetera") ||
    texto.includes("aspiradora") ||
    texto.includes("móvil") ||
    texto.includes("portátil") ||
    texto.includes("producto")
  ) {
    tipo = "afiliación / reviews";
    competencia = "alta";
    rpm = 12;
    monetizacion = "Amazon Afiliados, comparativas, reviews y AdSense";
    estrategia = "crear comparativas tipo mejores, opiniones y guías de compra";
  } else if (
    texto.includes("oposiciones") ||
    texto.includes("estudiar") ||
    texto.includes("examen") ||
    texto.includes("curso")
  ) {
    tipo = "educación";
    competencia = "media-alta";
    rpm = 9;
    monetizacion = "ebooks, cursos, plantillas, afiliación educativa y AdSense";
    estrategia = "crear temarios, tests, guías y recursos descargables";
  }

  const ingresos = (visitas / 1000) * rpm;
  const ingresosAfiliacion = ingresos * 1.4;
  const ingresosOptimista = ingresos * 2.3;

resultado.innerHTML = `
<div class="card">
    <h3>📈 Mercado</h3>
    <p>Nicho detectado: ${tipo}<br>
    Competencia: ${competencia}</p>
</div>

<div class="card">
    <h3>🔍 Keywords</h3>
    <p>
    ${nicho}<br>
    mejores ${nicho}<br>
    ${nicho} opiniones<br>
    guía de ${nicho}
    </p>
</div>

<div class="card">
    <h3>💰 Monetización</h3>
    <p>${monetizacion}</p>
</div>

<div class="card">
    <h3>📊 Ingresos</h3>
    <p>
    AdSense: ${ingresos.toFixed(2)} €/mes<br>
    AdSense + Afiliación: ${ingresosAfiliacion.toFixed(2)} €/mes<br>
    Optimista: ${ingresosOptimista.toFixed(2)} €/mes
    </p>
</div>

<div class="card">
    <h3>🚀 Estrategia SEO</h3>
    <p>${estrategia}</p>
</div>

<div class="card">
    <h3>⚠️ Riesgos</h3>
    <p>
    Competencia alta<br>
    Dependencia de Google<br>
    Posicionamiento lento
    </p>
</div>
`;

  document.querySelector(".copy-btn").style.display = "inline-block";
}

function copiarInforme() {
  const resultado = document.getElementById("resultado").innerText;

  if (!resultado.trim()) {
    alert("Primero genera un informe.");
    return;
  }

  navigator.clipboard.writeText(resultado);
  alert("Informe copiado correctamente.");
}
