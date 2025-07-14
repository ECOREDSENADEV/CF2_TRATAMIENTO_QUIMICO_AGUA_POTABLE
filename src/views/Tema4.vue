<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Equipos de dosificación
    
    p.mb-5 Los equipos de dosificación se utilizan para suministrar una cantidad fija y controlada de producto químico en el proceso de tratamiento. Estos dispositivos permiten una alta precisión volumétrica, así como continuidad y reproducibilidad en la operación. Existen dos tipos principales:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Volumétrico
          p.mb-0.p-4 Dosifica el producto según un volumen predeterminado.

      .col-lg-4
        .bg-color-7.h-100
          .bg-color-6.px-4.px-lg-5.py-3
            h4.mb-0.text-center Gravimétrico
          p.mb-0.p-4 Dosifica el producto en función de la masa, mediante pesaje preciso.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Bombas dosificadoras
    
    p Las bombas dosificadoras están diseñadas para inyectar productos químicos líquidos en un flujo de agua, en cantidades pequeñas pero constantes. Requieren un control preciso del caudal, el cual debe ser ajustable de forma lineal, asegurando reproducibilidad, repetitividad y la presión adecuada del volumen desplazado.
    p.mb-5 Se emplean comúnmente para dosificar cloro, soda, coagulantes, polímeros y floculantes. Los tipos más comunes:

    .row.justify-content-center.mb-5
      .col-lg-3
        div.p-3.bg-color-14.text-center
         p.mb-0 Bombas de diafragma
      .col-lg-3
        div.p-3.bg-color-14.text-center
         p.mb-0 Bombas electromagnéticas
      .col-lg-3
        div.p-3.bg-color-14.text-center
         p.mb-0 Bombas electromecánicas
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Dosificadores de cloro gaseoso
    
    p.mb-5 El cloro gaseoso se almacena en cilindros de diversos tamaños; los de uso municipal pueden alcanzar los 1,5 toneladas. Para su dosificación, los cilindros cuentan con:

    .row.justify-content-center
      .col-lg-8
        .row.mb-5
          .col-lg-3.bg-color-4.p-4.text-center
            h5.mb-0 Válvula reguladora
          .col-lg-9.bg-color-5.p-4
            p.mb-0 Controla la salida del gas desde el cilindro.
        .row.mb-5
          .col-lg-3.bg-color-12.p-4.text-center
            h5.mb-0 Medidor de flujo (rotámetro)
          .col-lg-9.bg-color-8.p-4
            p.mb-0 Indica la cantidad de gas dosificado (g/h o lb/día).
        .row.mb-5.alin
          .col-lg-3.bg-color-2.p-4.text-center
            h5.mb-0.mt-3 Inyectores
          .col-lg-9.bg-color-7.p-4
            p.mb-0 Utilizan vacío generado por el agua para succionar y disolver el cloro en la corriente. Es esencial disponer de tanques de contacto para mejorar la eficiencia.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Dosificadores de coagulante sólido
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-7.mb-5(data-aos="fade-down")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/1.png', alt='')
            .col-lg
              .p-4
                p(data-aos="fade-up") Estos sistemas están diseñados para preparar una mezcla homogénea que favorezca el proceso de floculación. Están compuestos por:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Tolva de alimentación.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Tornillo dosificador.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Tanque de disolución.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Agitadores.
    
    p.mb-5 Cada componente contribuye a garantizar una dosificación uniforme y eficiente del coagulante sólido.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Recomendaciones para el manejo de equipos dosificadores
    
    p.mb-5 Para asegurar el correcto funcionamiento de los equipos dosificadores de insumos químicos en las plantas de tratamiento de agua potable, es importante seguir una serie de recomendaciones en las fases de instalación, selección de materiales, operación y mantenimiento.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Instalación
    
    p.mb-5 A continuación, se indican los aspectos clave a tener en cuenta durante la instalación del equipo dosificador:

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-15.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema4/2.svg', alt='Texto que describa la imagen')

          h3.text-center Verificar el estado del equipo
          p Asegúrese de que el equipo esté en buenas condiciones al momento de la compra y revise las instrucciones del fabricante.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-15.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema4/3.svg', alt='Texto que describa la imagen')

          h3.text-center Confirmar el caudal máximo
          p Este dato es fundamental para el cálculo adecuado de la dosificación.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-15.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema4/4.svg', alt='Texto que describa la imagen')

          h3.text-center Superficie adecuada
          p El equipo debe instalarse sobre una superficie nivelada y firme para evitar fallos operativos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Selección de materiales compatibles
    
    p.mb-5 Es fundamental elegir materiales que aseguren durabilidad y compatibilidad química con el insumo a dosificar:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Compatibilidad química
          p.mb-0.p-4 Asegúrese de que los accesorios y componentes de la bomba dosificadora sean resistentes al producto que se va a utilizar.


      .col-lg-4
        .bg-color-7.h-100
          .bg-color-6.px-4.px-lg-5.py-3
            h4.mb-0.text-center Cuidado con el cloro líquido
          p.mb-0.p-4 Este insumo puede cristalizarse en las mangueras, dificultando el proceso de desinfección si los materiales no son adecuados.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Operación y mantenimiento
    
    p.mb-5 Durante el funcionamiento continuo del sistema, se deben aplicar estas recomendaciones para garantizar eficiencia y seguridad:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-white.sobra.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')

          h3.text-center Verificación inicial
          p Compruebe que la cantidad descargada por el equipo coincida con la dosis calculada.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-white.sobra.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema4/6.svg', alt='Texto que describa la imagen')

          h3.text-center Revisión diaria
          p Monitoree el funcionamiento general del equipo y sus accesorios.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-white.sobra.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema4/7.svg', alt='Texto que describa la imagen')

          h3.text-center Control de fugas
          p Revise frecuentemente para detectar posibles fugas.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-white.sobra.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema4/8.svg', alt='Texto que describa la imagen')

          h3.text-center Limpieza periódica
          p Realice mantenimientos regulares de válvulas, filtros y bombas para evitar obstrucciones o fallas.


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
