"use client";

import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/image"

import {
  TwitterIcon,
  GithubIcon,
  LinkedinIcon
} from "@/components/icons";

export default function TeamPage() {
  return (
    <div>
      <h1 className={title()}>Meet the Team</h1>
      <div className="flex flex-wrap max-w-5xl gap-4 py-8 md:py-10">
        <Card className="max-w-[475px]">
          <CardHeader className="flex flex-col justify-center">
            <Image
            alt="Person 1"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com/"
            width="200"
            />
            <h4 className="font-bold text-large">Person One</h4>
            <p className="text-small text-default-500">Person One Role</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-row justify-center gap-5"> 
            <Link isExternal aria-label="LinkedIn" href="https://linkedin.com">
              <LinkedinIcon className="text-sky-900" size="36" />
            </Link>
            <Link isExternal aria-label="Github" href="https://github.com">
              <GithubIcon className="text-black dark:text-default-500" size="36" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[475px]">
          <CardHeader className="flex flex-col justify-center">
            <Image
            alt="Person 2"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com/"
            width="200"
            />
            <h4 className="font-bold text-large">Person Two</h4>
            <p className="text-small text-default-500">Person Two Role</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-row justify-center gap-5"> 
            <Link isExternal aria-label="LinkedIn" href="https://linkedin.com">
              <LinkedinIcon className="text-sky-900" size="36" />
            </Link>
            <Link isExternal aria-label="Github" href="https://github.com">
              <GithubIcon className="text-black dark:text-default-500" size="36" />
            </Link>
          </CardFooter>
        </Card>
        <Card className="max-w-[475px]">
          <CardHeader className="flex flex-col justify-center">
            <Image
            alt="Person 3"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com/"
            width="200"
            />
            <h4 className="font-bold text-large">Person Three</h4>
            <p className="text-small text-default-500">Person Three Role</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-row justify-center gap-5"> 
            <Link isExternal aria-label="LinkedIn" href="https://linkedin.com">
              <LinkedinIcon className="text-sky-900" size="36" />
            </Link>
            <Link isExternal aria-label="Github" href="https://github.com">
              <GithubIcon className="text-black dark:text-default-500" size="36" />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
