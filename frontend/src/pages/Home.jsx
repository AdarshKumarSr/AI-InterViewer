import { useState } from "react";
import viteLogo from "/vite.svg";
import Nav from "../components/Nav";
import Top from "../components/Top";
import MiddleText from "../components/MiddleText";
import Scroll from "../components/Scroll";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function Home() {
  const [count, setCount] = useState(0);

  const cardData = [
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
      altText: "AI-Powered Resume Analysis",
      captionText: "Resume Analysis",
      headingText: "Your resume, now smarter!",
      content:
        "Our AI scans your resume, identifies strengths and weaknesses, and provides actionable feedback to optimize it for job applications.",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      altText: "Technical Interview Simulation",
      captionText: "Mock Tech Interviews",
      headingText: "Nail your next interview!",
      content:
        "Get real-time AI-driven technical interviews tailored to your domain, covering coding, system design, and behavioral questions.",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
      altText: "AI Feedback and Evaluation",
      captionText: "AI-Powered Feedback",
      headingText: "Instant feedback like never before!",
      content:
        "Receive instant, detailed feedback on your responses, including clarity, confidence, and technical accuracy.",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/1055/1055647.png",
      altText: "Live Mock Interview",
      captionText: "Live AI Mock Interviews",
      headingText: "Ace your interviews with AI!",
      content:
        "Practice your interview skills with an AI-powered mock interviewer that adapts to your answers and improves your confidence.",
    },
  ];

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Add margin to prevent hiding behind navbar */}
      <div className="mt-36">
        <Top />

        <MiddleText
          texts={['GOOGLE GEMINI', ' AI Interviewer']}
          velocity={100}
          className="custom-scroll-text text-5xl" />

        {/* Card Container */}
        <div className="flex flex-col gap-12 px-8 mt-36">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex items-center gap-8  ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
              {/* Card */}
              <Card
                imageSrc={card.imageSrc}
                altText={card.altText}
                captionText={card.captionText}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              // overlayContent={
              //   <p className="tilted-card-demo-text">{card.captionText}</p>
              // }
              />

              {/* Text Content */}
              <div className="max-w-md">
                {/* Ensuring Heading is properly wrapped */}
                <div className="relative">
                  <Heading
                    text={card.headingText}
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-3xl font-extrabold text-gray-900 leading-snug"
                  />
                </div>
                <p className="text-gray-600 mt-3">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
