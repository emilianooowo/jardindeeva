export interface Arreglo {
  id: string;
  slug: string;
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
    slug: "gala-de-jardin",
    titulo: "Gala de Jardín",
    categorias: ["Arreglos"],
    descripcion:
      "El arreglo perfecto para impresionar. Rosas rojas vibrantes con destellos dorados de solidago que llenan de elegancia y sofisticación cualquier aniversario o cena especial.",
    flores: ["Rosas rojas", "Solidago", "Clavo Japonés"],
    fotoPrincipal: "/nobg/arreglo-1-nobg.png",
    galeria: ["/nobg/arreglo-1-nobg.png"],
  },
  {
    id: "02",
    slug: "encanto-rosado",
    titulo: "Encanto Rosado",
    categorias: ["Ramos"],
    descripcion:
      "Ternura y romanticismo en un solo detalle. Una combinación soñada de rosas blancas y rosadas, el regalo ideal para enamorar, agradecer o celebrar un día inolvidable.",
    flores: ["Rosas Blancas", "Rosas"],
    fotoPrincipal: "/nobg/ramo-7-nobg.png",
    galeria: ["/nobg/ramo-7-nobg.png"],
  },
  {
    id: "03",
    slug: "dulce-primavera",
    titulo: "Dulce Primavera",
    categorias: ["Ramos"],
    descripcion:
      "Lleva la frescura del jardín directo a sus manos. Rosas y astromelias llenas de vida y color, la elección número uno para celebrar cumpleaños y grandes amistades.",
    flores: ["Rosas", "Astromelia", "Statice"],
    fotoPrincipal: "/nobg/ramo-8-nobg.png",
    galeria: ["/nobg/ramo-8-nobg.png"],
  },
  {
    id: "04",
    slug: "latido-de-amor",
    titulo: "Latido De Amor",
    categorias: ["Ramos"],
    descripcion:
      "El clásico atemporal que nunca falla para decir 'Te amo'. Rosas rojas apasionadas envueltas en un toque delicado de nube. La declaración de amor perfecta.",
    flores: ["Rosas Rojas", "Gypsophilia"],
    fotoPrincipal: "/nobg/ramo-9-nobg.png",
    galeria: ["/nobg/ramo-9-nobg.png"],
  },
  {
    id: "05",
    slug: "encanto-rojo",
    titulo: "Encanto Rojo",
    categorias: ["Ramos"],
    descripcion:
      "Pasión que roba miradas. Un ramo voluminoso y lleno de energía donde las rosas rojas resaltan entre la textura de la nube y el brillo del solidago. Ideal para grandes sorpresas.",
    flores: ["Rosas Rojas", "Gypsophilia", "Solidago"],
    fotoPrincipal: "/nobg/ramo-10-nobg.png",
    galeria: ["/nobg/ramo-10-nobg.png"],
  },
  {
    id: "06",
    slug: "luz-de-primavera",
    titulo: "Luz de Primavera",
    categorias: ["Ramos"],
    descripcion:
      "Flores blancas de tallo alto y flores rosadas de centro amarillo forman un ramo luminoso, envuelto en papel claro.",
    flores: ["Flores blancas de tallo alto", "Flores rosadas tipo margarita", "Follaje"],
    fotoPrincipal: "/nobg/ramo-1-nobg.png",
    galeria: ["/nobg/ramo-1-nobg.png"],
  },
  {
    id: "07",
    slug: "sol-de-abril",
    titulo: "Sol de Abril",
    categorias: ["Ramos"],
    descripcion:
      "Gerberas amarillas y alstroemerias blancas con pequeños acentos dorados, envueltas en papel rosa.",
    flores: ["Gerberas amarillas", "Alstroemerias blancas", "Craspedias amarillas"],
    fotoPrincipal: "/nobg/ramo-2-nobg.png",
    galeria: ["/nobg/ramo-2-nobg.png"],
  },
  {
    id: "08",
    slug: "jardin-de-colores",
    titulo: "Jardín de Colores",
    categorias: ["Ramos"],
    descripcion:
      "Una mezcla de rosas amarillas, flores rosadas, hortensias azules y lirios blancos en una envoltura verde suave.",
    flores: ["Rosas amarillas", "Claveles rosados", "Hortensias azules", "Lirios blancos"],
    fotoPrincipal: "/nobg/ramo-3-nobg.png",
    galeria: ["/nobg/ramo-3-nobg.png", "/nobg/ramo-3-1-nobg.png"],
  },
  {
    id: "09",
    slug: "jardin-violeta",
    titulo: "Jardín Violeta",
    categorias: ["Ramos"],
    descripcion:
      "Lisianthus morado, flores blancas y acentos rosados se combinan con capullos de lirio en un envoltorio verde claro.",
    flores: ["Lisianthus morado", "Alstroemerias blancas", "Flores rosadas", "Lirios"],
    fotoPrincipal: "/nobg/ramo-4-nobg.png",
    galeria: ["/nobg/ramo-4-nobg.png"],
  },
  {
    id: "10",
    slug: "dia-radiante",
    titulo: "Día Radiante",
    categorias: ["Ramos"],
    descripcion:
      "Gerberas amarillas y flores rosadas acompañadas de gypsophila, en una presentación alegre de tonos pastel.",
    flores: ["Gerberas amarillas", "Flores rosadas", "Gypsophila"],
    fotoPrincipal: "/nobg/ramo-5-nobg.png",
    galeria: ["/nobg/ramo-5-nobg.png"],
  },
  {
    id: "11",
    slug: "girasol-dorado",
    titulo: "Girasol Dorado",
    categorias: ["Ramos"],
    descripcion:
      "Un girasol naranja de gran presencia, acompañado de gypsophila y presentado en papel amarillo.",
    flores: ["Girasol", "Gypsophila"],
    fotoPrincipal: "/nobg/ramo-6-nobg.png",
    galeria: ["/nobg/ramo-6-nobg.png"],
  },
];

export const categorias = ["Todos", "Ramos", "Arreglos"];
