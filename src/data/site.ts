export const site = {
  name: "Las Magdalenas Hotel Boutique",
  shortName: "Las Magdalenas",
  tagline: "Xico, Pueblo Mágico de Veracruz",
  phone: "01 (228) 8 13 03 14",
  phoneTel: "+522288130314",
  email: "info@lasmagdalenas.com.mx",
  address: "Hidalgo 123, Colonia Centro C.P. 91240 Xico, Veracruz",
  mapsUrl: "https://maps.app.goo.gl/V9ytfaAmKwYfrfGn7",
  bookingUrl:
    "https://app.thebookingbutton.com/properties/%20lasmagdalenashotelboutiquedirect?check_in_date=07-07-2017&check_out_date=08-07-2017&number_adults=2",
  language: "ES",
  url: "https://lasmagdalenas.com",
  geo: {
    latitude: 19.4211439,
    longitude: -97.0088023,
    region: "Veracruz",
    country: "MX",
  },
  socialImage: "/assets/2017_07_slidehome_19.jpg",
};

export const navigation = [
  { label: "HOTEL", href: "/hotel/" },
  { label: "HABITACIONES", href: site.bookingUrl, external: true },
  { label: "RESTAURANTE", href: "/restaurante/" },
  { label: "EVENTOS", href: "/eventos/" },
  // { label: "ACTIVIDADES", href: "/actividades/" },
  // { label: "PROMOCIONES", href: "/promociones/" },
  // { label: "XICO", href: "/xico/" },
  { label: "CONTACTO", href: "/contacto/" },
];

export const galleryLink = { label: "Galería", href: "/galeria/" };

export const social = {
  facebook: "https://www.facebook.com/lasmagdalenashotelboutique",
  instagram: "https://www.instagram.com/lasmagdalenashotel/",
  tripadvisor:
    "https://www.tripadvisor.com.mx/Hotel_Review-g1915759-d4025983-Reviews-Las_Magdalenas_Boutique_Hotel-Xico_Central_Mexico_and_Gulf_Coast.html",
  restaurantFacebook: "https://www.facebook.com/elveintidosrestaurante/",
  restaurantInstagram: "https://www.instagram.com/elveintidos.restaurante_cava/",
  restaurantTripadvisor:
    "https://www.tripadvisor.com.mx/Restaurant_Review-g1915759-d12473015-Reviews-El_Veintidos_Restaurante_Cava-Xico_Central_Mexico_and_Gulf_Coast.html",
};

export const images = {
  logo: "/assets/2017_05_logo_2.png",
  logoPrincipal: "/assets/logo_principal.png",
  logoMobile: "/assets/logo_mobile.png",
  logoSticky: "/assets/2017_06_logo_sticky2.png",
  logoFooter: "/assets/2017_05_logo_footer.png",
  distintivoM: "/assets/2017_05_distintivoM_logo-e1496109923179.png",
  distintivoMAlt: "/assets/2017_05_distintivoM_logo-e1496109880667.png",
  pueblosMagicos: "/assets/2017_05_pueblosmagicos_logo.png",
  tripadvisor:
    "https://www.tripadvisor.com.mx/img/cdsi/img2/branding/tripadvisor_logo_transp_340x80-18034-2.png",
  hotelTitle: "/assets/2016_09_heading_hotel@2x.png",
  habitacionesTitle: "/assets/2016_09_heading_hotel@2x.png",
  habitacionesBullets: "/assets/2016_09_titulos_bullet@2x.png",
  eventoTitle: "/assets/2016_09_eventos-typo@2x-300x116.png",
  eventoTitleFull: "/assets/2016_09_eventos-typo@2x-300x116.png",
  restLogo: "/assets/2016_09_rest_logo@2x.png",
  habitacionDeluxe: "/assets/2016_09_habitaciones_home_23.jpg",
  habitacionJrQueen: "/assets/2016_09_habitaciones_home_22.jpg",
  habitacionJrKing: "/assets/2016_09_habitaciones_home_24.jpg",
  habitacionSuite: "/assets/2016_09_habitaciones_home_26.jpg",
  heroSlides: [
    "/assets/2017_07_slidehome_19.jpg",
    "/assets/2017_07_slidehome_20.jpg",
    "/assets/2017_07_slidehome_21.jpg",
  ],
  restSlides: [
    "/assets/2017_07_slide_restaurante_1.jpg",
    "/assets/2017_07_slide_restaurante_2.jpg",
    "/assets/2017_07_slide_restaurante_4-1.jpg",
    "/assets/2017_07_slide_restaurante_3.jpg",
  ],
  restMosaic: [
    "/assets/2016_09_rest_home_7.jpg",
    "/assets/2016_09_rest_home_3.jpg",
    "/assets/2016_09_rest_home_6.jpg",
    "/assets/2016_09_rest_home_4.jpg",
  ],
  eventoHome: "/assets/2016_09_eventoshome.jpg",
  promociones: [
    { image: "/assets/2016_09_promociones-1.jpg" },
    { image: "/assets/2016_09_promociones-5.jpg" },
    { image: "/assets/2016_09_promociones-6.jpg" },
  ],
};

export const rooms = [
  {
    name: "DELUXE",
    description: "1 Nivel / Cama Queen",
    image: images.habitacionDeluxe,
  },
  {
    name: "JR. SUITE QUEEN",
    description: "2 Niveles / Cama Queen",
    image: images.habitacionJrQueen,
  },
  {
    name: "JR. SUITE KING",
    description: "2 Niveles / Cama King",
    image: images.habitacionJrKing,
  },
  {
    name: "SUITE",
    description: "1 Nivel / Sofá Cama / Cama King",
    image: images.habitacionSuite,
  },
];

export const promotions = [
  {
    title: "HOTEL SEDE",
    image: images.promociones[0].image,
    text: "Tarifa Especial en función a las noches de estancia de tus invitados. Hospédalos bajo un ambiente de historia, comodidad y servicio personalizado.",
  },
  {
    title: "REUNIONES Y EVENTOS",
    image: images.promociones[1].image,
    text: "Desayunos Sociales o de Negocios. Disfruta de la gastronomía Xiqueña a través de un exquisito Desayuno. Manejamos paquetes en función a tus necesidades.",
    extra:
      "Coffee Break. Realiza tu junta de trabajo bajo una atmósfera llena de historia y tradición.",
  },
  {
    title: "OCASIONES ESPECIALES",
    image: images.promociones[2].image,
    text: "Boda Civil. Celebra un día memorable bajo un ambiente de elegancia y exclusividad.",
    extra: "Fiesta Privada. El escenario ideal para celebrar tu día.",
  },
];

export const homeContent = {
  hero: {
    cta: "RESERVAR",
  },
  hotel: {
    title: "Magnífica casona estilo colonial construida en el siglo XIX",
    description:
      "Las Magdalenas Hotel Boutique emerge en una magnífica casona estilo colonial construida en el Siglo XIX, considerada ya, un monumento histórico. La exquisitez de su ambiente, es ideal para los huéspedes que desean una estancia llena de historia, descanso y servicio personalizado.",
    descriptionSecondary:
      "Estamos ubicados en el Centro Histórico de Xico, Veracruz. Lo que permite a nuestros huéspedes caminar y disfrutar de los sitios culturales, naturales y gastronómicos más importantes de nuestro Pueblo Mágico.",
    paragraph:
      "Ubicado en el centro histórico de Xico, hotel Las Magdalenas refleja la historia y tradiciones de un encantador pueblo mágico.",
    cta: "MÁS INFORMACIÓN",
    ctaHref: "/hotel/",
  },
  habitaciones: {
    title: "HABITACIONES",
    description:
      "Nuestras acogedoras habitaciones cuentan con techos sostenidos por vigones de madera, muros de piedra y detalles contemporáneos que les dan calidez y confort. Todas ellas cuentan con una vista desde donde nuestros huéspedes pueden absorber con todos sus sentidos la belleza del lugar.",
    paragraph: "Acogedoras habitaciones que emanan historia, calidez y descanso.",
    cta: "VER DETALLES Y RESERVAR",
  },
  restaurante: {
    title: "“RESCATANDO SABORES DEL PUEBLO”",
    description:
      "Nuestro menú nace del sincretismo de la cultura indígena y española que se dio en nuestro pueblo. En el veintidós podrás encontrar platillos prehispánicos, tradicionales de xico y españoles.",
    paragraph:
      "En El Veintidós podrás deleitar platillos prehispánicos tradicionales de Xico y españoles. Toda una experiencia gastronómica en la que se ocupan productos que se cosechan y se producen en el pueblo.",
    cta: "VER MENÚ / RESERVAR",
    ctaHref: "/restaurante/",
  },
  eventos: {
    text: "Somos el marco perfecto para celebrar tu momento. Haz de tu evento una experiencia llena de historia, elegancia y exclusividad bajo el encanto de Las Magdalenas. Un hotel para para celebrar momentos irrepetibles.",
    cta: "MÁS INFORMACIÓN",
    ctaHref: "/eventos/",
  },
  promociones: {
    title: "PROMOCIONES",
    intro: "Aproveche al máximo su estancia en Xico con estas exclusivas promociones.",
    footnote:
      "*Aplican restricciones y vigencias en nuestras promociones. Por favor póngase en contacto con nosotros. Será un placer informarle de nuestros paquetes y tarifas especiales para individuales, parejas o grupos.",
    cta: "VER TODAS LAS PROMOCIONES",
    ctaHref: "/promociones/",
  },
};
