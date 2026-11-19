-- 003: migración inicial de los 7 boletines y 7 novedades existentes a "contenidos".
-- Compatible con PostgreSQL 14. Los archivos existentes siguen en public/ (/img/... y /pdf/...).

BEGIN;

INSERT INTO contenidos (
  tipo, numero, titulo, resumen, cuerpo, imagen_url, archivo_url, autor, periodo, estado, fecha_publicacion
) VALUES
  (
    'boletin',
    1,
    'Boletín Volumen 1 / N°1',
    'La presente publicación está dirigida a estudiantes, investigadores, y docentes que realicen estudios sobre estadísticas de datos producto de nuestras investigaciones, conformadas por siete observatorios que hacen vida en la Universidad Católica de Cuenca.',
    '<p>El presente boletín “La RIOUC Informa” es una publicación semestral en la que presentamos las principales estadísticas de datos producto de nuestras investigaciones, conformadas por siete observatorios que hacen vida en la Universidad Católica de Cuenca. Este boletín está conformado por cuatro secciones:</p><ul><li>La primera denominada, Bajo la lupa de los observatorios, presenta en qué consiste cada observatorio, quienes son los responsables, qué servicios ofrecen y cuáles son los proyectos actuales que llevan adelante.</li><li>La segunda sección, denominada “hablando con expertos”, pretende presentar la opinión de investigadores en diferentes áreas de la ciencia haciendo énfasis en sus respectivas especialidades de investigación.</li><li>Una tercera sección está enmarcada a visibilizar datos relevantes de investigaciones, así como mostrar las bases de datos que se manejan con información de calidad.</li><li>Por último, una cuarta sección, donde se exponen las actividades realizadas en la Red de Investigación y Observatorios en el último semestre y los eventos próximos a realizarse donde participarán miembros de nuestra red.</li></ul>',
    '/img/b-v1n1-portada.png',
    '/pdf/b-v1n1.pdf',
    NULL,
    'mayo - agosto 2023',
    'publicado',
    '2023-08-31'
  ),
  (
    'boletin',
    2,
    'Boletín Volumen 1 / N°2',
    'En la presente publicación, se presenta información acerca del Observatorio Natural en la sección En la Lupa de los Observatorio. Destaca la actividad que realiza nuestra Prof. Jazmín Salazar, docente investigadora quien conjuntamente con su equipo de investigación....',
    '<p>En la presente publicación, se presenta información acerca del Observatorio Natural en la sección En la Lupa de los Observatorio. Destaca la actividad que realiza nuestra Prof. Jazmín Salazar, docente investigadora quien conjuntamente con su equipo de investigación, desarrolla investigación en el hábitat de distintas zonas de humedales en el país.</p><ul><li>El Observatorio de Innovación educativa, nos presenta un tema fundamental para el desarrollo de la Educación en el país, “Realidad Virtual: Democratizando el conocimiento a través de la empatía”.</li><li>El Observatorio de Comportamiento Urbano, presenta sus inquietudes en los PDOTS, y la importancia de la Naturaleza en los espacios públicos, en las ponencias presentadas en el 13er Encuentro de Espacios Urbanos en Chile (2023).</li><li>El Observatorio de Fenómenos Socio Económicos presenta datos informativos en el tema de Femicidios, tema de seguimiento y actuación de RIOUC conjuntamente con otras universidades y entes públicos.</li><li>En el segmento Hablemos de Observatorios, conversamos con el Observatorio de la UNAE, en una interesante entrevista donde destaca la importancia y el aporte de los Observatorios.</li><li>En el apartado Los expertos hablan, entrevistamos al Ing. Santiago Moscoso Bernal sobre acreditación y aseguramiento de la calidad en Educación Superior.</li></ul>',
    '/img/b-v1n2-portada.png',
    '/pdf/b-v1n2.pdf',
    NULL,
    'septiembre - diciembre 2023',
    'publicado',
    '2023-12-31'
  ),
  (
    'boletin',
    3,
    'Boletín Volumen 1 / N°3',
    'En el presente boletín ”RIOUC Informa”, tendremos en la Lupa de los Observatorios, el Observatorio de Fenómenos Socioeconómicos abordando el tema: La dinámica en la vulnerabilidad de los derechos de los trabajadores migrantes, conformados por migrantes extranjeros....',
    '<p>En el presente boletín ”RIOUC Informa”, tendremos en la Lupa de los Observatorios, el Observatorio de Fenómenos Socioeconómicos abordando el tema: La dinámica en la vulnerabilidad de los derechos de los trabajadores migrantes, conformados por migrantes extranjeros, migrantes internos, familiares de migrantes y los migrantes retornados, información reflejada en un proyecto de investigación en conjunto con la UA de Ciencias Económicas y Empresariales, el Lab. de Cálculo Computacional y la Fundación Childfund.</p><ul><li>La Prof. Johana Reyes habla sobre Matilde Hidalgo, la impulsora referente del voto de la mujer en Ecuador.</li><li>En Hablando con Expertos, se entrevistó a la Soc. Andrea Sánchez, experta en Movilidad Humana.</li><li>En Hablemos de Observatorios, tenemos la entrevista al Observatorio de DDHH de la Universidad de Los Andes de Venezuela, con la Dra. Mayda Hocevar.</li><li>Abordaremos el tema del voluntariado en el mundo, a través de la Prof. Aura Guerrero.</li><li>El Prof. Juan Solís nos deleita con un escrito donde se resalta a las mujeres que marcan historia en la provincia del Cañar.</li><li>Destacamos la participación de Jazmín Salazar en un concurso de cuentos organizado por la OEI para promover la ciencia.</li></ul>',
    '/img/b-v1n3-portada.png',
    '/pdf/b-v1n3.pdf',
    NULL,
    'enero - noviembre 2024',
    'publicado',
    '2024-11-30'
  ),
  (
    'boletin',
    4,
    'Boletín Volumen 2 / N°1',
    'En esta cuarta edición del boletín “RIOUC Informa” compartimos con ustedes un conjunto diverso de miradas que nacen desde los observatorios institucionales, la experiencia de investigadores comprometidos, y las voces que trabajan día a día en los ....',
    '<p>La Red de Investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC) tiene el firme compromiso de generar y difundir conocimiento relevante, situado y transformador.</p><ul><li>En esta cuarta edición del boletín “RIOUC Informa” compartimos con ustedes un conjunto diverso de miradas que nacen desde los observatorios institucionales, la experiencia de investigadores comprometidos, y las voces que trabajan día a día en los territorios.</li><li>Este número recoge temas referentes de la innovación educativa, la salud pública y la gestión del conocimiento, así como experiencias de mujeres investigadoras que aportan con enfoques interdisciplinarios y saberes alternativos.</li><li>Gracias al esfuerzo colectivo de investigadores, docentes, estudiantes y colaboradores, RIOUC está consolidándose como una plataforma de articulación académica que impulsa procesos de análisis, sistematización y transferencia de conocimiento.</li><li>Invitamos a todas las personas lectoras a sumarse a esta red de construcción de pensamiento y conocimiento, con una mirada crítica, reflexiva y profundamente comprometida con el bienestar colectivo.</li></ul>',
    '/img/b-v2n1-portada.png',
    '/pdf/b-v2n1.pdf',
    NULL,
    'enero - abril 2025',
    'publicado',
    '2025-04-30'
  ),
  (
    'boletin',
    5,
    'Boletín Volumen 2 / N°2',
    'En esta edición especial del boletín ''RIOUC Informa'', dedicada a la Semana de la Ciencia 2025, abrimos las puertas de la universidad para conectar el rigor académico con las inquietudes de la sociedad. A través de estas páginas, les invitamos a ....',
    '<p>La Universidad Católica de Cuenca, a través de su Vicerrectorado de Investigación, reafirma su misión fundamental no solo de producir conocimiento riguroso, sino de democratizarlo, estableciendo la divulgación científica como un puente ineludible entre la academia y la sociedad.</p><ul><li>En esta edición especial del boletín “RIOUC Informa”, dedicada a la Semana de la Ciencia 2025, abrimos las puertas de la universidad para conectar el rigor académico con las inquietudes de la sociedad. Les invitamos a explorar la convergencia entre el arte y la microbiología en el proyecto "Invisible Pegaso", a reflexionar sobre los desafíos éticos de la Inteligencia Artificial junto a la UNESCO y a llevar la ciencia a las aulas de colegio.</li><li>Gracias a la visión de la recién creada Unidad de Divulgación Científica y al talento de nuestros galardonados, esta publicación se consolida como un espacio donde dialogan la biotecnología, la ética digital y la conciencia ambiental.</li><li>Invitamos a todas las personas lectoras a sumergirse en este cruce de caminos entre la razón y la creatividad.</li></ul>',
    '/img/b-v2n2-portada.jpeg',
    '/pdf/b-v2n2.pdf',
    NULL,
    'mayo - agosto 2025',
    'publicado',
    '2025-08-31'
  ),
  (
    'boletin',
    6,
    'Boletín Volumen 2 / N°3',
    'En esta nueva edición del boletín “RIOUC Informa” (Vol. 2, No. 3), compartimos con ustedes las memorias de la Semana de la Vinculación 2025, un recorrido por las iniciativas que están tejiendo lazos indisolubles entre la universidad y el territorio. Este número recoge experiencias vitales que van desde la intervención médica en el proyecto.....',
    '<p>La Red de Investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC) reafirma que la excelencia académica solo alcanza su verdadero propósito cuando se convierte en bienestar colectivo. La vinculación con la sociedad no es un apéndice de nuestra labor, sino el corazón mismo de nuestra misión transformadora.</p><ul><li>En esta nueva edición del boletín “RIOUC Informa” (Vol. 2, No. 3), compartimos con ustedes las memorias de la Semana de la Vinculación 2025, un recorrido por las iniciativas que están tejiendo lazos indisolubles entre la universidad y el territorio, desde el proyecto "Creando Sonrisas" hasta la Academia STEAM y el fortalecimiento de la identidad cultural Cañari.</li><li>Hablamos de ciencia aplicada al servicio de la comunidad: consultorios contables gratuitos, mejoramiento genético para el agro, prevención de salud en escuelas rurales y empoderamiento de mujeres artesanas.</li><li>Invitamos a todas las personas lectoras a sumarse a esta red de solidaridad y conocimiento.</li></ul>',
    '/img/b-v2n3-portada.png',
    '/pdf/b-v2n3.pdf',
    NULL,
    'septiembre - diciembre 2025',
    'publicado',
    '2025-12-31'
  ),
  (
    'boletin',
    7,
    'Boletín Volumen 3 / N°1',
    'En esta nueva edición del boletín “RIOUC Informa” (Vol. 3, No. 1), compartimos con ustedes las memorias de la Semana de la Vinculación 2025, un recorrido por las iniciativas que están tejiendo lazos indisolubles entre la universidad y el territorio. Este número recoge experiencias vitales que van desde la intervención médica en el proyecto.....',
    '<p>La Red de Investigación y Observatorios de la Universidad Católica de Cuenca (RIOUC) reafirma su compromiso indeclinable con la generación y divulgación de conocimiento científico al servicio de la sociedad.</p><ul><li>En esta nueva edición del boletín "RIOUC Informa" (Vol. 3, No. 1, enero - abril 2026), damos la bienvenida a tres nuevos observatorios que amplían el alcance de nuestra red: el Observatorio de Equidad y Género, el Observatorio de la Actividad Física y el Observatorio Contable.</li><li>En la sección Hablando con expertos conversamos con el Decano de la Facultad de Ciencias Económicas y Empresariales y con una docente investigadora de la UNACH sobre los desafíos de la carrera de Economía, mientras que en Hablemos de Observatorios conocemos la experiencia de la Red de Observatorios de la UTPL.</li><li>Cerramos este número con Los observadores difunden, un recorrido por la participación de nuestro equipo en espacios académicos internacionales como el Workshop de la ESPOCH, el Simposio Internacional de Economía y Género en Bogotá y la Conferencia IUFRO en la Patagonia chilena.</li></ul>',
    '/img/b-v3n1-portada.png',
    '/pdf/b-v3n1.pdf',
    NULL,
    'Enero - abril 2026',
    'publicado',
    '2026-04-30'
  ),
  (
    'novedad',
    1,
    'Femicidios y la violencia de Género hacia la Mujer en el Ecuador 2024',
    'Informe estadístico que visibiliza los casos de femicidio en Ecuador, enfatizando en la urgencia de políticas públicas y protección de derechos.',
    '<p>Informe estadístico que visibiliza los casos de femicidio en Ecuador, enfatizando en la urgencia de políticas públicas y protección de derechos.</p>',
    '/img/i-femicidios-2024.jpg',
    '/pdf/i-femicidios-2024.pdf',
    'María Emilia Molina de Tinto',
    'Noviembre 2024',
    'publicado',
    '2024-11-28'
  ),
  (
    'novedad',
    2,
    'Migración en el Ecuador 2023',
    'Análisis de los flujos migratorios del 2023: salidas, entradas y el impacto sociopolítico de la migración ecuatoriana.',
    '<p>Análisis de los flujos migratorios del 2023: salidas, entradas y el impacto sociopolítico de la migración ecuatoriana.</p>',
    '/img/i-migracion-2023.png',
    '/pdf/i-migracion-2023.pdf',
    'María Emilia Molina de Tinto',
    'Diciembre 2024',
    'publicado',
    '2024-12-28'
  ),
  (
    'novedad',
    3,
    'Inflación en Ecuador del último trimestre del año 2024',
    'Resumen visual sobre el comportamiento inflacionario del cierre del 2024, afectando a la canasta básica y sectores económicos clave.',
    '<p>Resumen visual sobre el comportamiento inflacionario del cierre del 2024, afectando a la canasta básica y sectores económicos clave.</p>',
    '/img/i-inflacion-2024-t4.png',
    '/pdf/i-inflacion-2024-t4.pdf',
    'María Emilia Molina de Tinto',
    'Mayo 2025',
    'publicado',
    '2025-05-28'
  ),
  (
    'novedad',
    4,
    'Inflación en Ecuador del primer trimestre del año 2025',
    'Reporte gráfico de la evolución de precios al consumidor durante los primeros meses del 2025, con énfasis en alimentos.',
    '<p>Reporte gráfico de la evolución de precios al consumidor durante los primeros meses del 2025, con énfasis en alimentos.</p>',
    '/img/i-inflacion-2025-t1.png',
    '/pdf/i-inflacion-2025-t1.pdf',
    'María Emilia Molina de Tinto',
    'Mayo 2025',
    'publicado',
    '2025-05-28'
  ),
  (
    'novedad',
    5,
    'Alimentación saludable',
    'Infografía educativa sobre hábitos alimenticios, hidratación y consejos nutricionales para una vida más saludable.',
    '<p>Infografía educativa sobre hábitos alimenticios, hidratación y consejos nutricionales para una vida más saludable.</p>',
    '/img/i-alimentacion-saludable-2025.jpg',
    '/pdf/i-alimentacion-saludable-2025.pdf',
    'Md. Carlos Carangui Vázquez',
    'Mayo 2025',
    'publicado',
    '2025-05-30'
  ),
  (
    'novedad',
    6,
    'Femicidios y la violencia de Género hacia la Mujer en el Ecuador 2025',
    'Panorama estadístico sobre casos de violencia de género hacia las mujeres en Ecuador (2025)',
    '<p>Panorama estadístico sobre casos de violencia de género hacia las mujeres en Ecuador (2025).</p>',
    '/img/i-femicidios-2025.jpeg',
    '/pdf/i-femicidios-2025.pdf',
    'María Emilia Molina de Tinto',
    'Diciembre 2025',
    'publicado',
    '2025-06-30'
  ),
  (
    'novedad',
    7,
    'Panorama Laboral Ecuador 2025',
    'Reporte gráfico sobre la realidad del mercado laboral ecuatoriano en 2025 a través de indicadores clave.',
    '<p>Reporte gráfico sobre la realidad del mercado laboral ecuatoriano en 2025 a través de indicadores clave.</p>',
    '/img/i-empleo-2025.png',
    '/pdf/i-empleo-2025.pdf',
    'María Emilia Molina de Tinto',
    'Enero 2026',
    'publicado',
    '2026-01-15'
  )
ON CONFLICT (tipo, numero) DO NOTHING;

COMMIT;
