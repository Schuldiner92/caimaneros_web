export const items = [
  {
    title: "Entrenamiento",
    image: "/navbar/icono-lista.png",
    ruta: "",
  },

  {
    title: "Torneos",
    image: "/navbar/icono-trofeo.png",
    ruta: "EntrenadorPrincipalTorneos",
  },

  {
    title: "Calendario",
    image: "/navbar/icono-horario.png",
    ruta: "",
  },
  {
    title: "Convocatoria",
    image: "/navbar/icono-team.png",
    ruta: "EntrenadorPrincipalConvocatorias",
  },
  {
    title: "",
    image: "/navbar/cuenta.png",
    submenu: [
      {
        title: "Información",
        image: "/navbar/icono-informacion.png",
        ruta: "BienvenidaEntrenadorPrincipal",
      },
      {
        title: "Notificaciones",
        image: "/navbar/icono-notificaciones.png",
        ruta: "",
      },
      {
        title: "Salir",
        image: "/navbar/icono-salir.png",
        ruta: "/logout",
      },
    ],
  },
];
