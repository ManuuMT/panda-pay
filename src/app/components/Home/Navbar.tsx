import { motion } from "framer-motion";

export function Navbar() {
  const variant = {
    hidden: { opacity: 0, y: -50 },
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom,
      },
    }),
  };

  return (
    <div className="altform fixed top-0 z-10 text-black w-full">
      <div className="flex w-full">
        <div className="flex w-3/4">
          <motion.div
            variants={variant}
            initial="hidden"
            animate="show"
            custom={0}
            className="bg-black py-3 px-4 text-white flex justify-between w-2/5"
            style={{ borderRadius: "0 0 15px 0" }}
          >
            <p className="text-lg">PandaPay</p>
            <p>icon</p>
          </motion.div>
          <motion.div
            variants={variant}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="font-bold py-3 px-4"
          >
            <p>Welcome</p>
          </motion.div>
        </div>
        <motion.div
          variants={variant}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="font-bold px-10 py-3 w-1/4 text-right"
        >
          <p>Support</p>
        </motion.div>
      </div>
    </div>
  );
}
