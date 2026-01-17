import heroImg from "../assets/herogym.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      
      {/* Orange strip */}
      <div className="absolute right-0 top-0 h-full w-24 bg-orange-500"></div>

      <div className="relative z-10 px-6 md:px-16 pt-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-gray-800 rounded-full px-5 py-2 mb-6">
            <span className="text-orange-500 font-semibold mr-2">THE BEST</span>
            <span className="text-sm text-gray-300">
              FITNESS CLUB IN THE TOWN
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
            <span className="stroke-text">SHAPE</span> YOUR <br />
            IDEAL BODY
          </h1>

          <p className="text-gray-400 mt-6 max-w-md text-sm md:text-base">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest.
          </p>

          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { value: "+140", label: "EXPERT COACHES" },
              { value: "+978", label: "MEMBERS JOINED" },
              { value: "+50", label: "FITNESS PROGRAMS" },
            ].map((item) => (
              <div key={item.label}>
                <h2 className="text-3xl font-bold">{item.value}</h2>
                <p className="text-xs text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>

       
        </motion.div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <motion.img
            src={heroImg}
            alt="Gym Athlete"
            className="relative z-10 max-h-[420px] md:max-h-[520px] mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Floating cards - desktop only */}
          <div className="hidden md:block absolute top-20 right-4 bg-gray-800 p-4 rounded-lg">
            <p className="text-xs text-gray-400">Heart Rate</p>
            <h3 className="text-xl font-bold text-orange-500">116 bpm</h3>
          </div>

          <div className="hidden md:block absolute bottom-24 left-10 bg-gray-800 p-4 rounded-lg">
            <p className="text-xs text-gray-400">Calories Burned</p>
            <h3 className="text-xl font-bold text-orange-500">220 kcal</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
