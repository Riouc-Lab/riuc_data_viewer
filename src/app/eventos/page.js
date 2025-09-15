"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { eventos, eventos_futuros } from "../../utils/modelo_eventos";

const EventosRiouc = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  const todosEventos = [...eventos, ...eventos_futuros];

  // Eventos del día seleccionado
  const eventosDelDia = todosEventos.filter((evento) => {
    const fechaEvento = new Date(evento.fecha);
    return (
      fechaEvento.getDate() === fechaSeleccionada.getDate() &&
      fechaEvento.getMonth() === fechaSeleccionada.getMonth() &&
      fechaEvento.getFullYear() === fechaSeleccionada.getFullYear()
    );
  });

  // Fechas con eventos para resaltar en el calendario
  const fechasConEventos = todosEventos.map((evento) =>
    new Date(evento.fecha).toDateString()
  );

  const eventosOrdenados = [...eventos].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );

  return (
    <main className="">
      {/* Banner imagen con texto */}
      <div
        className="w-full h-96 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/img/riouc_lab_ciitt.jpg')" }}
      >
        <div className="bg-black bg-opacity-30 w-full h-full absolute top-0 left-0" />
        <div className="absolute bottom-4 left-0 z-10">
          <div className="bg-gray-200 bg-opacity-90 pl-4 pr-6 py-3 rounded-r-md shadow-lg">
            <h1 className="text-5xl font-serif font-bold text-gray-700">
              Eventos <span className="text-red-600">RIOUC</span>
            </h1>
            <p className="text-base mt-1 text-gray-700 italic">
              Descubre los eventos académicos de nuestro laboratorio.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Eventos */}
        <div className="flex-1 space-y-12">
          {/* Próximamente */}
          <section>
            <h3 className="text-xl font-bold mb-4">📩 Próximamente</h3>
            <div className="grid gap-4">
              {eventos_futuros.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex gap-4 items-start hover:shadow-lg transition"
                >
                  <div className="min-w-[110px] text-center">
                    <div className="text-4xl font-bold text-red-600 mt-2">
                      {new Date(evento.fecha).getDate()}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {new Date(evento.fecha).toLocaleDateString('es-EC', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {evento.titulo}
                    </h4>
                    <p className="text-gray-700 mb-1">📍Ubicación | {evento.ubi}</p>
                    <p className="text-gray-700">{evento.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recientes */}
          <section>
            <h3 className="text-xl font-bold mb-4">📑 Recientes</h3>
            <div className="grid gap-4">
              {eventosOrdenados.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex gap-4 items-start hover:shadow-lg transition"
                >
                  <div className="min-w-[110px] text-center">
                    <div className="text-4xl font-bold text-red-600 mt-2">
                      {new Date(evento.fecha).getDate()}
                    </div>
                    <div className="text-sm text-gray-600 uppercase tracking-wide">
                      {new Date(evento.fecha).toLocaleDateString('es-EC', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {evento.titulo}
                    </h4>
                    <p className="text-gray-700 mb-1">📍Ubicación | {evento.ubi}</p>
                    <p className="text-gray-700">{evento.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Calendario pequeño */}
        <aside className="w-full md:w-64 bg-white p-5 rounded-xl shadow-lg h-fit self-start border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <span>📆 Calendario</span>
          </h3>
          <Calendar
            onChange={setFechaSeleccionada}
            value={fechaSeleccionada}
            className="w-full text-sm"
            tileClassName={({ date }) => {
              const tieneEvento = fechasConEventos.includes(date.toDateString());
              return tieneEvento
                ? "bg-yellow-100 text-yellow-700 font-semibold rounded-full"
                : "";
            }}
            tileContent={({ date, view }) =>
              view === "month" && fechasConEventos.includes(date.toDateString()) ? (
                <div className="text-center text-red-500 text-xs mt-1">●</div>
              ) : null
            }
          />

          {/* Ventana de eventos del día seleccionada */}
          {eventosDelDia.length > 0 && (
            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-md">
              <h4 className="text-lg font-bold text-yellow-700 mb-2">
                Eventos del {fechaSeleccionada.toLocaleDateString("es-EC", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                {eventosDelDia.map((evento) => (
                  <li key={evento.id} className="border-b pb-2">
                    <span className="font-semibold">{evento.titulo}</span> — {evento.descripcion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </main>
  );
};

export default EventosRiouc;
