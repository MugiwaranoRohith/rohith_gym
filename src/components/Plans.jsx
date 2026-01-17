// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "$25",
    features: ["Gym Access", "Basic Training", "Free WiFi"],
  },
  {
    name: "Premium",
    price: "$50",
    features: ["All Access", "Personal Trainer", "Diet Plan"],
  },
  {
    name: "Pro",
    price: "$75",
    features: ["VIP Access", "24/7 Trainer", "Custom Workouts"],
  },
];

const Plans = () => {
  const handleJoinNow = (planName) => {
    // save selected plan
    localStorage.setItem("selectedPlan", planName);

    // scroll to workout tracker
    document.getElementById("tracker")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="plans"
      className="scroll-mt-24 bg-gray-950 text-white py-20 px-6 md:px-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Choose Your <span className="text-orange-500">Plan</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border border-gray-800 p-8 rounded-xl text-center hover:border-orange-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

            <p className="text-4xl font-bold text-orange-500 mb-6">
              {plan.price}
            </p>

            <ul className="space-y-2 text-sm text-gray-300 mb-8">
              {plan.features.map((f) => (
                <li key={f}>✔ {f}</li>
              ))}
            </ul>

            <button
              onClick={() => handleJoinNow(plan.name)}
              className="bg-orange-500 text-black px-6 py-2 font-semibold hover:bg-orange-600 transition"
            >
              Join Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;

