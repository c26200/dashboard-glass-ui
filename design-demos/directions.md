# Glass Dashboard — Rediseño 2026

## Spec (común a las tres direcciones)

**Qué es.** Dashboard de analítica: KPIs de ingresos, usuarios, ventas y actividad; gráfico
de ingresos; transacciones recientes; sidebar de navegación; toggle claro/oscuro.

**Audiencia.** Reclutadores y equipos que evalúan producto; alguien que abre el repo dos
minutos y quiere ver criterio de datos.

**Mensaje central.** Un panel que hace legible el negocio de un vistazo, sin decoración.

**Tono.** Preciso, con carácter. No fintech genérica.

**Formato.** Pantalla principal a 1440×900.

**Contenido real.** Capital/revenue $45,231 (+20.1%), 2,350 usuarios (+180), 12,234 ventas
(-4%), 573 de actividad (+201). Serie de ingresos de 7 días ($4,000–$7,000). Transacciones:
Apple Store -$1,200 (completed), Freelance +$2,450 (completed), AWS -$124.50 (pending),
Spotify -$14.99 (completed), Client Refund -$350 (failed), Netflix -$15 (completed), Gym
-$45 (completed). Sidebar: Overview, Customers, Analytics, Settings.

**Restricciones.** Sin gradientes morados genéricos, sin tarjetas flotantes con blur, sin
emojis. Cuerpo ≥14 px, etiquetas ≥12 px, contraste ≥4.5:1.

---

## Candidatos

### 1 · Best designer — Otl Aicher
- **Lógica.** Diseño sistemático de los Juegos de Múnich 72: retícula estricta, pictogramas,
  color como código funcional, racionalidad sin ornamento.
- **Qué se toma.** Tres colores con función (ingresos azul, crecimiento verde, alerta
  naranja), retícula visible, cifras grandes, iconos geométricos.
- **Esqueleto.** Grid de 12 columnas, banda de KPIs, gráfico a la izquierda, feed a la derecha.
- **Audacia.** El color no decora: codifica.
- **Form.** Un dashboard es un sistema de señalización; debe leerse como un mapa.

### 2 · Best designer — Massimo Vignelli
- **Lógica.** Helvetica, retícula, rojo y negro, jerarquía tipográfica sin adornos.
- **Qué se toma.** Tipografía como única estructura, filetes gruesos, rojo de acento.
- **Esqueleto.** Cabecera editorial, tabla de KPIs, gráfico y lista.
- **Audacia.** Casi todo es texto y reglas; el dato manda.
- **Form.** Un panel financiero es un documento; se compone como tal.

### 3 · Referencia real — Stripe Dashboard
- **Lógica.** Panel de pagos de referencia: densidad alta, calma visual, azul de marca,
  módulos claros.
- **Qué se toma.** Jerarquía callada, cifras tabulares, navegación lateral, estados.
- **Esqueleto.** Sidebar + cabecera + KPIs + gráfico + transacciones.
- **Audacia.** La claridad: nada compite con el dato.
- **Form.** Cobrar y medir exige confianza; la interfaz no debe dramatizar.

### 4 · Referencia real — Linear
- **Lógica.** Herramienta de trabajo oscura y precisa: tipografía pequeña, densidad, acento
  violeta, microinteracciones.
- **Qué se toma.** Fondo tinta, módulos con hairlines, cifras mono, acento eléctrico.
- **Esqueleto.** Rail lateral, cabecera compacta, grilla de módulos.
- **Audacia.** Densidad sin ruido: todo cabe y todo se lee.
- **Form.** Un panel de operaciones se usa durante horas; la densidad es una función.

### 5 · Ruleta — web #2 Neo-brutalism
- **Lógica.** Bordes negros de 3 px, sombras duras desplazadas, bloques de color saturado,
  Space Grotesk + Fraunces.
- **Qué se toma.** Contenedores con borde y sombra dura, morado eléctrico y amarillo,
  tipografía grande, cero radios.
- **Esqueleto.** Mosaico de bloques con bordes, KPIs como carteles.
- **Audacia.** El dato como señal de obra: imposible de ignorar.
- **Form.** Un panel de negocio también puede ser un cartel.

### 6 · Ruleta — east #6 Hong Kong Street Signs
- **Lógica.** Letreros apilados de Hong Kong: paneles saturados, bordes crema, tipografía
  vertical, densidad y obstrucción.
- **Qué se toma.** Bloques de color puro con borde claro, sombra dura, etiquetas verticales,
  capas que se tapan.
- **Esqueleto.** Muro de letreros: cada métrica es un panel apilado.
- **Audacia.** La pantalla como pared de señalización nocturna.
- **Form.** Un dashboard es señalización: números que deben leerse desde lejos.

---

## Selección para versión completa

1. **Dirección 1 — System 72** (Otl Aicher). Claro, retícula, color funcional.
2. **Dirección 2 — Signal Dark** (Linear). Tinta, densidad, acento eléctrico.
3. **Dirección 3 — Brutal Data** (Neo-brutalism). Blanco, bordes negros, sombras duras,
   morado y amarillo.

Descartadas para completa (quedan como miniaturas): Vignelli, Stripe, Hong Kong Signs.
