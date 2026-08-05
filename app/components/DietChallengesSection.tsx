import { FaRegCircle, FaRegCheckCircle, FaFire, FaHeartbeat, FaBrain, FaUserClock } from "react-icons/fa";
import { GiStomach, GiMuscleUp } from "react-icons/gi";

export default function DietChallengesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why weight loss feels frustrating — and why most diets fail
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Common Struggles */}
          <div className="animate-fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <FaFire className="text-red-500 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  You've probably tried doing "everything right":
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Eating less or skipping meals",
                  "Following strict diet plans",
                  "Starting workouts again and again"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaRegCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-gray-800 italic">
                  "Yet the results don't last. Weight goes down briefly — then comes back. Energy drops. Motivation drops. Confidence takes a hit."
                </p>
              </div>
            </div>

            {/* The Real Problem Card */}
            <div className="mt-8 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-white animate-fade-up">
              <h3 className="text-2xl font-bold mb-4">
                This isn't about willpower or food choices.
              </h3>
              <p className="text-lg opacity-90">
                Over time, this creates confusion, self-doubt, and burnout — not sustainable weight loss.
              </p>
            </div>
          </div>

          {/* Right Column - Why Diets Fail */}
          <div className="animate-fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FaRegCheckCircle className="text-green-600 text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Most diet plans fail because they follow a one-size-fits-all approach — ignoring:
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <GiStomach className="text-2xl text-green-500" />,
                    title: "Hormones",
                    desc: "Thyroid, cortisol, insulin resistance"
                  },
                  {
                    icon: <FaBrain className="text-2xl text-green-500" />,
                    title: "Stress and sleep",
                    desc: "Cortisol spikes, poor recovery"
                  },
                  {
                    icon: <FaUserClock className="text-2xl text-green-500" />,
                    title: "Work schedules",
                    desc: "Irregular hours, business trips"
                  },
                  {
                    icon: <FaHeartbeat className="text-2xl text-green-500" />,
                    title: "Social life",
                    desc: "Family meals, celebrations"
                  },
                  {
                    icon: <GiMuscleUp className="text-2xl text-green-500" />,
                    title: "Metabolic slowdown",
                    desc: "From repeated dieting"
                  },
                  {
                    icon: <FaFire className="text-2xl text-red-500" />,
                    title: "Energy levels",
                    desc: "Chronic fatigue, low motivation"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-md border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm ml-12">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}