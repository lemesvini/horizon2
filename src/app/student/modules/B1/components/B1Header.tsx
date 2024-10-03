import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/app/src/horizonheaderlogo.png";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

function B1NavBar() {
    const router = useRouter();
    const auth = getAuth();
    const user = auth.currentUser?.displayName;
  return (
    <>
      <div className="sticky flex items-center justify-between h-16 w-full p-4 text-white bg-[#0A3153]">
        <div className="hover:cursor-pointer" onClick={() => router.push("/")}>
            <Image src={HeaderLogo} alt="horizon logo" width={180} height={180} className="" />
        </div>
        <div className="hidden laptop:block text-xl rounded-xl">
          <strong>B1</strong>{" "}<span className="font-light">Module</span>
        </div>
        <div className="text-xs tablet:text-base"><span className="font-thin">Usuário:</span> {user}</div>
      </div>
    </>
  );
}

export default B1NavBar;
