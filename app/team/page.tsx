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


  const list = [
    { 
      name: "Reza Alam, PI",
      img: "/team/reza_alam.png",
      role: "Prof. Mechanical Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Arsh Khan",
      img: "/team/arsh_khan.png",
      role: "PhD, Ocean Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com/arshkhan1402", 
      hasLinkedIn: true,
      hasGithub: true
    }, 
    {
      name: "Jan Dustin T.",
      img: "/team/jan_dustin.png",
      role: "MEng, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Michael Han",
      img: "https://thispersondoesnotexist.com",
      role: "MEng, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    }, 
    {
      name: "Mariëtte Peutz",
      img: "/team/mariette_peutz.png",
      role: "MEng, Bio Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    }, 
    {
      name: "Kieran Pereira",
      img: "https://thispersondoesnotexist.com",
      role: "MEng, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Evan Kuo",
      img: "/team/evan_kuo.png",
      role: "BS, Energy Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Seongjae Ahn",
      img: "/team/seongjae_ahn.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Nilesh K.",
      img: "/team/nilesh.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Ian Zhang",
      img: "/team/ian_zhang.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Mekhi Roberts",
      img: "https://thispersondoesnotexist.com",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Srisha R.",
      img: "/team/srisha.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Arlind Shorri",
      img: "/team/arlind_shorri.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Nick Bui",
      img: "/team/nick_bui.png",
      role: "BS, Electrical Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Elaf Alahdal",
      img: "/team/elaf_alahdal.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Navjot Singh",
      img: "/team/navjot_singh.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Alex Lu",
      img: "https://thispersondoesnotexist.com",
      role: "BS, CS Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Kaiyu Li",
      img: "/team/kaiyu_li.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    }
  ]

  return (
    <div>
      <h1 className={title()}>Meet the Team</h1>
      <div className="flex flex-wrap justify-center max-w-5xl gap-4 py-8 md:py-10">
        {list.map((item, index) => (
          <Card key={index} className="max-w-[475px]">
            <CardHeader className="flex flex-col justify-center">
              <Image
              alt={item.name}
              className="object-cover rounded-full"
              src={item.img}
              width="200"
              />
              <h4 className="font-bold text-large">{item.name}</h4>
              <p className="text-small text-default-500">{item.role}</p>
            </CardHeader>
            {/* <CardBody>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </CardBody>
            <Divider /> */}
            <Divider />
            <CardFooter className="flex flex-row justify-center gap-5"> 
              {item.hasLinkedIn &&
                <Link isExternal aria-label="LinkedIn" href={item.linkedIn}>
                  <LinkedinIcon className="text-sky-900" size={36} />
                </Link>
              }
              {item.hasGithub &&
                <Link isExternal aria-label="Github" href={item.github}>
                  <GithubIcon className="text-black dark:text-default-500" size={36} />
                </Link>
              }
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
