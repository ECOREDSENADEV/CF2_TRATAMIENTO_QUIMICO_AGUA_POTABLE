<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Dosificación química
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-11.tarjeta.px-4.py-5.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La dosificación química en los procesos de potabilización es un método controlado que consiste en añadir sustancias químicas como coagulantes, estabilizadores de pH y desinfectantes al agua cruda durante su tratamiento. El objetivo es remover cargas contaminantes, de tal forma que se cumpla con los parámetros de calidad del agua para el consumo humano. 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="zoom-in")
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mb-3
        p.mb-0 Estas sustancias se aplican en puntos específicos de la planta y en cantidades calculadas, dependiendo de las características del agua y de los objetivos del tratamiento.

    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Principios de la dosificación
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p.mb-5(data-aos="fade-left") La dosificación química en los procesos de potabilización es un método controlado que implica la adición de sustancias como coagulantes, estabilizadores de pH y desinfectantes al agua cruda durante su tratamiento. Su propósito es eliminar cargas contaminantes para cumplir con los parámetros de calidad del agua para consumo humano.
    
        .bg-color-7.p-4(data-aos="fade-left")
          p.mb-0 Estas sustancias se incorporan en puntos estratégicos de la planta, en cantidades previamente calculadas, según las características del agua y los objetivos del tratamiento.
    
    p.mb-5 Para garantizar una dosificación química efectiva y segura, deben aplicarse los siguientes principios:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-12")
          div(titulo="Proporcionalidad")
            p La cantidad de coagulante, estabilizador de pH o desinfectante debe ajustarse al caudal de agua y a sus condiciones fisicoquímicas, cumpliendo con la normativa vigente.
          div(titulo="Control")
            p Es esencial mantener un registro de las dosis óptimas, asegurar su correcta aplicación y monitorear especialmente las sustancias usadas para ajustar el pH, ya que errores en su uso pueden generar subproductos perjudiciales para la salud.
          div(titulo="Mezcla rápida y lenta")
            p La planta debe disponer de un sistema para una mezcla rápida y homogénea entre el coagulante y el agua cruda, así como unidades de floculación con un gradiente de velocidad adecuado (mezcla lenta), que facilite la formación de flóculos y la clarificación del agua antes de la desinfección.
          div(titulo="Uso seguro")
            p Los insumos químicos deben almacenarse, manipularse y aplicarse conforme a las normas de seguridad y salud en el trabajo. Se debe evitar el contacto directo, utilizar equipo de protección personal y contar con personal capacitado.
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Consideraciones de las variables fisicoquímicas
    
    p.mb-5 Para una dosificación adecuada de insumos químicos en el tratamiento del agua, es fundamental tener en cuenta diversas variables fisicoquímicas que influyen directamente en la eficacia del proceso:

    TabsC.color-acento-contenido.mb-5
      .p-3.p-md-4(titulo="pH")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 pH
            p Cuando el agua cruda presenta un pH bajo (agua ácida), es necesario realizar ajustes o estabilización mediante la aplicación de cal. No corregir el pH puede afectar negativamente la formación de flóculos, dificultando la remoción de turbiedad.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/tema3/5.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Turbiedad")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Turbiedad
            p Es importante medirla de forma continua, lo cual permite al operario ajustar la dosis en tiempo real y aplicar una cantidad óptima de coagulante según las condiciones del agua que ingresa a la planta.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/tema3/6.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Color aparente")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Color aparente
            p En aguas con coloraciones visibles, puede ser necesario aplicar mayores dosis de coagulante o complementar con carbón activado. La dosis óptima debe asegurar la eliminación de color y turbiedad, ya que si solo se remueven los sólidos, el color puede persistir hasta los tanques de almacenamiento, generando inconformidad en los usuarios.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/tema3/7.png', alt='Texto que describa la imagen')
      .p-3.p-md-4(titulo="Hierro y magnesio")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Hierro y magnesio
            p Su remoción puede requerir una oxidación previa a la coagulación. Esto implica la necesidad de unidades de aireación y, dependiendo de su concentración, la adición de otros insumos químicos para mejorar el proceso de potabilización.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/tema3/8.png', alt='Texto que describa la imagen')
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Errores comunes
    
    p.mb-5 En los procesos de tratamiento de agua potable, es fundamental evitar ciertos errores frecuentes en la dosificación química. A continuación se detallan los más comunes, junto con sus consecuencias:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-12")
          div(titulo="Aplicación de dosis empíricas sin verificación")
            p Uso de cantidades fijas de insumos químicos sin realizar la prueba de jarras ni ajustar según la calidad del agua. Esto genera un tratamiento deficiente, acumulación de residuos químicos, afectaciones en la salud y falta de cumplimiento de las normativas sanitarias.
          div(titulo="Sobredosificación")
            p Uso excesivo de producto con la falsa creencia de que mayor cantidad implica mejores resultados. En el caso de desinfectantes, puede producirse exceso de cloro, formación de partículas tóxicas, impactos en la salud de los usuarios, deterioro de redes y sobrecostos.
          div(titulo="No ajustar el pH del agua")
            p Aplicación de coagulantes sin verificar el nivel de pH del agua cruda, lo que reduce la capacidad de floculación e impide alcanzar los parámetros requeridos en la calidad del agua tratada.
          div(titulo="Ausencia de registros y trazabilidad")
            p Falta de seguimiento sistemático sobre las dosis utilizadas y las características del agua cruda. Esto conduce a un uso innecesario de insumos, pérdida de control operativo y dificultad para implementar ajustes técnicos.
    
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Unidades de medida
    
    p.mb-5 En la operación de plantas de tratamiento de agua potable, es indispensable utilizar correctamente las unidades de medida, tanto para la medición del caudal como para la dosificación de insumos químicos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medición del caudal
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-7.p-4(data-aos="fade-left")
          p.mb-5 Es fundamental medir con precisión el caudal del agua cruda, ya que este valor es clave para calcular las cantidades adecuadas de productos químicos a aplicar.
          ul.lista-ul--color
            li.mb-0.d-flex
              i.fas.fa-circle-check
              p.mb-0 Los instrumentos comúnmente utilizados incluyen la canaleta Parshall, vertedero o canales, adecuados para flujo libre.
            li.mb-0.d-flex
              i.fas.fa-circle-check
              p.mb-0 Las mediciones pueden realizarse mediante lectura directa con regleta o por medio de   sensores electrónicos o ultrasónicos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Unidades para la dosificación de insumos químicos
      
    p.mb-5 A continuación se presentan las unidades más comunes empleadas en la dosificación química dentro del proceso de potabilización:

    .row.justify-content-center
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Unidad de medida
        .tabla-a.color-acento-botones
          table
            thead
              tr.text-center
                th.bg-color-4.text-center Característica
                th.bg-color-4.text-center Unidad de medida
            tbody
              tr.bg-color-5
                td Dosis óptima
                td mg/L
              tr
                td Concentración
                td % o mg/mL
              tr.bg-color-5
                td Descarga de coagulante líquido
                td mL/min o g/min
              tr
                td Descarga de cloro gaseoso
                td Lb/día

    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Fórmulas por tipo de insumo
    
    p.mb-5 Las fórmulas de cálculo para la dosificación de insumos en la potabilización de agua pueden variar dependiendo de las condiciones técnicas de operación de la planta y de los manuales propios de cada planta, a continuación, se presentan ejemplos para el cálculo de la dosificación de algunos coagulantes y desinfectantes.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Dosificación hidroxicloruro de aluminio (PAC)
    
    p.mb-5 Tomando como referenciar el manual de operación de la planta de agua potable del Centro de Gestión y Desarrollo Sostenible Surcolombiano (2019), cuando se aplica diluido, la fórmula para la dosificación cuando se tratan caudales bajos inferiores a (1 L/s) en plantas para pequeñas poblaciones, es:

    .bg-full-width.bg-color-13
      .px-4.p-md-5
        .row.mb-5.justify-content-center.mn-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/11.svg", data-aos="zoom-in")
        
        p Dónde:

        p.mb-0 <b>Q</b>: Caudal de agua cruda en L/s
        p.mb-0 <b>Dosis óptima</b>: Dosis calculada con la prueba de jarras expresada en mg/L
        p <b>C</b>: Concentración de la solución expresada en mg/mL

        p.mb-5 Cuando se aplica concentrado, la fórmula para dosificar es la siguiente:

        .row.mb-5.justify-content-center.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/12.svg", data-aos="zoom-in")

        p Dónde:

        p.mb-0 <b>Q</b>: Caudal de agua cruda en L/s
        p.mb-0 <b>Dosis óptima</b>: Dosis calculada con la prueba de jarras expresada en mg/L
        p <b>C</b>: Concentración de la solución expresada en mg/mL

        p.mb-5 Concentración que hace referencia al contenido de aluminio del compuesto químico

        .titulo-con-imagen(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dosificación de sulfato de aluminio
        
    p.mb-5 Es uno de los coagulantes más tradicionales, ideal para aguas con turbiedad moderada a alta.

    .row.mb-5.justify-content-center.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.svg", data-aos="zoom-in")

    p Dónde:

    p.mb-0 <b>Q</b>: Caudal de agua cruda en L/s
    p.mb-0 <b>Dosis óptima</b>: Dosis calculada con la prueba de jarras expresada en mg/L
    p.mb-0 <b>60</b>: Constante para convertir segundos a minutos
    p <b>1000</b>: factor de conversión para pasar mg a g.

    .bg-full-width.bg-color-13
      .px-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dosificación de cloro gaseoso
        p.mb-5 Utilizado en sistemas de desinfección a gran escala por su alta efectividad y estabilidad.

        .row.mb-5.justify-content-center.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/14.svg", data-aos="zoom-in")
        
        p Dónde:

        p.mb-0 <b>Q</b>: Caudal de agua cruda en L/s
        p.mb-0 <b>Dosis óptima</b>: Dosis de cloro a aplicar, en algunos casos en planta se busca que el agua tenga la máxima concentración permitida según resolución 2115 de 2007, que para el cloro residual es de 2 mg/L
        p.mb-0 <b>454</b>: gramos que tiene una libra americana
        p.mb-5 <b>1000</b>: factor de conversión para pasar g a mg.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dosificación de cloro liquido
        p.mb-5 Cuando se aplica cloro en forma diluida, la fórmula para la dosificación en plantas que tratan caudales bajos (menores a 1 L/s), típicas de pequeñas poblaciones, es:

        .row.justify-content-center
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/15.svg", data-aos="zoom-in")
    
    p Dónde:

    p.mb-0 <b>Q</b>: Caudal de agua cruda en L/s
    p.mb-0 <b>Dosis cloro</b>: Cantidad de cloro a aplicar. En algunos casos, se busca alcanzar la concentración máxima permitida de cloro residual en el agua tratada, según la Resolución 2115 de 2007, la cual establece un límite de 2 mg/L.
    p.mb-5 <b>C</b>: Concentración de la solución de cloro, expresada en mg/mL.

    .row.justify-content-center
      .col-lg-10
        .bg-color-2.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/16.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La dosificación de cloro sólido puede variar según la concentración del producto, el caudal de tratamiento y las condiciones técnicas de la planta. En estos casos, es esencial una correcta preparación de la solución para asegurar una desinfección eficaz y evitar situaciones de sobrecloración.



</template>

<script>
export default {
  name: 'Tema3',
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
