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
      <div>
        <h1 className={title({ size: "sm" })}>Mission and Vision</h1>
        <p>
          We are building the "Google Maps for Ships," enabling safer and more efficient maritime navigation. Our fleet of autonomous ocean drones is designed to collect comprehensive wave data, transforming our ability to predict and model oceanic waves. By traveling to precise GPS coordinates and operating sustainably for weeks, these one-meter-long, wind-powered vessels measure key parameters like wave height, water temperature at multiple depths, wind speed/direction, and ocean depth.
          Using a cutting-edge LoRa mesh network for communication, our drones minimize reliance on satellites while ensuring real-time data transmission. This groundbreaking system aims to revolutionize maritime safety, environmental research, and oceanic monitoring on a global scale.
        </p>
      </div>
      <div>
        <h1 className={title({ size: "sm" })}>The Technology</h1>
        <div className="flex flex-row gap-6 items-center">
          <Image className="max-w-xs"
            src="/promotional5.jpg"
          />
          <div className="flex flex-col gap-8 justify-center">
            <p>CaptAIn is equipped with a cutting-edge wave energy converter, allowing it to harness the power of ocean waves to generate the energy required for long-term operation. This sustainable energy solution enables the drones to travel autonomously for weeks without the need for frequent recharging, making them highly efficient and eco-friendly.</p>
            <p>Additionally, they utilize a LoRa mesh network for real-time data transmission. This communication system reduces the reliance on satellite infrastructure, allowing the drones to share critical oceanic data efficiently over long distances. The LoRa network provides enhanced reliability and connectivity in remote ocean regions, ensuring continuous monitoring and seamless data collection from the fleet of drones.</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className={title({ size: "sm" })}>Applications</h1>
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-col gap-8 justify-center">
            <p>CaptAIn offers a range of interconnected applications that enhance maritime safety, environmental research, oceanic monitoring, and shipping efficiency. By providing real-time data on wave height, wind, ocean temperature, and currents, these drones will help ships navigate safely, avoid hazardous conditions, and optimize routes. This not only reduces the risk of accidents but also contributes to more sustainable and efficient shipping practices.</p>
            <p>These drones also prove to play a crucial role in environmental research and oceanic monitoring by providing continuous, real-time data on ocean health, climate change, and marine ecosystems. This will enable researchers and organizations to track important environmental shifts and better understand the impacts of climate change on marine life. Together, these capabilities contribute to a deeper understanding of the ocean's dynamic nature and drive meaningful environmental stewardship.</p>
          </div>
          <Image className="max-w-xs"
            src="/promotional6.png"
          />
        </div>
      </div>
    </div>
  );
}
