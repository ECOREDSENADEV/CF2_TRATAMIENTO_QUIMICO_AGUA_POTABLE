<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Pruebas de jarras
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 Para el tratamiento de aguas, es fundamental determinar los productos químicos y las cantidades necesarias para su potabilización. Esto permite asegurar un funcionamiento óptimo del sistema y evitar sobrecostos. La prueba de jarras es un ensayo de dosificación en escala de laboratorio que permite obtener la dosis óptima de coagulante a aplicar en una planta de tratamiento de agua potable. Esta dosis varía según los niveles de turbiedad y color del agua.
    
    p.mb-5 Este procedimiento simula a pequeña escala los procesos unitarios de mezcla rápida y mezcla lenta, que forman parte esencial del tratamiento de agua potable.

    TabsC.color-acento-contenido.mb-5
      .p-3.p-md-4(titulo="Mezcla rápida")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Mezcla rápida
            p Permite dispersar rápidamente el coagulante en el flujo de agua. En esta etapa, se observa cierta turbulencia y se inicia la reacción del coagulante, con la formación de los primeros flocs.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/tema1/2.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Mezcla lenta")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Mezcla lenta
            p Ocurre en las etapas posteriores de floculación y sedimentación. Se emplean velocidades bajas para favorecer la formación de flocs más grandes, lo cual facilita la clarificación y contribuye a la remoción del color.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Procedimiento prueba de jarras
    
    p.mb-5 Entre las características generales de la prueba o test de jarras están las siguientes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Finalidad del ensayo
              p Las pruebas de jarras básicamente se utilizan para determinar la dosis óptima de coagulante en un proceso de tratamiento de aguas. Este proceso incluye tres fases fundamentales: mezcla rápida, mezcla lenta y sedimentación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Equipos utilizados
              p Para estas pruebas se utilizan entre 4 y 6 jarras (<em>beakers</em> de 1 litro). En cada una de ellas se añade un volumen diferente de coagulante. Este reactivo permite la reducción de los coloides en suspensión mediante el proceso de floculación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Importancia en el tratamiento de agua potable
              p La prueba de jarras representa una etapa muy importante dentro del proceso de tratamiento de agua potable. Con un correcto desarrollo de esta prueba y el cálculo adecuado de los parámetros involucrados, es posible establecer con precisión la dosis óptima de coagulante a utilizar en una planta de tratamiento de agua potable (PTAP) a escala real.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Factores que afectan la dosis
              p Cabe resaltar que las cantidades de coagulante necesarias pueden variar dependiendo de factores como el caudal a tratar, la concentración del coagulante y el tipo de coagulante empleado.
    
    p.mb-5 A continuación, se presenta un video que expone el proceso de tratamiento de aguas, enfocado en tres fases esenciales: mezcla rápida, mezcla lenta y sedimentación.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    p.mb-5 Una vez comprendidas estas fases, es fundamental conocer el procedimiento adecuado para llevar a cabo la prueba de jarras:

    .bg-full-width.bg-fondo-1
      .px-4.p-md-5
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 A
            p.text-center Se recolectan entre 4 y 6 litros de agua cruda, de acuerdo con la cantidad de jarras del equipo.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 B
            p.text-center Se agrega un litro de agua a cada jarra.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 C
            p.text-center Se programa una agitación rápida de 120 RPM durante 1 minuto.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 D
            p.text-center Se incorporan volúmenes distintos de la solución patrón de coagulante en cada jarra.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 E
            p.text-center Se repite la agitación rápida por 1 minuto.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 F
            p.text-center Se identifican las jarras donde se forman mejor los flóculos y el agua presenta menor turbiedad y color.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 G
            p.text-center Se aplica una agitación lenta a 40 RPM durante 15 minutos.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 H
            p.text-center Se deja reposar el contenido de las jarras durante 10 minutos.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 I
            p.text-center Se registran los valores de turbiedad y color aparente; la jarra adecuada será la que tenga menos de 2 UNT y menos de 15 UPC.
          .tarjeta.bg-color-white.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop')
            div.justify-content-center.d-flex
              h2.mb-3.text-center.bg-color-3 J
            p.text-center Se determina la dosis óptima de coagulante con base en los resultados obtenidos.

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start.mb-5
            .col-lg-auto
              img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Norma Técnica Colombiana (NTC) 3903 establece el procedimiento para el ensayo de coagulación-floculación en un recipiente con agua, también conocido como método de jarras.
          p.mb-0 Para la preparación de la solución patrón de coagulante, se deben seguir las siguientes indicaciones según el tipo de coagulante:
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Líquido
          p.mb-0.p-4 Agregar 0,75 mL de coagulante en un beaker y completar con agua hasta alcanzar 100 mL.

      .col-lg-4
        .bg-color-7.h-100
          .bg-color-6.px-4.px-lg-5.py-3
            h4.mb-0.text-center Sólido
          p.mb-0.p-4 Agregar 1 g de coagulante en un beaker y completar con agua hasta alcanzar 100 mL.
    
    .bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Esta preparación garantiza que la solución patrón utilizada en la prueba de jarras tenga una concentración del 1%.


 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
