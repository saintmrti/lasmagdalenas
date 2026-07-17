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
        title: "Frutas",
        items: [
          {
            name: "Plato de fruta surtidas",
            description: "De temporada",
            price: "$65",
          },
          { name: "Plato de fruta con granola y yogurt", price: "$75" },
        ],
      },
      {
        title: "Hot Cakes",
        items: [
          { name: "Con mantequilla y mermelada", price: "$85" },
          { name: "Con jamón o tocino", price: "$95" },
        ],
      },
      {
        title: "Huevos",
        items: [
          {
            name: "Huevos rancheros",
            description: "Fritos, montados en tortilla con frijoles y jamón, bañados en salsa roja",
            price: "$95",
          },
          {
            name: "Motuleños",
            description:
              "Fritos, montados en tortilla con frijoles, plátano macho y jamón, bañados en salsa roja",
            price: "$110",
          },
          {
            name: "Huevos xiqueños",
            description:
              "Fritos montados en una gran picada con frijoles bañados en salsa roja y verde",
            price: "$90",
          },
          {
            name: "Huevos al albañil",
            description: "Caldosos en salsa verde con cebolla desflemada y queso de rancho",
            price: "$90",
          },
          {
            name: "Huevos tirados",
            description: "Revueltos con frijoles refritos",
            price: "$85",
          },
          {
            name: "Huevos light",
            description: "3 claras al gusto",
            price: "$85",
          },
          {
            name: "Huevos revueltos",
            description: "A la mexicana o con jamón",
            price: "$90",
          },
          {
            name: "Omelette",
            description: "Relleno de tocino o jamón o chorizo o champiñones o queso manchego",
            price: "$90",
          },
          {
            name: "Omelette mixto",
            description: "2 ingredientes",
            price: "$95",
          },
          {
            name: "Omelette montañés",
            description: "Relleno de espinacas con queso de cabra",
            price: "$95",
          },
        ],
      },
      {
        title: "Del Pueblo",
        items: [
          {
            name: "Chilaquiles rojos o verdes",
            description: "Con pollo o huevo",
            price: "$125",
          },
          {
            name: "Enfrijoladas",
            description: "Rellenas de pollo o huevo",
            price: "$105",
          },
          {
            name: "Enatadas",
            description: "Rellenas de huevo",
            price: "$120",
          },
          {
            name: "Chile relleno de picadillo",
            description: "Guarnición de frijoles",
            price: "$80",
          },
          {
            name: "Longaniza en salsa de la casa",
            description: "Guarnición de frijoles",
            price: "$110",
          },
          {
            name: "Quesadillas",
            description: "3 piezas. Tortilla de harina o maíz",
            price: "$90",
          },
          { name: "Cecina con chilaquiles rojos o verdes", price: "$195" },
          { name: "Cecina con 3 picaditas", price: "$190" },
        ],
      },
      {
        title: "Jugos",
        items: [
          { name: "Naranja", price: "$45" },
          { name: "Zanahoria", price: "$45" },
        ],
      },
      {
        title: "Pan de Xico",
        items: [
          { name: "Pieza", price: "$23" },
          { name: "Canasta con 3 piezas", price: "$60" },
          { name: "Galletas tradicionales", description: "Orden", price: "$45" },
        ],
      },
      // {
      //   title: "Calientes",
      //   items: [
      //     { name: "Café americano", price: "$30" },
      //     { name: "Café americano doble carga", price: "$45" },
      //     { name: "Café expresso", price: "$30" },
      //     { name: "Café expresso doble", price: "$45" },
      //     { name: "Café expresso cortado", price: "$35" },
      //     { name: "Café expresso doble cortado", price: "$45" },
      //     { name: "Café lechero", price: "$45" },
      //     { name: "Café capuchino", price: "$45" },
      //     { name: "Café latte", price: "$45" },
      //     { name: "Chocolate", price: "$50" },
      //     {
      //       name: "Té",
      //       description: "Pregunta por nuestra variedad",
      //       price: "$30",
      //     },
      //     { name: "Chocomilk", price: "$50" },
      //   ],
      // },
      {
        title: "Bebidas",
        items: [
          { name: "Soda italiana con perlas", price: "$55" },
          { name: "Refrescos", price: "$35" },
          { name: "Botella de agua", price: "$25" },
          { name: "Cerveza", price: "$45" },
          { name: "Chelada", price: "$55" },
          { name: "Michelada", price: "$55" },
          { name: "Michelada roja", price: "$70" },
          {
            name: "Copa de vino",
            description: "De la casa",
            price: "$70",
          },
          { name: "Clamato con vodka", price: "$75" },
        ],
      },
      {
        title: "Digestivos",
        items: [
          {
            name: "Carajillo",
            description: "Expresso con licor del 43",
            price: "$130",
          },
          { name: "Baileys", price: "$95" },
          { name: "Sambuca negro", price: "$90" },
          { name: "Anís Chinchón dulce / seco", price: "$75" },
          { name: "Licor del 43", price: "$100" },
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
            name: "Montaditos de pantomate de la casa",
            description: "Con queso manchego y chistorra. 3 piezas",
            price: "$85",
          },
          {
            name: "Montaditos de pera",
            description: "Con quesos suaves. 3 piezas",
            price: "$85",
          },
          {
            name: "Queso asado al acuyo",
            description: "Acompañado de cebolla morada y chiles toreados",
            price: "$105",
          },
          {
            name: "Chistorra al ajillo",
            description: "Acompañada de pan horneado",
            price: "$145",
          },
          {
            name: "Queso provoleta al horno",
            description: "Acompañado de pan horneado",
            price: "$165",
          },
          {
            name: "Tortilla española Doña Roció",
            description: "Con chorizo español. Receta de la familia. (15 min)",
            price: "$170",
          },
          {
            name: "Chorizo español a la sidra",
            description: "Acompañada de pan horneado",
            price: "$155",
          },
          {
            name: "Plato mixto",
            description: "Con embutidos y quesos, acompañado de aceituna",
            price: "$360",
          },
          { name: "Queso fundido natural", price: "$120" },
          {
            name: "Queso fundido con chistorra o champiñones",
            price: "$160",
          },
        ],
      },
      {
        title: "Sopas",
        items: [
          {
            name: "Xonequi",
            description:
              "Caldo prehispánico sazonado con la hoja silvestre del xonequi y bolitas de masa",
            price: "$85",
          },
          {
            name: "Sopa Azteca",
            description:
              "Sopa tradicional mexicana, acompañada de tortilla, aguacate, crema y queso",
            price: "$85",
          },
          {
            name: "Chileatole de elote",
            description: "A base de leches, elote desgranado y trozos de queso",
            price: "$90",
          },
          { name: "Consomé con pollo", price: "$75" },
        ],
      },
      {
        title: "Ensaladas",
        items: [
          {
            name: "Ensalada danzante",
            description:
              "Espinaca y lechuga con trozos de mango, manzana, almendras, tocino, crutones y aderezo de moras silvestres",
            price: "$125",
          },
          {
            name: "Ensalada del huerto",
            description:
              "Lechuga, espinaca, trozos de manzana, arándano, queso de cabra y una vinagreta de nuez",
            price: "$125",
          },
          {
            name: "Ensalada del corral",
            description:
              "Lechuga, pechuga de pollo a la plancha, queso de cabra, crutones y almendras",
            price: "$135",
          },
        ],
      },
      {
        title: "Platillos del Pueblo",
        items: [
          {
            name: "Enmoladas",
            description: "Rellenas de pollo",
            price: "$120",
          },
          {
            name: "Enatadas",
            description: "Rellenas de pollo",
            price: "$120",
          },
          {
            name: "Chile relleno de picadillo",
            description: "Guarnición de arroz y frijoles",
            price: "$80",
          },
          {
            name: "Longaniza en salsa de la casa",
            description: "Guarnición de frijoles",
            price: "$150",
          },
          {
            name: "Chile relleno de picadillo en caldillo",
            description: "Caldo sazonado con aceitunas y plátano macho",
            price: "$130",
          },
          {
            name: "Pollo con mole",
            description: "Pierna y muslo, guarnición de arroz y frijoles",
            price: "$160",
          },
          {
            name: "Cecina real",
            description: "Acompañada de 2 picadas, frijoles y ensalada",
            price: "$210",
          },
          {
            name: "Plato parroquia",
            description: "Cecina, 2 enmoladas, 1 chile relleno, arroz y frijoles",
            price: "$270",
          },
        ],
      },
      {
        title: "Muy Mexicanos",
        items: [
          {
            name: "Enfrijoladas",
            description: "Rellenas de pollo o huevo",
            price: "$105",
          },
          {
            name: "Tacos de cecina con longaniza",
            description: "3 piezas",
            price: "$150",
          },
          {
            name: "Tacos de cecina con longaniza con queso",
            description: "3 piezas",
            price: "$175",
          },
          {
            name: "Enfrijoladas veracruzanas",
            description: "Rellenas de pollo o huevo, preparadas con aguacate, chorizo y crema",
            price: "$125",
          },
          {
            name: "Picada mayor",
            description:
              "Preparada con frijoles, pollo, salsa roja o verde, queso, crema y aguacate",
            price: "$110",
          },
          {
            name: "Tacos dorados de pollo preparados",
            description: "4 piezas",
            price: "$110",
          },
          {
            name: "Enchiladas mayordomo",
            description: "Rellenas de pollo, bañadas en salsa roja o verde y gratinadas con queso",
            price: "$125",
          },
        ],
      },
      {
        title: "Aves",
        items: [
          {
            name: "Milanesa de pollo",
            description: "Guarnición ensalada verde o papas",
            price: "$170",
          },
          {
            name: "Pechuga asada",
            description: "Guarnición ensalada verde",
            price: "$160",
          },
          {
            name: "Pechuga florentina",
            description:
              "Filete relleno de espinacas, gratinado sobre una cama de crema de chipotle",
            price: "$190",
          },
          {
            name: "Pechuga cordon bleu en salsa de mango",
            price: "$190",
          },
        ],
      },
      {
        title: "Para los Niños",
        items: [
          {
            name: "Nuggets de pollo",
            description: "6 piezas",
            price: "$90",
          },
          {
            name: "Quesadillas",
            description: "En tortilla de harina o maíz. 3 piezas",
            price: "$90",
          },
        ],
      },
      {
        title: "Para acompañar",
        items: [
          { name: "Frijoles refritos", price: "$45" },
          { name: "Papas a la francesa", price: "$55" },
          { name: "Arroz", price: "$45" },
          { name: "Arroz con huevo o plátano", price: "$60" },
        ],
      },
      {
        title: "Postres",
        items: [
          { name: "Tamal canario", price: "$60" },
          {
            name: "Fresas jubilee",
            description: "Con helado de vainilla",
            price: "$95",
          },
          {
            name: "Plátanos flameados",
            description: "Con helado de vainilla",
            price: "$95",
          },
          {
            name: "Pan de elote",
            description: "Con helado de vainilla",
            price: "$80",
          },
          {
            name: "Torreja",
            description: "Con helado de vainilla",
            price: "$80",
          },
          {
            name: "Plátanos fritos",
            description: "Con crema",
            price: "$70",
          },
          { name: "Rebanadas de pastel", price: "$60" },
        ],
      },
      {
        title: "Bebidas",
        items: [
          { name: "Agua fresca de temporada", price: "$30" },
          {
            name: "Limonada o naranjada",
            description: "Mineral",
            price: "$35",
          },
          { name: "Horchata", price: "$35" },
          { name: "Soda italiana con perlas", price: "$55" },
          { name: "Refrescos", price: "$35" },
          { name: "Botella de agua", price: "$25" },
          { name: "Cerveza", price: "$45" },
          {
            name: "Chelada",
            description: "Con limón y sal",
            price: "$55",
          },
          {
            name: "Michelada",
            description: "Con salsas, limón y sal",
            price: "$55",
          },
          {
            name: "Michelada roja",
            description: "Con clamato",
            price: "$70",
          },
          { name: "Clamato con vodka", price: "$75" },
          {
            name: "Copa de vino",
            description: "De la casa",
            price: "$70",
          },
        ],
      },
      // {
      //   title: "De Flor de Café",
      //   items: [
      //     { name: "Café americano", price: "$30" },
      //     { name: "Café americano doble carga", price: "$45" },
      //     { name: "Café expresso", price: "$30" },
      //     { name: "Café expresso doble", price: "$45" },
      //     { name: "Café expresso cortado", price: "$35" },
      //     { name: "Café expresso doble cortado", price: "$45" },
      //     { name: "Café lechero", price: "$45" },
      //     { name: "Café capuchino", price: "$45" },
      //     { name: "Café latte", price: "$45" },
      //     { name: "Chocolate", price: "$50" },
      //     {
      //       name: "Té",
      //       description: "Pregunta por nuestra variedad",
      //       price: "$30",
      //     },
      //     { name: "Chocomilk", price: "$50" },
      //   ],
      // },
      {
        title: "Digestivos",
        items: [
          { name: "Mora", price: "$40" },
          { name: "Verde", price: "$40" },
          { name: "Torito de cacahuate", price: "$50" },
          { name: "Torito de café", price: "$50" },
          // {
          //   name: "Carajillo",
          //   description: "Expresso y licor del 43",
          //   price: "$130",
          // },
          // { name: "Baileys", price: "$95" },
          // { name: "Sambuca negro", price: "$90" },
          // { name: "Anís dulce o seco o campechano", price: "$75" },
          // { name: "Licor del 43", price: "$100" },
        ],
      },
    ],
  },
  {
    id: "cava",
    label: "Cava",
    subsections: [
      {
        title: "Vinos Blancos",
        items: [
          {
            name: "L.A. Cetto Blanc de Zinfandel",
            description: "Valle de Guadalupe. México",
            price: "$360",
          },
          {
            name: "Gran Hacienda Santa Rita Chardonnay",
            description: "Valle Central. Chile",
            price: "$375",
          },
          {
            name: "Diamante Bodegas Franco Españolas",
            description: "Viura y Malvaña. Rioja. España",
            price: "$450",
          },
        ],
      },
      {
        title: "Vinos Tintos",
        items: [
          {
            name: "Finca Vieja Tempranillo",
            description: "Crianza. Castilla La Mancha. España",
            price: "$380",
          },
          {
            name: "Baron de Ley",
            description: "Tempranillo, Graciano, Maturana. Reserva. Rioja. España",
            price: "$490",
          },
          {
            name: "Puerto Nuevo Cabernet Malbec",
            description: "Valle de Guadalupe. México",
            price: "$360",
          },
        ],
      },
      {
        title: "Copa de Vino",
        items: [
          {
            name: "De la casa",
            price: "$70",
          },
        ],
      },
      {
        title: "Ron",
        items: [
          { name: "Bacardi Blanco", price: "$70" },
          { name: "Havana 7 años", price: "$120" },
        ],
      },
      {
        title: "Vodka",
        items: [
          { name: "Stolichnaya", price: "$80" },
          { name: "Absolut Azul", price: "$75" },
        ],
      },
      {
        title: "Whiskey",
        items: [
          { name: "Black & White", price: "$70" },
          { name: "Buchanans 12 años", price: "$135" },
        ],
      },
      {
        title: "Tequila",
        items: [
          { name: "Jose Cuervo Tradicional Reposado", price: "$85" },
          { name: "Maestro Tequilero Dobel Diamante", price: "$145" },
        ],
      },
      {
        title: "Brandy",
        items: [
          { name: "Magno", price: "$85" },
          { name: "Torres 10", price: "$95" },
        ],
      },
      {
        title: "Mezcal",
        items: [
          {
            name: "Santín Espadín Joven",
            description: "Oaxaca",
            price: "$95",
          },
        ],
      },
      {
        title: "Licores y Cremas",
        items: [
          {
            name: "Anís",
            description: "Dulce o seco o campechano",
            price: "$75",
          },
          { name: "Baileys", price: "$95" },
          { name: "Sambuca negro", price: "$90" },
          { name: "Licor del 43", price: "$100" },
        ],
      },
      {
        title: "Cervezas",
        items: [
          { name: "Cerveza", price: "$45" },
          {
            name: "Chelada",
            description: "Limón y sal",
            price: "$55",
          },
          {
            name: "Michelada",
            description: "Salsas, limón y sal",
            price: "$55",
          },
          {
            name: "Michelada roja",
            description: "Con clamato",
            price: "$70",
          },
        ],
      },
    ],
  },
  {
    id: "cafeteria",
    label: "Cafetería",
    subsections: [
      {
        title: "Calientes",
        items: [
          { name: "Café americano", price: "$30" },
          { name: "Café americano doble carga", price: "$45" },
          { name: "Café expresso", price: "$30" },
          { name: "Café expresso doble", price: "$45" },
          { name: "Café expresso cortado", price: "$35" },
          { name: "Café expresso doble cortado", price: "$45" },
          { name: "Café lechero", price: "$45" },
          { name: "Café capuchino", price: "$45" },
          {
            name: "Café capuchino especial",
            description: "Cajeta, menta, crema irlandesa, caramelo",
            price: "$50",
          },
          { name: "Chocolate", price: "$50" },
          {
            name: "Té",
            description: "Pregunte por nuestra variedad de tés",
            price: "$30",
          },
        ],
      },
      {
        title: "Fríos",
        items: [
          { name: "Frapuccino", price: "$60" },
          { name: "Frapuccino Oreo", price: "$70" },
          { name: "Frapuccino de cajeta", price: "$65" },
          {
            name: "Frapuccino moka",
            description: "Chocolate",
            price: "$65",
          },
          {
            name: "Latte frío",
            description: "En hielo",
            price: "$60",
          },
          { name: "Té frío", price: "$55" },
        ],
      },
      {
        title: "Bebidas",
        items: [
          { name: "Soda italiana con perlas", price: "$55" },
          { name: "Botella de agua", price: "$25" },
          { name: "Refrescos", price: "$35" },
        ],
      },
      {
        title: "Pan & Postres",
        items: [
          { name: "Galletas tradicionales", description: "Orden", price: "$45" },
          { name: "Tamal canario", price: "$60" },
          { name: "Rebanada de pastel", price: "$60" },
          { name: "Pan de Xico pieza", price: "$23" },
          { name: "Canasta con 3 piezas", price: "$60" },
        ],
      },
      {
        title: "Digestivos & Cervezas",
        items: [
          { name: "Mora", price: "$40" },
          { name: "Verde", price: "$40" },
          { name: "Torito de cacahuate", price: "$50" },
          { name: "Torito de café", price: "$50" },
          {
            name: "Carajillo",
            description: "Expresso con licor del 43",
            price: "$130",
          },
          { name: "Baileys", price: "$95" },
          { name: "Sambuca negro", price: "$90" },
          {
            name: "Anís",
            description: "Dulce o seco o campechano",
            price: "$75",
          },
          { name: "Licor del 43", price: "$100" },
          {
            name: "Copa de vino",
            description: "De la casa",
            price: "$70",
          },
          { name: "Cerveza", price: "$45" },
          {
            name: "Chelada",
            description: "Limón y sal",
            price: "$55",
          },
          {
            name: "Michelada",
            description: "Salsas, limón y sal",
            price: "$55",
          },
          {
            name: "Michelada roja",
            description: "Con clamato",
            price: "$70",
          },
        ],
      },
    ],
  },
];
