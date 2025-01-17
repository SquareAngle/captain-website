"use client"
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/react"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className={title()}>About</h1>
      <Image className="max-w-4xl"
        src="/promotional4.jpg"
       />
      <div className="flex flex-col gap-8 justify-center">
        <h1 className={title({ size: "sm" })}>Mission and Vision</h1>
        <p>
          <strong>Our Mission: </strong>
          To revolutionize maritime navigation and oceanic monitoring through autonomous ocean drones that collect real-time wave data, enhancing safety, sustainability, and environmental research.
        </p>
        <p>
          <strong>Our Vision: </strong>
          To lead global maritime safety and ocean insights, empowering navigation with real-time data from our fleet of autonomous, wind-powered drones.
        </p>
      </div>
      <div>
        <h1 className={title({ size: "sm" })}>The Technology</h1>
        <div className="flex flex-row gap-6 items-center">
          <Image className="max-w-xs"
            src="/promotional5.jpg"
          />
          <div className="flex flex-col gap-8 justify-center">
            <p>
              <strong>Wave Energy Converter: </strong>
              Harnesses ocean waves to generate power, enabling long-term, autonomous operation without frequent recharging. Sustainable and eco-friendly.
            </p>
            <p>
              <strong>LoRa Mesh Network: </strong>
              Enables real-time data transmission over long distances, reducing reliance on satellites. Ensures reliable connectivity and continuous monitoring in remote ocean regions.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className={title({ size: "sm" })}>Applications</h1>
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-col gap-8 justify-center">
            <p>
              <strong>Maritime Safety and Shipping Efficiency: </strong>
              CaptAIn provides real-time data on wave height, wind, ocean temperature, and currents, helping ships navigate safely and optimize routes. This reduces accidents and supports sustainable, efficient shipping.
            </p>
            <p>
              <strong>Environmental Research and Oceanic Monitoring: </strong>
              The drones offer continuous data on ocean health, climate change, and marine ecosystems, aiding research on environmental shifts and climate impacts. This fosters environmental stewardship and deeper oceanic understanding.
            </p>
          </div>
          <Image className="max-w-xs"
            src="/promotional6.png"
          />
        </div>
      </div>
    </div>
  );
}
