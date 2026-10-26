import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("autos");

  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tipoVehiculo: "Auto",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FUNCIÓN ACTUALIZADA: Redirige directamente a WhatsApp con el mensaje estructurado
  const handleSubmit = (e) => {
    e.preventDefault();

    // Estructurar el mensaje con los datos del formulario
    const mensajeWA = `*NUEVA CONSULTA - TALLER WAYO POWERSPORTS*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Vehículo:* ${formData.tipoVehiculo}%0A` +
      `*Detalle:* ${formData.mensaje}`;

    // Enlace directo a tu WhatsApp corporativo (+506 6093-4368)
    const url = `https://wa.me/50660934368?text=${mensajeWA}`;
    window.open(url, '_blank');
  };

  const servicios = {
    autos: {
      titulo: "Mecánica, Electrónica y Mecatrónica Automotriz",
      descripcion:
        "Especialistas en vehículos modernos, diagnóstico por escáner avanzado y reparación de sistemas.",
      badge: "Autos & SUV",
      items: [
        {
          titulo: "Diagnóstico por Escáner",
          desc: "Detección precisa de fallas en computadora, ABS y sensores.",
        },
        {
          titulo: "Electricidad y Electrónica",
          desc: "Reparación de cableados, alternadores y tableros.",
        },
        {
          titulo: "Mecánica General",
          desc: "Frenos, suspensión, fajas de tiempo y mantenimiento de motor.",
        },
      ],
    },
    motos: {
      titulo: "Mantenimiento y Reparación de Motocicletas",
      descripcion:
        "Atención especializada para alta y baja cilindrada, puesta a punto y rendimiento.",
      badge: "Motos Alta y Baja Cilindrada",
      items: [
        {
          titulo: "Baja Cilindrada",
          desc: "Cambio de aceite, kit de arrastre, frenos y mantenimiento rápido.",
        },
        {
          titulo: "Alta Cilindrada",
          desc: "Sincronización de cuerpos de aceleración, válvulas y suspensión.",
        },
        {
          titulo: "Sistema Eléctrico",
          desc: "Estatores, baterías, luces LED y corrección de cortos.",
        },
      ],
    },
    cuatris: {
      titulo: "Cuatriciclos y Mulas (Buggies / UTV / ATV)",
      descripcion:
        "Preparación y servicio técnico especializado para vehículos off-road y de trabajo pesado.",
      badge: "Off-Road / Buggies",
      items: [
        {
          titulo: "Transmisión y CVT",
          desc: "Revisión de bandas, variadores, diferenciales y tracción 4x4.",
        },
        {
          titulo: "Suspensión Heavy Duty",
          desc: "Amortiguadores, rótulas y ejes reforzados para montaña.",
        },
        {
          titulo: "Accesorios y Eléctrica",
          desc: "Instalación de winches, barras LED y protección contra agua.",
        },
      ],
    },
  };

  return (
    <div className="bg-light min-vh-100">
      {/* 1. BARRA DE NAVEGACIÓN */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
        <div className="container">
          <a
            className="navbar-brand fw-bold text-warning d-flex align-items-center gap-2"
            href="#home"
          >
            <i className="bi bi-tools fs-3"></i> Taller Wayo Powersports
          </a>

          <div className="d-flex align-items-center gap-3">
            <div className="d-none d-md-flex align-items-center me-2">
              <a
                href="https://www.facebook.com/p/Taller-Wayo-Powersports-61575063284348/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none fs-5 d-flex align-items-center gap-1 hover-warning"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>

            <a
              href="#contacto-form"
              className="btn btn-outline-warning btn-sm d-none d-md-inline-block fw-bold"
            >
              📩 Escríbenos
            </a>
            <a
              href="https://wa.me/50660934368?text=Hola,%20deseo%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning fw-bold text-dark rounded-pill px-3 px-md-4"
            >
              <i className="bi bi-whatsapp"></i>{" "}
              <span className="d-none d-sm-inline">Agendar Cita</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 2. SECCIÓN PRINCIPAL (HERO) */}
      <header
        id="home"
        className="bg-dark text-white py-5 border-bottom border-warning border-4"
      >
        <div className="container py-4">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="badge bg-warning text-dark mb-2 px-3 py-2 fw-bold">
                Especialistas Multimarca
              </span>
              <h1 className="display-4 fw-bold mb-3">
                Tu Taller de Confianza: Autos, Motos y Buggies
              </h1>
              <p className="lead text-light mb-4">
                Tecnología de punta en electrónica, mecatrónica y mecánica
                general en un solo lugar.
              </p>
              <div className="d-flex gap-3">
                <a
                  href="#servicios"
                  className="btn btn-warning btn-lg fw-bold text-dark px-4"
                >
                  Ver Especialidades
                </a>
                <a
                  href="#galeria"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Ver Trabajos
                </a>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="p-4 bg-secondary bg-opacity-25 rounded-4 border border-secondary text-center">
                <h3 className="h5 text-white mb-3">¿Qué vehículo traes hoy?</h3>
                <div className="d-grid gap-2">
                  <button
                    onClick={() => setActiveTab("autos")}
                    className="btn btn-outline-warning text-start"
                  >
                    🚗 Autos y SUV
                  </button>
                  <button
                    onClick={() => setActiveTab("motos")}
                    className="btn btn-outline-warning text-start"
                  >
                    🏍️ Motocicletas (Alta y Baja)
                  </button>
                  <button
                    onClick={() => setActiveTab("cuatris")}
                    className="btn btn-outline-warning text-start"
                  >
                    🚜 Cuatris & Buggies
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. SECCIÓN DE SERVICIOS INTERACTIVOS */}
      <section id="servicios" className="py-5">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Nuestras 3 Áreas de Servicio</h2>
            <p className="text-muted">
              Haz clic en los botones para ver los detalles de cada área
            </p>

            <div className="nav nav-pills justify-content-center gap-2 mt-4">
              <button
                className={`nav-link px-4 fw-bold ${activeTab === "autos" ? "active bg-warning text-dark" : "bg-white text-dark border"}`}
                onClick={() => setActiveTab("autos")}
              >
                Autos
              </button>
              <button
                className={`nav-link px-4 fw-bold ${activeTab === "motos" ? "active bg-warning text-dark" : "bg-white text-dark border"}`}
                onClick={() => setActiveTab("motos")}
              >
                Motos
              </button>
              <button
                className={`nav-link px-4 fw-bold ${activeTab === "cuatris" ? "active bg-warning text-dark" : "bg-white text-dark border"}`}
                onClick={() => setActiveTab("cuatris")}
              >
                Cuatris & Buggies
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white">
            <span className="badge bg-dark text-warning mb-2 px-3 py-2 fs-6 align-self-start">
              {servicios[activeTab].badge}
            </span>
            <h3 className="fw-bold mb-3">{servicios[activeTab].titulo}</h3>
            <p className="text-muted fs-5 mb-4">
              {servicios[activeTab].descripcion}
            </p>

            <div className="row g-4">
              {servicios[activeTab].items.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="p-4 rounded-3 bg-light h-100 border">
                    <i className="bi bi-check-circle-fill text-warning fs-3 mb-2 d-block"></i>
                    <h4 className="h5 fw-bold text-dark">{item.titulo}</h4>
                    <p className="text-secondary small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARRUSEL DE FOTOS */}
      <section id="galeria" className="py-5 bg-dark text-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Tecnología en acción</h2>
            <p className="text-light">
              Equipos profesionales y dedicación en cada diagnóstico y
              reparación.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                id="tallerCarousel"
                className="carousel slide shadow-lg rounded-4 overflow-hidden border border-secondary"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#tallerCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#tallerCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#tallerCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  {/* Slide 1: Mecánico con escáner y BMW */}
                  <div className="carousel-item active" data-bs-interval="4000">
                    <img 
                      src="taller-escaner.jpg.jfif" 
                      className="d-block w-100 object-fit-cover" 
                      style={{ height: '400px' }} 
                      alt="Mecánico escaneando con BMW al lado" 
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-2">
                      <h5>Diagnóstico con Escáner</h5>
                      <p className="small mb-0">Tecnología de punta y escáner avanzado para vehículos de alta gama.</p>
                    </div>
                  </div>

                  {/* Slide 2: Moto de cross y moto pistera */}
                  <div className="carousel-item" data-bs-interval="4000">
                    <img 
                      src="taller-motos.jpg.jfif" 
                      className="d-block w-100 object-fit-cover" 
                      style={{ height: '400px' }} 
                      alt="Moto de cross y moto pistera" 
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-2">
                      <h5>Motos Cross y Pisteras</h5>
                      <p className="small mb-0">Especialistas en rendimiento para motos de alta y baja cilindrada.</p>
                    </div>
                  </div>

                  {/* Slide 3: Dos buggies en el taller */}
                  <div className="carousel-item" data-bs-interval="4000">
                    <img 
                      src="taller-buggies.jpg.jfif" 
                      className="d-block w-100 object-fit-cover" 
                      style={{ height: '400px' }} 
                      alt="Buggies listos en el taller" 
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-3 p-2">
                      <h5>Preparación Off-Road y Buggies</h5>
                      <p className="small mb-0">Mantenimiento general, suspensión, ejes y tracción pesada.</p>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#tallerCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#tallerCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Siguiente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORMULARIO DE CONTACTO Y UBICACIÓN */}
      <section id="contacto-form" className="py-5 bg-white">
        <div className="container py-3">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">¿Tienes alguna consulta técnica?</h2>
              <p className="text-secondary mb-4">
                Déjanos tus datos en el formulario para abrir un chat directo con
                nuestro equipo de mecánicos en WhatsApp.
              </p>

              <div className="d-flex align-items-center mb-3 gap-3">
                <i className="bi bi-whatsapp text-success fs-3"></i>
                <div>
                  <strong className="d-block text-dark">
                    WhatsApp Directo:
                  </strong>
                  <span className="text-secondary">+506 6093-4368</span>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4 gap-3">
                <i className="bi bi-clock-fill text-warning fs-3"></i>
                <div>
                  <strong className="d-block text-dark">Horario:</strong>
                  <span className="text-secondary">
                    Lunes a Viernes: 7:30 AM - 5:30 PM | Sábados: 8:00 AM - 1:00
                    PM
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top">
                <p className="fw-bold text-dark mb-2">Síguenos en Facebook:</p>
                <a
                  href="https://www.facebook.com/p/Taller-Wayo-Powersports-61575063284348/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary fw-bold d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-facebook fs-5"></i> Visitar Página de
                  Facebook
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-lg p-4 p-md-5 rounded-4 bg-light">
                <h3 className="h4 fw-bold mb-3">
                  Cotización Rápida por WhatsApp
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      htmlFor="nombre"
                      className="form-label small fw-bold"
                    >
                      Tu Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      placeholder="Ej. Carlos Pérez"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="telefono"
                      className="form-label small fw-bold"
                    >
                      Teléfono o WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      placeholder="Ej. 8888-8888"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="tipoVehiculo"
                      className="form-label small fw-bold"
                    >
                      Tipo de Vehículo
                    </label>
                    <select
                      className="form-select"
                      id="tipoVehiculo"
                      name="tipoVehiculo"
                      value={formData.tipoVehiculo}
                      onChange={handleInputChange}
                    >
                      <option value="Auto">Automóvil / SUV</option>
                      <option value="Moto">Motocicleta</option>
                      <option value="Cuatri/Buggy">
                        Cuatriciclo / Buggy (UTV/ATV)
                      </option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="mensaje"
                      className="form-label small fw-bold"
                    >
                      Detalle o Falla del Vehículo
                    </label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="mensaje"
                      rows="3"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe el servicio que necesitas..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success w-100 fw-bold py-2 shadow-sm fs-5"
                  >
                    <i className="bi bi-whatsapp me-2"></i> Enviar a WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-4 border-top border-secondary">
        <div className="container text-center text-md-between d-md-flex align-items-center">
          <p className="mb-2 mb-md-0 small text-light">
            &copy; {new Date().getFullYear()} Taller Wayo Powersports. Todos los
            derechos reservados.
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a href="#home" className="text-light text-decoration-none small">
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-light text-decoration-none small"
            >
              Servicios
            </a>
            <a
              href="#galeria"
              className="text-light text-decoration-none small"
            >
              Galería
            </a>
            <a
              href="#contacto-form"
              className="text-light text-decoration-none small"
            >
              Contacto
            </a>
            <span className="text-secondary">|</span>
            <a
              href="https://www.facebook.com/p/Taller-Wayo-Powersports-61575063284348/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning fs-5"
              title="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a
        href="https://wa.me/50660934368?text=Hola,%20deseo%20agendar%20una%20cita"
        className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center"
        style={{ width: "60px", height: "60px", zIndex: 1050 }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <i className="bi bi-whatsapp fs-2"></i>
      </a>
    </div>
  );
}
