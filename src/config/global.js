export default {
  global: {
    Name: 'Dosificación de insumos químicos en potabilización del agua',
    Description:
      'El componente formativo describe los aspectos técnicos relacionados con la dosificación de insumos químicos que son requeridos en los procesos de potabilización de agua, brindando al aprendiz las herramientas necesarias para que se realice de manera adecuada la dosificación de productos químicos garantizando la operación adecuada de las plantas de tratamiento de agua potable y el cumplimiento de aspectos normativos fundamentales para suministrar agua apta para el consumo humano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Pruebas de jarras',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dosis óptima de coagulante',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Consideraciones técnicas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Método de cálculo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Dosificación química',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de la dosificación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Consideraciones de las variables fisicoquímicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Errores comunes',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Unidades de medida',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Fórmulas por tipo de insumo',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos de dosificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Bombas dosificadoras',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Recomendaciones para el manejo de equipos dosificadores',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Uso seguro del cloro gaseoso',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Uso seguro del cloro líquido',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Uso seguro del sulfato de aluminio',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Uso seguro del hidroxicloruro de aluminio',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Pruebas de jarras',
      referencia:
        'ICONTEC (2010). Procedimiento para el ensayo de coagulación -floculación en un recipiente con agua o método de jarras.',
      tipo: 'Norma Técnica Colombiana',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=en-US&Q=AD90541E52F7CAFD7C448E55D04EF2E1&Req= ',
    },
  ],
  glosario: [
    {
      termino: 'Coagulantes',
      significado:
        'sustancias químicas que inducen el aglutinamiento de las partículas muy finas, ocasionando la formación de partículas más grandes y pesadas. ',
    },
    {
      termino: 'Cloración',
      significado:
        'aplicación de cloro al agua, generalmente para desinfectar o para oxidar compuestos indeseables.',
    },
    {
      termino: 'Dosificación',
      significado:
        'acción mediante la cual se suministra una sustancia química al agua.',
    },
    {
      termino: 'Dosificador',
      significado:
        'es un dispositivo mecánico o hidráulico diseñado para introducir una sustancia química al agua.',
    },
    {
      termino: 'Dosis óptima',
      significado:
        'concentración que produce la mayor eficiencia de reacción en un proceso químico.',
    },
  ],
  referencias: [
    {
      referencia:
        'ICONTEC (2010). Procedimiento para el ensayo de coagulación -floculación en un recipiente con agua o método de jarras.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio (2017).  Resolución 330 de 2017. Por la cual se adopta el Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico (RAS) y se derogan las Resoluciones números 1096 de 2000, 0424 de 2001, 0668 de 2003, 1459 de 2005, 1447 de 2005 y 2320 de 2009. ',
      link: 'https://minvivienda.gov.co/normativa/resolucion-0330-2017-0',
    },
    {
      referencia:
        'Murillo, S., Galvis, G y Pacheco, S. (2020). Manual técnico para la elaboración de coagulantes – floculantes a partir de productos naturales. Primera edición. La Dorada Caldas. Servicios Nacional de Aprendizaje (SENA). Centro Pecuario y Agroempresarial. ',
      link: '',
    },
    {
      referencia: 'SURA (2011). Manejo seguro del gas cloro. ',
      link: 'https://www.arlsura.com/files/manejo_seguro_gas_cloro.pdf',
    },
    {
      referencia:
        'Trujillo, P. (2021). Hoja de datos de seguridad sulfato de aluminio. ',
      link:
        'https://isquisa.com/assets/files/HDSLISTOS/SALES/HDS-Sulfato%20de%20Aluminio%20L%C3%ADquido..pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
