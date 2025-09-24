const { createApp } = Vue;

createApp({
  data() {
    return {
      ciclo: localStorage.getItem("ciclo")
        ? Number(localStorage.getItem("ciclo"))
        : 31,
      ultimoPeriodo:
        localStorage.getItem("ultimoPeriodo") ||
        new Date().toISOString().split("T")[0],
      faseSeleccionada: localStorage.getItem("faseSeleccionada") || "",
      diaSeleccionado: localStorage.getItem("diaSeleccionado") || "",
      fases: [
        {
          nombre: "Fase Menstrual (Días 1-8)",
          descripcion:
            "Niveles hormonales bajos, posible cansancio. Rutina ligera: yoga, caminatas, estiramientos.",
          nutricion:
            "Priorizar hierro (espinaca, carne roja, lentejas) y alimentos antiinflamatorios.",
          abierta: false,
        },
        {
          nombre: "Fase Folicular (Días 9-17)",
          descripcion:
            "Aumenta la energía, ideal para entrenamientos intensos y progresivos.",
          nutricion:
            "Aumentar proteínas y carbohidratos complejos para soportar el rendimiento.",
          abierta: false,
        },
        {
          nombre: "Ovulación (Alrededor del Día 17)",
          descripcion:
            "Mayor energía y fuerza. Momento ideal para entrenamientos de alta intensidad.",
          nutricion:
            "Alimentos ligeros, ricos en antioxidantes y proteína magra.",
          abierta: false,
        },
        {
          nombre: "Fase Lútea (Días 18-31)",
          descripcion:
            "Progesterona alta, posible fatiga. Mejor rutinas suaves, resistencia ligera.",
          nutricion:
            "Magnesio (frutos secos, semillas) y reducción de azúcares simples para evitar hinchazón.",
          abierta: false,
        },
      ],
      rutinas: [
        {
          dia: "Día 1 – Glúteos & Core + Suelo Pélvico",
          ejercicios: [
            {
              nombre: "Puente de glúteos",
              series: "3x12",
              imagen:
                "https://consejosdeportivos.decathlon.es/sites/default/files/styles/blog/public/2022-03/puente-de-gluteos.jpg",
              video: "https://www.youtube.com/watch?v=TZBUBUrmA9g",
              fasesRestringidas: [],
            },
            {
              nombre: "Plancha frontal",
              series: "3x20-40s",
              imagen:
                "https://www.ownpaceathletics.com/wp-content/uploads/2017/10/side-plank-exercise-medicalrfcom.jpg",
              video: "https://www.youtube.com/watch?v=HCPUoQdvh5A",
              fasesRestringidas: [],
            },
            {
              nombre: "Bird-Dog",
              series: "3x12/lado",
              imagen:
                "https://www.verywellfit.com/thmb/5g6-2XQJ6x5nZk1D0U5L2h1b8aI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bird-dog-exercise-56a9e9d63df78cf772a1f9a0.jpg",
              video: "https://www.youtube.com/watch?v=-LRjkbEy-qU",
              fasesRestringidas: [],
            },
            {
              nombre: "Ab Wheel Rollout",
              series: "3x10-12",
              imagen:
                "https://www.coachmag.co.uk/sites/coachmag/files/styles/article_main_image/public/2018/10/ab-wheel-rollout.jpg",
              video: "https://www.youtube.com/watch?v=9ZCoAbI7uX0",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            // {
            //   nombre: "Kegels",
            //   series: "3x10-15",
            //   imagen:
            //     "https://www.squmat.com/wp-content/uploads/2021/01/ejercicios-suelo-pelvico.jpg",
            //   video: "https://www.youtube.com/watch?v=Tncy1DuO2qI",
            //   fasesRestringidas: [],
            // },
          ],
        },
        {
          dia: "Día 2 – Piernas & Glúteos + Suelo Pélvico",
          ejercicios: [
            {
              nombre: "Sentadilla frontal",
              series: "4x10",
              imagen:
                "https://www.verywellfit.com/thmb/8d8a5b8c8e5b4c5a9a9a8b8b8e5c5c5c/1500x0/barbell-squat.jpg",
              video: "https://www.youtube.com/watch?v=1uDiW5--rAE",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            {
              nombre: "Step-ups con mancuerna",
              series: "3x12",
              imagen: "https://www.verywellfit.com/thmb/9d9f9f9f-step-up.jpg",
              video: "https://www.youtube.com/watch?v=dQqApCGd5Ss",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            {
              nombre: "Peso muerto sumo",
              series: "3x10",
              imagen: "https://www.verywellfit.com/thmb/sumo-deadlift.jpg",
              video: "https://www.youtube.com/watch?v=ytGaGIn3SjE",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            {
              nombre: "Puente de glúteos con banda",
              series: "3x15",
              imagen:
                "https://www.buddyfit.club/wp-content/uploads/2020/04/puente-de-gluteos-con-banda.jpg",
              video: "https://www.youtube.com/watch?v=2SHsk9AzdjA",
              fasesRestringidas: [],
            },
          ],
        },
        {
          dia: "Día 3 – Espalda & Core + Suelo Pélvico",
          ejercicios: [
            {
              nombre: "Remo con banda",
              series: "3x12",
              imagen:
                "https://www.coachmag.co.uk/sites/coachmag/files/resistance-band-row.jpg",
              video: "https://www.youtube.com/watch?v=pYcpY20QaE8",
              fasesRestringidas: [],
            },
            {
              nombre: "Remo con barra",
              series: "4x10",
              imagen: "https://www.verywellfit.com/thmb/barbell-row.jpg",
              video: "https://www.youtube.com/watch?v=GZbfZ033f74",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            {
              nombre: "Jalón al pecho",
              series: "3x12",
              imagen: "https://www.verywellfit.com/thmb/lat-pulldown.jpg",
              video: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            {
              nombre: "Superman",
              series: "3x15",
              imagen: "https://www.verywellfit.com/thmb/superman-exercise.jpg",
              video: "https://www.youtube.com/watch?v=z6PJMT2y8GQ",
              fasesRestringidas: [],
            },
            {
              nombre: "Russian twist",
              series: "3x20",
              imagen: "https://www.verywellfit.com/thmb/russian-twist.jpg",
              video: "https://www.youtube.com/watch?v=wkD8rjkodUI",
              fasesRestringidas: [],
            },
          ],
        },
        {
          dia: "Día 4 – Glúteos & Core + Cardio",
          ejercicios: [
            {
              nombre: "Hip thrust con barra",
              series: "4x8-12",
              imagen: "https://www.verywellfit.com/thmb/hip-thrust.jpg",
              video: "https://www.youtube.com/watch?v=b1nsBZm9sU8",
              fasesRestringidas: ["Fase Menstrual (Días 1-5)"],
            },
            {
              nombre: "Sentadilla sumo con mancuerna",
              series: "3x12",
              imagen: "https://www.verywellfit.com/thmb/sumo-squat.jpg",
              video: "https://www.youtube.com/watch?v=U3HlEF_E9fo",
              fasesRestringidas: [],
            },
            {
              nombre: "Plancha con toque de hombros",
              series: "3x40s",
              imagen:
                "https://www.verywellfit.com/thmb/plancha-toque-hombros.jpg",
              video: "https://www.youtube.com/watch?v=5thp2rjKxM8",
              fasesRestringidas: [],
            },
            {
              nombre: "Cardio/HIIT",
              series: "10-15min",
              imagen: "",
              video: "",
              fasesRestringidas: [],
            },
          ],
        },
        {
          dia: "Día 5 – Brazos & Pecho (Secundario)",
          ejercicios: [
            {
              nombre: "Press de banca",
              series: "3x10",
              imagen: "https://www.verywellfit.com/thmb/press-banca.jpg",
              video: "https://www.youtube.com/watch?v=gRVjAtPip0Y",
              fasesRestringidas: [],
            },
            {
              nombre: "Curl de bíceps con mancuerna",
              series: "3x12",
              imagen: "https://www.verywellfit.com/thmb/curl-biceps.jpg",
              video: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
              fasesRestringidas: [],
            },
            {
              nombre: "Fondos en banco",
              series: "3x12",
              imagen: "https://www.verywellfit.com/thmb/fondos-banco.jpg",
              video: "https://www.youtube.com/watch?v=6kALZikXxLc",
              fasesRestringidas: [],
            },
            {
              nombre: "Face pulls (polea)",
              series: "3x15",
              imagen: "https://www.verywellfit.com/thmb/face-pull.jpg",
              video: "https://www.youtube.com/watch?v=rep-qVOkqgk",
              fasesRestringidas: [],
            },
          ],
        },
      ],
    };
  },
  computed: {
    faseActual() {
      if (this.faseSeleccionada) return this.faseSeleccionada;
      const inicio = new Date(this.ultimoPeriodo);
      const hoy = new Date();
      const diff = Math.floor((hoy - inicio) / (1000 * 60 * 60 * 24));
      const diaCiclo = (diff % this.ciclo) + 1;
      if (diaCiclo <= 8) return "Fase Menstrual (Días 1-8)";
      if (diaCiclo <= 17) return "Fase Folicular (Días 9-17)";
      if (diaCiclo === 17) return "Ovulación (Alrededor del Día 17)";
      return "Fase Lútea (Días 18-31)";
    },
    mostrarRutina() {
      return this.diaSeleccionado !== "";
    },
  },
  methods: {
    ejercicioRestringido(ej) {
      return ej.fasesRestringidas.includes(this.faseActual);
    },
    calcularFase() {
      // Forzar recálculo de la fase actual
      this.faseSeleccionada = "";
    },
  },
  watch: {
    ciclo(val) {
      localStorage.setItem("ciclo", val);
    },
    ultimoPeriodo(val) {
      localStorage.setItem("ultimoPeriodo", val);
    },
    faseSeleccionada(val) {
      localStorage.setItem("faseSeleccionada", val);
    },
    diaSeleccionado(val) {
      localStorage.setItem("diaSeleccionado", val);
    },
  },
}).mount("#app");
