import Image from "next/image";
import Link from "next/link";

function CertificateCard({ certificate }) {
  return (
    <Link href={certificate.link} passHref> {/* Wrap the card with Link */}
      <div className="w-64 h-[350px] flex flex-col items-center justify-center relative group cursor-pointer transition-all duration-500 m-5 rounded-lg">
        <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
          <div className="flex justify-center p-6">
            <Image
              src={certificate.image || "/path/to/placeholder.jpg"}
              alt={certificate.name}
              width={320}
              height={200}
              className="w-full h-auto rounded-lg group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-white text-lg">{certificate.name}</p>
            <p className="text-sm text-gray-400">{certificate.institution}</p>
            <p className="text-sm text-gray-400">{certificate.date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CertificateCard;
