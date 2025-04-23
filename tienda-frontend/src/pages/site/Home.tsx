import { useEffect, useState } from "react";
import Inicio from "@/components/www/Home/Inicio"; // Asegúrate que esta ruta sea correcta
import { Spinner } from "@/components/ui/spinner"; // Asegúrate que el componente Spinner esté bien implementado

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [hasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Retraso de 1 segundo para el spinner
    return () => clearTimeout(timer);
  }, []);

  // Controlar posibles errores al cargar el componente Inicio
  if (hasError) {
    return <div>Hubo un error al cargar el contenido.</div>;
  }

  return loading ? (
    <div className="flex justify-center items-center min-h-screen">
      <Spinner /> {/* Asegúrate de tener un Spinner funcional */}
    </div>
  ) : (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Inicio /> {/* Asegúrate de que este componente se renderiza correctamente */}
      </div>
    </main>
  );
};

export default Home;
