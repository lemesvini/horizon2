import Link from 'next/link';
import Image from 'next/image';
import HeaderLogo from "@/app/src/horizonheaderlogo.png"

function NavBar() {
  return (
    <div className='z-10 fixed flex bg-[#0A3153] text-white content-center justify-between top-0 w-full h-14 border-b-slate-800'>
      <div className='h-14 flex items-center ml-6'>
        <Image src={HeaderLogo} alt="Horizon Header Logo" height={150} width={150} />
      </div>
      <div className='h-14 flex items-center mr-6'>
        <Link href="/" className='no-underline hover:underline'>
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
