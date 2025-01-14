"use client"
import Link from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles, card as cardStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody, CardHeader, CardFooter, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>

      <div className="flex flex-row justify-stretch gap-4 max-w-5xl">
        <Link href={"https://thispersondoesnotexist.com"} passHref >
          <Card className="max-w-xl" isFooterBlurred>
            <Image
              removeWrapper
              className="w-xl h-xl"
              src="/promotional1.jpg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <h2 className="font-bold text-3xl">About Us</h2>
            </CardFooter>
          </Card>
        </Link>
        <Link href={"https://thispersondoesnotexist.com"} passHref >
          <Card className="max-w-xl" isFooterBlurred>
            <Image
              removeWrapper
              className="w-xl h-xl"
              src="/promotional2.jpg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <h2 className="font-bold text-3xl">Ocean Mapping</h2>
            </CardFooter>
          </Card>
        </Link>
        <Link href={"https://thispersondoesnotexist.com"} passHref >
          <Card className="max-w-xl" isFooterBlurred>
            <Image
              removeWrapper
              className="w-xl h-xl"
              src="/promotional3.jpg"
            />
            <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large top-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <h2 className="font-bold text-3xl">Vessels</h2>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </section>
  );
}
