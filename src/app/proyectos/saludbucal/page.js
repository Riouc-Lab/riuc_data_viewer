"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import SwitchButton from "../../../components/buttonswitch";
const Map = dynamic(() => import("../../../components/map"), { ssr: false });
const DEFAULT_CENTER = [-2.891565, -79.005958];

const cuadras = [
  {
    nombre: "Cuadra 1",
    descripcion: [
      "Esta es la primera cuadra.",
      "Tiene un nivel económico alto.",
      "Hay 62 habitantes."
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
    descripcion: [
      "Esta es la segunda cuadra.",
      "Nivel económico medio.",
      "Hay 48 habitantes."
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
    descripcion: [
      "Esta es la tercera cuadra.",
      "Nivel económico medio.",
      "Hay 35 habitantes."
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
    descripcion: [
      "Esta es la cuarta cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
    descripcion: [
      "Esta es la quinta cuadra.",
      "Nivel económico bajo.",
      "Hay 36 habitantes."
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
    descripcion: [
      "Esta es la sexta cuadra.",
      "Nivel económico alto.",
      "Hay 50 habitantes."
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
    descripcion: [
      "Esta es la séptima cuadra.",
      "Nivel económico medio.",
      "Hay 45 habitantes."
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
    descripcion: [
      "Esta es la octava cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la novena cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
    descripcion: [
      "Esta es la décima cuadra.",
      "Nivel económico alto.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la undécima cuadra.",
      "Nivel económico medio.",
      "Hay 40 habitantes."
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
    descripcion: [
      "Esta es la duodécima cuadra.",
      "Nivel económico bajo.",
      "Hay 28 habitantes."
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
      "Esta es la decimotercera cuadra.",
      "Nivel económico medio.",
      "Hay 38 habitantes."
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
      "Esta es la decimoquinta cuadra.",
      "Nivel económico bajo.",
      "Hay 22 habitantes."
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
      "Esta es la decimocuarta cuadra.",
      "Nivel económico alto.",
      "Hay 60 habitantes."
    ],
    coordenadas: [
      [-2.890065, -79.012925],
      [-2.890553, -79.013031],
      [-2.889940, -79.013467],
    ]
  },
  {
    nombre: "Cuadra 16",
    descripcion: [
      "Esta es la decimosexta cuadra.",
      "Nivel económico medio.",
      "Hay 42 habitantes."
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
      "Esta es la decimoséptima cuadra.",
      "Nivel económico bajo.",
      "Hay 29 habitantes."
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
    descripcion: [
      "Esta es la decimoctava cuadra.",
      "Nivel económico alto.",
      "Hay 70 habitantes."
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
    descripcion: [
      "Esta es la decimoctava cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la vigésima cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
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
    descripcion: [
      "Esta es la vigésima primera cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la vigésima segunda cuadra.",
      "Nivel económico medio.",
      "Hay 40 habitantes."
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
    descripcion: [
      "Esta es la vigésima tercera cuadra.",
      "Nivel económico alto.",
      "Hay 80 habitantes."
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
    descripcion: [
      "Esta es la vigésima cuarta cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
      "Esta es la vigésima quinta cuadra.",
      "Nivel económico medio.",
      "Hay 45 habitantes."
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
    descripcion: [
      "Esta es la vigésima sexta cuadra.",
      "Nivel económico alto.",
      "Hay 65 habitantes."
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
    descripcion: [
      "Esta es la vigésima séptima cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
    ],
    coordenadas: [
      [-2.888030, -79.006430],
      [-2.888990, -79.006550],
      [-2.887870, -79.007430],
    ]
  },
  {
    nombre: "Cuadra 28",
    descripcion: [
      "Esta es la vigésima octava cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
      "Esta es la vigésima novena cuadra.",
      "Nivel económico alto.",
      "Hay 75 habitantes."
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
      "Esta es la trigésima cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
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
    descripcion: [
      "Esta es la trigésima primera cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la trigésima segunda cuadra.",
      "Nivel económico alto.",
      "Hay 85 habitantes."
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
    descripcion: [
      "Esta es la trigésima tercera cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la trigésima cuarta cuadra.",
      "Nivel económico bajo.",
      "Hay 40 habitantes."
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
    descripcion: [
      "Esta es la trigésima quinta cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
    descripcion: [
      "Esta es la trigésima sexta cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la trigésima séptima cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
    descripcion: [
      "Esta es la trigésima octava cuadra.",
      "Nivel económico alto.",
      "Hay 100 habitantes."
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
    descripcion: [
      "Esta es la trigésima novena cuadra.",
      "Nivel económico medio.",
      "Hay 70 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima primera cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima segunda cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima tercera cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
      "Esta es la cuadragésima cuarta cuadra.",
      "Nivel económico alto.",
      "Hay 85 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima quinta cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima sexta cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima séptima cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima octava cuadra.",
      "Nivel económico medio.",
      "Hay 65 habitantes."
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
    descripcion: [
      "Esta es la cuadragésima novena cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la quincuagésima cuadra.",
      "Nivel económico alto.",
      "Hay 100 habitantes."
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
    descripcion: [
      "Esta es la quincuagésima primera cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
      "Esta es la quincuagésima segunda cuadra.",
      "Nivel económico bajo.",
      "Hay 40 habitantes."
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
    descripcion: [
      "Esta es la quincuagésima tercera cuadra.",
      "Nivel económico alto.",
      "Hay 80 habitantes."
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
      "Esta es la quincuagésima cuarta cuadra.",
      "Nivel económico medio.",
      "Hay 45 habitantes."
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
    descripcion: [
      "Esta es la quincuagésima quinta cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
      "Esta es la quincuagésima sexta cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
      "Esta es la quincuagésima séptima cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la quincuagésima octava cuadra.",
      "Nivel económico bajo.",
      "Hay 35 habitantes."
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
    descripcion: [
      "Esta es la quincuagésima novena cuadra.",
      "Nivel económico alto.",
      "Hay 85 habitantes."
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
    descripcion: [
      "Esta es la sexagésima cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
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
    descripcion: [
      "Esta es la sexagésima primera cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
    descripcion: [
      "Esta es la sexagésima segunda cuadra.",
      "Nivel económico alto.",
      "Hay 75 habitantes."
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
    descripcion: [
      "Esta es la sexagésima tercera cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la sexagésima cuarta cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
    ],
    coordenadas: [
      [-2.885350, -79.000055],
      [-2.885960, -79.000240],
      [-2.885740, -79.000759],
      [-2.885100, -79.000795],
    ]
  },
  {
    nombre: "Cuadra 65",
    descripcion: [
      "Esta es la sexagésima quinta cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
      "Esta es la sexagésima sexta cuadra.",
      "Nivel económico medio.",
      "Hay 65 habitantes."
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
      "Esta es la sexagésima séptima cuadra.",
      "Nivel económico bajo.",
      "Hay 40 habitantes."
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
    descripcion: [
      "Esta es la sexagésima octava cuadra.",
      "Nivel económico alto.",
      "Hay 100 habitantes."
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
      "Esta es la sexagésima novena cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la septuagésima cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la septuagésima primera cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la septuagésima segunda cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
      "Esta es la septuagésima tercera cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
      "Esta es la septuagésima cuarta cuadra.",
      "Nivel económico alto.",
      "Hay 85 habitantes."
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
      "Esta es la septuagésima quinta cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
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
      "Esta es la septuagésima sexta cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
    descripcion: [
      "Esta es la septuagésima séptima cuadra.",
      "Nivel económico alto.",
      "Hay 70 habitantes."
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
    descripcion: [
      "Esta es la septuagésima octava cuadra.",
      "Nivel económico medio.",
      "Hay 45 habitantes."
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
      "Esta es la septuagésima novena cuadra.",
      "Nivel económico bajo.",
      "Hay 15 habitantes."
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
    descripcion: [
      "Esta es la octogésima cuadra.",
      "Nivel económico alto.",
      "Hay 80 habitantes."
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
      "Esta es la octogésima primera cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
    ],
    coordenadas: [
      [-2.882105, -78.998545],
      [-2.882610, -78.998995],
      [-2.882130, -78.999515],
    ]
  },
  {
    nombre: "Cuadra 82",
    descripcion: [
      "Esta es la octogésima segunda cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
      "Esta es la octogésima tercera cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
      "Esta es la octogésima cuarta cuadra.",
      "Nivel económico medio.",
      "Hay 65 habitantes."
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
      "Esta es la octogésima quinta cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
      "Esta es la octogésima sexta cuadra.",
      "Nivel económico alto.",
      "Hay 100 habitantes."
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
    descripcion: [
      "Esta es la octogésima séptima cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
      "Esta es la octogésima octava cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
      "Esta es la octogésima novena cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la nonagésima cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la nonagésima primera cuadra.",
      "Nivel económico bajo.",
      "Hay 35 habitantes."
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
    descripcion: [
      "Esta es la nonagésima segunda cuadra.",
      "Nivel económico alto.",
      "Hay 80 habitantes."
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
    descripcion: [
      "Esta es la nonagésima tercera cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la nonagésima cuarta cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
    descripcion: [
      "Esta es la nonagésima quinta cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
    descripcion: [
      "Esta es la nonagésima sexta cuadra.",
      "Nivel económico medio.",
      "Hay 65 habitantes."
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
    descripcion: [
      "Esta es la nonagésima séptima cuadra.",
      "Nivel económico bajo.",
      "Hay 40 habitantes."
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
    descripcion: [
      "Esta es la nonagésima octava cuadra.",
      "Nivel económico alto.",
      "Hay 100 habitantes."
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
      "Esta es la nonagésima novena cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la centésima cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la centésima primera cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la centésima tercera cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
    descripcion: [
      "Esta es la centésima tercera cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
    descripcion: [
      "Esta es la centésima cuarta cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
    descripcion: [
      "Esta es la centésima quinta cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la centésima sexta cuadra.",
      "Nivel económico bajo.",
      "Hay 35 habitantes."
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
    descripcion: [
      "Esta es la centésima séptima cuadra.",
      "Nivel económico alto.",
      "Hay 85 habitantes."
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
    descripcion: [
      "Esta es la centésima octava cuadra.",
      "Nivel económico medio.",
      "Hay 50 habitantes."
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
    descripcion: [
      "Esta es la centésima novena cuadra.",
      "Nivel económico bajo.",
      "Hay 20 habitantes."
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
    descripcion: [
      "Esta es la centésima décima cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la centésima undécima cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la centésima duodécima cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
    descripcion: [
      "Esta es la centésima decimotercera cuadra.",
      "Nivel económico alto.",
      "Hay 90 habitantes."
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
    descripcion: [
      "Esta es la centésima decimocuarta cuadra.",
      "Nivel económico medio.",
      "Hay 55 habitantes."
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
    descripcion: [
      "Esta es la centésima decimoquinta cuadra.",
      "Nivel económico bajo.",
      "Hay 30 habitantes."
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
    descripcion: [
      "Esta es la centésima decimosexta cuadra.",
      "Nivel económico alto.",
      "Hay 95 habitantes."
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
    descripcion: [
      "Esta es la centésima decimoséptima cuadra.",
      "Nivel económico medio.",
      "Hay 60 habitantes."
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
    descripcion: [
      "Esta es la centésima decimoctava cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
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
    descripcion: [
      "Esta es la centésima decimonovena cuadra.",
      "Nivel económico bajo.",
      "Hay 39 habitantes."
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
    descripcion: [
      "Esta es la centésima veinteava cuadra.",
      "Nivel económico bajo.",
      "Hay 65 habitantes."
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
      "Esta es la centésima veinteava primera cuadra.",
      "Nivel económico bajo.",
      "Hay 29 habitantes."
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
      "Esta es la centésima veinteava segunda cuadra.",
      "Nivel económico bajo.",
      "Hay 25 habitantes."
    ],
    coordenadas: [
      [-2.882765, -79.013985],
      [-2.883300, -79.013480],
      [-2.883380, -79.014055],
      [-2.882975, -79.014110],
      [-2.882910, -79.014100],
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
      Bellavista: "#ff9b9b",
      // Añade más parroquias aquí
    };

    // Color por defecto si no se encuentra el nombre
    return colors[name] || "#bfbfbf";
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
      <div className="flex flex-col lg:flex-row p-2 bg-black">
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
              Geovisor Interactivo de Salud Bucal
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
                  Este geovisor interactivo permite visualizar información sobre
                  la salud bucal en la parroquia de Bellavista. Los datos se
                  mostrara dividido por cuadras y categorizado en dos grupos
                  correspondientes a distintas clases socioeconómicas.
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
            <SwitchButton
              label="Botón 2"
              onClick={() => setBoton2Visible(!boton2Visible)}
            />
            <SwitchButton
              label="Botón 3"
              onClick={() => setBoton3Visible(!boton3Visible)}
            />
          </div>
          {/* Pie de página */}
          <div className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Geovisor. Todos los derechos reservados.</p>
          </div>

        </div>
        <div className="w-full lg:w-2/3 xl:w-3/4 flex-grow bg-gray-200">
          <div className="relative w-full h-full">
            <div className="leaflet-container">
              <Map
                className="shadow-xl"
                center={DEFAULT_CENTER}
                zoom={14}
                width="full"
                height="800"
              >
                {({ TileLayer, GeoJSON, Polygon, Popup, Tooltip }) => (
                  <>
                    <TileLayer
                      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {geoData && (
                      <GeoJSON
                        data={geoData}
                        style={(feature) => ({
                          fillColor: getColorByName(feature.properties.DESCRIP),
                          weight: 1,
                          opacity: 1,
                          color: "white",
                          fillOpacity: 0.7,
                        })}
                      />
                    )}
                    {mostrarCuadras &&
                      cuadras.map((cuadra, index) => (
                        <Polygon
                          key={index}
                          positions={cuadra.coordenadas}
                          pathOptions={{ color: "red", weight: 2 }}
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