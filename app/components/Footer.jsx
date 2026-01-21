export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        <div>
          <h3 className="text-white font-bold text-xl mb-2">
            LinguaGo 🌱
          </h3>
          <p className="max-w-sm">
            Learn languages for free, forever. Fun, effective, and backed by
            science.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="text-white font-bold mb-2">Product</h4>
            <ul className="space-y-1">
              <li>Courses</li>
              <li>Pricing</li>
              <li>Mobile App</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-10">
        © {new Date().getFullYear()} LinguaGo. All rights reserved.
      </p>
    </footer>
  );
}
