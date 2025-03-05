import { useState } from "react";
import viteLogo from "/vite.svg";
import Nav from "../components/Nav";
import Top from "../components/Top";
import Scroll from "../components/Scroll";
import Card from "../components/Card";
import Heading from "../components/Heading";

function Home() {
  const [count, setCount] = useState(0);

  const cardData = [
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      content: "An amazing album by Kendrick Lamar, featuring deep lyrics and powerful beats.",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      content: "A masterpiece of hip-hop storytelling with incredible production quality.",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      content: "This album redefined modern rap and showcased Kendrick's lyrical genius.",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      content: "A fusion of jazz, soul, and rap that takes listeners on a powerful journey.",
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
      <div className="mt-16">
        <Top />

        <Scroll baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10} />

        {/* Card Container */}
        <div className="flex flex-col gap-12 px-8">
          {cardData.map((card, index) => (
            <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
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
                overlayContent={<p className="tilted-card-demo-text">{card.captionText}</p>}
              />

              {/* Text Content */}
              <div className="max-w-md">
                <Heading
                  text="Isn't this so cool?!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl font-bold text-gray-800"
                />
                <p className="text-gray-600 mt-2">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
