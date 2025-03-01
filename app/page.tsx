"use client"
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import { Card, CardFooter, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <div className="text-center">
        <h2 className={title({ size: "xsm" })}>
          AI-Driven Distributed Ocean Dynamics Measurement for Shipping Fuel Savings
        </h2>
      </div>
      
      <div className="h=[500px]">
      <video autoPlay muted loop className="w-screen h-full z-0 shadow-xl rounded-xl">         
        <source src="/captain-website/hero_banner.mp4" type="video/mp4"/>       
      </video>
      </div>
      
      <div className="text-center">
        <h2 className={subtitle()}>
          We are building the &quot;Google Maps for Ships,&quot; enabling safer and more efficient maritime navigation. Our fleet of autonomous ocean drones is designed to collect comprehensive wave data, transforming our ability to predict and model oceanic waves. By traveling to precise GPS coordinates and operating sustainably for weeks, these one-meter-long, wind-powered vessels measure key parameters like wave height, water temperature at multiple depths, wind speed/direction, and ocean depth.
        </h2>
      </div>

      <div className="flex flex-row justify-stretch gap-4 max-w-5xl">
        <Link href={"/about"} passHref >
          <Card className="max-w-xl" isFooterBlurred>
            <Image
              removeWrapper
              className="w-xl h-xl"
              src="/captain-website/promotional1.jpg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <h2 className="font-bold text-3xl">About Us</h2>
            </CardFooter>
          </Card>
        </Link>
        <Link href={"https://google.com"} passHref >
          <Card className="max-w-xl" isFooterBlurred>
            <Image
              removeWrapper
              className="w-xl h-xl"
              src="/captain-website/promotional2.jpg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <h2 className="font-bold text-3xl">Ocean Mapping</h2>
            </CardFooter>
          </Card>
        </Link>
        <Link href={"https://google.com"} passHref >
          <Card className="max-w-xl" isFooterBlurred>
            <Image
              removeWrapper
              className="w-xl h-xl"
              src="/captain-website/promotional3.jpg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <h2 className="font-bold text-3xl">Vessels</h2>
            </CardFooter>
          </Card>
        </Link>
      </div>

      <div>
        <div className="flex flex-row gap-16 justify-center items-center">
          <h1 className={title({ size: "sm" })}>Awards and Recognition:</h1>
          <div className="flex flex-row justify-center items-center max-w-sm gap-8">
            <Link href="https://www.bayicorps.com/" passHref>
              <Image
                src="https://venturewell.org/wp-content/themes/venturewell2016/inc/img/icorps_shaded.png"
              />
            </Link>
            <Link href="https://aws.amazon.com/activate/activate-landing/" passHref>
              <Image
                src="https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256"
              />
            </Link>
            <Link href="https://www.energy.gov/" passHref>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Seal_of_the_United_States_Department_of_Energy.svg/240px-Seal_of_the_United_States_Department_of_Energy.svg.png"
                />
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}
