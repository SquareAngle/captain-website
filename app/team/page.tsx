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
      <div className="flex flex-wrap justify-center max-w-5xl gap-4 py-8 md:py-10">
        <Card className="max-w-[475px]">
          <CardHeader className="flex flex-col justify-center">
            <Image
            alt="Reza Alam"
            className="object-cover rounded-full"
            src="/team/reza_alam.png"
            width="200"
            />
            <h4 className="font-bold text-large">Reza Alam, PI</h4>
            <p className="text-small text-default-500">Prof. Mechanical Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Arsh Khan"
            className="object-cover rounded-full"
            src="/team/arsh_khan.png"
            width="200"
            />
            <h4 className="font-bold text-large">Arsh Khan</h4>
            <p className="text-small text-default-500">PhD, Ocean Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Jan Dustin T."
            className="object-cover rounded-full"
            src="/team/jan_dustin.png"
            width="200"
            />
            <h4 className="font-bold text-large">Jan Dustin T.</h4>
            <p className="text-small text-default-500">MEng, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Michael Han"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com"
            width="200"
            />
            <h4 className="font-bold text-large">Michael Han</h4>
            <p className="text-small text-default-500">MEng, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Mariëtte Peutz"
            className="object-cover rounded-full"
            src="/team/mariette_peutz.png"
            width="200"
            />
            <h4 className="font-bold text-large">Mariëtte Peutz</h4>
            <p className="text-small text-default-500">MEng, Bio Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Kieran Pereira"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com"
            width="200"
            />
            <h4 className="font-bold text-large">Kieran Pereira</h4>
            <p className="text-small text-default-500">MEng, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Evan Kuo"
            className="object-cover rounded-full"
            src="/team/evan_kuo.png"
            width="200"
            />
            <h4 className="font-bold text-large">Evan Kuo</h4>
            <p className="text-small text-default-500">BS, Energy Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Seongjae Ahn"
            className="object-cover rounded-full"
            src="/team/seongjae_ahn.png"
            width="200"
            />
            <h4 className="font-bold text-large">Seongjae Ahn</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Nilesh K"
            className="object-cover rounded-full"
            src="/team/nilesh.png"
            width="200"
            />
            <h4 className="font-bold text-large">Nilesh K</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Ian Zhang"
            className="object-cover rounded-full"
            src="/team/ian_zhang.png"
            width="200"
            />
            <h4 className="font-bold text-large">Ian Zhang</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Mekhi Roberts"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com"
            width="200"
            />
            <h4 className="font-bold text-large">Mekhi Roberts</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Srisha R."
            className="object-cover rounded-full"
            src="/team/srisha.png"
            width="200"
            />
            <h4 className="font-bold text-large">Srisha R.</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Arlind Shorri"
            className="object-cover rounded-full"
            src="/team/arlind_shorri.png"
            width="200"
            />
            <h4 className="font-bold text-large">Arlind Shorri</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Nick Bui"
            className="object-cover rounded-full"
            src="/team/nick_bui.png"
            width="200"
            />
            <h4 className="font-bold text-large">Nick Bui</h4>
            <p className="text-small text-default-500">BS, Electrical Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Elaf Alahdal"
            className="object-cover rounded-full"
            src="/team/elaf_alahdal.png"
            width="200"
            />
            <h4 className="font-bold text-large">Elaf Alahdal</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Navjot Singh"
            className="object-cover rounded-full"
            src="/team/navjot_singh.png"
            width="200"
            />
            <h4 className="font-bold text-large">Navjot Singh</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Alex Lu"
            className="object-cover rounded-full"
            src="https://thispersondoesnotexist.com"
            width="200"
            />
            <h4 className="font-bold text-large">Alex Lu</h4>
            <p className="text-small text-default-500">BS, CS Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
            alt="Kaiyu Li"
            className="object-cover rounded-full"
            src="/team/kaiyu_li.png"
            width="200"
            />
            <h4 className="font-bold text-large">Kaiyu Li</h4>
            <p className="text-small text-default-500">BS, Mech Engineering</p>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </CardBody>
          <Divider /> */}
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
