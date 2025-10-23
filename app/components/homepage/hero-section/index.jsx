import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">Rajih N</span>
            {` , I'm a Penetration Testing Enthusiast `}
            <span className=" text-[#16f2b3]">Cybersecurity Analyst</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href="https://github.com/Rajih7"
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajih-n/"
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=918921013073"
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaWhatsapp size={30} />
            </Link>

            <Link
              href="https://www.instagram.com/r_aj_ih?igsh=MTl1MTJic3JuMXc0aw=="
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href="https://drive.google.com/file/d/1tRy6wO_ky3025Z8rKF0W0mYWUjMNhRj8/view?usp=sharing"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base text-green-400 bg-black p-4 rounded-md block whitespace-pre-wrap">
              <div className="blink">
                <span className="mr-2 text-green-400">C:\Users\Rajih&gt;</span>
                <span className="text-white">profile</span>
                <span className="mr-2 text-pink-500">--status</span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">
                  [ Cybersecurity Professional Initialized ]
                </span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">Name :</span>
                <span className="text-green-300">Rajih N</span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">Role :</span>
                <span className="text-green-300">Cybersecurity Enthusiast</span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">Expertise :</span>
                <span className="text-green-300">
                  Offensive Security | Cloud Security | Network Defense
                </span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">Tools :</span>
                <span className="text-green-300">
                  Kali Linux, Nmap, Metasploit, AWS
                </span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">Attributes :</span>
                <span className="text-green-300">
                  Persistent | Quick Learner | Analytical Thinker
                </span>
              </div>
              <div className="command-line">
                <span className="ml-4 lg:ml-8 text-white">
                  &gt; System Check:
                </span>
                <span className="text-green-400">MISSION READY ✅</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
