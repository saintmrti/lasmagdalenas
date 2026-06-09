export interface EventSpace {
  id: string;
  title: string;
  description: string;
  capacity: string;
  images: string[];
  unavailable?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export const eventSpaces: EventSpace[] = [
  {
    id: "corredor",
    title: "EL CORREDOR",
    description:
      "Espacio que muestra la belleza, elegancia e historia del hotel; cuenta con una hermosa vista al pozo, jardín y patio central. El Corredor es un lugar ideal para llevar a cabo un coctel, desayunos o cenas privadas.",
    capacity: "CAPACIDAD PARA 30 INVITADOS",
    images: [
      "/assets/2017_07_slide_corredor_1.jpg",
      "/assets/2017_07_slide_corredor_2.jpg",
      "/assets/2017_07_slide_corredor_3.jpg",
    ],
    ctaLabel: "Solicitar Cotización",
    ctaHref: "/contacto/",
  },
  {
    id: "patio",
    title: "EL PATIO",
    description:
      "Ubicado al centro del hotel y rodeado de árboles frutales milenarios encontramos El Patio. Ideal para realizar un evento o celebración exclusiva bajo un ambiente colonial.",
    capacity: "CAPACIDAD PARA 70 INVITADOS",
    images: [
      "/assets/2017_07_slide_patio_7.jpg",
      "/assets/2017_07_slide_patio_8.jpg",
      "/assets/2017_07_slide_patio_9.jpg",
      "/assets/2017_07_slide_patio_10.jpg",
      "/assets/2017_07_slide_patio_11.jpg",
    ],
    ctaLabel: "Solicitar Cotización",
    ctaHref: "/contacto/",
  },
  {
    id: "jardin",
    title: "JARDÍN SANTA CRUZ",
    description:
      "Lo sentimos por el momento no contamos con disponibilidad de este espacio.",
    capacity: "",
    images: [],
    unavailable: true,
  },
];
