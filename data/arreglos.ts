export interface Arreglo {
  id: string;
  titulo: string;
  categorias: string[];
  descripcion: string;
  flores: string[];
  fotoPrincipal: string;
  galeria: string[];
}

export const arreglosData: Arreglo[] = [
  {
    id: "01",
    titulo: "Gala de Jardín",
    categorias: ["Arreglos"],
    descripcion:
      "El arreglo perfecto para impresionar. Rosas rojas vibrantes con destellos dorados de solidago que llenan de elegancia y sofisticación cualquier aniversario o cena especial.",
    flores: ["Rosas rojas", "Solidago", "Clavo Japonés"],
    fotoPrincipal: "/ramos/arreglo-1.jpg",
    galeria: ["/ramos/arreglo-1.jpg"],
  },
  {
    id: "02",
    titulo: "Encanto Rosado",
    categorias: ["Ramos"],
    descripcion:
      "Ternura y romanticismo en un solo detalle. Una combinación soñada de rosas blancas y rosadas, el regalo ideal para enamorar, agradecer o celebrar un día inolvidable.",
    flores: ["Rosas Blancas", "Rosas"],
    fotoPrincipal: "/ramos/ramo-7.jpg",
    galeria: ["/ramos/ramo-7.jpg"],
  },
  {
    id: "03",
    titulo: "Dulce Primavera",
    categorias: ["Ramos"],
    descripcion:
      "Lleva la frescura del jardín directo a sus manos. Rosas y astromelias llenas de vida y color, la elección número uno para celebrar cumpleaños y grandes amistades.",
    flores: ["Rosas", "Astromelia", "Statice"],
    fotoPrincipal: "/ramos/ramo-8.jpg",
    galeria: ["/ramos/ramo-8.jpg"],
  },
  {
    id: "04",
    titulo: "Latido De Amor",
    categorias: ["Ramos"],
    descripcion:
      "El clásico atemporal que nunca falla para decir 'Te amo'. Rosas rojas apasionadas envueltas en un toque delicado de nube. La declaración de amor perfecta.",
    flores: ["Rosas Rojas", "Gypsophilia"],
    fotoPrincipal: "/ramos/ramo-9.jpg",
    galeria: ["/ramos/ramo-9.jpg"],
  },
  {
    id: "05",
    titulo: "Encanto Rojo",
    categorias: ["Ramos"],
    descripcion:
      "Pasión que roba miradas. Un ramo voluminoso y lleno de energía donde las rosas rojas resaltan entre la textura de la nube y el brillo del solidago. Ideal para grandes sorpresas.",
    flores: ["Rosas Rojas", "Gypsophilia", "Solidago"],
    fotoPrincipal: "/ramos/ramo-10.jpg",
    galeria: ["/ramos/ramo-10.jpg"],
  },
  {
    id: "06",
    titulo: "Luz de Primavera",
    categorias: ["Ramos"],
    descripcion:
      "Flores blancas de tallo alto y flores rosadas de centro amarillo forman un ramo luminoso, envuelto en papel claro.",
    flores: ["Flores blancas de tallo alto", "Flores rosadas tipo margarita", "Follaje"],
    fotoPrincipal: "/ramos/ramo-1.jpg",
    galeria: ["/ramos/ramo-1.jpg"],
  },
  {
    id: "07",
    titulo: "Sol de Abril",
    categorias: ["Ramos"],
    descripcion:
      "Gerberas amarillas y alstroemerias blancas con pequeños acentos dorados, envueltas en papel rosa.",
    flores: ["Gerberas amarillas", "Alstroemerias blancas", "Craspedias amarillas"],
    fotoPrincipal: "/ramos/ramo-2.jpg",
    galeria: ["/ramos/ramo-2.jpg"],
  },
  {
    id: "08",
    titulo: "Jardín de Colores",
    categorias: ["Ramos"],
    descripcion:
      "Una mezcla de rosas amarillas, flores rosadas, hortensias azules y lirios blancos en una envoltura verde suave.",
    flores: ["Rosas amarillas", "Claveles rosados", "Hortensias azules", "Lirios blancos"],
    fotoPrincipal: "/ramos/ramo-3.jpg",
    galeria: ["/ramos/ramo-3.jpg", "/ramos/ramo-3-1.jpg"],
  },
  {
    id: "09",
    titulo: "Jardín Violeta",
    categorias: ["Ramos"],
    descripcion:
      "Lisianthus morado, flores blancas y acentos rosados se combinan con capullos de lirio en un envoltorio verde claro.",
    flores: ["Lisianthus morado", "Alstroemerias blancas", "Flores rosadas", "Lirios"],
    fotoPrincipal: "/ramos/ramo-4.jpg",
    galeria: ["/ramos/ramo-4.jpg"],
  },
  {
    id: "10",
    titulo: "Día Radiante",
    categorias: ["Ramos"],
    descripcion:
      "Gerberas amarillas y flores rosadas acompañadas de gypsophila, en una presentación alegre de tonos pastel.",
    flores: ["Gerberas amarillas", "Flores rosadas", "Gypsophila"],
    fotoPrincipal: "/ramos/ramo-5.jpg",
    galeria: ["/ramos/ramo-5.jpg"],
  },
  {
    id: "11",
    titulo: "Girasol Dorado",
    categorias: ["Ramos"],
    descripcion:
      "Un girasol naranja de gran presencia, acompañado de gypsophila y presentado en papel amarillo.",
    flores: ["Girasol", "Gypsophila"],
    fotoPrincipal: "/ramos/ramo-6.jpg",
    galeria: ["/ramos/ramo-6.jpg"],
  },
];

export const categorias = ["Todos", "Ramos", "Arreglos"];
