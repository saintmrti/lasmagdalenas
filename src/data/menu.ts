export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuSubsection {
  title: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  label: string;
  note?: string;
  subsections: MenuSubsection[];
}

export const menuSections: MenuSection[] = [
  {
    id: "desayunos",
    label: "Desayunos",
    note: "Se sirven hasta las 12:00 hrs.",
    subsections: [
      {
        title: "Frutas y Cereales",
        items: [
          { name: "Cereal", price: "$35" },
          {
            name: "Plato de frutas surtidas",
            description: "Papaya, melón y manzana",
            price: "$45",
          },
        ],
      },
      {
        title: "Hot Cakes",
        items: [
          { name: "Con mantequilla y mermelada", price: "$40" },
          { name: "Con jamón o tocino", price: "$48" },
        ],
      },
      {
        title: "Huevos",
        items: [
          {
            name: "Huevos al gusto",
            description: "Rancheros, a la mexicana, divorciados o al albañil",
            price: "$56",
          },
          { name: "Motuleños", price: "$70" },
          {
            name: "Huevos xiqueños",
            description:
              "Fritos montados en una gran picada con frijoles bañados en salsa roja y verde",
            price: "$65",
          },
          { name: "Huevos tirados", price: "$56" },
          {
            name: "Huevos al plato",
            description: "Cocidos al horno acompañados de cebolla y rajas de chile",
            price: "$60",
          },
          { name: "Huevos light", description: "2 claras al gusto", price: "$56" },
          {
            name: "Omelette",
            description: "Relleno de tocino, jamón, chorizo, champiñones o queso",
            price: "$60",
          },
          {
            name: "Omelette montañés",
            description: "Relleno de espinacas y queso de cabra",
            price: "$60",
          },
          {
            name: "Omelette prehispánico",
            description: "Relleno de huitlacoche bañado en una salsa de quesos",
            price: "$70",
          },
          {
            name: "Huevos mestizos",
            description:
              "Pochados y montados en una cama de pan tradicional con una loncha de jamón serrano o chorizo español, bañados con una crema de queso parmesano",
            price: "$70",
          },
          { name: "Cecina con Chilaquiles rojos o verdes", price: "$85" },
        ],
      },
      {
        title: "Bebidas",
        items: [
          { name: "Jugo de naranja", price: "$25" },
          { name: "Jugo de zanahoria", price: "$25" },
          { name: "Chocomilk", price: "$25" },
        ],
      },
      {
        title: "Pan de Xico",
        items: [
          { name: "Pieza", price: "$14" },
          { name: "Canasta con 3 piezas", price: "$39" },
        ],
      },
    ],
  },
  {
    id: "comidas",
    label: "Comidas y Cenas",
    subsections: [
      {
        title: "Entradas",
        items: [
          {
            name: "Queso asado al acuyo",
            description: "Acompañado de cebolla morada y chiles toreados",
            price: "$48",
          },
          { name: "Chile capeado relleno de queso", price: "$35" },
          {
            name: "Tacos de fideo seco",
            description: "3 piezas. Preparados con crema, queso y aguacate",
            price: "$45",
          },
        ],
      },
      {
        title: "Sopas",
        items: [
          {
            name: "Xonequi",
            description:
              "Caldo prehispánico sazonado con la hoja silvestre del Xonequi y bolitas de masa",
            price: "$49",
          },
          { name: "Sopa Azteca", price: "$49" },
          {
            name: "Chileatole de Elote",
            description:
              "A base de tres leches, elote desgranado y trozos de queso. Ligeramente dulce",
            price: "$55",
          },
        ],
      },
      {
        title: "Ensaladas",
        items: [
          {
            name: "Ensalada danzante",
            description:
              "Espinacas con trozos de mango, manzana, almendra fileteada, tocino, crutones y aderezo de moras silvestres",
            price: "$70",
          },
          {
            name: "Ensalada del huerto",
            description:
              "Lechuga orejona, lechuga romana, espinacas, trozos de manzana, arándanos, queso de cabra y una vinagreta de nuez",
            price: "$70",
          },
        ],
      },
      {
        title: "Platillos del Pueblo",
        items: [
          {
            name: "Pollo con mole",
            description: "Pierna y muslo, guarnición de arroz y frijoles",
            price: "$110",
          },
          {
            name: "Chile relleno de picadillo",
            description:
              "Guarnición de arroz. Chile relleno de dos carnes, manzana, almendra, aceitunas, alcaparras y pasitas",
            price: "$45",
          },
          { name: "Chile relleno de picadillo en caldillo", price: "$50" },
          { name: "Enmoladas", description: "Rellenas de pollo", price: "$70" },
          { name: "Ennatadas", description: "Rellenas de pollo", price: "$70" },
          { name: "Longaniza en Salsa", description: "Guarnición de frijoles", price: "$80" },
          {
            name: "Cecina real",
            description: "Acompañada de 2 enchiladas, frijoles y ensalada",
            price: "$120",
          },
          {
            name: "Plato parroquia",
            description:
              "Para 2 personas. Cecina, 4 enmoladas, 2 Chiles Rellenos, arroz y frijoles",
            price: "$210",
          },
        ],
      },
      {
        title: "Pescados",
        items: [
          { name: "Trucha al acuyo", price: "$110" },
          { name: "Trucha chilpaya", description: "Salsa ligeramente picante", price: "$110" },
          {
            name: "Trucha al totomoxtle",
            description: "Bañada y rellena en salsa de huitlacoche",
            price: "$120",
          },
        ],
      },
      {
        title: "Carnes y Aves",
        items: [
          {
            name: "Arrachera",
            description: "Acompañada de 2 enchiladas, ensalada verde y cebollinas",
            price: "$130",
          },
          { name: "Milanesa de Pollo", description: "Guarnición de ensalada rusa", price: "$90" },
          {
            name: "Pechuga florentina",
            description:
              "Filete relleno de espinacas, gratinado con queso sobre una cama de crema de chipotle",
            price: "$110",
          },
          { name: "Pechuga de pollo Cordon Blue en salsa de mango", price: "$110" },
          {
            name: "Club sándwich 22",
            description: "Pechuga a la plancha, tocino, guarnición de ensalada rusa",
            price: "$75",
          },
        ],
      },
      {
        title: "Tapas y Maduros",
        items: [
          { name: "Montaditos (2 piezas) — Pantomate y queso manchego", price: "$25" },
          { name: "Montaditos (2 piezas) — Pantomate, queso manchego y chistorra", price: "$35" },
          { name: "Quesos suaves y durazno con miel", price: "$30" },
          { name: "Quesos suaves y pera", price: "$30" },
          { name: "Queso Brie montado en una mermelada de moras", price: "$35" },
          {
            name: "Tortilla española Doña Roció",
            description: "Con chorizo español, receta de la familia",
            price: "$75",
          },
          { name: "Plato de carnes frías", description: "4 embutidos y aceitunas", price: "$280" },
          { name: "Plato de quesos", description: "4 quesos y aceitunas", price: "$210" },
          { name: "Plato mixto", description: "2 embutidos, 2 quesos y aceitunas", price: "$250" },
        ],
      },
      {
        title: "Fundidos",
        items: [
          { name: "Queso provoleta al horno", description: "200gr", price: "$80" },
          { name: "Queso Brie con chorizo español al horno", price: "$90" },
          {
            name: "Fondue de la casa",
            description: "A base de queso Gouda. Para 2 o 3 personas",
            price: "$190",
          },
          { name: "Queso fundido natural", price: "$60" },
        ],
      },
      {
        title: "Muy Mexicanos",
        items: [
          {
            name: "Chilaquiles rojos o verdes",
            description: "Rellenos de pollo o huevo",
            price: "$60",
          },
          { name: "Enfrijoladas", description: "Rellenas de pollo o huevo", price: "$60" },
          {
            name: "Enfrijoladas veracruzanas",
            description: "Rellenas de pollo o huevo, preparadas con aguacate y trozos de chorizo",
            price: "$68",
          },
          {
            name: "Picada Mayor",
            description:
              "Preparada con frijoles, pollo, salsa roja o verde, queso, crema y aguacate",
            price: "$49",
          },
          { name: "Tacos dorados de pollo preparados", price: "$60" },
          { name: "Tacos de cecina con longaniza", price: "$80" },
          {
            name: "Enchiladas mayordomo",
            description:
              "Rellenas con pollo, bañadas con salsa roja o verde. Gratinadas con queso manchego",
            price: "$65",
          },
          { name: "Molletes sencillos", price: "$40" },
        ],
      },
      {
        title: "Para acompañar",
        items: [
          { name: "Frijoles refritos", price: "$20" },
          { name: "Arroz", price: "$20" },
        ],
      },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    subsections: [
      {
        title: "",
        items: [
          { name: "Tamal canario", price: "$30" },
          { name: "Plátanos flameados", description: "Con helado de vainilla", price: "$56" },
          {
            name: "Fondant de chocolate",
            description: "Con helado de vainilla. Tiempo de preparación: 15 min",
            price: "$60",
          },
          { name: "Crepa de cajeta", description: "Con helado de vainilla", price: "$49" },
          { name: "Crepa fantasía", description: "Con helado de vainilla", price: "$49" },
          { name: "Pan de elote", description: "Con helado de vainilla", price: "$49" },
          { name: "Torreja", description: "Con helado de vainilla", price: "$49" },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    subsections: [
      {
        title: "Sin alcohol",
        items: [
          { name: "Limonada o Naranjada", price: "$28" },
          { name: "Horchata", price: "$30" },
          { name: "Soda Italiana con perlas", price: "$35" },
          { name: "Refrescos", price: "$23" },
          { name: "Botella de agua", price: "$20" },
        ],
      },
      {
        title: "Cerveza",
        items: [
          { name: "Cerveza", price: "$30" },
          { name: "Chelada", price: "$35" },
          { name: "Michelada", price: "$38" },
          { name: "Michelada roja", price: "$45" },
        ],
      },
      {
        title: "Digestivos",
        items: [
          { name: "Mora o Verde de Xico", price: "$30" },
          { name: "Torito de cacahuate", price: "$35" },
          { name: "Carajillo", price: "$80" },
          { name: "Baileys", price: "$70" },
          { name: "Sambuca negro", price: "$70" },
          { name: "Anís Chinchón", description: "Dulce o seco", price: "$70" },
          { name: "Licor del 43", price: "$75" },
        ],
      },
      {
        title: "De Flor de Café",
        items: [
          { name: "Café americano", price: "$18" },
          { name: "Café expresso", price: "$18" },
          { name: "Café capuccino", price: "$28" },
          { name: "Café latte", price: "$30" },
          { name: "Chocolate", price: "$30" },
          { name: "Té", description: "Pregunta por nuestra variedad", price: "$23" },
          { name: "Chai latte", price: "$35" },
        ],
      },
    ],
  },
];
