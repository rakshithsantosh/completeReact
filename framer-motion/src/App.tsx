import "./App.css";
import { motion } from "framer-motion";
import PulsingButton from "./components/PulsingButton";
import BouncingLoader from "./components/BouncingLoader";
import FlippingCard from "./components/FlippingCard";

function App() {
  return (
    <>
      <div>
        {/* <motion.div
          className="box"
          initial={{ x: 0 }}
          animate={{ x: 200 }}
          transition={{ duration: 2, ease: "linear" }}
        />
        <motion.div
          className="boxTwo"
          animate={{ scale: [1, 2, 6, 5, 3, 1], rotate: [0, 270, 330, 0] }}
          transition={{ duration: 5 }}
        /> */}
        <PulsingButton />
        <BouncingLoader />
        <FlippingCard />
      </div>
    </>
  );
}

export default App;
