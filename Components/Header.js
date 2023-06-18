import { Unbounded } from 'next/font/google';
import logo from '@/app/img/logo.png';
import profile from '@/app/img/profile.png';
import Image from 'next/image';

const unbounded = Unbounded({ subsets: ['latin'] })

export default function Header() {
    return <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between ps-10 lg:px-10 mb-10 lg:mb-0">
        <div className="flex items-center space-x-4 my-6 font-thin">
            <a href="/">
                <Image src={logo} width={64} height={64}/>
            </a>
            <div className={unbounded.className}>
                <a href="/" className="hover:text-[#B5B5B5] transition-all">
                    Your Vision
                </a>
            </div>
        </div>
        <div className="flex flex-row items-start space-x-6">
            <a href="/profile" className="shrink-0"><Image src={profile} width={25} height={25}/></a>
            <div className="flex flex-col">
                <div className="font-semibold hover:text-[#B5B5B5] transition-all"><a href="/profile">Николай Александрович</a></div>
                <div className="text-[1rem] text-[#909090] font-light"><a href="/profile">Выйти</a></div>
            </div>

        </div>
    </div>
}