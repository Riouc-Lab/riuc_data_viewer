"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import SwitchButton from "../../../components/buttonswitch";
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const DEFAULT_CENTER = [-2.891565, -79.005958];
const coloresPorNivel = {
  1: "#FF0000", // rojo (75-100)
  2: "#FF8000", // naranja (101-500)
  3: "#FFFF00", // amarillo (501-750)
  4: "#80FF00", // verde limón (751-1000)
  5: "#00CC00",  // verde (1001-2000)
  6: "#FBFCF8",   // blanco (2001-3000)
};

const cuadras = [
  {
    nombre: "Cuadra 1",
    color: 2,
    descripcion: [
      "Esta es la primera cuadra.",
      "Tiene un ingreso promedio de 495,833333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.892710, -79.000136],
      [-2.893670, -79.000323],
      [-2.893475, -79.001179],
      [-2.892534, -79.000974],
    ]
  },
  {
    nombre: "Cuadra 2",
    color: 3,
    descripcion: [
      "Esta es la segunda cuadra.",
      "Tiene un ingreso promedio de 695.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.892536, -79.001048],
      [-2.893465, -79.001248],
      [-2.893230, -79.002210],
      [-2.892353, -79.002000],
    ]
  },
  {
    nombre: "Cuadra 3",
    color: 2,
    descripcion: [
      "Esta es la tercera cuadra.",
      "Tiene un ingreso promedio de 500.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.892326, -79.002063],
      [-2.893225, -79.002275],
      [-2.893015, -79.003135],
      [-2.892147, -79.002972],
    ]
  },
  {
    nombre: "Cuadra 4",
    color: 3,
    descripcion: [
      "Esta es la cuarta cuadra.",
      "Tiene un ingreso promedio de 650.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.892135, -79.003020],
      [-2.893000, -79.003200],
      [-2.892800, -79.004040],
      [-2.891900, -79.003860],
    ]
  },
  {
    nombre: "Cuadra 5",
    color: 3,
    descripcion: [
      "Esta es la quinta cuadra.",
      "Tiene un ingreso promedio de 535,714285714286.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.891870, -79.003920],
      [-2.892770, -79.004100],
      [-2.892560, -79.004980],
      [-2.891635, -79.004820],
    ]
  },
  // Agregar más cuadras aquí

  {
    nombre: "Cuadra 6",
    color: 3,
    descripcion: [
      "Esta es la sexta cuadra.",
      "Tiene un ingreso promedio de 716,666666666667",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.891600, -79.004880],
      [-2.892530, -79.005070],
      [-2.892300, -79.005960],
      [-2.891360, -79.005820],
    ]
  },
  {
    nombre: "Cuadra 7",
    color: 4,
    descripcion: [
      "Esta es la séptima cuadra.",
      "Tiene un ingreso promedio de 900.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.891340, -79.005875],
      [-2.892260, -79.006030],
      [-2.892010, -79.006980],
      [-2.891090, -79.006860],
    ]
  },
  {
    nombre: "Cuadra 8",
    color: 3,
    descripcion: [
      "Esta es la octava cuadra.",
      "Tiene un ingreso promedio de 616,6666667.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.891050, -79.006930],
      [-2.891980, -79.007040],
      [-2.891750, -79.007975],
      [-2.890840, -79.007815],
    ]
  },
  {
    nombre: "Cuadra 9",
    color: 4,
    descripcion: [
      "Esta es la novena cuadra.",
      "Tiene un ingreso promedio de 1000.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.890800, -79.007900],
      [-2.891710, -79.008075],
      [-2.891500, -79.008980],
      [-2.890550, -79.008815],
    ]
  },
  {
    nombre: "Cuadra 10",
    color: 2,
    descripcion: [
      "Esta es la décima cuadra.",
      "Tiene un ingreso promedio de 500.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890530, -79.008880],
      [-2.891450, -79.009050],
      [-2.891235, -79.009991],
      [-2.890475, -79.009831],
    ]
  },
  {
    nombre: "Cuadra 11",
    color: 2,
    descripcion: [
      "Esta es la undécima cuadra.",
      "Tiene un ingreso promedio de 266,666666666667.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890449, -79.009924],
      [-2.891213, -79.010086],
      [-2.890988, -79.011007],
      [-2.890363, -79.010891],
    ]
  },
  {
    nombre: "Cuadra 12",
    color: 4,
    descripcion: [
      "Esta es la duodécima cuadra.",
      "Tiene un ingreso promedio de 768,75.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.889545, -79.011006],
      [-2.890261, -79.010950],
      [-2.891005, -79.011065],
      [-2.890756, -79.012015],
      [-2.889785, -79.011825],
    ]
  },
  {
    nombre: "Cuadra 13",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.889797, -79.011899],
      [-2.890762, -79.012070],
      [-2.890552, -79.012975],
      [-2.890063, -79.012870],
    ]
  },
  {
    nombre: "Cuadra 14",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.889159, -79.012850],
      [-2.889975, -79.012810],
      [-2.890005, -79.012925],
      [-2.889865, -79.013507],
      [-2.889218, -79.014299],
      [-2.889023, -79.014460],
      [-2.889163, -79.013549],
    ]
  },
  {
    nombre: "Cuadra 15",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.890065, -79.012925],
      [-2.890553, -79.013031],
      [-2.889940, -79.013467],
    ]
  },
  {
    nombre: "Cuadra 16",
    color: 2,
    descripcion: [
      "Esta es la decimosexta cuadra.",
      "Tiene un ingreso promedio de 140.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888910, -79.011750],
      [-2.889726, -79.011882],
      [-2.889948, -79.012757],
      [-2.889165, -79.012790],
      [-2.889085, -79.012320],
    ]
  },
  {
    nombre: "Cuadra 17",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.888715, -79.011370],
      [-2.889511, -79.011034],
      [-2.889722, -79.011827],
      [-2.888869, -79.011689],
    ]
  },
  {
    nombre: "Cuadra 18",
    color: 2,
    descripcion: [
      "Esta es la decimoséptima cuadra.",
      "Tiene un ingreso promedio de 400.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888735, -79.010275],
      [-2.889360, -79.010215],
      [-2.889335, -79.010460],
      [-2.889460, -79.010965],
      [-2.888920, -79.011210],
      [-2.888730, -79.010675],
    ]
  },
  {
    nombre: "Cuadra 19",
    color: 3,
    descripcion: [
      "Esta es la decimoctava cuadra.",
      "Tiene un ingreso promedio de 600.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.889533, -79.009820],
      [-2.890372, -79.009909],
      [-2.890300, -79.010875],
      [-2.889927, -79.010910],
      [-2.889535, -79.010955],
      [-2.889433, -79.010344],
    ]
  },
  {
    nombre: "Cuadra 20",
    color: 5,
    descripcion: [
      "Esta es la vigésima cuadra.",
      "Tiene un ingreso promedio de 1250 dólares.",
      "Nivel económico alto.",
    ],
    coordenadas: [
      [-2.888825, -79.009865],
      [-2.889475, -79.009808],
      [-2.889395, -79.010155],
      [-2.888745, -79.010222],
    ]
  },
  {
    nombre: "Cuadra 21",
    color: 4,
    descripcion: [
      "Esta es la vigésima primera cuadra.",
      "Tiene un ingreso promedio de 879,166666666667.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.888600, -79.008775],
      [-2.889060, -79.008690],
      [-2.889058, -79.009771],
      [-2.888791, -79.009785],
      [-2.888615, -79.009625],
    ]
  },
  {
    nombre: "Cuadra 22",
    color: 1,
    descripcion: [
      "Esta es la vigésima segunda cuadra.",
      "Tiene un ingreso promedio de 100.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.889127, -79.008666],
      [-2.889735, -79.008746],
      [-2.889480, -79.009745],
      [-2.889128, -79.009765],
    ]
  },
  {
    nombre: "Cuadra 23",
    color: 2,
    descripcion: [
      "Esta es la vigésima tercera cuadra.",
      "Tiene un ingreso promedio de 216,666666666667.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.889808, -79.008768],
      [-2.890450, -79.008887],
      [-2.890401, -79.009817],
      [-2.890036, -79.009760],
      [-2.889550, -79.009740],
    ]
  },
  {
    nombre: "Cuadra 24",
    color: 1,
    descripcion: [
      "Esta es la vigésima cuarta cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.890101, -79.007770],
      [-2.890730, -79.007880],
      [-2.890455, -79.008815],
      [-2.889829, -79.008693],
    ]
  },
  {
    nombre: "Cuadra 25",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.889106, -79.007585],
      [-2.890015, -79.007745],
      [-2.889758, -79.008691],
      [-2.889437, -79.008620],
      [-2.889132, -79.008613],
    ]
  },
  {
    nombre: "Cuadra 26",
    color: 2,
    descripcion: [
      "Esta es la vigésima sexta cuadra.",
      "Tiene un ingreso promedio de 357,14.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888550, -79.007470],
      [-2.889020, -79.007557],
      [-2.889061, -79.008607],
      [-2.888730, -79.008670],
      [-2.888590, -79.008700],
    ]
  },
  {
    nombre: "Cuadra 27",
    color: 1,
    descripcion: [
      "Esta es la vigésima séptima cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.888030, -79.006430],
      [-2.888990, -79.006550],
      [-2.887870, -79.007430],
    ]
  },
  {
    nombre: "Cuadra 28",
    color: 1,
    descripcion: [
      "Esta es la vigésima octava cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.889095, -79.006570],
      [-2.889190, -79.006580],
      [-2.889026, -79.007478],
      [-2.888127, -79.007312],
    ]
  },
  {
    nombre: "Cuadra 29",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.889261, -79.006585],
      [-2.890215, -79.006765],
      [-2.890030, -79.007660],
      [-2.889101, -79.007498],
    ]
  },
  {
    nombre: "Cuadra 30",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.890280, -79.006790],
      [-2.890990, -79.006890],
      [-2.890760, -79.007790],
      [-2.890100, -79.007700],
    ]
  },
  {
    nombre: "Cuadra 31",
    color: 2,
    descripcion: [
      "Esta es la trigésima primera cuadra.",
      "Tiene un ingreso promedio de 286.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890450, -79.005755],
      [-2.891260, -79.005873],
      [-2.891025, -79.006820],
      [-2.890285, -79.006720],
    ]
  },
  {
    nombre: "Cuadra 32",
    color: 2,
    descripcion: [
      "Esta es la trigésima segunda cuadra.",
      "Tiene un ingreso promedio de 295.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.889928, -79.005691],
      [-2.890380, -79.005745],
      [-2.890210, -79.006680],
      [-2.889780, -79.006599],
    ]
  },
  {
    nombre: "Cuadra 33",
    color: 2,
    descripcion: [
      "Esta es la trigésima tercera cuadra.",
      "Tiene un ingreso promedio de 212.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.889420, -79.005626],
      [-2.889851, -79.005673],
      [-2.889710, -79.006580],
      [-2.889270, -79.006505],
    ]
  },
  {
    nombre: "Cuadra 34",
    color: 2,
    descripcion: [
      "Esta es la trigésima cuarta cuadra.",
      "Tiene un ingreso promedio de 305,443333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888715, -79.005998],
      [-2.889265, -79.006079],
      [-2.889195, -79.006490],
      [-2.888650, -79.006430],
    ]
  },
  {
    nombre: "Cuadra 35",
    color: 2,
    descripcion: [
      "Esta es la trigésima quinta cuadra.",
      "Tiene un ingreso promedio de 275.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888794, -79.005525],
      [-2.889345, -79.005614],
      [-2.889279, -79.006019],
      [-2.888726, -79.005936],
    ]
  },
  {
    nombre: "Cuadra 36",
    color: 2,
    descripcion: [
      "Esta es la trigésima sexta cuadra.",
      "Tiene un ingreso promedio de 324,833333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888115, -79.005895],
      [-2.888630, -79.005970],
      [-2.888570, -79.006415],
      [-2.888035, -79.006370],
    ]
  },
  {
    nombre: "Cuadra 37",
    color: 2,
    descripcion: [
      "Esta es la trigésima séptima cuadra.",
      "Tiene un ingreso promedio de 249,5.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888190, -79.005430],
      [-2.888710, -79.005515],
      [-2.888650, -79.005920],
      [-2.888125, -79.005840],
    ]
  },
  {
    nombre: "Cuadra 38",
    color: 2,
    descripcion: [
      "Esta es la trigésima octava cuadra.",
      "Tiene un ingreso promedio de 245,75.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.888340, -79.004705],
      [-2.889435, -79.004880],
      [-2.889345, -79.005530],
      [-2.888205, -79.005355],
    ]
  },
  {
    nombre: "Cuadra 39",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima cuadra.",
      "Tiene un ingreso promedio de 338,2.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.889555, -79.004795],
      [-2.889870, -79.004560],
      [-2.890150, -79.004615],
      [-2.889960, -79.005611],
      [-2.889420, -79.005544],
    ]
  },
  {
    nombre: "Cuadra 40",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima primera cuadra.",
      "Tiene un ingreso promedio de 398,333333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890220, -79.004640],
      [-2.890580, -79.004697],
      [-2.890383, -79.005660],
      [-2.890020, -79.005610],
    ]
  },
  {
    nombre: "Cuadra 41",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima primera cuadra.",
      "Tiene un ingreso promedio de 400.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890550, -79.005210],
      [-2.891405, -79.005345],
      [-2.891271, -79.005805],
      [-2.890460, -79.005685],
    ]
  },
  {
    nombre: "Cuadra 42",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima segunda cuadra.",
      "Tiene un ingreso promedio de 487,5.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890645, -79.004715],
      [-2.891535, -79.004880],
      [-2.891425, -79.005280],
      [-2.890560, -79.005150],
    ]
  },
  {
    nombre: "Cuadra 43",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima tercera cuadra.",
      "Tiene un ingreso promedio de 425.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890800, -79.003730],
      [-2.891806, -79.003915],
      [-2.891565, -79.004795],
      [-2.890670, -79.004630],
    ]
  },
  {
    nombre: "Cuadra 44",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.890920, -79.002822],
      [-2.892070, -79.003030],
      [-2.891830, -79.003845],
      [-2.890805, -79.003675],
    ]
  },
  {
    nombre: "Cuadra 45",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima quinta cuadra.",
      "Tiene un ingreso promedio de 400.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.891050, -79.001849],
      [-2.892270, -79.002057],
      [-2.892090, -79.002960],
      [-2.890920, -79.002741],
      [-2.890940, -79.002350],
    ]
  },
  {
    nombre: "Cuadra 46",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima sexta cuadra.",
      "Tiene un ingreso promedio de 200.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.891320, -79.000826],
      [-2.892460, -79.001025],
      [-2.892285, -79.001983],
      [-2.891070, -79.001780],
    ]
  },
  {
    nombre: "Cuadra 47",
    color: 3,
    descripcion: [
      "Esta es la cuadragésima séptima cuadra.",
      "Tiene un ingreso promedio de 516,666666666667.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.891575, -78.999925],
      [-2.892640, -79.000120],
      [-2.892470, -79.000960],
      [-2.891340, -79.000745],
    ]
  },
  {
    nombre: "Cuadra 48",
    color: 2,
    descripcion: [
      "Esta es la cuadragésima octava cuadra.",
      "Tiene un ingreso promedio de 366,666666666667.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890750, -78.999783],
      [-2.891505, -78.999915],
      [-2.891270, -79.000785],
      [-2.890690, -79.000645],
      [-2.890815, -78.999975],
      [-2.890720, -78.999960],
    ]
  },
  {
    nombre: "Cuadra 49",
    color: 3,
    descripcion: [
      "Esta es la cuadragésima novena cuadra.",
      "Tiene un ingreso promedio de 550.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.890890, -79.000815],
      [-2.891230, -79.000885],
      [-2.891060, -79.001540],
      [-2.890905, -79.001505],
      [-2.890780, -79.001425],
    ]
  },
  {
    nombre: "Cuadra 50",
    color: 2,
    descripcion: [
      "Esta es la quincuagésima cuadra.",
      "Tiene un ingreso promedio de 428.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.890000, -79.001700],
      [-2.890966, -79.001835],
      [-2.890859, -79.002305],
      [-2.890830, -79.002700],
      [-2.889880, -79.002515],
    ]
  },
  {
    nombre: "Cuadra 51",
    color: 2,
    descripcion: [
      "Esta es la quincuagésima primera cuadra.",
      "Tiene un ingreso promedio de 488,2.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888925, -79.001520],
      [-2.889930, -79.001670],
      [-2.889795, -79.002485],
      [-2.888865, -79.002315],
    ]
  },
  {
    nombre: "Cuadra 52",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.888055, -79.001372],
      [-2.888685, -79.001372],
      [-2.888646, -79.002316],
      [-2.887965, -79.002315],
    ]
  },
  {
    nombre: "Cuadra 53",
    color: 2,
    descripcion: [
      "Esta es la quincuagésima tercera cuadra.",
      "Tiene un ingreso promedio de 250.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887640, -79.000220],
      [-2.888720, -79.000150],
      [-2.888715, -79.000457],
      [-2.887635, -79.000565],
    ]
  },
  {
    nombre: "Cuadra 54",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.887650, -78.999850],
      [-2.888730, -78.999730],
      [-2.888720, -79.000080],
      [-2.887645, -79.000155],
    ]
  },
  {
    nombre: "Cuadra 55",
    color: 4,
    descripcion: [
      "Esta es la quincuagésima quinta cuadra.",
      "Tiene un ingreso promedio de 900.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.887665, -78.999310],
      [-2.888755, -78.999478],
      [-2.888740, -78.999669],
      [-2.887655, -78.999775],
    ]
  },
  {
    nombre: "Cuadra 56",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.887640, -79.000650],
      [-2.888035, -79.000620],
      [-2.887890, -79.002325],
      [-2.887595, -79.002326],
    ]
  },
  {
    nombre: "Cuadra 57",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.886595, -79.001195],
      [-2.887555, -79.001140],
      [-2.887520, -79.002320],
      [-2.886630, -79.002320],
    ]
  },
  {
    nombre: "Cuadra 58",
    color: 1,
    descripcion: [
      "Esta es la quincuagésima octava cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.886590, -79.000740],
      [-2.887565, -79.000655],
      [-2.887550, -79.001065],
      [-2.886590, -79.001117],
    ]
  },
  {
    nombre: "Cuadra 59",
    color: 3,
    descripcion: [
      "Esta es la quincuagésima novena cuadra.",
      "Tiene un ingreso promedio de 550.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.887000, -78.999195],
      [-2.887583, -78.999300],
      [-2.887560, -79.000580],
      [-2.887010, -79.000610],
    ]
  },
  {
    nombre: "Cuadra 60",
    color: 2,
    descripcion: [
      "Esta es la sexagésima cuadra.",
      "Tiene un ingreso promedio de 300.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886100, -79.000150],
      [-2.886945, -79.000060],
      [-2.886940, -79.000615],
      [-2.885820, -79.000740],
    ]
  },
  {
    nombre: "Cuadra 61",
    color: 2,
    descripcion: [
      "Esta es la sexagésima primera cuadra.",
      "Tiene un ingreso promedio de 291,25.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886508, -78.999093],
      [-2.886920, -78.999188],
      [-2.886940, -78.999999],
      [-2.886140, -79.000065],
      [-2.886414, -78.999485],
      [-2.886513, -78.999485],
    ]
  },
  {
    nombre: "Cuadra 62",
    color: 2,
    descripcion: [
      "Esta es la sexagésima segunda cuadra.",
      "Tiene un ingreso promedio de 110.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885720, -78.999005],
      [-2.886405, -78.999075],
      [-2.886260, -78.999585],
      [-2.885590, -78.999425],
    ]
  },
  {
    nombre: "Cuadra 63",
    color: 2,
    descripcion: [
      "Esta es la sexagésima tercera cuadra.",
      "Tiene un ingreso promedio de 106,285714285714.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885550, -78.999494],
      [-2.886240, -78.999645],
      [-2.886000, -79.000170],
      [-2.885383, -78.999995],
    ]
  },
  {
    nombre: "Cuadra 64",
    color: 2,
    descripcion: [
      "Esta es la sexagésima cuarta cuadra.",
      "Tiene un ingreso promedio de 330.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885350, -79.000055],
      [-2.885960, -79.000240],
      [-2.885740, -79.000759],
      [-2.885080, -79.000815],
    ]
  },
  {
    nombre: "Cuadra 65",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.885180, -78.998430],
      [-2.885415, -78.998410],
      [-2.885575, -78.998575],
      [-2.885316, -78.999350],
      [-2.884965, -78.999145],

    ]
  },
  {
    nombre: "Cuadra 66",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.884785, -78.998435],
      [-2.885110, -78.998430],
      [-2.884905, -78.999120],
      [-2.884630, -78.998930],
    ]
  },
  {
    nombre: "Cuadra 67",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.884485, -78.998465],
      [-2.884720, -78.998415],
      [-2.884575, -78.998900],
      [-2.884380, -78.998825],
    ]
  },
  {
    nombre: "Cuadra 68",
    color: 1,
    descripcion: [
      "Esta es la sexagésima octava cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.884360, -78.998885],
      [-2.885173, -78.999355],
      [-2.885030, -78.999645],
      [-2.884280, -78.999140],
    ]
  },
  {
    nombre: "Cuadra 69",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.884260, -78.999215],
      [-2.884980, -78.999690],
      [-2.884875, -78.999975],
      [-2.884145, -78.999550],
    ]
  },
  {
    nombre: "Cuadra 70",
    color: 4,
    descripcion: [
      "Esta es la sexagésima novena cuadra.",
      "Tiene un ingreso promedio de 1000.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.884110, -78.999625],
      [-2.884880, -79.000057],
      [-2.884933, -79.000430],
      [-2.884890, -79.000525],
      [-2.884020, -78.999980],
    ]
  },
  {
    nombre: "Cuadra 71",
    color: 2,
    descripcion: [
      "Esta es la septuagésima cuadra.",
      "Tiene un ingreso promedio de 250.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884000, -79.000035],
      [-2.884875, -79.000575],
      [-2.884750, -79.000960],
      [-2.884365, -79.000855],
      [-2.884123, -79.001105],
      [-2.883990, -79.001135],
    ]
  },
  {
    nombre: "Cuadra 72",
    color: 2,
    descripcion: [
      "Esta es la septuagésima primera cuadra.",
      "Tiene un ingreso promedio de 433,333333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884431, -79.000927],
      [-2.884722, -79.001024],
      [-2.884548, -79.001455],
      [-2.884358, -79.001447],
      [-2.884359, -79.000994],
    ]
  },
  {
    nombre: "Cuadra 73",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.883275, -79.000145],
      [-2.883910, -79.000035],
      [-2.883920, -79.001145],
      [-2.883570, -79.001115],
      [-2.883505, -79.001080],
    ]
  },
  {
    nombre: "Cuadra 74",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.883137, -78.999700],
      [-2.884045, -78.999615],
      [-2.883930, -78.999955],
      [-2.883255, -79.000050],
    ]
  },
  {
    nombre: "Cuadra 75",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.883525, -78.999315],
      [-2.884180, -78.999195],
      [-2.884065, -78.999525],
      [-2.883570, -78.999582],
    ]
  },
  {
    nombre: "Cuadra 76",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.883637, -78.998715],
      [-2.884365, -78.998515],
      [-2.884205, -78.999117],
      [-2.883852, -78.999175],
    ]
  },
  {
    nombre: "Cuadra 77",
    color: 2,
    descripcion: [
      "Esta es la septuagésima séptima cuadra.",
      "Tiene un ingreso promedio de 310.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.883010, -79.000730],
      [-2.883310, -79.000645],
      [-2.883475, -79.001180],
      [-2.883910, -79.001215],
      [-2.883905, -79.001750],
      [-2.883050, -79.002105],
    ]
  },
  {
    nombre: "Cuadra 78",
    color: 1,
    descripcion: [
      "Esta es la septuagésima octava cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.882350, -79.000827],
      [-2.882925, -79.000765],
      [-2.882965, -79.002105],
      [-2.882455, -79.002125],
      [-2.882412, -79.002072],
    ]
  },
  {
    nombre: "Cuadra 79",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.882145, -78.999625],
      [-2.882455, -78.999305],
      [-2.882494, -78.999576],
      [-2.882791, -79.000234],
      [-2.882920, -79.000677],
      [-2.882319, -79.000749],
      [-2.882210, -79.000218],
    ]
  },
  {
    nombre: "Cuadra 80",
    color: 1,
    descripcion: [
      "Esta es la septuagésima novena cuadra.",
      "Tiene un ingreso promedio de 37,5.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.882538, -78.999445],
      [-2.882555, -78.999219],
      [-2.882680, -78.999030],
      [-2.882820, -78.998960],
      [-2.883290, -79.000570],
      [-2.883000, -79.000670],
      [-2.882880, -79.000227],
    ]
  },
  {
    nombre: "Cuadra 81",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.882105, -78.998545],
      [-2.882610, -78.998995],
      [-2.882130, -78.999515],
    ]
  },
  {
    nombre: "Cuadra 82",
    color: 4,
    descripcion: [
      "Esta es la octogésima segunda cuadra.",
      "Tiene un ingreso promedio de 800.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.881750, -78.998265],
      [-2.881850, -78.998300],
      [-2.882030, -78.998450],
      [-2.882070, -78.999595],
      [-2.881928, -78.999675],
      [-2.881740, -78.999590],
    ]
  },
  {
    nombre: "Cuadra 83",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.881735, -78.999675],
      [-2.881923, -78.999750],
      [-2.882080, -78.999669],
      [-2.882175, -79.000400],
      [-2.881930, -79.000085],
      [-2.881750, -79.000135],
    ]
  },
  {
    nombre: "Cuadra 84",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.881740, -79.000221],
      [-2.881895, -79.000165],
      [-2.882182, -79.000485],
      [-2.882246, -79.000760],
      [-2.882039, -79.000832],
      [-2.881730, -79.000839],
    ]
  },
  {
    nombre: "Cuadra 85",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.881740, -79.000915],
      [-2.882270, -79.000845],
      [-2.882295, -79.001210],
      [-2.882330, -79.002082],
      [-2.882360, -79.002120],
      [-2.881740, -79.002125],
    ]
  },
  {
    nombre: "Cuadra 86",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.882024, -79.002195],
      [-2.882430, -79.002190],
      [-2.882780, -79.002945],
      [-2.882497, -79.003025],
      [-2.882202, -79.003065],
    ]
  },
  {
    nombre: "Cuadra 87",
    color: 2,
    descripcion: [
      "Esta es la octogésima séptima cuadra.",
      "Tiene un ingreso promedio de 300.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.881740, -79.002190],
      [-2.881956, -79.002195],
      [-2.882134, -79.003065],
      [-2.881890, -79.003130],
    ]
  },
  {
    nombre: "Cuadra 88",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.881910, -79.003185],
      [-2.882495, -79.003105],
      [-2.882825, -79.003015],
      [-2.883130, -79.003660],
      [-2.882570, -79.003825],
      [-2.882380, -79.003800],
      [-2.882205, -79.003720],
    ]
  },
  {
    nombre: "Cuadra 89",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.882205, -79.004430],
      [-2.882571, -79.004282],
      [-2.883060, -79.004703],
      [-2.883170, -79.004925],
      [-2.882830, -79.005147],
    ]
  },
  {
    nombre: "Cuadra 90",
    color: 1,
    descripcion: [
      "Esta es la nonagésima cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.882225, -79.003805],
      [-2.882540, -79.003885],
      [-2.883425, -79.003660],
      [-2.883392, -79.003853],
      [-2.883480, -79.004575],
      [-2.883575, -79.005072],
      [-2.883465, -79.006870],
      [-2.883342, -79.005383],
      [-2.883227, -79.004866],
      [-2.883005, -79.004562],
      [-2.882415, -79.004015],
    ]
  },
  {
    nombre: "Cuadra 91",
    color: 1,
    descripcion: [
      "Esta es la nonagésima primera cuadra.",
      "Tiene un ingreso promedio de 0.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.882695, -79.005630],
      [-2.882705, -79.005467],
      [-2.882777, -79.005296],
      [-2.883180, -79.004990],
      [-2.883280, -79.005460],
      [-2.883290, -79.006074],
      [-2.883420, -79.007015],
      [-2.883211, -79.007064],
      [-2.883150, -79.007115],
    ]
  },
  {
    nombre: "Cuadra 92",
    color: 2,
    descripcion: [
      "Esta es la nonagésima segunda cuadra.",
      "Tiene un ingreso promedio de 109,333333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.883205, -79.007250],
      [-2.883280, -79.007160],
      [-2.883440, -79.007120],
      [-2.883515, -79.007629],
      [-2.883760, -79.008431],
      [-2.883300, -79.008720],
      [-2.883040, -79.008230],
    ]
  },
  {
    nombre: "Cuadra 93",
    color: 2,
    descripcion: [
      "Esta es la nonagésima tercera cuadra.",
      "Tiene un ingreso promedio de 276,5.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.883413, -79.008765],
      [-2.883820, -79.008545],
      [-2.884215, -79.009480],
      [-2.883600, -79.009694],
    ]
  },
  {
    nombre: "Cuadra 94",
    color: 2,
    descripcion: [
      "Esta es la nonagésima cuarta cuadra.",
      "Tiene un ingreso promedio de 266,5.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.883831, -79.009682],
      [-2.884250, -79.009535],
      [-2.884525, -79.010220],
      [-2.884635, -79.010630],
      [-2.884096, -79.010642],
    ]
  },
  {
    nombre: "Cuadra 95",
    color: 2,
    descripcion: [
      "Esta es la nonagésima quinta cuadra.",
      "Tiene un ingreso promedio de 196,666666666667.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884150, -79.010727],
      [-2.884675, -79.010711],
      [-2.884860, -79.011492],
      [-2.884334, -79.011484],
    ]
  },
  {
    nombre: "Cuadra 96",
    color: 2,
    descripcion: [
      "Esta es la nonagésima sexta cuadra.",
      "Tiene un ingreso promedio de 291,571428571429.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884575, -79.012106],
      [-2.884990, -79.012075],
      [-2.885030, -79.012809],
      [-2.884600, -79.012825],
    ]
  },
  {
    nombre: "Cuadra 97",
    color: 2,
    descripcion: [
      "Esta es la nonagésima séptima cuadra.",
      "Tiene un ingreso promedio de 134,2.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884607, -79.012895],
      [-2.885025, -79.012885],
      [-2.884950, -79.013627],
      [-2.884555, -79.013627],
    ]
  },
  {
    nombre: "Cuadra 98",
    color: 2,
    descripcion: [
      "Esta es la nonagésima octava cuadra.",
      "Tiene un ingreso promedio de 243,75.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884305, -79.013715],
      [-2.884935, -79.013700],
      [-2.884775, -79.014440],
      [-2.884175, -79.015730],
      [-2.884055, -79.015647],
      [-2.884000, -79.015362],
      [-2.884415, -79.014641],
      [-2.884470, -79.014230],
    ]
  },
  {
    nombre: "Cuadra 99",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.883550, -79.014775],
      [-2.884320, -79.014685],
      [-2.884090, -79.015110],
      [-2.883950, -79.015310],
    ]
  },
  {
    nombre: "Cuadra 100",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadra.",
      "Tiene un ingreso promedio de 421,909090909091.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885215, -79.008025],
      [-2.885505, -79.008170],
      [-2.886255, -79.008880],
      [-2.886385, -79.009160],
      [-2.886100, -79.009330],
      [-2.885766, -79.009168],
      [-2.885500, -79.009325],
      [-2.885174, -79.008975],
      [-2.885308, -79.008815],
      [-2.885138, -79.008525],
    ]
  },
  {
    nombre: "Cuadra 101",
    color: 2,
    descripcion: [
      "Esta es la centésima primera cuadra.",
      "Tiene un ingreso promedio de 187.",
      "Nivel económico medio-bajo",
    ],
    coordenadas: [
      [-2.884200, -79.009106],
      [-2.884825, -79.008785],
      [-2.885870, -79.009788],
      [-2.885270, -79.010130],
      [-2.885060, -79.009945],
      [-2.884915, -79.009740],
      [-2.884530, -79.009905],
    ]
  },

  // Cuadra 102 pendiente
  {
    nombre: "Cuadra 102",
    color: 1,
    descripcion: [
      "Esta es la centésima tercera cuadra.",
      "Tiene un ingreso promedio de 78,3333333333333.",
      "Nivel económico bajo.",
    ],
    coordenadas: [
      [-2.885321, -79.010167],
      [-2.885905, -79.009825],
      [-2.886205, -79.010135],
      [-2.885560, -79.010600],
      [-2.885455, -79.010320],
    ]
  },

  {
    nombre: "Cuadra 103",
    color: 3,
    descripcion: [
      "Esta es la centésima tercera cuadra.",
      "Tiene un ingreso promedio de 666.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.884840, -79.010910],
      [-2.885570, -79.010785],
      [-2.886270, -79.010205],
      [-2.886505, -79.010410],
      [-2.886075, -79.010835],
      [-2.885980, -79.010725],
      [-2.885735, -79.011035],
      [-2.885760, -79.011440],
      [-2.884965, -79.011535],
    ]
  },
  {
    nombre: "Cuadra 104",
    color: 2,
    descripcion: [
      "Esta es la centésima cuarta cuadra.",
      "Tiene un ingreso promedio de 233.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884985, -79.011615],
      [-2.886115, -79.011480],
      [-2.886185, -79.011645],
      [-2.886170, -79.012105],
      [-2.885100, -79.012030],
    ]
  },
  {
    nombre: "Cuadra 105",
    color: 2,
    descripcion: [
      "Esta es la centésima quinta cuadra.",
      "Tiene un ingreso promedio de 188,8.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885110, -79.012100],
      [-2.885820, -79.012145],
      [-2.885790, -79.012730],
      [-2.885145, -79.012800],
    ]
  },
  {
    nombre: "Cuadra 106",
    color: 2,
    descripcion: [
      "Esta es la centésima sexta cuadra.",
      "Tiene un ingreso promedio de 253,9.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885115, -79.012865],
      [-2.885485, -79.012845],
      [-2.885445, -79.013945],
      [-2.884990, -79.014005],
      [-2.885090, -79.013436],
    ]
  },
  {
    nombre: "Cuadra 107",
    color: 2,
    descripcion: [
      "Esta es la centésima séptima cuadra.",
      "Tiene un ingreso promedio de 106,666666666667.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.884985, -79.014070],
      [-2.885835, -79.013970],
      [-2.885855, -79.014455],
      [-2.885945, -79.014860],
      [-2.885474, -79.014999],
      [-2.884675, -79.015010],
    ]
  },
  {
    nombre: "Cuadra 108",
    color: 3,
    descripcion: [
      "Esta es la centésima octava cuadra.",
      "Tiene un ingreso promedio de 506,65.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.884625, -79.015060],
      [-2.885514, -79.015065],
      [-2.885970, -79.014915],
      [-2.886025, -79.015195],
      [-2.884375, -79.015869],
      [-2.884255, -79.015785],
    ]
  },
  {
    nombre: "Cuadra 109",
    color: 2,
    descripcion: [
      "Esta es la centésima novena cuadra.",
      "Tiene un ingreso promedio de 500.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885885, -79.013989],
      [-2.886801, -79.014102],
      [-2.887838, -79.014091],
      [-2.887722, -79.014526],
      [-2.887552, -79.014856],
      [-2.887015, -79.015065],
      [-2.886115, -79.015180],

    ]
  },
  {
    nombre: "Cuadra 110",
    color: 2,
    descripcion: [
      "Esta es la centésima décima cuadra.",
      "Tiene un ingreso promedio de 206,571428571429.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886600, -79.012200],
      [-2.887405, -79.011930],
      [-2.887760, -79.012270],
      [-2.887763, -79.012443],
      [-2.887345, -79.013100],
      [-2.887360, -79.013220],
      [-2.887440, -79.013330],
      [-2.887905, -79.013280],
      [-2.887992, -79.013349],
      [-2.888000, -79.013580],
      [-2.887865, -79.014030],
      [-2.886994, -79.014030],
      [-2.886445, -79.013975],
      [-2.886390, -79.013315],
      [-2.886460, -79.013235],
      [-2.886670, -79.013165],
      [-2.886725, -79.013020],
    ]
  },
  {
    nombre: "Cuadra 111",
    color: 2,
    descripcion: [
      "Esta es la centésima undécima cuadra.",
      "Tiene un ingreso promedio de 466,666666666667.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886130, -79.010890],
      [-2.886560, -79.010470],
      [-2.886730, -79.010700],
      [-2.886840, -79.011015],
      [-2.886815, -79.011965],
      [-2.886775, -79.012080],
      [-2.886665, -79.012120],
      [-2.886250, -79.012105],
      [-2.886270, -79.011650],
      [-2.886175, -79.011440],
      [-2.886343, -79.011255],
    ]
  },
  {
    nombre: "Cuadra 112",
    color: 2,
    descripcion: [
      "Esta es la centésima duodécima cuadra.",
      "Tiene un ingreso promedio de 369,8.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887445, -79.011845],
      [-2.887675, -79.011775],
      [-2.888171, -79.012195],
      [-2.888220, -79.012370],
      [-2.888225, -79.012615],
      [-2.888585, -79.013363],
      [-2.888630, -79.013505],
      [-2.888567, -79.014020],
      [-2.887945, -79.014046],
      [-2.888101, -79.013490],
      [-2.888030, -79.013265],
      [-2.887878, -79.013185],
      [-2.887500, -79.013230],
      [-2.887435, -79.013165],
      [-2.887435, -79.013083],
      [-2.887860, -79.012415],
      [-2.887825, -79.012180],
      [-2.887440, -79.011880],
    ]
  },
  {
    nombre: "Cuadra 113",
    color: 2,
    descripcion: [
      "Esta es la centésima decimotercera cuadra.",
      "Tiene un ingreso promedio de 317.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886605, -79.010415],
      [-2.886965, -79.010115],
      [-2.887220, -79.010575],
      [-2.887340, -79.011095],
      [-2.887362, -79.011850],
      [-2.886885, -79.012035],
      [-2.886905, -79.010995],
      [-2.886775, -79.010655],
      [-2.886665, -79.010470],
    ]
  },
  {
    nombre: "Cuadra 114",
    color: 2,
    descripcion: [
      "Esta es la centésima decimocuarta cuadra.",
      "Tiene un ingreso promedio de 300.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885550, -79.009395],
      [-2.885770, -79.009235],
      [-2.886130, -79.009405],
      [-2.886420, -79.009215],
      [-2.886918, -79.010056],
      [-2.886555, -79.010365],
    ]
  },
  {
    nombre: "Cuadra 115",
    color: 2,
    descripcion: [
      "Esta es la centésima decimoquinta cuadra.",
      "Tiene un ingreso promedio de 282.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886405, -79.009015],
      [-2.887575, -79.010055],
      [-2.888435, -79.011425],
      [-2.887765, -79.011695],
      [-2.887605, -79.010945],
      [-2.887085, -79.010045],
      [-2.886980, -79.010005],
    ]
  },
  {
    nombre: "Cuadra 116",
    color: 2,
    descripcion: [
      "Esta es la centésima decimosexta cuadra.",
      "Tiene un ingreso promedio de 220,571428571429.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887790, -79.011770],
      [-2.888460, -79.011475],
      [-2.888800, -79.012200],
      [-2.888929, -79.012989],
      [-2.888814, -79.014120],
      [-2.888635, -79.014020],
      [-2.888705, -79.013465],
      [-2.888330, -79.012660],
      [-2.888240, -79.012145],
    ]
  },
  {
    nombre: "Cuadra 117",
    color: 2,
    descripcion: [
      "Esta es la centésima decimoséptima cuadra.",
      "Tiene un ingreso promedio de 150.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.882366, -79.014202],
      [-2.882640, -79.013980],
      [-2.883440, -79.014751],
      [-2.882830, -79.014885],
      [-2.882505, -79.014900],
      [-2.882505, -79.014570],
    ]
  },
  {
    nombre: "Cuadra 118",
    color: 2,
    descripcion: [
      "Esta es la centésima decimoctava cuadra.",
      "Tiene un ingreso promedio de 150.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.882215, -79.015190],
      [-2.882500, -79.014970],
      [-2.882872, -79.014941],
      [-2.883500, -79.014800],
      [-2.883665, -79.014995],
      [-2.882840, -79.015289],
      [-2.882875, -79.015385],
      [-2.883700, -79.015050],
      [-2.883845, -79.015260],
      [-2.883410, -79.015535],
      [-2.882945, -79.015708],
      [-2.882500, -79.015765],
      [-2.882400, -79.015460],
    ]
  },
  {
    nombre: "Cuadra 119",
    color: 2,
    descripcion: [
      "Esta es la centésima decimonovena cuadra.",
      "Tiene un ingreso promedio de 212,6.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.882275, -79.015890],
      [-2.882979, -79.015775],
      [-2.883480, -79.015610],
      [-2.883885, -79.015315],
      [-2.883950, -79.015430],
      [-2.884035, -79.016070],
      [-2.883845, -79.016515],
      [-2.883166, -79.016515],
      [-2.882965, -79.016055],
      [-2.882400, -79.016240],
    ]
  },
  {
    nombre: "Cuadra 120",
    color: 2,
    descripcion: [
      "Esta es la centésima vigésima cuadra.",
      "Tiene un ingreso promedio de 342,6.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.882995, -79.014185],
      [-2.884128, -79.014085],
      [-2.884155, -79.014275],
      [-2.884390, -79.014289],
      [-2.884330, -79.014620],
      [-2.883515, -79.014700],
    ]
  },
  {
    nombre: "Cuadra 121",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.883375, -79.013430],
      [-2.883500, -79.013290],
      [-2.883595, -79.013270],
      [-2.883685, -79.013300],
      [-2.883780, -79.014025],
      [-2.883450, -79.014040],
    ]
  },
  {
    nombre: "Cuadra 122",
    descripcion: [
      "Datos inconclusos.",
    ],
    coordenadas: [
      [-2.882765, -79.013985],
      [-2.883300, -79.013480],
      [-2.883380, -79.014055],
      [-2.882975, -79.014110],
      [-2.882910, -79.014100],
    ]
  },
  {
    nombre: "Cuadra 123",
    color: 2,
    descripcion: [
      "Esta es la centésima vigésima tercera cuadra.",
      "Tiene un ingreso promedio de 329,090909090909.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887055, -79.009250],
      [-2.887565, -79.009090],
      [-2.887630, -79.009725],
    ]
  },
  {
    nombre: "Cuadra 124",
    color: 2,
    descripcion: [
      "Esta es la centésima vigésima cuarta cuadra.",
      "Tiene un ingreso promedio de 156,333333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887770, -79.009027],
      [-2.888520, -79.008797],
      [-2.888535, -79.009620],
      [-2.887996, -79.009895],
      [-2.887925, -79.010015],
      [-2.887800, -79.009900],
      [-2.887850, -79.009810],
    ]
  },
  {
    nombre: "Cuadra 125",
    color: 2,
    descripcion: [
      "Esta es la centésima vigésima quinta cuadra.",
      "Tiene un ingreso promedio de 143,090909090909.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887855, -79.007510],
      [-2.888040, -79.007370],
      [-2.888470, -79.007454],
      [-2.888515, -79.008715],
      [-2.887735, -79.008945],
      [-2.887720, -79.008630],
    ]
  },
  {
    nombre: "Cuadra 126",
    color: 4,
    descripcion: [
      "Esta es la centésima vigésima sexta cuadra.",
      "Tiene un ingreso promedio de 883.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.886380, -79.008650],
      [-2.887630, -79.007695],
      [-2.887520, -79.008670],
      [-2.887550, -79.009020],
      [-2.886985, -79.009185],
    ]
  },
  {
    nombre: "Cuadra 127",
    color: 2,
    descripcion: [
      "Esta es la centésima vigésima séptima cuadra.",
      "Tiene un ingreso promedio de 300.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885205, -79.006710],
      [-2.885750, -79.006415],
      [-2.886360, -79.008025],
      [-2.887005, -79.008070],
      [-2.886330, -79.008600],
      [-2.885840, -79.008144],
      [-2.885350, -79.007340],
    ]
  },
  {
    nombre: "Cuadra 128",
    color: 2,
    descripcion: [
      "Esta es la centésima vigésima octava cuadra.",
      "Tiene un ingreso promedio de 333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885800, -79.006390],
      [-2.886295, -79.006205],
      [-2.886505, -79.006225],
      [-2.886365, -79.007865],
    ]
  },
  {
    nombre: "Cuadra 129",
    color: 4,
    descripcion: [
      "Esta es la centésima vigésima novena cuadra.",
      "Tiene un ingreso promedio de 959,666666666667.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.886570, -79.006240],
      [-2.887356, -79.006339],
      [-2.887375, -79.006723],
      [-2.886530, -79.006660],
    ]
  },
  {
    nombre: "Cuadra 130",
    color: 4,
    descripcion: [
      "Esta es la centésima trigésima cuadra.",
      "Tiene un ingreso promedio de 841,666666666667.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.887420, -79.006350],
      [-2.887815, -79.006405],
      [-2.887650, -79.007590],
      [-2.887500, -79.007700],
    ]
  },
  {
    nombre: "Cuadra 131",
    color: 4,
    descripcion: [
      "Esta es la centésima trigésima primera cuadra.",
      "Tiene un ingreso promedio de 761.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.887495, -79.005589],
      [-2.887980, -79.005435],
      [-2.887840, -79.006340],
      [-2.887405, -79.006276],
      [-2.887490, -79.005710],
    ]
  },
  {
    nombre: "Cuadra 132",
    color: 3,
    descripcion: [
      "Esta es la centésima trigésima segunda cuadra.",
      "Tiene un ingreso promedio de 654,714285714286.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.886622, -79.005838],
      [-2.887429, -79.005609],
      [-2.887430, -79.005725],
      [-2.887340, -79.006200],
      [-2.887355, -79.006266],
      [-2.886580, -79.006165],
    ]
  },
  {
    nombre: "Cuadra 133",
    color: 2,
    descripcion: [
      "Esta es la centésima trigésima tercera cuadra.",
      "Tiene un ingreso promedio de 490.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885110, -79.006085],
      [-2.885830, -79.005730],
      [-2.886450, -79.005705],
      [-2.886435, -79.006145],
      [-2.886295, -79.006125],
      [-2.886010, -79.006205],
      [-2.885200, -79.006640],
    ]
  },
  {
    nombre: "Cuadra 134",
    color: 3,
    descripcion: [
      "Esta es la centésima trigésima cuarta cuadra.",
      "Tiene un ingreso promedio de 658,25.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.885720, -79.004815],
      [-2.886280, -79.004725],
      [-2.886385, -79.004810],
      [-2.886440, -79.005625],
      [-2.885840, -79.005655],
    ]
  },
  {
    nombre: "Cuadra 135",
    color: 3,
    descripcion: [
      "Esta es la centésima trigésima quinta cuadra.",
      "Tiene un ingreso promedio de 566,181818181818.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.886670, -79.004830],
      [-2.887225, -79.004775],
      [-2.887400, -79.005545],
      [-2.886610, -79.005760],
      [-2.886575, -79.005010],
    ]
  },
  {
    nombre: "Cuadra 136",
    color: 2,
    descripcion: [
      "Esta es la centésima trigésima sexta cuadra.",
      "Tiene un ingreso promedio de 415,222222222222.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887285, -79.004765],
      [-2.888120, -79.004670],
      [-2.887990, -79.005365],
      [-2.887480, -79.005520],
    ]
  },
  {
    nombre: "Cuadra 137",
    color: 3,
    descripcion: [
      "Esta es la centésima trigésima séptima cuadra.",
      "Tiene un ingreso promedio de 688,888888888889.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.887170, -79.003290],
      [-2.888385, -79.003585],
      [-2.888155, -79.004590],
      [-2.886940, -79.004720],
      [-2.886880, -79.004530],
    ]
  },
  {
    nombre: "Cuadra 138",
    color: 2,
    descripcion: [
      "Esta es la centésima trigésima octava cuadra.",
      "Tiene un ingreso promedio de 366,5.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886505, -79.003780],
      [-2.886970, -79.003870],
      [-2.886880, -79.004255],
      [-2.886425, -79.004200],
    ]
  },
  {
    nombre: "Cuadra 139",
    color: 2,
    descripcion: [
      "Esta es la centésima trigésima novena cuadra.",
      "Tiene un ingreso promedio de 344,333333333333.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.886615, -79.003145],
      [-2.887105, -79.003260],
      [-2.886980, -79.003795],
      [-2.886505, -79.003710],
    ]
  },
  {
    nombre: "Cuadra 140",
    color: 3,
    descripcion: [
      "Esta es la centésima cuadragésima cuadra.",
      "Tiene un ingreso promedio de 695,555555555556.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.886145, -79.003135],
      [-2.886445, -79.003115],
      [-2.886535, -79.003170],
      [-2.886270, -79.004665],
      [-2.885950, -79.004695],
    ]
  },
  {
    nombre: "Cuadra 141",
    color: 3,
    descripcion: [
      "Esta es la centésima cuadragésima primera cuadra.",
      "Tiene un ingreso promedio de 722.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.885605, -79.003890],
      [-2.885980, -79.003920],
      [-2.885885, -79.004715],
      [-2.885560, -79.004750],
    ]
  },
  {
    nombre: "Cuadra 142",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadragésima segunda cuadra.",
      "Tiene un ingreso promedio de 308.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885630, -79.003220],
      [-2.886065, -79.003135],
      [-2.886000, -79.003845],
      [-2.885605, -79.003830],
    ]
  },
  {
    nombre: "Cuadra 143",
    color: 4,
    descripcion: [
      "Esta es la centésima cuadragésima tercera cuadra.",
      "Tiene un ingreso promedio de 838,5.",
      "Nivel económico medio-alto.",
    ],
    coordenadas: [
      [-2.884605, -79.003420],
      [-2.885580, -79.003235],
      [-2.885490, -79.004770],
      [-2.885225, -79.004798],
      [-2.885076, -79.004745],
      [-2.884800, -79.004540],
    ]
  },
  {
    nombre: "Cuadra 144",
    color: 5,
    descripcion: [
      "Esta es la centésima cuadragésima cuarta cuadra.",
      "Tiene un ingreso promedio de 1250.",
      "Nivel económico alto.",
    ],
    coordenadas: [
      [-2.884520, -79.002405],
      [-2.885610, -79.002410],
      [-2.885590, -79.003165],
      [-2.884590, -79.003355],
      [-2.884500, -79.002895],
      [-2.884490, -79.002620],
    ]
  },
  {
    nombre: "Cuadra 145",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadragésima quinta cuadra.",
      "Tiene un ingreso promedio de 300.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885690, -79.002410],
      [-2.886447, -79.002405],
      [-2.886415, -79.003025],
      [-2.885650, -79.003150],
    ]
  },
  {
    nombre: "Cuadra 146",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadragésima sexta cuadra.",
      "Tiene un ingreso promedio de 275.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.887475, -79.002395],
      [-2.888635, -79.002390],
      [-2.888400, -79.003525],
      [-2.887185, -79.003230],
    ]
  },
  {
    nombre: "Cuadra 147",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadragésima séptima cuadra.",
      "Tiene un ingreso promedio de 248,48.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885040, -79.000890],
      [-2.885705, -79.000825],
      [-2.885630, -79.002325],
      [-2.884545, -79.002320],
      [-2.884638, -79.001950],
    ]
  },
  {
    nombre: "Cuadra 148",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadragésima octava cuadra.",
      "Tiene un ingreso promedio de 243,571428571429.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.885780, -79.000815],
      [-2.886511, -79.000755],
      [-2.886570, -79.002330],
      [-2.885700, -79.002330],
    ]
  },
  {
    nombre: "Cuadra 149",
    color: 2,
    descripcion: [
      "Esta es la centésima cuadragésima novena cuadra.",
      "Tiene un ingreso promedio de 500.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.888840, -79.002405],
      [-2.889775, -79.002575],
      [-2.889440, -79.004795],
      [-2.888365, -79.004615],
    ]
  },
  {
    nombre: "Cuadra 150",
    color: 2,
    descripcion: [
      "Esta es la centésima quincuagésima cuadra.",
      "Tiene un ingreso promedio de 475.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.889705, -79.003535],
      [-2.890733, -79.003715],
      [-2.890590, -79.004625],
      [-2.889575, -79.004420],
    ]
  },
  {
    nombre: "Cuadra 151",
    color: 5,
    descripcion: [
      "Esta es la centésima quincuagésima primera cuadra.",
      "Tiene un ingreso promedio de 1750.",
      "Nivel económico alto.",
    ],
    coordenadas: [
      [-2.889745, -79.003175],
      [-2.890772, -79.003350],
      [-2.890737, -79.003655],
      [-2.889710, -79.003465],
    ]
  },
  {
    nombre: "Cuadra 152",
    color: 3,
    descripcion: [
      "Esta es la centésima quincuagésima segunda cuadra.",
      "Tiene un ingreso promedio de 650.",
      "Nivel económico medio.",
    ],
    coordenadas: [
      [-2.889855, -79.002590],
      [-2.890845, -79.002810],
      [-2.890780, -79.003285],
      [-2.889770, -79.003110],
    ]
  },
  {
    nombre: "Cuadra 153",
    color: 2,
    descripcion: [
      "Esta es la centésima quincuagésima tercera cuadra.",
      "Tiene un ingreso promedio de 104.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.882505, -79.002190],
      [-2.882975, -79.002195],
      [-2.883060, -79.002553],
      [-2.883260, -79.002910],
      [-2.883400, -79.003225],
      [-2.883455, -79.003580],
      [-2.883200, -79.003635],
    ]
  },
  {
    nombre: "Cuadra 154",
    color: 2,
    descripcion: [
      "Esta es la centésima quincuagésima cuarta cuadra.",
      "Tiene un ingreso promedio de 104,285714285714.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.883040, -79.002175],
      [-2.883930, -79.001815],
      [-2.883975, -79.001735],
      [-2.883985, -79.001225],
      [-2.884295, -79.001080],
      [-2.884320, -79.001490],
      [-2.884535, -79.001495],
      [-2.884260, -79.002405],
      [-2.883800, -79.002925],
      [-2.883520, -79.003435],
      [-2.883325, -79.002875],
      [-2.883125, -79.002542],
    ]
  },
  {
    nombre: "Cuadra 155",
    color: 2,
    descripcion: [
      "Esta es la centésima quincuagésima quinta cuadra.",
      "Tiene un ingreso promedio de 169,615384615385.",
      "Nivel económico medio-bajo.",
    ],
    coordenadas: [
      [-2.883570, -79.003560],
      [-2.883900, -79.002930],
      [-2.884250, -79.002550],
      [-2.884345, -79.003410],
    ]
  },
  {
    nombre: "UCACUE",
    color: 6,
    descripcion: [
      "Universidad Católica de Cuenca (Casa Administrativa)",
    ],
    coordenadas: [
      [-2.883535, -79.003644],
      [-2.884365, -79.003475],
      [-2.884990, -79.006780],
      [-2.885125, -79.007400],
      [-2.885495, -79.008115],
      [-2.885195, -79.007940],
      [-2.885090, -79.008535],
      [-2.885260, -79.008808],
      [-2.885135, -79.008945],
      [-2.884855, -79.008632],
      [-2.884615, -79.008390],
      [-2.884090, -79.006900],
      [-2.883540, -79.007030],
      [-2.883670, -79.005080],
      [-2.883485, -79.003785],
    ]
  },
  {
    nombre: "UCACUE",
    color: 6,
    descripcion: [
      "Facultad De Ingeniería Civil Ucacue",
    ],
    coordenadas: [
      [-2.884820, -79.004655],
      [-2.885200, -79.004860],
      [-2.885675, -79.004810],
      [-2.885776, -79.005670],
      [-2.885090, -79.006020],
    ]
  },
];

export default function Mapa() {
  const router = useRouter();
  const [boton1Visible, setBoton1Visible] = useState(false);
  const [boton2Visible, setBoton2Visible] = useState(false);
  const [boton3Visible, setBoton3Visible] = useState(false);
  const [isTextVisible, setTextVisibility] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [geoData, setGeoData] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [mostrarCuadras, setMostrarCuadras] = useState(false);

  // Utilidad para asignar color por nombre de parroquia
  const getColorByName = (name) => {
    const colors = {
      Bellavista: "#00000000",
      // Añade más parroquias aquí
    };

    // Color por defecto si no se encuentra el nombre
    return colors[name] || "#00000000";
  };


  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible);
  };

  useEffect(() => {
    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

  const handleDownloadClick = async () => {
  };

  const handleDescriptionToggle = () => {
    setShowDescription((prev) => !prev); // Alterna la visibilidad de la descripción
  };

  function proyect(to) {
    router.push(to);
  }

  const handleZoom = () => {
    const zoomLevel = window.devicePixelRatio;
    setIsZoomed(zoomLevel > 1);
  };

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await axios.get("/data/parroquias_geojson.geojson");
        setGeoData(response.data);
      } catch (error) {
        console.error("Error al cargar el GeoJSON:", error);
      }
    };

    fetchGeoJson();
  }, []);


  return (
    <main style={{ scrollBehavior: "smooth" }}>
      <div className="flex flex-col lg:flex-row bg-black">
        <div className="h-[calc(100vh-80px)] w-full sm:w-[410px] overflow-hidden overflow-y-auto rounded-lg bg-gray-900 p-3 shadow-md mb-2">

          <button
            className="p-2 text-gray-500 hover:underline mb-2 font-medium flex items-center space-x-2"
            onClick={() => proyect("/proyectos")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-left-circle text-red-400"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
            <span className="text-gray-500 hover:text-red-400 transition">
              Regresar
            </span>
          </button>

          <div className="">
            <h2 className="text-base font-semibold text-white mb-1">
              Geovisor Interactivo de Ingresos - Parroquia de Bellavista
            </h2>
            <button
              onClick={handleDescriptionToggle}
              className="bg-red-600 text-white py-1 px-3 rounded mb-4 mr-4"
            >
              {showDescription ? "Ocultar Descripción" : "Mostrar Descripción"}
            </button>
            <button
              className="bg-red-600 text-white py-1 px-3 rounded mb-4"
              onClick={handleDownloadClick}
            >
              Descargar
            </button>
            {showDescription && (
              <div className="mt-1 text-white text-justify">
                <p>
                  Este geovisor interactivo permite visualizar información del ingreso promedio
                  en la parroquia de Bellavista. Los datos se mostrarán divididos por cuadras y
                  categorizados en 5 clases correspondientes a distintos grupos de ingresos.
                </p>
              </div>
            )}
            <hr className="mt-6 border-t border-gray-300" />
          </div>
          <div className="overflow-auto p-4 space-y-4">
            {/* Información general */}
            <div className="text-white">
              <h2 className="text-xl font-semibold">Información General</h2>
              <p>
                Aquí puedes agregar información general sobre el uso de la
                interfaz.
              </p>
            </div>
            {/* Botones */}
            <div className="flex flex-col space-y-2 text-white">
              Mostrar Capas por cuadras.
            </div>
            <SwitchButton
              isActive={mostrarCuadras}
              onClick={() => setMostrarCuadras(!mostrarCuadras)}
            />
            {/* <SwitchButton
              label="Botón 2"
              onClick={() => setBoton2Visible(!boton2Visible)}
            /> */}
            {/*<SwitchButton
              label="Botón 3"
              onClick={() => setBoton3Visible(!boton3Visible)}
            /> */}
          </div>
          {/* Pie de página */}
          <div className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2025 Geovisor. Todos los derechos reservados.</p>
          </div>

        </div>
        <div className="w-full lg:w-2/3 xl:w-3/4 flex-grow bg-gray-200">
          <div className="relative w-full h-full">
            <div className="leaflet-container">
              <Map
                className="shadow-xl"
                center={DEFAULT_CENTER}
                zoom={15}
                width="full"
                height="800"
              >
                {({ TileLayer, GeoJSON, Polygon, Popup, Tooltip, Marker }) => (
                  <>
                    <TileLayer
                      url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                    />
                    {geoData && (
                      <GeoJSON
                        data={geoData}
                        style={(feature) => ({
                          fillColor: getColorByName(feature.properties.DESCRIP),
                          weight: 1,
                          opacity: 1,
                          color: "gray",
                          fillOpacity: 0.7,
                        })}
                      />
                    )}
                    {mostrarCuadras &&
                      cuadras.map((cuadra, index) => (
                        <>
                          <Polygon
                            key={index}
                            positions={cuadra.coordenadas}
                            pathOptions={{
                              color: coloresPorNivel[cuadra.color] || "#999999",
                              weight: 2,
                            }}
                          >
                            <Popup>
                              <strong>{cuadra.nombre}:</strong><br />
                              {cuadra.descripcion.map((linea, i) => (
                                <span key={i}>{linea}<br /></span>
                              ))}
                            </Popup>
                            <Tooltip
                              direction="center"
                              permanent
                              opacity={0.5}
                              className="bg-transparent text-white font-bold text-xs shadow-none"
                            >
                              {index + 1}
                            </Tooltip>
                          </Polygon>
                          {/* Marcador con imagen solo para UCACUE */}

                          {cuadra.nombre === "UCACUE" && (
                            <>
                              <Marker
                                position={[-2.884445, -79.005800]} // Primer punto
                                icon={L.icon({
                                  iconUrl: "https://muchomejorecuador.org.ec/wp-content/uploads/2024/04/Universidad-Catolica_de_Cuenca.jpg",
                                  iconSize: [30, 30],
                                  iconAnchor: [15, 30],
                                  popupAnchor: [0, -30],
                                })}
                              >
                                <Popup>
                                  <strong>{cuadra.nombre}</strong><br />
                                  Universidad Católica de Cuenca (Casa Administrativa).
                                </Popup>
                              </Marker>

                              <Marker
                                position={[-2.885450, -79.005120]} // Segundo punto
                                icon={L.icon({
                                  iconUrl: "https://muchomejorecuador.org.ec/wp-content/uploads/2024/04/Universidad-Catolica_de_Cuenca.jpg",
                                  iconSize: [30, 30],
                                  iconAnchor: [15, 30],
                                  popupAnchor: [0, -30],
                                })}
                              >
                                <Popup>
                                  <strong>{cuadra.nombre}</strong><br />
                                  Facultad De Ingeniería Civil Ucacue.
                                </Popup>
                              </Marker>
                            </>
                          )}
                        </>
                      ))}

                  </>
                )}
              </Map>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}