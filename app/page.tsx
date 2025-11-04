"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const goshaList = [
    "స్వామియే శరణమయ్యప్ప 🙏",
    "హరి హర సుతనే శరణమయ్యప్ప 🙏",
    "ఆపద్భాందవనే శరణమయ్యప్ప 🙏",
    "అనాధరక్షకనే శరణమయ్యప్ప 🙏",
    "అన్నదాన ప్రభువే శరణమయ్యప్ప 🙏",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % goshaList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [goshaList.length]);

  return (
    <>
      {/* Telugu Gosha Slider */}
      <section className="relative w-full max-w-4xl mx-auto mt-12 py-16 px-4 rounded-2xl bg-gradient-to-b from-black via-[#FF9933]/40 to-black text-center shadow-lg overflow-hidden">
        {goshaList.map((gosha, index) => (
          <p
            key={index}
            className={`absolute inset-0 flex justify-center items-center text-3xl sm:text-4xl md:text-5xl font-bold transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              } text-[#FFD700] drop-shadow-[0_0_10px_#FF9933]`}
          >
            {gosha}
          </p>
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {goshaList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-[#FFD700] scale-125" : "bg-gray-500"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-black via-[#FF9933]/60 to-black">
        <h1 className="text-4xl font-bold text-[#FFD700] drop-shadow-lg">
          శ్రీ అయ్యప్ప స్వామి దేవస్థానం
        </h1>
        <p className="mt-4 text-lg text-white max-w-xl mx-auto">
          మన పవిత్రమైన ఆలయం నిర్మాణంలో ఉంది.
          అయ్యప్ప భక్తులతో కలిసి ఈ దివ్య క్షేత్రాన్ని నిర్మిద్దాం 🙏
        </p>
        <div className="mt-6">
          <a
            href="/donations"
            className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#FF9933] transition"
          >
            ఆలయ నిర్మాణానికి సహకరించండి
          </a>
        </div>
      </section>
    </>
  );
}
