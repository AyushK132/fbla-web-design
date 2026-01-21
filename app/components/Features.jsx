const features = [
  {
    title: "Learn by Doing",
    description:
      "Short, interactive lessons that feel like games, not homework.",
    icon: "🎮",
  },
  {
    title: "Multiple Languages",
    description:
      "Spanish, French, Japanese, Korean, German, and many more.",
    icon: "🗣️",
  },
  {
    title: "Daily Streaks",
    description:
      "Stay motivated with streaks, XP, leagues, and achievements.",
    icon: "🔥",
  },
  {
    title: "AI-Powered Practice",
    description:
      "Get instant feedback on pronunciation and grammar.",
    icon: "🤖",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Why learners love us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
