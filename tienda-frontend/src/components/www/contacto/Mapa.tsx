const MapaUbicacion = () => {
  return (
    <div className="bg-white p-6 rounded shadow h-full">
      <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
      <div className="aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.0264939476847!2d-1.8705670241410368!3d37.24707887212307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503afd2af93%3A0xeec84b60dafd98b1!2sC.%20Mayor%2C%2021%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1745511445023!5m2!1ses!2ses"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default MapaUbicacion;
