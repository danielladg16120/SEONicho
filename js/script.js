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
📊 INFORME SEO DEL NICHO: ${nicho.toUpperCase()}

1. Diagnóstico rápido

Tipo de nicho detectado: ${tipo}
Nivel de competencia estimado: ${competencia}
RPM estimado: ${rpm} € por cada 1.000 visitas
Monetización recomendada: ${monetizacion}

2. Tamaño del mercado y tendencia

El nicho "${nicho}" puede funcionar si existe una demanda constante de búsquedas en Google. Para validarlo habría que comprobar si las personas buscan información, comparativas, opiniones, precios o soluciones relacionadas con este tema.

Este tipo de nicho se puede trabajar creando contenido evergreen, es decir, artículos que sigan recibiendo visitas durante meses o años.

3. Keywords principales

- ${nicho}
- mejores ${nicho}
- guía de ${nicho}
- ${nicho} opiniones
- ${nicho} precio
- ${nicho} para principiantes

4. Keywords long tail

- mejores ${nicho} calidad precio
- cómo elegir ${nicho}
- qué ${nicho} comprar
- errores al elegir ${nicho}
- ${nicho} barato y bueno
- alternativas a ${nicho}

5. Keywords de baja competencia

- dudas frecuentes sobre ${nicho}
- ${nicho} para empezar desde cero
- ventajas y desventajas de ${nicho}
- guía completa de ${nicho}
- preguntas frecuentes sobre ${nicho}

6. Estrategia SEO recomendada

Para este nicho recomiendo ${estrategia}.

Arquitectura web recomendada:

Inicio
Guías
Comparativas
Opiniones
Preguntas frecuentes
Blog
Contacto

7. Plan de contenidos inicial

Primer mes:
- 10 artículos long tail
- 5 guías básicas
- 5 artículos de preguntas frecuentes

Segundo mes:
- 10 comparativas
- 5 artículos de intención comercial
- 5 artículos informacionales

Tercer mes:
- Mejorar artículos antiguos
- Crear enlaces internos
- Añadir tablas, FAQs y llamadas a la acción

8. Monetización

La monetización principal sería:

${monetizacion}

Posiciones recomendadas para anuncios:

- Debajo del título del artículo
- Después del segundo párrafo
- En mitad del contenido
- Antes de preguntas frecuentes
- Al final del artículo

9. Estimación de ingresos

Con ${visitas.toLocaleString()} visitas mensuales:

Solo AdSense:
${ingresos.toFixed(2)} € / mes

AdSense + afiliación:
${ingresosAfiliacion.toFixed(2)} € / mes

Escenario optimista:
${ingresosOptimista.toFixed(2)} € / mes

10. Costes aproximados

50 artículos básicos:
750 € - 1.500 €

50 artículos buenos:
2.000 € - 4.000 €

50 artículos profesionales:
5.000 € - 10.000 €

11. Riesgos principales

- Competencia alta
- Tardar meses en posicionar
- Contenido demasiado genérico
- Dependencia de Google
- Baja autoridad al empezar

12. Recomendación final

El nicho "${nicho}" puede merecer la pena si se trabaja con una estrategia clara. No conviene empezar atacando palabras muy competidas. Lo ideal es empezar con keywords long tail, publicar mucho contenido útil y crear una estructura web ordenada.

Mi recomendación sería empezar con 30 a 50 artículos, medir tráfico durante 3 a 6 meses y después mejorar los artículos que empiecen a recibir impresiones.
`;
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
