import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "IBO",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 857-2309-6095",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ezhacaw@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 28 Sep, 1994",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelor Degree of Information Technology",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Jl. Capricorn No.13, Kota Bandung",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Polytechnic State of Bandung",
        qulification: "Bachelor of Science",
        years: "2012 - 2017",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Company 1",
        qualification: "Programmer",
        years: "2016 - 2017",
      },
      {
        company: "Company 2",
        qualification: "Frontend Developer",
        years: "2017 - 2021",
      },
      {
        company: "Company 3",
        qualification: "Frontend",
        years: "2021 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Developtment",
      },
      {
        name: "Javascript, C#, .Net",
      },
      {
        name: "Backend Developtment",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            {/* image */}
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            {/* tabs */}
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">personal info</TabsContent>
                <TabsContent value="qualifications">
                  qualification info
                </TabsContent>
                <TabsContent value="skills">skill info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
