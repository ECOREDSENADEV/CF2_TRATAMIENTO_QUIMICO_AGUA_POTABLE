<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dosis óptima de coagulante
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La dosis óptima de coagulante se define como la cantidad adecuada de coagulante químico, ya sea puro o en solución, que debe aplicarse al agua cruda para lograr la remoción eficaz de sólidos suspendidos, color aparente y otros contaminantes, en el proceso de coagulación-floculación. Esta dosis varía según las características del agua, el tipo de coagulante utilizado y el caudal a tratar.
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Consideraciones técnicas
    
    p.mb-5 Los principales aspectos técnicos que deben considerarse para determinar la dosis óptima se presentan a continuación:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Características del agua cruda
              p Es indispensable medir parámetros como turbiedad, color aparente, pH y, en caso de fuentes subterráneas, se recomienda medir también el contenido de hierro.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tipo de coagulante
              p La elección debe basarse en los niveles de turbiedad, color y cargas contaminantes de la fuente. Además, deben considerarse los costos y las condiciones de acceso a la planta de tratamiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Equipo para prueba de jarras
              p Es esencial que la planta cuente con este equipo, ya que su uso evita la aplicación de dosis inadecuadas que podrían comprometer la eficiencia del tratamiento o aumentar la residualidad en la red de distribución.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Método de cálculo
    
    p.mb-5 Para calcular la dosis óptima de coagulante, es necesario tener en cuenta el resultado obtenido mediante la prueba de jarras. Este se determina a partir del volumen de coagulante que, al ser agregado a una de las jarras, arrojó los mejores resultados en la remoción de turbiedad y color aparente. Una vez identificado el volumen óptimo, se multiplica por la concentración del coagulante (en mg/mL) para obtener la dosis óptima expresada en mg/L, considerando que cada jarra tiene una capacidad de 1 litro.

    h4.bg-color-9.p-3.tarjeta Ejemplo de cálculo

    .row.mb-5.mt-5
      .col-lg-5.order-lg-2.mb-3
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        ul.lista-ul--color.mb-5
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-10
            p.mb-0 Volumen óptimo: 5 mL de solución patrón
          li.mb-0.d-flex
            i.fas.fa-circle-check.bg-color-10
            p.mb-0 Concentración de la solución: 1 % (equivalente a 10 mg/mL)
        
        p.mb-5 El resultado que se obtiene se da en mg/L, dado que cada jarra tiene capacidad de 1 litro.
        figure
          img(src="@/assets/curso/tema2/7.svg", data-aos="zoom-in")
    
    .bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La dosis óptima de coagulante puede variar según la calidad del agua cruda a tratar. Una variable clave es la turbiedad, la cual tiende a aumentar durante períodos de intensas precipitaciones en la zona de captación del agua.


</template>

<script>
export default {
  name: 'Tema2',
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
