export const autores = [
    {
      nombre: 'Sebastian Rios Restrepo',
      rol: 'Ingeniería Informática',
      semestre: 'Octavo semestre',
      email: 'sriosr@correo.iue.edu.co',
      nivel: 'Inglés B1',
      iniciales: 'SR',
      foto: '',
    },
    {
      nombre: 'Juan Pablo Bernal Echeverry',
      rol: 'Ingeniería Informática',
      semestre: 'Séptimo semestre',
      email: 'jpbernal@correo.iue.edu.co',
      nivel: 'Inglés B2',
      iniciales: 'JB',
      foto: 'public/autores/juan-pablo-bernal-echeverry.jpg',
    },
    {
      nombre: 'Brayan Enrique Trujillo Rodriguez',
      rol: 'Ingeniería Informática',
      semestre: 'Noveno semestre',
      email: 'btrujillo@correo.iue.edu.co',
      nivel: 'Inglés B1',
      iniciales: 'BT',
      foto: '',
    },
  ]
  
  export const bloques = [
    {
      id: '01',
      titulo: '¿Para qué?',
      puntos: [
        'Promover decisiones técnicas con criterio ético.',
        'Proteger privacidad, seguridad y dignidad de las personas.',
        'Fortalecer la confianza en productos y servicios digitales.',
        'Reducir impactos negativos de la tecnología en la sociedad.',
      ],
    },
    {
      id: '02',
      titulo: '¿Cómo?',
      puntos: [
        'Aplicando códigos de conducta en cada fase del desarrollo.',
        'Evaluando riesgos sociales y sesgos en datos y algoritmos.',
        'Documentando decisiones y asegurando trazabilidad técnica.',
        'Trabajando con transparencia frente a usuarios y equipos.',
      ],
    },
    {
      id: '03',
      titulo: '¿Cuándo?',
      puntos: [
        'Desde el planteamiento del problema hasta el despliegue.',
        'Durante el diseño de arquitectura y de experiencia de usuario.',
        'En auditorías de seguridad, calidad y uso de IA.',
        'Cada vez que una decisión pueda afectar a terceros.',
      ],
    },
    {
      id: '04',
      titulo: '¿Dónde?',
      puntos: [
        'En desarrollo web, móvil, datos e infraestructura cloud.',
        'En universidades, empresas y proyectos de software libre.',
        'En sistemas públicos que gestionan información sensible.',
        'En cualquier entorno donde la tecnología impacte personas.',
      ],
    },
  ]
  
  export const referentes = [
    {
      id: 'r1',
      numero: '01',
      titulo: 'Fundamentos Filosóficos de la Ética',
      etiqueta: 'Filosofía',
      color: 'amber',
      cita: {
        texto: 'Actúa solo según aquella máxima por la cual puedas querer al mismo tiempo que se convierta en ley universal.',
        autor: 'Immanuel Kant',
      },
      parrafos: [
        'La ética, como disciplina filosófica, encuentra sus bases en tres grandes corrientes del pensamiento occidental. Aristóteles, en su Ética a Nicómaco, propone la ética de la virtud, donde el bien supremo es la eudaimonía o florecimiento humano, alcanzada mediante el cultivo de virtudes como la prudencia, la justicia y la valentía.',
        'Immanuel Kant fundamenta la moral en la razón pura. Su imperativo categórico establece que se debe actuar únicamente según aquella máxima que se pudiera desear que se convirtiera en ley universal. La ética kantiana es deontológica: el valor moral de una acción no depende de sus consecuencias, sino del deber y la intención con que se realiza.',
        'John Stuart Mill, desde el utilitarismo, propone que la acción moralmente correcta es aquella que produce el mayor bienestar para el mayor número de personas. Este enfoque invita a evaluar decisiones profesionales según su impacto real sobre el bienestar colectivo.',
        'En la ingeniería informática, estos enfoques se complementan: la virtud orienta la integridad profesional, el imperativo kantiano guía el respeto por los datos y la privacidad, y el utilitarismo ayuda a evaluar el impacto social de una solución tecnológica antes de implementarla.',
      ],
      aporte: 'Este referente proporciona el marco conceptual de la revista y permite analizar con mayor profundidad los dilemas éticos de la ingeniería informática.',
      referencias: [
        'Aristóteles. (2014). Ética a Nicómaco. Gredos.',
        'Kant, I. (2007). Fundamentación de la metafísica de las costumbres. Espasa-Calpe.',
        'Mill, J. S. (2014). El utilitarismo. Alianza Editorial.',
      ],
    },
    {
      id: 'r2',
      numero: '02',
      titulo: 'Ética Profesional y Responsabilidad Social',
      etiqueta: 'Responsabilidad',
      color: 'blue',
      cita: {
        texto: 'La responsabilidad social trasciende el cumplimiento normativo; un sistema mal diseñado puede excluir a poblaciones enteras.',
        autor: 'ACM Code of Ethics, 2018',
      },
      parrafos: [
        'El ejercicio de cualquier profesión implica no solo el dominio técnico, sino también el compromiso con principios éticos que regulan la relación entre el profesional, sus clientes, colegas y la sociedad.',
        'En ingeniería informática, los códigos éticos de ACM e IEEE establecen deberes fundamentales: actuar en interés público, evitar el daño, ser transparentes y respetar la privacidad. Estos códigos expresan un compromiso real con la comunidad.',
        'La responsabilidad social trasciende el cumplimiento normativo. Un sistema mal diseñado puede excluir poblaciones vulnerables, un algoritmo sesgado puede perpetuar injusticias y una brecha de seguridad puede afectar a miles de personas.',
        'El bien común recuerda que el ejercicio profesional no es un fin en sí mismo, sino un medio para contribuir al bienestar colectivo.',
      ],
      aporte: 'Este referente permite conectar teoría ética con casos reales y mostrar que ética y responsabilidad social son condiciones para una innovación legítima y sostenible.',
      referencias: [
        'Association for Computing Machinery. (2018). ACM code of ethics and professional conduct.',
        'IEEE. (2020). IEEE code of ethics.',
        'Argandoña, A. (2011). El bien común. IESE Business School Working Paper.',
      ],
    },
    {
      id: 'r3',
      numero: '03',
      titulo: 'Deontología y Normatividad en la Práctica Profesional',
      etiqueta: 'Normatividad',
      color: 'red',
      cita: {
        texto: 'La ley establece mínimos obligatorios; la ética profesional orienta estándares más altos de excelencia y convicción.',
        autor: 'Congreso de Colombia, Ley 842/2003',
      },
      parrafos: [
        'La deontología profesional se ocupa de los deberes y obligaciones específicos del ejercicio de una profesión. A diferencia de la ética general, se concreta en normas, códigos y regulaciones aplicadas a situaciones particulares.',
        'En Colombia, la Ley 842 de 2003 regula el ejercicio de la ingeniería y la Ley 1273 de 2009 tipifica conductas relacionadas con delitos informáticos, como acceso no autorizado, interceptación de datos y daño informático.',
        'Los códigos deontológicos funcionan como puente entre principios éticos y práctica concreta: deber de confidencialidad, obligación de advertir riesgos, y responsabilidad de mantenerse actualizado en un campo de cambio acelerado.',
        'La ética y la normatividad se complementan: la ley establece mínimos obligatorios y la ética profesional orienta estándares más altos de excelencia y convicción.',
      ],
      aporte: 'Este referente acerca el marco legal y deontológico al contexto cotidiano del estudiante y fomenta una cultura de cumplimiento ético más allá de la sanción.',
      referencias: [
        'Congreso de Colombia. (2003). Ley 842 de 2003. Diario Oficial 45.340.',
        'Congreso de Colombia. (2009). Ley 1273 de 2009. Diario Oficial 47.223.',
        'Colegio Colombiano de Ingenieros. (2020). Código de ética profesional.',
      ],
    },
    {
      id: 'r4',
      numero: '04',
      titulo: 'Ética, Tecnología y Sociedad',
      etiqueta: 'Tecnología',
      color: 'emerald',
      cita: {
        texto: 'La IA no es neutral: incorpora decisiones sobre valores y poder que debemos examinar críticamente.',
        autor: 'Comisión Europea, 2021',
      },
      parrafos: [
        'El avance tecnológico ha generado transformaciones profundas, pero también desafíos éticos sin precedentes. La inteligencia artificial, el Big Data y las redes sociales no son tecnologías neutras: incorporan decisiones sobre valores y poder.',
        'La IA plantea preguntas sobre autonomía, responsabilidad y justicia. Es clave preguntarse quién responde ante decisiones automatizadas dañinas y cómo evitar sesgos en algoritmos y datos de entrenamiento.',
        'El Big Data introduce tensiones entre el valor del conocimiento y el derecho a la privacidad. La recolección masiva de datos permite predicciones útiles, pero también puede facilitar vigilancia y discriminación algorítmica.',
        'La innovación responsable exige diseñar tecnología considerando derechos humanos, inclusión y sostenibilidad desde la etapa de diseño.',
      ],
      aporte: 'Este referente impulsa debates actuales sobre IA responsable, privacidad digital y regulación tecnológica, conectando la formación académica con retos reales del entorno profesional.',
      referencias: [
        'Gullo-Martínez. (2026). Big Data y su impacto en el ejercicio del profesional. Repositorio UCC.',
        'Floridi, L., & Chiriatti, M. (2020). GPT-3: Its nature, scope, limits, and consequences. Minds and Machines.',
        'Comisión Europea. (2021). Propuesta de reglamento sobre inteligencia artificial.',
      ],
    },
    {
      id: 'r5',
      numero: '05',
      titulo: 'Formación Ética y Liderazgo Transformador',
      etiqueta: 'Liderazgo',
      color: 'violet',
      cita: {
        texto: 'El liderazgo transformacional inspira por medio del ejemplo, la visión compartida y el compromiso con valores superiores.',
        autor: 'Velasco, J., 2026',
      },
      parrafos: [
        'La formación ética no concluye al aprender normas o principios abstractos. Su propósito es desarrollar profesionales capaces de tomar decisiones justas, ejercer influencia positiva y liderar con integridad.',
        'El liderazgo transformacional inspira y motiva por medio del ejemplo, la visión compartida y el compromiso con valores superiores, no solo por autoridad formal.',
        'En ingeniería informática, el liderazgo ético se refleja en quien no solo crea soluciones eficientes, sino que también cuestiona su propósito, evalúa impactos en las personas y asume responsabilidad por sus decisiones.',
        'Las competencias éticas y de liderazgo hoy son factores determinantes de empleabilidad y sostenibilidad profesional en contextos globalizados.',
      ],
      aporte: 'Este referente cierra el ciclo temático invitando a la comunidad universitaria a verse como futuros líderes éticos con impacto social.',
      referencias: [
        'Consugera, V. (2006). Las competencias profesionales y la empleabilidad. IUE.',
        'Edenit, D. C. (2026). Liderazgo transformacional en la formación profesional. Ciencia y Educación.',
        'Velasco, J. (2026). Liderazgo transformacional y emprendimiento. SETP.',
      ],
    },
  ]
  
  export const justificacion = `La presente revista electrónica reflexiona sobre la importancia de la ética profesional en el ejercicio de la Ingeniería Informática, especialmente en un contexto donde la tecnología tiene un impacto creciente en la sociedad.
  
  Este proyecto surge de la necesidad de fortalecer la formación ética de los futuros profesionales, quienes enfrentan constantemente dilemas relacionados con el uso responsable de la información, la seguridad digital, la privacidad de los datos y el desarrollo de tecnologías que influyen directamente en la vida de las personas.
  
  El objetivo principal es promover la reflexión crítica y el conocimiento de las normativas éticas y profesionales, permitiendo a los estudiantes comprender la importancia de actuar con responsabilidad, honestidad y respeto en el desarrollo de soluciones tecnológicas.
  
  Este proyecto se desarrolla durante el semestre académico 2026-1, en el marco de la asignatura Ética Profesional, en la Institución Universitaria de Envigado.`