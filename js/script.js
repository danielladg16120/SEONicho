function generarInforme() {
  const nicho = document.getElementById("nicho").value.trim();
  const visitas = Number(document.getElementById("visitas").value);
  const resultado = document.getElementById("resultado");

  if (!nicho || !visitas) {
    resultado.innerHTML = "Por favor, escribe un nicho y una cantidad de visitas mensuales.";
    return;
  }

  const rpmConservador = 4;
  const rpmMedio = 8;
  const rpmOptimista = 15;

  const ingresoConservador = (visitas / 1000) * rpmConservador;
  const ingresoMedio = (visitas / 1000) * rpmMedio;
  const ingresoOptimista = (visitas / 1000) * rpmOptimista;

  resultado.innerHTML = `
INFORME SEO DEL NICHO: ${nicho.toUpperCase()}

1. Tamaño del mercado y tendencia

El nicho "${nicho}" puede analizarse como una oportunidad web basada en búsquedas informativas, comparativas y transaccionales. Para validar el mercado habría que revisar volumen de búsquedas, tendencia en Google Trends, competencia en Google y posibilidad de monetización.

2. Nivel de competencia SEO

La competencia dependerá de si existen grandes medios, blogs especializados, tiendas online o webs de afiliación posicionadas. Si los primeros resultados son dominios fuertes, será necesario atacar keywords long tail.

3. Keywords recomendadas

Keywords principales:
- ${nicho}
- mejores ${nicho}
- guía de ${nicho}
- comprar ${nicho}
- comparativa ${nicho}

Long tail:
- mejores ${nicho} calidad precio
- ${nicho} para principiantes
- qué ${nicho} elegir
- ${nicho} opiniones
- ${nicho} barato

Keywords de baja competencia:
- errores al elegir ${nicho}
- alternativas a ${nicho}
- ${nicho} para uso diario
- guía completa sobre ${nicho}
- dudas frecuentes sobre ${nicho}

4. Estrategia SEO recomendada

Arquitectura web:
- Inicio
- Guías
- Comparativas
- Opiniones
- Preguntas frecuentes
- Blog

Plan de contenidos:
Publicar entre 30 y 50 artículos iniciales. Primero atacar keywords long tail y luego crear páginas más fuertes para keywords principales.

5. Monetización

Google AdSense:
- Anuncio debajo del título
- Anuncio después del segundo párrafo
- Anuncio en mitad del artículo
- Anuncio antes de preguntas frecuentes
- Anuncio al final del contenido

Otros métodos:
- Afiliación
- Productos digitales
- Newsletter
- Venta de leads
- Patrocinios

6. Estimación de ingresos

Con ${visitas.toLocaleString()} visitas mensuales:

Escenario conservador:
${ingresoConservador.toFixed(2)} € / mes

Escenario medio:
${ingresoMedio.toFixed(2)} € / mes

Escenario optimista:
${ingresoOptimista.toFixed(2)} € / mes

7. Costes aproximados

Artículo barato: 15 € - 30 €
Artículo medio: 40 € - 80 €
Artículo profesional: 100 € - 200 €

Para lanzar una web con 50 artículos:
- Presupuesto bajo: 750 € - 1.500 €
- Presupuesto medio: 2.000 € - 4.000 €
- Presupuesto alto: 5.000 € - 10.000 €

8. Proyección financiera

Conservador:
Tráfico lento, pocos ingresos al principio. Puede tardar 8-12 meses.

Medio:
Crecimiento estable con buena estrategia de contenidos. Puede generar ingresos en 4-8 meses.

Optimista:
Buen nicho, baja competencia y monetización fuerte. Puede empezar a generar ingresos en 3-6 meses.

9. Escalabilidad

El nicho puede escalar creando más categorías, comparativas, herramientas gratuitas, newsletter y productos digitales.

10. Ejemplo de web real

Nombre sugerido:
guia${nicho.replaceAll(" ", "")}.com

Estructura:
- Inicio
- Mejores ${nicho}
- Guías
- Comparativas
- Opiniones
- Blog
- Contacto

Riesgos:
- Alta competencia
- Baja rentabilidad por visita
- Dependencia de Google
- Contenido genérico
- Falta de autoridad

Recomendación final:

El nicho "${nicho}" puede merecer la pena si tiene búsquedas suficientes, posibilidad de afiliación y competencia asumible. La estrategia correcta sería empezar con contenido long tail, crear autoridad temática y monetizar primero con afiliación y después con AdSense.
  `;
}
