import Image from "next/image";
import logo from "@/app/src/logofinalpreenchida.png";
import { getPortalUrl } from "../account/ManageAccount";
import { app } from "@/firebase";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import Link from "next/link";

function NavBar() {
  const router = useRouter(); // Move useRouter inside the component

  const manageAcc = async () => {
    const portalUrl = await getPortalUrl(app);
    router.push(portalUrl);
  };

  return (
    <div className="fixed z-50 flex border-b bg-white text-[#0A3153] content-center justify-between top-0 w-full h-[70px] drop-shadow">
      <div className="h-full flex flex-row items-center justify-center ml-2">
        <Image
          src={logo}
          alt="Horizon Header Logo"
          height={60}
          width={60}
          className="drop-shadow"
        />
        <span className="text-2xl font-serif font-bold ml-1 laptop:ml-3">
          Teacher's Dashboard
        </span>
      </div>
      <div className="h-full hidden tablet:flex items-center mr-6 gap-2">
        <Button
          variant="outline-primary"
          onClick={manageAcc}
          className="no-underline hover:underline"
        >
          Manage Account
        </Button>
        <Link href="/">
          <Button
            variant="outline-dark"
            className="no-underline hover:underline"
          >
            Log Out
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
