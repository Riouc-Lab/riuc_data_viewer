// ─── Componentes reutilizables ────────────────────────────────────────────────

// Componente: Enlace de red social con atributos de accesibilidad
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-white hover:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md transition-colors p-1"
  >
    {icon}
  </a>
);

// Componente: Enlace individual para las columnas de navegación
const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-100 hover:text-gray-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors text-sm font-medium"
    >
      {children}
    </a>
  </li>
);

// Componente: Columna contenedora de enlaces con estructura semántica <nav>
const FooterColumn = ({ title, children }) => (
  <nav aria-label={title} className="flex flex-col gap-4">
    <h3 className="text-xl text-white font-bold tracking-wide">{title}</h3>
    <ul className="flex flex-col gap-1">
      {children}
    </ul>
  </nav>
);

// ─── Datos ────────────────────────────────────────────────────────────────────

// Estructura de datos: Enlaces de redes sociales con 'aria-label' optimizado para lectores de pantalla
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/ucatolicacuenca/",
    label: "Instagram Universidad Católica de Cuenca",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/universidadcatolicacuenca",
    label: "Facebook Universidad Católica de Cuenca",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/UCatolicaCuenca",
    label: "X (Twitter) Universidad Católica de Cuenca",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@UCatolicaCuenca1",
    label: "YouTube Universidad Católica de Cuenca",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
      </svg>
    ),
  },
];

const UNIVERSIDAD_LINKS = [
  { href: "https://www.ucacue.edu.ec/la-universidad/", label: "La cato" },
  { href: "https://www.ucacue.edu.ec/la-universidad/autoridades/", label: "Autoridades" },
  { href: "https://www.ucacue.edu.ec/la-universidad/politica-de-calidad/", label: "Política de calidad" },
  { href: "https://www.ucacue.edu.ec/ejes/administrativo/", label: "Área administrativa" },
  { href: "https://www.ucacue.edu.ec/la-universidad/campus-universitario/", label: "Campus" },
  { href: "https://internacional.ucacue.edu.ec/", label: "Relaciones Internacionales" },
  { href: "https://www.ucacue.edu.ec/transparencia/", label: "Transparencia" },
  { href: "https://documentacion.ucacue.edu.ec/collections/show/2044", label: "Protocolos" },
];

const INVESTIGACION_LINKS = [
  { href: "https://investigacion.ucacue.edu.ec/", label: "Investigación" },
  { href: "https://investigacion.ucacue.edu.ec/centros-de-investigacion/", label: "Centros de investigación" },
  { href: "https://investigacion.ucacue.edu.ec/laboratorios-de-investigacion/", label: "Laboratorios" },
  { href: "https://innovacion.ucacue.edu.ec/", label: "Innovación" },
  { href: "https://investigacion.ucacue.edu.ec/publicaciones/", label: "Revistas científicas" },
];

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/20">
      
      {/* Contenedor principal: pt-16 (padding superior) y pb-6 (padding inferior ajustado para reducir espacio vertical) */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-6">
        
        {/* Layout Flexbox */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Panel Izquierdo: Branding y Redes */}
          <div className="lg:w-1/4 flex flex-col justify-center gap-6">
            <h2 className="text-red-600 text-5xl font-bold tracking-tight">RIOUC</h2>
            <p className="text-gray-100 text-sm font-medium">Conoce mas sobre la Universidad</p>
            <div className="flex items-center gap-5 mt-2">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <SocialLink key={label} href={href} icon={icon} label={label} />
              ))}
            </div>
          </div>

          {/* Línea divisoria adaptativa (horizontal en móvil, vertical en desktop) */}
          <div className="block h-px w-full lg:h-auto lg:w-px bg-white/80 shrink-0"></div>

          {/* Panel Derecho: Navegación de enlaces */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
            
            <FooterColumn title="La Universidad">
              {UNIVERSIDAD_LINKS.map(({ href, label }) => (
                <FooterLink key={label} href={href}>
                  {label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Investigacion">
              {INVESTIGACION_LINKS.map(({ href, label }) => (
                <FooterLink key={label} href={href}>
                  {label}
                </FooterLink>
              ))}
            </FooterColumn>

            {/* Bloque de Contactos: Estructura independiente semántica <address> */}
            <nav aria-label="Contactos" className="flex flex-col gap-4">
              <h3 className="text-xl text-white font-bold tracking-wide">Contactos</h3>
              
              <div className="flex flex-col gap-6 text-sm text-gray-100 font-medium">
                <address className="not-italic flex flex-col gap-1">
                  <p>Matriz Cuenca: Av. de las<br />Américas y Humboldt</p>
                  <p>Teléfono: +593 (07)<br />4134-750</p>
                  <p>
                    Email:{" "}
                    <a 
                      href="mailto:info@ucacue.edu.ec" 
                      className="underline underline-offset-4 hover:text-gray-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
                    >
                      info@ucacue.edu.ec
                    </a>
                  </p>
                </address>

                <address className="not-italic flex flex-col gap-1">
                  <p>CIITT: “Vía a Biblín,<br />Ricaurte, Cuenca,<br />Ecuador”</p>
                  <p>Teléfono: 593<br />(07) 2-834-037 / Ext 155,<br />156</p>
                  <p>
                    Email:{" "}
                    <a 
                      href="mailto:ciitt@ucacue.edu.ec" 
                      className="underline underline-offset-4 hover:text-gray-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
                    >
                      ciitt@ucacue.edu.ec
                    </a>
                  </p>
                </address>
              </div>
            </nav>

          </div>
        </div>

        {/* Sección Copyright: mt-10 (margen superior) y pt-4 (padding superior) reducen la altura visual del bloque final */}
        <div className="mt-10 pt-4 border-t border-white/10 text-center">
          {/* Tipografía Copyright: text-[10px] (móvil) / sm:text-xs (desktop) y color text-gray-500 establecen jerarquía visual secundaria */}
          <p className="text-gray-500 text-[10px] sm:text-xs font-medium">
            © {new Date().getFullYear()} | Centro de Investigación, Innovación y Transferencia de Tecnología.
          </p>
        </div>

      </div>
    </footer>
  );
}