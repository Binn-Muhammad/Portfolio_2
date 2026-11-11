/* ============================================
   TRANSLATIONS (7 Languages)
============================================ */
const translations = {
  en: {
    brand: 'Sanusi',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.certifications': 'Certifications',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.status': '🔍 Seeking Data Science Internship',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': 'A data science student on a mission to turn complexity into clarity — one model, one visualization, one insight at a time.',
    'hero.btnProjects': 'View Projects',
    'hero.btnContact': 'Contact Me',
    'hero.role': 'Data Science Student',
    'hero.tags': 'Machine Learning • Data Analysis • Statistical Modeling',
    'geo.loading': 'Detecting location…',
    'about.badge': 'About Me',
    'about.title': 'Who I Am',
    'about.text': "I'm a Data Science student who turns messy data into decisions that matter. I analyze patterns, build models, and extract insights that drive real impact. Focused, hungry, and just getting started.",
    'about.goal': '<strong>Goal:</strong> To become a data scientist who bridges the gap between raw data and real-world solutions.',
    'about.interests': '<strong>Interests:</strong> AI ethics, sustainable tech, open-source, and teaching.',
    'about.brand': '<strong>Brand:</strong> "Turning complexity into clarity."',
    'skills.badge': 'Skills',
    'skills.title': 'Data Science Skills',
    'skills.cat1': 'Data Science',
    'skills.ds1': 'Machine Learning',
    'skills.ds2': 'Data Analysis',
    'skills.ds3': 'Statistical Modeling',
    'skills.ds4': 'Predictive Analytics',
    'skills.cat2': 'Programming',
    'skills.cat3': 'Tools',
    'experience.badge': 'Experience',
    'experience.title': "Where I've Worked",
    'exp1.date': 'Jan 2025 – Present',
    'exp1.title': 'Data Science Intern',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': 'Built churn prediction models with 92% accuracy',
    'exp1.resp2': 'Automated ETL pipelines for 5+ data sources',
    'exp1.resp3': 'Created dashboards for executive reporting',
    'exp2.date': 'Jun 2024 – Dec 2024',
    'exp2.title': 'Data Analyst (Freelance)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': 'Analyzed e‑commerce sales data for 3 clients',
    'exp2.resp2': 'Built interactive dashboards with Python & Streamlit',
    'exp2.resp3': 'Delivered actionable insights that boosted revenue',
    'education.badge': 'Education',
    'education.title': 'Academic Background',
    'edu1.degree': 'B.Sc. in Data Science',
    'edu1.org': 'University of Cyberjaya',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>Relevant coursework:</strong> Machine Learning, Statistical Analysis, Data Mining, Database Systems',
    'edu2.diploma': 'Diploma in Computer Science',
    'edu2.org': 'Malaysian Institute of Technology',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>Relevant coursework:</strong> Programming Fundamentals, Data Structures, Networking, Web Development',
    'certifications.badge': 'Certifications',
    'certifications.title': 'Credentials & Awards',
    'cert1.title': 'Machine Learning Specialization',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': 'Issued: 15 March 2025',
    'cert2.title': 'Data Analysis with Python',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': 'Issued: 10 December 2024',
    'cert3.title': 'SQL for Data Science',
    'cert3.org': 'DataCamp',
    'cert3.year': 'Issued: 22 August 2024',
    'cert.view': 'View Certificate',
    'projects.badge': 'Projects',
    'projects.title': 'Featured Data Science Projects',
    'filter.all': 'All',
    'filter.web': 'Web Dev',
    'filter.ai': 'AI',
    'filter.python': 'Python',
    'filter.uiux': 'UI/UX',
    'project.viewCode': 'View Code',
    'proj1.title': 'Customer Churn Prediction',
    'proj1.desc': 'ML-based churn prediction using historical data and behavioral patterns.',
    'proj2.title': 'Customer Behavior Analysis',
    'proj2.desc': 'Analyze customer behavior and predict attrition likelihood.',
    'proj3.title': 'Statistical Modeling Toolkit',
    'proj3.desc': 'Statistical analysis and modeling techniques for data-driven decisions.',
    'proj4.title': 'Interactive Data Dashboard',
    'proj4.desc': 'Real‑time dashboard for visualizing KPIs and business metrics.',
    'proj5.title': 'NLP Sentiment Analyzer',
    'proj5.desc': 'Natural Language Processing for sentiment analysis on social media.',
    'proj6.title': 'Portfolio Website',
    'proj6.desc': 'Responsive portfolio with dark mode & 7 languages.',
    'contact.badge': 'Contact',
    'contact.title': 'Transform Your Data Into Actionable Insights',
    'contact.infoTitle': "I'm One Click Away",
    'contact.location': 'Malaysia',
    'contact.formName': 'Your Name',
    'contact.formEmail': 'Your Email',
    'contact.formMessage': 'Your Message',
    'contact.formBtn': 'Send Message',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': 'Data Science Portfolio',
  },
  ms: {
    brand: 'Sanusi',
    'nav.home': 'Utama',
    'nav.about': 'Tentang',
    'nav.skills': 'Kemahiran',
    'nav.experience': 'Pengalaman',
    'nav.education': 'Pendidikan',
    'nav.certifications': 'Sijil',
    'nav.projects': 'Projek',
    'nav.contact': 'Hubungi',
    'hero.status': '🔍 Mencari Latihan Industri Sains Data',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': 'Seorang pelajar sains data yang berusaha mengubah kerumitan menjadi kejelasan — satu model, satu visualisasi, satu pandangan pada satu masa.',
    'hero.btnProjects': 'Lihat Projek',
    'hero.btnContact': 'Hubungi Saya',
    'hero.role': 'Pelajar Sains Data',
    'hero.tags': 'Pembelajaran Mesin • Analisis Data • Pemodelan Statistik',
    'geo.loading': 'Mengesan lokasi…',
    'about.badge': 'Tentang Saya',
    'about.title': 'Siapa Saya',
    'about.text': 'Saya pelajar Sains Data yang mengubah data kucar-kacir menjadi keputusan yang bermakna. Saya menganalisis pola, membina model, dan mengekstrak pandangan yang memberi kesan nyata. Fokus, berusaha, dan baru bermula.',
    'about.goal': '<strong>Matlamat:</strong> Menjadi saintis data yang menghubungkan data mentah dengan penyelesaian dunia nyata.',
    'about.interests': '<strong>Minat:</strong> Etika AI, teknologi mampan, sumber terbuka, dan pengajaran.',
    'about.brand': '<strong>Jenama:</strong> "Mengubah kerumitan menjadi kejelasan."',
    'skills.badge': 'Kemahiran',
    'skills.title': 'Kemahiran Sains Data',
    'skills.cat1': 'Sains Data',
    'skills.ds1': 'Pembelajaran Mesin',
    'skills.ds2': 'Analisis Data',
    'skills.ds3': 'Pemodelan Statistik',
    'skills.ds4': 'Analitik Ramalan',
    'skills.cat2': 'Pengaturcaraan',
    'skills.cat3': 'Alat',
    'experience.badge': 'Pengalaman',
    'experience.title': 'Tempat Saya Bekerja',
    'exp1.date': 'Jan 2025 – Kini',
    'exp1.title': 'Pelatih Sains Data',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': 'Membina model ramalan churn dengan ketepatan 92%',
    'exp1.resp2': 'Mengautomasikan saluran paip ETL untuk 5+ sumber data',
    'exp1.resp3': 'Mencipta papan pemuka untuk laporan eksekutif',
    'exp2.date': 'Jun 2024 – Dis 2024',
    'exp2.title': 'Penganalisis Data (Bebas)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': 'Menganalisis data jualan e-dagang untuk 3 pelanggan',
    'exp2.resp2': 'Membina papan pemuka interaktif dengan Python & Streamlit',
    'exp2.resp3': 'Memberikan pandangan yang boleh dilaksanakan yang meningkatkan pendapatan',
    'education.badge': 'Pendidikan',
    'education.title': 'Latar Belakang Akademik',
    'edu1.degree': 'B.Sc. dalam Sains Data',
    'edu1.org': 'Universiti Cyberjaya',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>Kursus berkaitan:</strong> Pembelajaran Mesin, Analisis Statistik, Perlombongan Data, Sistem Pangkalan Data',
    'edu2.diploma': 'Diploma dalam Sains Komputer',
    'edu2.org': 'Institut Teknologi Malaysia',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>Kursus berkaitan:</strong> Asas Pengaturcaraan, Struktur Data, Rangkaian, Pembangunan Web',
    'certifications.badge': 'Sijil',
    'certifications.title': 'Kelayakan & Anugerah',
    'cert1.title': 'Pengkhususan Pembelajaran Mesin',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': 'Dikeluarkan: 15 Mac 2025',
    'cert2.title': 'Analisis Data dengan Python',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': 'Dikeluarkan: 10 Disember 2024',
    'cert3.title': 'SQL untuk Sains Data',
    'cert3.org': 'DataCamp',
    'cert3.year': 'Dikeluarkan: 22 Ogos 2024',
    'cert.view': 'Lihat Sijil',
    'projects.badge': 'Projek',
    'projects.title': 'Projek Sains Data Pilihan',
    'filter.all': 'Semua',
    'filter.web': 'Web Dev',
    'filter.ai': 'AI',
    'filter.python': 'Python',
    'filter.uiux': 'UI/UX',
    'project.viewCode': 'Lihat Kod',
    'proj1.title': 'Ramalan Churn Pelanggan',
    'proj1.desc': 'Ramalan churn berasaskan ML menggunakan data sejarah dan corak tingkah laku.',
    'proj2.title': 'Analisis Tingkah Laku Pelanggan',
    'proj2.desc': 'Menganalisis tingkah laku pelanggan dan meramalkan kemungkinan attrition.',
    'proj3.title': 'Kit Alat Pemodelan Statistik',
    'proj3.desc': 'Teknik analisis statistik dan pemodelan untuk keputusan berdasarkan data.',
    'proj4.title': 'Papan Pemuka Data Interaktif',
    'proj4.desc': 'Papan pemuka masa nyata untuk visualisasi KPI dan metrik perniagaan.',
    'proj5.title': 'Penganalisis Sentimen NLP',
    'proj5.desc': 'Pemprosesan Bahasa Asli untuk analisis sentimen pada media sosial.',
    'proj6.title': 'Laman Web Portfolio',
    'proj6.desc': 'Portfolio responsif dengan mod gelap & 7 bahasa.',
    'contact.badge': 'Hubungi',
    'contact.title': 'Ubah Data Anda Menjadi Pandangan yang Boleh Dilaksanakan',
    'contact.infoTitle': 'Saya Sekali Klik Sahaja',
    'contact.location': 'Malaysia',
    'contact.formName': 'Nama Anda',
    'contact.formEmail': 'Emel Anda',
    'contact.formMessage': 'Mesej Anda',
    'contact.formBtn': 'Hantar Mesej',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': 'Portfolio Sains Data',
  },
  es: {
    brand: 'Sanusi',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.certifications': 'Certificaciones',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.status': '🔍 Buscando prácticas en Ciencia de Datos',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': 'Un estudiante de ciencia de datos en una misión para convertir la complejidad en claridad — un modelo, una visualización, una idea a la vez.',
    'hero.btnProjects': 'Ver Proyectos',
    'hero.btnContact': 'Contáctame',
    'hero.role': 'Estudiante de Ciencia de Datos',
    'hero.tags': 'Aprendizaje Automático • Análisis de Datos • Modelado Estadístico',
    'geo.loading': 'Detectando ubicación…',
    'about.badge': 'Sobre mí',
    'about.title': 'Quién Soy',
    'about.text': 'Soy un estudiante de Ciencia de Datos que convierte datos desordenados en decisiones que importan. Analizo patrones, construyo modelos y extraigo ideas que generan un impacto real. Enfocado, hambriento y apenas comenzando.',
    'about.goal': '<strong>Objetivo:</strong> Convertirme en un científico de datos que cierre la brecha entre los datos brutos y las soluciones del mundo real.',
    'about.interests': '<strong>Intereses:</strong> Ética de IA, tecnología sostenible, código abierto y enseñanza.',
    'about.brand': '<strong>Marca:</strong> "Convertir la complejidad en claridad."',
    'skills.badge': 'Habilidades',
    'skills.title': 'Habilidades en Ciencia de Datos',
    'skills.cat1': 'Ciencia de Datos',
    'skills.ds1': 'Aprendizaje Automático',
    'skills.ds2': 'Análisis de Datos',
    'skills.ds3': 'Modelado Estadístico',
    'skills.ds4': 'Analítica Predictiva',
    'skills.cat2': 'Programación',
    'skills.cat3': 'Herramientas',
    'experience.badge': 'Experiencia',
    'experience.title': 'Dónde He Trabajado',
    'exp1.date': 'Ene 2025 – Presente',
    'exp1.title': 'Pasante en Ciencia de Datos',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': 'Construí modelos de predicción de abandono con 92% de precisión',
    'exp1.resp2': 'Automaticé tuberías ETL para más de 5 fuentes de datos',
    'exp1.resp3': 'Creé paneles para informes ejecutivos',
    'exp2.date': 'Jun 2024 – Dic 2024',
    'exp2.title': 'Analista de Datos (Freelance)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': 'Analicé datos de ventas de comercio electrónico para 3 clientes',
    'exp2.resp2': 'Construí paneles interactivos con Python y Streamlit',
    'exp2.resp3': 'Entregué ideas prácticas que aumentaron los ingresos',
    'education.badge': 'Educación',
    'education.title': 'Formación Académica',
    'edu1.degree': 'Lic. en Ciencia de Datos',
    'edu1.org': 'Universidad de Cyberjaya',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>Cursos relevantes:</strong> Aprendizaje Automático, Análisis Estadístico, Minería de Datos, Sistemas de Bases de Datos',
    'edu2.diploma': 'Diploma en Ciencias de la Computación',
    'edu2.org': 'Instituto Tecnológico de Malasia',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>Cursos relevantes:</strong> Fundamentos de Programación, Estructuras de Datos, Redes, Desarrollo Web',
    'certifications.badge': 'Certificaciones',
    'certifications.title': 'Credenciales y Premios',
    'cert1.title': 'Especialización en Aprendizaje Automático',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': 'Emisión: 15 Marzo 2025',
    'cert2.title': 'Análisis de Datos con Python',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': 'Emisión: 10 Diciembre 2024',
    'cert3.title': 'SQL para Ciencia de Datos',
    'cert3.org': 'DataCamp',
    'cert3.year': 'Emisión: 22 Agosto 2024',
    'cert.view': 'Ver Certificado',
    'projects.badge': 'Proyectos',
    'projects.title': 'Proyectos Destacados de Ciencia de Datos',
    'filter.all': 'Todos',
    'filter.web': 'Web Dev',
    'filter.ai': 'IA',
    'filter.python': 'Python',
    'filter.uiux': 'UI/UX',
    'project.viewCode': 'Ver Código',
    'proj1.title': 'Predicción de Abandono de Clientes',
    'proj1.desc': 'Predicción de abandono basada en ML usando datos históricos y patrones de comportamiento.',
    'proj2.title': 'Análisis de Comportamiento de Clientes',
    'proj2.desc': 'Analiza el comportamiento del cliente y predice la probabilidad de abandono.',
    'proj3.title': 'Kit de Herramientas de Modelado Estadístico',
    'proj3.desc': 'Técnicas de análisis estadístico y modelado para decisiones basadas en datos.',
    'proj4.title': 'Panel de Datos Interactivo',
    'proj4.desc': 'Panel interactivo en tiempo real para visualizar KPI y métricas empresariales.',
    'proj5.title': 'Analizador de Sentimientos NLP',
    'proj5.desc': 'Procesamiento de Lenguaje Natural para análisis de sentimientos en redes sociales.',
    'proj6.title': 'Sitio Web de Portafolio',
    'proj6.desc': 'Portafolio responsivo con modo oscuro y 7 idiomas.',
    'contact.badge': 'Contacto',
    'contact.title': 'Transforma tus Datos en Información Accionable',
    'contact.infoTitle': 'Estoy a un Clic de Distancia',
    'contact.location': 'Malasia',
    'contact.formName': 'Tu Nombre',
    'contact.formEmail': 'Tu Correo',
    'contact.formMessage': 'Tu Mensaje',
    'contact.formBtn': 'Enviar Mensaje',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': 'Portafolio de Ciencia de Datos',
  },
  ar: {
    brand: 'Sanusi',
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرات',
    'nav.education': 'التعليم',
    'nav.certifications': 'الشهادات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بي',
    'hero.status': '🔍 أبحث عن تدريب في علوم البيانات',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': 'طالب علوم بيانات يسعى لتحويل التعقيد إلى وضوح — نموذج واحد، تصور واحد، فكرة واحدة في كل مرة.',
    'hero.btnProjects': 'عرض المشاريع',
    'hero.btnContact': 'اتصل بي',
    'hero.role': 'طالب علوم بيانات',
    'hero.tags': 'تعلم آلي • تحليل بيانات • نمذجة إحصائية',
    'geo.loading': 'جاري تحديد الموقع…',
    'about.badge': 'عني',
    'about.title': 'من أنا',
    'about.text': 'أنا طالب علوم بيانات يحول البيانات الفوضوية إلى قرارات مهمة. أحلل الأنماط، وأبني النماذج، وأستخرج الرؤى التي تحقق تأثيرًا حقيقيًا. مركز، طموح، وبدأت للتو.',
    'about.goal': '<strong>الهدف:</strong> أن أصبح عالم بيانات يسد الفجوة بين البيانات الخام والحلول الواقعية.',
    'about.interests': '<strong>الاهتمامات:</strong> أخلاقيات الذكاء الاصطناعي، التكنولوجيا المستدامة، المصادر المفتوحة، والتدريس.',
    'about.brand': '<strong>العلامة التجارية:</strong> "تحويل التعقيد إلى وضوح."',
    'skills.badge': 'المهارات',
    'skills.title': 'مهارات علوم البيانات',
    'skills.cat1': 'علوم البيانات',
    'skills.ds1': 'تعلم آلي',
    'skills.ds2': 'تحليل بيانات',
    'skills.ds3': 'نمذجة إحصائية',
    'skills.ds4': 'تحليلات تنبؤية',
    'skills.cat2': 'البرمجة',
    'skills.cat3': 'الأدوات',
    'experience.badge': 'الخبرات',
    'experience.title': 'أين عملت',
    'exp1.date': 'يناير 2025 – الحالي',
    'exp1.title': 'متدرب علوم بيانات',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': 'بناء نماذج التنبؤ بالهجر بدقة 92%',
    'exp1.resp2': 'أتمتة خطوط أنابيب ETL لأكثر من 5 مصادر بيانات',
    'exp1.resp3': 'إنشاء لوحات معلومات لتقارير المديرين',
    'exp2.date': 'يونيو 2024 – ديسمبر 2024',
    'exp2.title': 'محلل بيانات (حر)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': 'تحليل بيانات مبيعات التجارة الإلكترونية لـ 3 عملاء',
    'exp2.resp2': 'بناء لوحات معلومات تفاعلية باستخدام Python و Streamlit',
    'exp2.resp3': 'تقديم رؤى قابلة للتنفيذ عززت الإيرادات',
    'education.badge': 'التعليم',
    'education.title': 'الخلفية الأكاديمية',
    'edu1.degree': 'بكالوريوس في علوم البيانات',
    'edu1.org': 'جامعة سايبرجايا',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>المقررات ذات الصلة:</strong> تعلم آلي، تحليل إحصائي، تنقيب البيانات، أنظمة قواعد البيانات',
    'edu2.diploma': 'دبلوم في علوم الكمبيوتر',
    'edu2.org': 'المعهد الماليزي للتكنولوجيا',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>المقررات ذات الصلة:</strong> أساسيات البرمجة، هياكل البيانات، الشبكات، تطوير الويب',
    'certifications.badge': 'الشهادات',
    'certifications.title': 'المؤهلات والجوائز',
    'cert1.title': 'تخصص التعلم الآلي',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': 'صدر في: 15 مارس 2025',
    'cert2.title': 'تحليل البيانات باستخدام Python',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': 'صدر في: 10 ديسمبر 2024',
    'cert3.title': 'SQL لعلوم البيانات',
    'cert3.org': 'DataCamp',
    'cert3.year': 'صدر في: 22 أغسطس 2024',
    'cert.view': 'عرض الشهادة',
    'projects.badge': 'المشاريع',
    'projects.title': 'مشاريع علوم البيانات المميزة',
    'filter.all': 'الكل',
    'filter.web': 'تطوير ويب',
    'filter.ai': 'ذكاء اصطناعي',
    'filter.python': 'بايثون',
    'filter.uiux': 'واجهات المستخدم',
    'project.viewCode': 'عرض الكود',
    'proj1.title': 'التنبؤ بهجر العملاء',
    'proj1.desc': 'التنبؤ بالهجر باستخدام ML يعتمد على البيانات التاريخية وأنماط السلوك.',
    'proj2.title': 'تحليل سلوك العملاء',
    'proj2.desc': 'تحليل سلوك العملاء والتنبؤ باحتمالية الهجر.',
    'proj3.title': 'مجموعة أدوات النمذجة الإحصائية',
    'proj3.desc': 'تقنيات التحليل الإحصائي والنمذجة للقرارات المبنية على البيانات.',
    'proj4.title': 'لوحة معلومات بيانات تفاعلية',
    'proj4.desc': 'لوحة معلومات تفاعلية في الوقت الفعلي لتصور مؤشرات الأداء ومقاييس الأعمال.',
    'proj5.title': 'محلل المشاعر NLP',
    'proj5.desc': 'معالجة اللغة الطبيعية لتحليل المشاعر على وسائل التواصل الاجتماعي.',
    'proj6.title': 'موقع المحفظة الشخصية',
    'proj6.desc': 'محفظة متجاوبة مع الوضع الليلي و 7 لغات.',
    'contact.badge': 'اتصل بي',
    'contact.title': 'حول بياناتك إلى رؤى قابلة للتنفيذ',
    'contact.infoTitle': 'أنا على بعد نقرة واحدة',
    'contact.location': 'ماليزيا',
    'contact.formName': 'اسمك',
    'contact.formEmail': 'بريدك الإلكتروني',
    'contact.formMessage': 'رسالتك',
    'contact.formBtn': 'إرسال الرسالة',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': 'محفظة علوم البيانات',
  },
  fr: {
    brand: 'Sanusi',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.education': 'Éducation',
    'nav.certifications': 'Certifications',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.status': '🔍 Recherche de stage en Data Science',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': 'Un étudiant en data science en mission pour transformer la complexité en clarté — un modèle, une visualisation, une idée à la fois.',
    'hero.btnProjects': 'Voir les projets',
    'hero.btnContact': 'Contactez-moi',
    'hero.role': 'Étudiant en Data Science',
    'hero.tags': 'Apprentissage automatique • Analyse de données • Modélisation statistique',
    'geo.loading': 'Détection de la position…',
    'about.badge': 'À propos',
    'about.title': 'Qui suis-je',
    'about.text': "Je suis un étudiant en Data Science qui transforme des données désordonnées en décisions qui comptent. J'analyse des modèles, je construis des modèles et j'extrais des informations qui ont un impact réel. Concentré, ambitieux et je ne fais que commencer.",
    'about.goal': '<strong>Objectif :</strong> Devenir un data scientist qui comble le fossé entre les données brutes et les solutions concrètes.',
    'about.interests': '<strong>Intérêts :</strong> Éthique de l\'IA, technologie durable, open-source et enseignement.',
    'about.brand': '<strong>Marque :</strong> "Transformer la complexité en clarté."',
    'skills.badge': 'Compétences',
    'skills.title': 'Compétences en Data Science',
    'skills.cat1': 'Data Science',
    'skills.ds1': 'Apprentissage automatique',
    'skills.ds2': 'Analyse de données',
    'skills.ds3': 'Modélisation statistique',
    'skills.ds4': 'Analyse prédictive',
    'skills.cat2': 'Programmation',
    'skills.cat3': 'Outils',
    'experience.badge': 'Expérience',
    'experience.title': "Où j'ai travaillé",
    'exp1.date': 'Jan 2025 – Présent',
    'exp1.title': 'Stagiaire en Data Science',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': 'Construction de modèles de prédiction de désabonnement avec 92 % de précision',
    'exp1.resp2': 'Automatisation des pipelines ETL pour plus de 5 sources de données',
    'exp1.resp3': 'Création de tableaux de bord pour les rapports de direction',
    'exp2.date': 'Juin 2024 – Déc 2024',
    'exp2.title': 'Analyste de données (Freelance)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': 'Analyse des données de vente e‑commerce pour 3 clients',
    'exp2.resp2': 'Construction de tableaux de bord interactifs avec Python et Streamlit',
    'exp2.resp3': 'Fourniture d\'informations exploitables qui ont augmenté les revenus',
    'education.badge': 'Éducation',
    'education.title': 'Parcours académique',
    'edu1.degree': 'Licence en Data Science',
    'edu1.org': 'Université de Cyberjaya',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>Cours pertinents :</strong> Apprentissage automatique, Analyse statistique, Exploration de données, Systèmes de bases de données',
    'edu2.diploma': 'Diplôme en informatique',
    'edu2.org': 'Institut technologique de Malaisie',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>Cours pertinents :</strong> Fondamentaux de la programmation, Structures de données, Réseaux, Développement web',
    'certifications.badge': 'Certifications',
    'certifications.title': 'Certificats et récompenses',
    'cert1.title': 'Spécialisation en apprentissage automatique',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': 'Délivré : 15 Mars 2025',
    'cert2.title': 'Analyse de données avec Python',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': 'Délivré : 10 Décembre 2024',
    'cert3.title': 'SQL pour la data science',
    'cert3.org': 'DataCamp',
    'cert3.year': 'Délivré : 22 Août 2024',
    'cert.view': 'Voir le certificat',
    'projects.badge': 'Projets',
    'projects.title': 'Projets Data Science phares',
    'filter.all': 'Tous',
    'filter.web': 'Web Dev',
    'filter.ai': 'IA',
    'filter.python': 'Python',
    'filter.uiux': 'UI/UX',
    'project.viewCode': 'Voir le code',
    'proj1.title': 'Prédiction de désabonnement clients',
    'proj1.desc': 'Prédiction de désabonnement basée sur ML utilisant des données historiques et des modèles comportementaux.',
    'proj2.title': 'Analyse du comportement client',
    'proj2.desc': 'Analyse du comportement des clients et prédiction de la probabilité de désabonnement.',
    'proj3.title': 'Kit d’outils de modélisation statistique',
    'proj3.desc': 'Techniques d\'analyse statistique et de modélisation pour les décisions basées sur les données.',
    'proj4.title': 'Tableau de bord de données interactif',
    'proj4.desc': 'Tableau de bord interactif en temps réel pour visualiser les KPI et les métriques commerciales.',
    'proj5.title': 'Analyseur de sentiments NLP',
    'proj5.desc': 'Traitement du langage naturel pour l\'analyse des sentiments sur les médias sociaux.',
    'proj6.title': 'Site web portfolio',
    'proj6.desc': 'Portfolio responsive avec mode sombre et 7 langues.',
    'contact.badge': 'Contact',
    'contact.title': 'Transformez vos données en informations exploitables',
    'contact.infoTitle': "Je suis à un clic",
    'contact.location': 'Malaisie',
    'contact.formName': 'Votre nom',
    'contact.formEmail': 'Votre e-mail',
    'contact.formMessage': 'Votre message',
    'contact.formBtn': 'Envoyer le message',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': 'Portfolio Data Science',
  },
  zh: {
    brand: 'Sanusi',
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.skills': '技能',
    'nav.experience': '经验',
    'nav.education': '教育',
    'nav.certifications': '证书',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'hero.status': '🔍 寻找数据科学实习',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': '一名数据科学学生，致力于将复杂性转化为清晰——一个模型，一个可视化，一次一个见解。',
    'hero.btnProjects': '查看项目',
    'hero.btnContact': '联系我',
    'hero.role': '数据科学学生',
    'hero.tags': '机器学习 • 数据分析 • 统计建模',
    'geo.loading': '正在检测位置…',
    'about.badge': '关于我',
    'about.title': '我是谁',
    'about.text': '我是一名数据科学学生，将杂乱的数据转化为重要的决策。我分析模式，构建模型，并提取具有实际影响的见解。专注、渴求，刚刚起步。',
    'about.goal': '<strong>目标：</strong>成为一名弥合原始数据与真实世界解决方案之间差距的数据科学家。',
    'about.interests': '<strong>兴趣：</strong> AI 伦理、可持续技术、开源和教学。',
    'about.brand': '<strong>品牌：</strong>“将复杂性转化为清晰。”',
    'skills.badge': '技能',
    'skills.title': '数据科学技能',
    'skills.cat1': '数据科学',
    'skills.ds1': '机器学习',
    'skills.ds2': '数据分析',
    'skills.ds3': '统计建模',
    'skills.ds4': '预测分析',
    'skills.cat2': '编程',
    'skills.cat3': '工具',
    'experience.badge': '经验',
    'experience.title': '我的工作经历',
    'exp1.date': '2025年1月 – 至今',
    'exp1.title': '数据科学实习生',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': '构建流失预测模型，准确率达92%',
    'exp1.resp2': '自动化5个以上数据源的ETL管道',
    'exp1.resp3': '为高管报告创建仪表板',
    'exp2.date': '2024年6月 – 2024年12月',
    'exp2.title': '数据分析师 (自由职业)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': '为3个客户分析电商销售数据',
    'exp2.resp2': '使用Python和Streamlit构建交互式仪表板',
    'exp2.resp3': '提供可操作的见解，提高了收入',
    'education.badge': '教育',
    'education.title': '学术背景',
    'edu1.degree': '数据科学学士',
    'edu1.org': '赛城大学',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>相关课程：</strong>机器学习、统计分析、数据挖掘、数据库系统',
    'edu2.diploma': '计算机科学文凭',
    'edu2.org': '马来西亚技术学院',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>相关课程：</strong>编程基础、数据结构、网络、Web开发',
    'certifications.badge': '证书',
    'certifications.title': '资质与奖项',
    'cert1.title': '机器学习专业认证',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': '颁发: 2025年3月15日',
    'cert2.title': 'Python数据分析',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': '颁发: 2024年12月10日',
    'cert3.title': '数据科学SQL',
    'cert3.org': 'DataCamp',
    'cert3.year': '颁发: 2024年8月22日',
    'cert.view': '查看证书',
    'projects.badge': '项目',
    'projects.title': '精选数据科学项目',
    'filter.all': '全部',
    'filter.web': 'Web开发',
    'filter.ai': 'AI',
    'filter.python': 'Python',
    'filter.uiux': 'UI/UX',
    'project.viewCode': '查看代码',
    'proj1.title': '客户流失预测',
    'proj1.desc': '基于ML的流失预测，使用历史数据和行为模式。',
    'proj2.title': '客户行为分析',
    'proj2.desc': '分析客户行为并预测流失可能性。',
    'proj3.title': '统计建模工具包',
    'proj3.desc': '用于数据驱动决策的统计分析和建模技术。',
    'proj4.title': '交互式数据仪表板',
    'proj4.desc': '实时交互式仪表板，用于可视化KPI和业务指标。',
    'proj5.title': 'NLP情感分析器',
    'proj5.desc': '用于社交媒体数据情感分析的自然语言处理。',
    'proj6.title': '个人作品集网站',
    'proj6.desc': '响应式作品集，包含深色模式和7种语言。',
    'contact.badge': '联系',
    'contact.title': '将您的数据转化为可操作的见解',
    'contact.infoTitle': '一键联系我',
    'contact.location': '马来西亚',
    'contact.formName': '您的姓名',
    'contact.formEmail': '您的邮箱',
    'contact.formMessage': '您的留言',
    'contact.formBtn': '发送消息',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': '数据科学作品集',
  },
  ja: {
    brand: 'Sanusi',
    'nav.home': 'ホーム',
    'nav.about': 'について',
    'nav.skills': 'スキル',
    'nav.experience': '経験',
    'nav.education': '学歴',
    'nav.certifications': '認定資格',
    'nav.projects': 'プロジェクト',
    'nav.contact': '連絡先',
    'hero.status': '🔍 データサイエンスインターンシップを探しています',
    'hero.name': 'Sanusi Sani Muhammad',
    'hero.description': '複雑さを明快さに変える使命を帯びたデータサイエンスの学生 — モデル、可視化、洞察を一つずつ。',
    'hero.btnProjects': 'プロジェクトを見る',
    'hero.btnContact': 'お問い合わせ',
    'hero.role': 'データサイエンス学生',
    'hero.tags': '機械学習 • データ分析 • 統計モデリング',
    'geo.loading': '位置情報を検出中…',
    'about.badge': '私について',
    'about.title': '私について',
    'about.text': '私はデータを重要な意思決定に変えるデータサイエンスの学生です。パターンを分析し、モデルを構築し、実際にインパクトのある洞察を抽出します。集中して、意欲的に、そして始めたばかりです。',
    'about.goal': '<strong>目標：</strong> 生データと現実世界のソリューションの間のギャップを埋めるデータサイエンティストになること。',
    'about.interests': '<strong>興味：</strong> AI倫理、サステナブルテクノロジー、オープンソース、教育。',
    'about.brand': '<strong>ブランド：</strong>「複雑さを明快さに変える」。',
    'skills.badge': 'スキル',
    'skills.title': 'データサイエンススキル',
    'skills.cat1': 'データサイエンス',
    'skills.ds1': '機械学習',
    'skills.ds2': 'データ分析',
    'skills.ds3': '統計モデリング',
    'skills.ds4': '予測分析',
    'skills.cat2': 'プログラミング',
    'skills.cat3': 'ツール',
    'experience.badge': '経験',
    'experience.title': '職歴',
    'exp1.date': '2025年1月 – 現在',
    'exp1.title': 'データサイエンスインターン',
    'exp1.org': 'Tech Innovators Inc.',
    'exp1.resp1': '92%の精度で解約予測モデルを構築',
    'exp1.resp2': '5つ以上のデータソースのETLパイプラインを自動化',
    'exp1.resp3': '経営陣向けレポートダッシュボードを作成',
    'exp2.date': '2024年6月 – 2024年12月',
    'exp2.title': 'データアナリスト (フリーランス)',
    'exp2.org': 'DataMinds Consulting',
    'exp2.resp1': '3社のクライアントのEコマース販売データを分析',
    'exp2.resp2': 'PythonとStreamlitでインタラクティブダッシュボードを構築',
    'exp2.resp3': '収益を向上させる実行可能な洞察を提供',
    'education.badge': '学歴',
    'education.title': '学歴',
    'edu1.degree': 'データサイエンス学士',
    'edu1.org': 'サイバージャヤ大学',
    'edu1.year': '2023 – 2027',
    'edu1.course': '<strong>関連コース：</strong> 機械学習、統計分析、データマイニング、データベースシステム',
    'edu2.diploma': 'コンピュータサイエンスディプロマ',
    'edu2.org': 'マレーシア工科大学',
    'edu2.year': '2020 – 2023',
    'edu2.course': '<strong>関連コース：</strong> プログラミング基礎、データ構造、ネットワーキング、Web開発',
    'certifications.badge': '認定資格',
    'certifications.title': '資格と受賞歴',
    'cert1.title': '機械学習スペシャライゼーション',
    'cert1.org': 'Coursera · Stanford Online',
    'cert1.year': '発行: 2025年3月15日',
    'cert2.title': 'Pythonデータ分析',
    'cert2.org': 'freeCodeCamp',
    'cert2.year': '発行: 2024年12月10日',
    'cert3.title': 'データサイエンスのためのSQL',
    'cert3.org': 'DataCamp',
    'cert3.year': '発行: 2024年8月22日',
    'cert.view': '証明書を見る',
    'projects.badge': 'プロジェクト',
    'projects.title': '注目のデータサイエンスプロジェクト',
    'filter.all': 'すべて',
    'filter.web': 'Web開発',
    'filter.ai': 'AI',
    'filter.python': 'Python',
    'filter.uiux': 'UI/UX',
    'project.viewCode': 'コードを見る',
    'proj1.title': '顧客解約予測',
    'proj1.desc': '履歴データと行動パターンを使用したMLベースの解約予測。',
    'proj2.title': '顧客行動分析',
    'proj2.desc': '顧客の行動を分析し、解約の可能性を予測。',
    'proj3.title': '統計モデリングツールキット',
    'proj3.desc': 'データ駆動型の意思決定のための統計分析およびモデリング手法。',
    'proj4.title': 'インタラクティブデータダッシュボード',
    'proj4.desc': 'KPIとビジネスメトリクスを可視化するリアルタイムインタラクティブダッシュボード。',
    'proj5.title': 'NLP感情分析',
    'proj5.desc': 'ソーシャルメディアデータの感情分析のための自然言語処理。',
    'proj6.title': 'ポートフォリオウェブサイト',
    'proj6.desc': 'ダークモードと7言語対応のレスポンシブポートフォリオ。',
    'contact.badge': '連絡先',
    'contact.title': 'データを実用的な洞察に変える',
    'contact.infoTitle': 'ワンクリックで連絡できます',
    'contact.location': 'マレーシア',
    'contact.formName': 'お名前',
    'contact.formEmail': 'メールアドレス',
    'contact.formMessage': 'メッセージ',
    'contact.formBtn': 'メッセージを送信',
    'footer.copyright': '© 2026 Sanusi Sani Muhammad',
    'footer.tagline': 'データサイエンスポートフォリオ',
  },
};

/* ============================================
   LANGUAGE SWITCHER
============================================ */
let currentLang = localStorage.getItem('preferredLang') || 'en';
const langToggle = document.getElementById('langToggle');
const langDropdown = document.getElementById('langDropdown');

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  document.documentElement.lang = lang;

  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
  } else {
    document.documentElement.dir = 'ltr';
  }

  document.getElementById('currentLangLabel').textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  langDropdown.classList.remove('open');
}

langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  langDropdown.classList.toggle('open');
});

document.addEventListener('click', () => {
  langDropdown.classList.remove('open');
});

langDropdown.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });
});

setLanguage(currentLang);

/* ============================================
   THEME TOGGLE (Dark / Light)
============================================ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = theme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  setTheme('light');
} else {
  setTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

/* ============================================
   TYPING EFFECT
============================================ */
const typingElement = document.getElementById('typing');
const words = ['Data Scientist', 'AI Enthusiast', 'Machine Learning Engineer', 'Data Analyst', 'Tech Explorer', 'Student'];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!deleting) {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();

/* ============================================
   REVEAL ON SCROLL (Intersection Observer)
============================================ */
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => observer.observe(el));

/* ============================================
   BACK TO TOP BUTTON
============================================ */
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================
   ACTIVE NAVIGATION HIGHLIGHT
============================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-link');
    }
  });
});

/* ============================================
   SMOOTH SCROLLING
============================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ============================================
   PROJECT FILTERING
============================================ */
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    projectItems.forEach((item) => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ============================================
   CONTACT FORM VALIDATION
============================================ */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();

  formMessage.className = 'mt-3';
  formMessage.innerHTML = '';

  if (!name || !email || !message) {
    formMessage.className = 'mt-3 error';
    const msgs = {
      ar: '❌ الرجاء ملء جميع الحقول.',
      ms: '❌ Sila isi semua ruangan.',
      es: '❌ Por favor, complete todos los campos.',
      fr: '❌ Veuillez remplir tous les champs.',
      zh: '❌ 请填写所有字段。',
      ja: '❌ すべてのフィールドを入力してください。'
    };
    formMessage.textContent = msgs[currentLang] || '❌ Please fill in all fields.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.className = 'mt-3 error';
    const msgs = {
      ar: '❌ البريد الإلكتروني غير صحيح.',
      ms: '❌ Emel tidak sah.',
      es: '❌ Correo electrónico no válido.',
      fr: "❌ L'adresse e-mail n'est pas valide.",
      zh: '❌ 邮箱格式无效。',
      ja: '❌ メールアドレスが無効です。'
    };
    formMessage.textContent = msgs[currentLang] || '❌ Please enter a valid email.';
    return;
  }

  formMessage.className = 'mt-3 success';
  const msgs = {
    ar: '✅ تم إرسال الرسالة بنجاح! (عرض توضيحي)',
    ms: '✅ Mesej berjaya dihantar! (Demo)',
    es: '✅ ¡Mensaje enviado con éxito! (Demostración)',
    fr: '✅ Message envoyé avec succès ! (Démo)',
    zh: '✅ 消息发送成功！ (演示)',
    ja: '✅ メッセージが正常に送信されました！ (デモ)'
  };
  formMessage.textContent = msgs[currentLang] || '✅ Message sent successfully! (Demo)';
  contactForm.reset();
});

/* ============================================
   GEOLOCATION with Reverse Geocoding
============================================ */
const geoDisplay = document.getElementById('geoDisplay');
const geoRefresh = document.getElementById('geoRefresh');

function updateLocation() {
  if (!navigator.geolocation) {
    geoDisplay.innerHTML = `<i class="bi bi-geo-alt-fill"></i> Malaysia`;
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=10`
        );
        const data = await response.json();
        const address = data.address;
        const city = address.city || address.town || address.village || '';
        const country = address.country || 'Malaysia';
        const locationStr = city ? `${city}, ${country}` : country;
        geoDisplay.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${locationStr}`;
      } catch {
        geoDisplay.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      }
    },
    () => {
      geoDisplay.innerHTML = `<i class="bi bi-geo-alt-fill"></i> Malaysia`;
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

updateLocation();
geoRefresh.addEventListener('click', updateLocation);

/* ============================================
   CERTIFICATION LIGHTBOX
============================================ */
const lightbox = document.getElementById('certLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.querySelector('.lightbox-close');

document.querySelectorAll('.cert-link-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const imgSrc = btn.getAttribute('data-cert-img');
    if (imgSrc) {
      lightboxImg.src = imgSrc;
      lightbox.classList.add('open');
    }
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});

/* ============================================
   PROFILE CARD 3D TILT
============================================ */
const profileCard = document.querySelector('.profile-card');
if (profileCard) {
  profileCard.addEventListener('mousemove', (e) => {
    const rect = profileCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((y / rect.height) - 0.5) * -12;
    profileCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  profileCard.addEventListener('mouseleave', () => {
    profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
}

/* ============================================
   CONSOLE EASTER EGG
============================================ */
console.log(`
╔════════════════════════════════════════╗
║     DATA SCIENCE PORTFOLIO             ║
║     Sanusi Sani Muhammad               ║
╚════════════════════════════════════════╝
Status: Seeking Internship
Focus: Data Science, AI, ML
`);