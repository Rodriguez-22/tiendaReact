// Contacto.tsx
import Formulario from "@/components/www/contacto/formulario";
import MapaUbicacion from "@/components/www/contacto/Mapa";
import { motion } from "framer-motion";


const Contacto = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Formulario />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-lg"
        >
          <MapaUbicacion />
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;