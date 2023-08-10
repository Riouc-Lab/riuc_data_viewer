export const routers_menu = [
  {
    id: 1,
    to: "/informacion",
    name: "Información",
  },
  {
    id: 2,
    to: "/laboratorios",
    name: "Laboratorios",
  },
  {
    id: 3,
    to: "/proyectos",
    name: "Proyectos",
  },
  
];
export const routers_submenu_proyects = [
  {
    id: 1,
    parent:3,
    to: "/projectos/map",
    name: "Mapa",
  },
  {
    id: 2,
    to: "/proyectos/canastaBasica",
    name: "Canasta Básica",
  },  
];
