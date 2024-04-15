export const routers_menu = [
  {
    id: 1,
    to: "/informacion",
    name: "Información",
    expanded: false,
  },
  {
    id: 2,
    to: "/laboratorios",
    name: "Laboratorio",
    expanded: false,
  },
  {
    id: 3,
    to: "/quienes_somos",
    name: "Quienes Somos",
    expanded: false,
  },
  {
    id: 4,
    to: "/boletin",
    name: "Boletines",
    expanded: false,
  },
  {
    id: 5,
    to: "/proyectos",
    name: "Proyectos",
    expanded: true,
  },
  {
    id: 6,
    to: "/tendenciaseducativas",
    name: "Tendencias Educativas",
    expanded: false,
  },
  
];
export const routers_submenu_proyects = [
  {
    id: 1,
    parent:3,
    to: "/proyectos/map",
    name: "Mapa",
  },
  {
    id: 2,
    parent:3,
    to: "/proyectos/canastabasica",
    name: "Canasta  Básica",
  },  
];
