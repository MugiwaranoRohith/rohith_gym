// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const programs = [
  { title: "Strength Training", desc: "Build muscle & increase strength" },
  { title: "Cardio Training", desc: "Improve stamina & heart health" },
  { title: "Fat Burning", desc: "High intensity fat loss programs" },
  { title: "Health Fitness", desc: "Overall body wellness & mobility" },
];

const Programs = () => {
  return (
    <section id="programs" className="bg-black text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Explore Our <span className="text-orange-500">Programs</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="bg-gray-900 p-6 rounded-xl hover:bg-orange-500 hover:text-black transition cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-sm opacity-80">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
