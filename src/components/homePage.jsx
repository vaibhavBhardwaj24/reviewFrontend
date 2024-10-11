import Spline from "@splinetool/react-spline";
import { SparklesCore } from "./ui/sparkles";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import FuzzySearchComponent from "./fuzzySearch";

export default function HomePage() {
  const steps = [
    {
      title: "Repair Forums",
      description:
        "We source real product feedback from repair forums where long-term users discuss their experiences and issues.",
    },
    {
      title: "Web Scraping",
      description:
        "Our web scrapers collect data from these forums and store it in our database for analysis.",
    },
    {
      title: "Database",
      description:
        "The collected data is structured and saved in our database for easy access and processing.",
    },
    {
      title: "NLP Model",
      description:
        "Using an NLP model, we analyze the data to identify common issues, sentiment trends, and frequently mentioned keywords.",
    },
    {
      title: "Website",
      description:
        "The insights are made available on our website where users can search for specific products and view detailed issue reports.",
    },
  ];
  const features = [
    {
      title: "Sentiment Analysis",
      description:
        "Our advanced sentiment analysis algorithm identifies positive and negative feedback, helping you understand user experiences better.",
      icon: "🔍", // Replace with your icon or image
    },
    {
      title: "Common Issues Highlighted",
      description:
        "We aggregate user-reported problems and highlight the most common issues, saving you time and effort in research.",
      icon: "⚙️", // Replace with your icon or image
    },
    {
      title: "Word Cloud Visualization",
      description:
        "Visualize the most frequently mentioned issues with our word cloud feature, making it easy to spot trends and concerns.",
      icon: "🌥️", // Replace with your icon or image
    },
    {
      title: "In-Depth User Reviews",
      description:
        "Access detailed insights from long-term users, ensuring you get an unbiased view of product performance.",
      icon: "📝", // Replace with your icon or image
    },
  ];

  // State to track which steps are visible
  const [visibleSteps, setVisibleSteps] = useState(steps.map(() => false));
  const stepRefs = useRef([]);

  // Intersection Observer to animate steps when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleSteps((prevVisibleSteps) =>
              prevVisibleSteps.map((visible, idx) =>
                idx === index ? true : visible
              )
            );
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    // Cleanup observer on unmount
    return () => {
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div className="bg-black h-full w-full">
      <div className="h-screen">
        <Spline scene="https://prod.spline.design/EwbCq9iGcBf6q9Yv/scene.splinecode" />
      </div>

      <div className="h-screen">
        <div className="bg-transparent text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-6xl font-bold text-center mb-3">
                Key Features
              </h2>
              <div className="w-[40rem] h-5 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              </div>
              {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_100px_at_top,transparent_20%,white)]"></div> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <p className="text-5xl">{feature.icon}</p>
                    <h3 className="text-xl font-semibold ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="p-4">
              <FuzzySearchComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen flex justify-center items-start text-white">
        <div className="flex flex-col justify-center items-center z-0 ">
          <h1 className="text-6xl font-bold z-0">How It Works</h1>

          {/* Sparkle effects and gradient lines */}
          <div className="w-[40rem] h-20 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_100px_at_top,transparent_20%,white)]"></div>
          </div>
          <div className="w-full h-full flex justify-center gap-4 items-center">
            <div className="flex flex-col space-y-4 mt-8 cursor-default">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)} // Assign refs to elements
                  initial={{ opacity: 0, y: 50 }} // Initial hidden state
                  animate={visibleSteps[index] ? { opacity: 1, y: 0 } : {}} // Animate when visible
                  transition={{ duration: 0.6, delay: index * 0.2 }} // Add slight delay between steps
                  className=" p-1 px-2 rounded-xl shadow-md hover:bg-blue-400/20 hover:border-blue-500/50 border-black border-2 duration-200"
                >
                  <h3 className="text-lg font-semibold te xt-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <img
              src="src\components\flow4.png"
              className="h-fit rounded-xl mt-8"
              height={40}
              width={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
