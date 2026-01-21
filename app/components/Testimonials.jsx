const testimonials = [
  {
    name: "Alex",
    text: "I learned Spanish in just a few months — and it never felt boring.",
    avatar: "🧑‍🎓",
  },
  {
    name: "Maria",
    text: "The streaks keep me coming back every day. I’m addicted!",
    avatar: "👩‍💼",
  },
  {
    name: "James",
    text: "Way better than textbooks. The AI feedback is amazing.",
    avatar: "👨‍💻",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-green-50 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Loved by millions of learners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow"
            >
              <div className="text-5xl mb-4">{t.avatar}</div>
              <p className="text-gray-700 mb-4">
                “{t.text}”
              </p>
              <p className="font-bold text-green-600">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
