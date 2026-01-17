import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import WorkoutTracker from "./components/WorkoutTracker";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Programs />
      <Plans />
            <WorkoutTracker />

      <Testimonials />
    </div>
  );
}

export default App;
