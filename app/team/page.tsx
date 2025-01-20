"use client";

import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/image"

import {
  GithubIcon,
  LinkedinIcon
} from "@/components/icons";

import { title } from "@/components/primitives";

export default function TeamPage() {


  const teamList = [
    {
      name: "Arsh Khan",
      img: "/captain-website/team/arsh_khan.png",
      role: "PhD, Ocean Engineering",
      linkedIn: "https://www.linkedin.com/in/arsh-khan14/",
      github: "https://github.com/arshkhan1402/", 
      hasLinkedIn: true,
      hasGithub: true
    }, 
    {
      name: "Jan Dustin T.",
      img: "/captain-website/team/jan_dustin.png",
      role: "MEng, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/jantengdyantono/",
      github: "https://github.com/dustinteng/", 
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
      img: "/captain-website/team/mariette_peutz.png",
      role: "MEng, Bio Engineering",
      linkedIn: "https://www.linkedin.com/in/mari%C3%ABtte-peutz/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    }, 
    {
      name: "Kieran Pereira",
      img: "/captain-website/team/kieran_pereira.jpg",
      role: "MEng, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/kieranpereira1/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Evan Kuo",
      img: "/captain-website/team/evan_kuo.png",
      role: "BS, Energy Engineering",
      linkedIn: "https://www.linkedin.com/in/evan-kuo-1530422a9/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Seongjae Ahn",
      img: "/captain-website/team/seongjae_ahn.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/seong-jae-ahn-126838244/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Nilesh K.",
      img: "/captain-website/team/nilesh.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Ian Zhang",
      img: "/captain-website/team/ian_zhang.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/ian-zhang-profile/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Mekhi Roberts",
      img: "https://thispersondoesnotexist.com",
      role: "BS, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/mekhi-roberts-012a27283/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Srisha R.",
      img: "/captain-website/team/srisha.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/srisharewatkar/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Arlind Shorri",
      img: "/captain-website/team/arlind_shorri.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://www.linkedin.com/in/arlind-shorri-73158b32a/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Nick Bui",
      img: "/captain-website/team/nick_bui.png",
      role: "BS, Electrical Engineering",
      linkedIn: "https://www.linkedin.com/in/nickkbuii/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Elaf Alahdal",
      img: "/captain-website/team/elaf_alahdal.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Navjot Singh",
      img: "/captain-website/team/navjot_singh.png",
      role: "BS, Mech Engineering",
      linkedIn: "https://linkedin.com",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: true
    },
    {
      name: "Alex Lu",
      img: "/captain-website/team/alex_lu.jpg",
      role: "BS, CS Engineering",
      linkedIn: "https://www.linkedin.com/in/alex-y-lu/",
      github: "https://github.com", 
      hasLinkedIn: true,
      hasGithub: false
    },
    {
      name: "Kaiyu Li",
      img: "/captain-website/team/kaiyu_li.png",
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
      img: "/captain-website/advisors/shahab_tayeb.jpg",
      role: "Wireless Communication Advisor",
      desc: "A professor of Electrical and Computer Engineering at California State University, Fresno, Shahab Tayeb is skilled in network security, cybersecurity, the Internet of Things, wireless sensor networks, and vehicular networks."
    },
    { 
      name: "Prof. Chunyi Peng",
      img: "/captain-website/advisors/chunyi_peng.jpg",
      role: "Wireless Communication Advisor",
      desc: "A professor in the Computer Science department of Purdue University, Chunyi Peng aims to improve the performance, reliability, and security of network systems, especially in the realm of mobile computing."
    },
    { 
      name: "Prof. Dalal Alharthi",
      img: "/captain-website/advisors/dalal_alharthi.jpg",
      role: "Cybersecurity Advisor",
      desc: "A professor in the College of Applied Science and Technology at the University of Arizona, Dalal Alharthi works on cyber resilient frameworks for computer-based systems."
    }
  ]

  return (
    <div>
      <h1 className={title()}>Meet the Team</h1>
      <div className="flex flex-wrap justify-center max-w-5xl gap-4 py-8 md:py-10">
        <Card className="max-w-[475px]">
          <CardHeader className="flex flex-col justify-center">
            <Image
            alt="Reza Alam"
            className="object-cover rounded-full"
            src="/captain-website/team/reza_alam.png"
            width="200"
            />
            <h4 className="font-bold text-large">Reza Alam, PI</h4>
            <p className="text-small text-default-500">Prof. Mechanical Engineering</p>
          </CardHeader>
          <CardBody>
            <p className="text-center">Born in Yazd, a small historic city at the geographic center of Iran, Reza received his BSc in Mechanical Engineering and MSc in Applied Mechanics from Sharif University of Technology, Tehran, Iran. He then joined the Mechanical Engineering program at Massachusetts Institute of Technology, Cambridge, MA. He received his Master of Science in Mechanical Engineering in 2005, Ph.D. in Mechanical Engineering in 2008, and then served as a Postdoctoral associate (2008-2009) and Lecturer (2009-2011) at MIT. In July 2011 Reza joined the faculty of the University of California, Berkeley.</p>
          </CardBody>
          <CardFooter className="flex flex-row justify-center gap-5"> 
            <Link isExternal aria-label="LinkedIn" href="https://linkedin.com">
              <LinkedinIcon className="text-sky-900" size={36} />
            </Link>
          </CardFooter>
        </Card>
      </div>
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
          </Card>
        ))}
      </div>
    </div>
  );
}
