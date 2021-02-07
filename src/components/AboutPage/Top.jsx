import React from "react";
import { motion } from "framer-motion";
import { topContainerVariants, topPVariants } from "./Variants";

const Top = () => {
  return (
    <motion.div
      variants={topContainerVariants}
      animate="visible"
      initial="hidden"
      exit="exit"
      className="about-page-top"
    >
      <motion.p variants={topPVariants}>
        Soy un joven mexicano dispuesto a cambiar el mundo con tecnología. 

        Estoy apasionado por la tecnología.
        <br />
        En especial la <span>Inteligencia Artificial.</span>{" "}
      </motion.p>
      <motion.p variants={topPVariants}>
        Tengo gran atención en el detalle en la experiencia de usuario.
      </motion.p>
      <motion.p variants={topPVariants}>
        Tengo la iniciativa de encontrar soluciones tecnológicas.
      </motion.p>
    </motion.div>
  );
};
export default Top;
