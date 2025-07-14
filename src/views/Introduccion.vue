<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg-full-width.bg-fondo-1
      .px-4.p-md-5
        p.mb-5 La potabilización del agua es un proceso esencial para garantizar el acceso a un recurso seguro y apto para el consumo humano. Uno de los pilares fundamentales de este proceso es la correcta dosificación de insumos químicos, ya que de ello depende la eficiencia de etapas como la coagulación, floculación, sedimentación y desinfección. Este componente formativo tiene como propósito brindar los conocimientos técnicos y prácticos que permitan comprender, calcular y aplicar de manera precisa los productos químicos involucrados en el tratamiento del agua, en función de las características del recurso hídrico y las condiciones operativas de las plantas de tratamiento.

        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 A lo largo del contenido se desarrollan temas clave como las pruebas de jarras, la determinación de dosis óptimas de coagulantes, las variables fisicoquímicas que influyen en el tratamiento, los tipos de equipos dosificadores y las recomendaciones de seguridad para la manipulación de insumos. Cada uno de estos aspectos está orientado a fortalecer las competencias de los aprendices en la toma de decisiones técnicas fundamentadas, promoviendo una gestión eficiente del recurso y el cumplimiento de los estándares establecidos por la normativa nacional. Asimismo, se destacan errores comunes que deben evitarse y se explican métodos de cálculo que garantizan una dosificación segura y ajustada a la realidad de cada planta.
    
    .row.mb-5.align-items-center
      .col-lg-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
      .col-lg-11
        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Este componente resulta indispensable para quienes operan o gestionan sistemas de tratamiento de agua potable, pues no solo promueve el dominio de procedimientos técnicos, sino también el desarrollo de criterios para el análisis de situaciones reales que pueden surgir en el campo. De este modo, se busca formar personal capacitado que contribuya a la protección de la salud pública y al fortalecimiento de la infraestructura sanitaria, especialmente en contextos donde la disponibilidad de agua segura es un reto constante.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
