import Image from "next/image";
import logo from "../../public/src/horizonheaderlogo.png";
import Link from "next/link";
import { Button } from "react-bootstrap";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import T1 from "@/app/src/t1.png";
import S1 from "@/app/src/s1.png";

export default function LPHeader() {
  return (
    <div className="z-10 fixed flex bg-[#0A3153] text-white items-center justify-between px-4 top-0 w-full h-[90px] border-b">
      <div className="h-14 flex items-center">
        <Image src={logo} alt="Horizon Header Logo" height={150} width={150} />
      </div>
      <div className="hidden laptop:flex gap-6">
        {/* <Link href="https://wa.me/message/EMVKG6FU7VXTI1" target="blank">
          <Button variant="outline-success" className="flex items-center gap-2 font-bold">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6"/>
            <span>Entre em contato!</span>
          </Button>
        </Link> */}
      </div>
      <Link href="/login">
          <Button variant="outline-light">Login</Button>
      </Link>
    </div>
  );
}
