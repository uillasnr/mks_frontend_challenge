import { FooterContainer } from "./styles";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <FooterContainer>
        <h2>MKS sistemas © Todos os direitos reservados</h2>
      </FooterContainer>
    </motion.div>
  );
}
