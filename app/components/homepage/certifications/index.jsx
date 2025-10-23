import { certificatesData } from "@/utils/certificationsData";
import CertificateCard from "./CertificateCard";
import Marquee from "react-fast-marquee";

function CertificatesSection() {
  return (
    <div id="certificates" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      {/* Background effect */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      {/* Section Header */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            CERTIFICATES
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="w-full my-20">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {/* Map through certificates and display each one */}
          {certificatesData.map((certificate, id) => (
            <CertificateCard key={id} certificate={certificate} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default CertificatesSection;
