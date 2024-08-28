import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import logo from "../../../../public/src/H (1).png";

function LHeader() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="z-10 fixed flex bg-[#F3F3F3] border text-[#123572] w-full h-14 items-center">
      <div className="absolute laptop:flex h-14 flex items-center ml-3">
        <Image src={logo} alt="Horizon Header Logo" height={40} width={40} />
      </div>
      <div className="flex-grow flex justify-center items-center h-14 mr-6 gap-6">
        {/* <Link
          href="/login"
          className="flex flex-row gap-2 no-underline hover:underline text-lg"
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p>Home</p>
        </Link> */}
        <button
          onClick={goBack}
          className="flex flex-row items-center gap-2 no-underline hover:underline text-lg"
        >
          <FontAwesomeIcon icon={faHouse} />
          <p>Home</p>
        </button>
        <Link
          href="https://dictionary.cambridge.org/"
          target="_blank"
          className="flex flex-row items-center gap-2 no-underline hover:underline text-lg"
        >
          <FontAwesomeIcon icon={faBookAtlas} />
          <p>Dictionary</p>
        </Link>
      </div>
    </div>
  );
}

export default LHeader;
