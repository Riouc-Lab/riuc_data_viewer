"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { eventos, eventos_futuros } from "../../utils/modelo_eventos";

const EventosRiouc = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

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
            className="w-full text-sm"
            tileClassName={({ date }) => {
              const hoy = new Date();
              const mismoDia =
                date.getDate() === hoy.getDate() &&
                date.getMonth() === hoy.getMonth() &&
                date.getFullYear() === hoy.getFullYear();

              return mismoDia
                ? "bg-red-100 text-red-700 font-bold rounded-full border border-red-400"
                : "";
            }}
            tileContent={({ date, view }) =>
              view === "month" ? (
                <div className="text-[10px] text-center text-gray-400 mt-1">
                  {/* Aquí puedes mostrar un punto o ícono si hay eventos */}
                </div>
              ) : null
            }
          />
        </aside>
      </div>

    </main>
  );
};

export default EventosRiouc;
