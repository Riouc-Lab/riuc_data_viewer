"use client";
import React, { useState } from "react";


export default function ModeloFecha({ fecha }) {
return  (fecha) ? <h2 className="text-base font-medium text-indigo-300 mb-1">{fecha}</h2> :
<h2 className="text-base font-medium text-indigo-300 mb-1">10 de Agosto,
                                2023</h2>
}
