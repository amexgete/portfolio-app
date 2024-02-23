import React from "react";
import heroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
I am Junior SoftWare Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">

Hardware Troubleshooting: Adept at diagnosing and resolving hardware issues, ensuring the optimal functionality of computer Systems.
Network Troubleshooting: Experienced in identifying and rectifying network-related challenges, ensuring seamless connectivity and communication.
Software Troubleshooting: Proficient in debugging software issues and providing effective solutions to enhance software performance.
Computer Maintenance: Skilled in maintaining computer systems, implementing upgrades, and ensuring overall system efficiency.
Programming Languages: Well in Java, C++, C#, Python, CSS, HTML, React JS, JavaScript, and Django REST framework. Capable of developing and implementing solutions across a range of programming languages.
Microsoft Office suites: Expertise in utilizing MS Word, Excel, PowerPoint, and internet applications for efficient documentation and presentation.
Database management system (Oracle & MySQL).
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
