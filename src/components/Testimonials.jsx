// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul",
    text: "Best gym experience ever! Trainers are very supportive.",
  },
  {
    name: "Ananya",
    text: "Amazing transformation in 3 months. Highly recommended!",
  },
  {
    name: "Arjun",
    text: "Great environment and modern equipment.",
  },
];

const Testimonials = () => {
  return (
    <section id ="testimonials" className="bg-black text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        What Our <span className="text-orange-500">Members Say</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl"
          >
            <p className="text-sm text-gray-300 mb-4">“{r.text}”</p>
            <h4 className="font-semibold text-orange-500">— {r.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
