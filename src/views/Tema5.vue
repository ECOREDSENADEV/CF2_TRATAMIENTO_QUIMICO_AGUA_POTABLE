<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y salud en el trabajo
    
    p El manejo seguro de insumos químicos en procesos de potabilización requiere que el personal operativo tome precauciones específicas, dependiendo del tipo de producto utilizado. Estas medidas buscan proteger la integridad física de los trabajadores y garantizar la operación segura de la planta.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Uso seguro del cloro gaseoso
    
    p.mb-5 El cloro gaseoso representa uno de los productos más riesgosos en plantas de tratamiento. Su manipulación exige conocimiento técnico y protocolos de seguridad estrictos, tal como lo indica SURA (2011).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Riesgos asociados al cloro gaseoso
      
    p.mb-5 A continuación, se listan los principales peligros vinculados al uso de este insumo:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Explosión e incendio
          p.mb-0.p-4 El cloro puede reaccionar violentamente con materiales combustibles.

      .col-lg-4
        .bg-color-7.h-100
          .bg-color-6.px-4.px-lg-5.py-3
            h4.mb-0.text-center Alta toxicidad
          p.mb-0.p-4 Es un gas corrosivo y peligroso por inhalación.
      
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Fugas por fallas en dispositivos
          p.mb-0.p-4 Un equipo defectuoso puede liberar cloro al ambiente.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Recomendaciones para su manipulación
      
    p.mb-5 A continuación, se presenta un pódcast sobre las recomendaciones esenciales para el manejo seguro del cloro gaseoso en cilindros, enfocado en la prevención de riesgos y el cumplimiento de protocolos de seguridad industrial.

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-16.mb-5.tarjeta
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema5/2.svg", data-aos="zoom-in")
              .col-lg-7
                p(data-aos="fade-left").mb-4.text-white Para conocer sobre los fundamentos de la innovación estratégica, lo invitamos a escuchar el siguiente podcast.
        
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="Fundamentos de la innovación estratégica"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Elementos de protección personal recomendados
      
    p.mb-5 El personal encargado de manipular cloro gaseoso debe estar equipado con:

    .row
      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/3.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-5
            .p-4.text-center
              p Respirador tipo full-face

      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-5
            .p-4.text-center
              p Guantes de butilo o neopreno.

      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-5
            .p-4.text-center
              p Botas de seguridad.

      .col-md-6.col-lg-3.mb-5.mb-lg-0(data-aos="flip-down")
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-5
            .p-4.text-center
              p Ropa de seguridad industrial.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Uso seguro del cloro líquido
    
    p.mb-5 El cloro líquido requiere condiciones de seguridad específicas tanto en su almacenamiento como en el proceso de dosificación. A continuación, se presentan las recomendaciones para su uso adecuado:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sobra
                img(src='@/assets/curso/tema5/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evitar contacto ocular
                p.text-center Puede causar irritación severa en los ojos.
              .bg-color-white.p-4.h-100.sobra
                img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evitar contacto directo con la piel
                p.text-center Puede generar quemaduras o reacciones cutáneas.
              .bg-color-white.p-4.h-100.sobra
                img(src='@/assets/curso/tema5/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ventilación adecuada
                p.text-center Utilizar en espacios abiertos o bien ventilados para evitar acumulación de vapores.
              .bg-color-white.p-4.h-100.sobra
                img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Uso de EPP
                p.text-center Aplicar equipo de protección adecuado según el tipo de exposición.
              .bg-color-white.p-4.h-100.sobra
                img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cuidado con materiales metálicos
                p.text-center Evitar el contacto con hierro o aluminio, ya que el cloro líquido genera corrosión.
              .bg-color-white.p-4.h-100.sobra
                img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Revisión de bombas dosificadoras
                p.text-center Estas tienden a incrustarse u obstruirse, por lo que se requiere mantenimiento periódico.
    
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema5/7.png', alt='')

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Uso seguro del sulfato de aluminio
    
    p.mb-5 El sulfato de aluminio es un coagulante ampliamente utilizado, especialmente en plantas pequeñas. Su manipulación también requiere medidas de precaución para evitar riesgos al personal operativo (Trujillo, 2021).

    .row.justify-content-center
      .col-lg-8
        .row.mb-3
          .col-lg-3.bg-color-4.p-4.text-center
            h5.mb-0 Evitar contacto ocular
          .col-lg-9.bg-color-5.p-4
            p.mb-0 Puede causar irritación en ojos sensibles.
        .row.mb-3
          .col-lg-3.bg-color-12.p-4.text-center
            h5.mb-0 No inhalar vapores
          .col-lg-9.bg-color-8.p-4
            p.mb-0 Puede generar molestias respiratorias si se inhala de forma prolongada.
        .row.mb-3
          .col-lg-3.bg-color-2.p-4.text-center
            h5.mb-0 Ventilación del área
          .col-lg-9.bg-color-7.p-4
            p.mb-0 Trabajar en espacios abiertos o ventilados.
        .row.mb-3
          .col-lg-3.bg-color-4.p-4.text-center
            h5.mb-0 Uso de EPP
          .col-lg-9.bg-color-5.p-4
            p.mb-0 Implementar protección personal adecuada.
        .row.mb-3
          .col-lg-3.bg-color-12.p-4.text-center
            h5.mb-0 Tanques resistentes
          .col-lg-9.bg-color-8.p-4
            p.mb-0 Almacenar el producto en recipientes anticorrosivos.
    
   
    .bg-color-2.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema5/14.svg', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Nota. El sulfato de aluminio es ligeramente corrosivo y, con el tiempo, puede afectar a la mayoría de los metales si no se toman precauciones.

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Uso seguro del cloro gaseoso
    
    p.mb-5 El hidroxicloruro de aluminio (PAC) es un coagulante líquido ampliamente utilizado en plantas de tratamiento de agua potable, especialmente por su eficacia en la formación de flóculos adaptados a las características del agua cruda. Para su uso seguro, se deben seguir las siguientes recomendaciones:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Almacenamiento adecuado
          p.mb-0.p-4 Guardar en tanques cerrados fabricados en plástico o fibra de vidrio, resistentes a la corrosión.

      .col-lg-4
        .bg-color-7.h-100
          .bg-color-6.px-4.px-lg-5.py-3
            h4.mb-0.text-center Protección ocular y facial
          p.mb-0.p-4 Utilizar visor de acetato, monogafas de seguridad o careta, especialmente durante la preparación y manipulación.
      
      .col-lg-4
        .bg-color-5.h-100
          .bg-color-4.px-4.px-lg-5.py-3
            h4.mb-0.text-center Prevención de impactos ambientales
          p.mb-0.p-4 Evitar vertimientos del producto a cuerpos de agua naturales.

    p Este coagulante puede ser aplicado en solución diluida, lo cual facilita su manejo y mejora el funcionamiento de las bombas dosificadoras, especialmente en plantas que tratan caudales bajos.



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
