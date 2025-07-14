<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Apropiación de aspectos de la dosificación de insumo químicos en potabilización.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Comprender y aplicar los fundamentos prácticos y técnicos necesarios para realizar la adecuada dosificación de insumos químicos en procesos de potabilización de agua. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el objetivo principal de la prueba de jarras?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el caudal del agua tratada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Determinar la calidad del agua residual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar la temperatura del agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obtener la dosis óptima de coagulante.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el porcentaje mínimo recomendado para la remoción de turbiedad y color en el tratamiento del agua??',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '50 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '85 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '75 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '65 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué variable es esencial medir y ajustar antes de aplicar un coagulante?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conductividad eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'pH del agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Temperatura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Oxígeno disuelto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿En qué unidad se expresa comúnmente la concentración de un desinfectante en el proceso de potabilización del agua?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'mL/s.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'g/cm3.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'mg/L.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de equipo se utiliza para aplicar de manera precisa productos químicos líquidos en un flujo de agua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bomba dosificadora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sedimentador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Filtro de arena.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Canaleta Parshall.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué riesgo representa la sobredosificación de cloro en el tratamiento del agua?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bajo nivel de turbiedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formación de partículas tóxicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminución del pH.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ineficiencia del sistema de bombeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el equipo más utilizado para medir el caudal de agua cruda en una planta de tratamiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Canaleta Parshall.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Termómetro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Refractómetro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Filtro de presión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué fórmula se usa para calcular la remoción de turbiedad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '(Tfinal / Tinicial) × 100.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '(Tinicial – Tfinal) / Tfinal × 100.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '(Tinicial – Tfinal) / Tinicial × 10.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '(Tfinal – Tinicial) / Tinicial × 100.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué precaución es fundamental al manipular cloro gaseoso en una planta de tratamiento?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizar guantes de látex.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir la temperatura del ambiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Abrir las válvulas rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar respirador full-face y equipo de protección completo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué insumo químico se recomienda usar para estabilizar el pH del agua cruda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cloro líquido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sulfato de aluminio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PAC (hidroxicloruro de aluminio).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El botón "<em>BOARD</em>" en EAGLE solo sirve para borrar componentes en el diseño.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La herramienta <em>Show</em> permite resaltar conexiones para facilitar la identificación de redes.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La función <em>Auto</em> se utiliza para enrutado automático en la ventana <em>Board</em>.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La herramienta <em>Route</em> en la ventana <em>Board</em> ajusta automáticamente todas las pistas del diseño.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Es recomendable organizar los componentes en bloques funcionales como transformación y filtrado en la ventana <em>Board</em>.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
