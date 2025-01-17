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


  const teamList = [
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

  const advisorList = [
    { 
      name: "Prof. Shahab Tayeb",
      img: "/advisors/shahab_tayeb.jpg",
      role: "Wireless Communication Advisor",
      desc: "A professor of Electrical and Computer Engineering at California State University, Fresno, Shahab Tayeb is skilled in Network Security, Cybersecurity, Internet of Things, Wireless Sensor Networks, and Vehicular Networks."
    },
    { 
      name: "Prof. Chunyi Peng",
      img: "/advisors/chunyi_peng.jpg",
      role: "Wireless Communication Advisor",
      desc: "A professor in the Computer Science department of Purdue University, Chunyi Peng aims to improve the performance, reliability, and security of network systems, especially in the realm of mobile computing."
    },
    { 
      name: "Prof. Dalal Alharthi",
      img: "/advisors/dalal_alharthi.jpg",
      role: "Cybersecurity Advisor",
      desc: "A professor in the College of Applied Science & Technology at the University of Arizona, Dalal Alharthi works on cyber resilient frameworks for computer-based systems."
    }
  ]

  return (
    <div>
      <h1 className={title()}>Meet the Team</h1>
      <div className="flex flex-wrap justify-center max-w-5xl gap-4 py-8 md:py-10">
        {teamList.map((item, index) => (
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
      <h1 className={title({ size: "sm" })}>Scientific Advisors</h1>
      <div className="flex flex-wrap justify-center max-w-5xl gap-4 py-8 md:py-10">
        {advisorList.map((item, index) => (
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
            <CardBody>
              <p className="text-center">{item.desc}</p>
            </CardBody>
            <Divider />
          </Card>
        ))}
      </div>
    </div>
  );
}
