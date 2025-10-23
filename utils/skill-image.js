import kaliLinux from "../app/assets/svg/skills/kali-linux.svg";
import nmap from "../app/assets/svg/skills/nmap.svg";
import metasploit from "../app/assets/svg/skills/metasploit.svg";
import burpSuite from "../app/assets/svg/skills/burp-suite.svg";
import wireshark from "../app/assets/svg/skills/wireshark.svg";
import aws from "../app/assets/svg/skills/aws.svg";
import docker from "../app/assets/svg/skills/docker.svg";
import git from "../app/assets/svg/skills/git.svg";
import python from "../app/assets/svg/skills/python.svg";
import react from "../app/assets/svg/skills/react.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import linux from "../app/assets/svg/skills/linux.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import cloudSecurity from "../app/assets/svg/skills/cloud-security.svg";
import splunk from "../app/assets/svg/skills/splunk.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "kali linux":
      return kaliLinux;
    case "nmap":
      return nmap;
    case "metasploit":
      return metasploit;
    case "burp suite":
      return burpSuite;
    case "wireshark":
      return wireshark;
    case "aws":
      return aws;
    case "docker":
      return docker;
    case "git":
      return git;
    case "python":
      return python;
    case "react":
      return react;
    case "next js":
      return nextJS;
    case "tailwind":
      return tailwind;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "linux":
      return linux;
    case "javascript":
      return javascript;
    case "typescript":
      return typescript;
    case "cloud security":
      return cloudSecurity;
    case "splunk":
      return splunk;
    default:
      break;
  }
};
