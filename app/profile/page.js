
import '../main.css';
import Header from '@/Components/Header';
import { Unbounded } from 'next/font/google';

const unbounded = Unbounded({ subsets: ['cyrillic'] })

export default function Profile() {

    return <div className="content">

        <Header/>


        <div className="bg-[#353535] p-10 rounded-[40px] flex flex-col sh">

            <div className="lg:text-3xl mb-10 text-[#BED82F]">
                <div className={unbounded.className}>
                    Ваш профиль
                </div>
            </div>

            {/* mobile */}
            <div className="lg:hidden block justify-between py-8 rounded-[25px] px-5 bg-[#3C3C3C]">
                <div className="text-sm">Иванов Николай Александрович</div>
                <div className="text-sm mt-5 text-[#BED82F]">Предприниматель</div>
            </div>

            <div className="lg:hidden block flex flex-col space-y-5 mt-5">
                <div>
                    <div className="text-[#909090] text-sm mb-2 py-2">E-mail:</div>
                    <div className="text-[#D9D9D9] text-sm rounded-[15px] mb-5 py-2 px-5 bg-[#3C3C3C]">ivanovnik@gmail.com</div>
                </div>

                <div>
                    <div className="text-[#909090] text-sm mb-2 py-2">Город:</div>
                    <div className="text-[#D9D9D9] text-sm rounded-[15px] mb-5 py-2 px-5 bg-[#3C3C3C]">Краснодар</div>
                </div>

                <div>
                    <div className="text-[#909090] text-sm mb-2 py-2">Номер телефона:</div>
                    <div className="text-[#D9D9D9] text-sm rounded-[15px] mb-5 py-2 px-5 bg-[#3C3C3C]">+7 (800) 555-35-35</div>
                 
                </div>

            </div>

            {/* desktop */}
            <div className="lg:flex hidden justify-between py-5 rounded-[25px] px-5 bg-[#3C3C3C]">
                <div>Иванов Николай Александрович</div>
                <div className="text-[#BED82F]">Предприниматель</div>
            </div>

            <div className="lg:flex hidden flex flex-row space-x-16 px-5 pt-5">
                <div>
                    <div className="text-[#909090] mb-5 py-2 pe-10">E-mail:</div>
                    <div className="text-[#909090] mb-5 py-2 pe-10">Город:</div>
                    <div className="text-[#909090] mb-5 py-2 pe-10">Номер телефона:</div>
                </div>

                <div>
                    <div className="text-[#D9D9D9] rounded-[15px] mb-5 py-2 px-10 bg-[#3C3C3C]">ivanovnik@gmail.com</div>
                    <div className="text-[#D9D9D9] rounded-[15px] mb-5 py-2 px-10 bg-[#3C3C3C]">Краснодар</div>
                    <div className="text-[#D9D9D9] rounded-[15px] mb-5 py-2 px-10 bg-[#3C3C3C]">+7 (800) 555-35-35</div>

                </div>

            </div>

            <button className="bg-[#BED82F] rounded-[100px] px-10 py-2 text-[#171717] mt-10 self-end text-sm lg:text-base">Изменить</button>

        </div>


        {/* analyze */}

        <div className="bg-[#353535] p-10 rounded-[40px] mt-16 sh">
            <div className="lg:text-3xl mb-10 text-[#BED82F]">
                <div className={unbounded.className}>
                    Проведенные анализы
                </div>
            </div>
            <div className="overflow-x-scroll">
                <div className="flex justify-between min-w-[500px]">
                    <div className="flex flex-col w-full">
                        <div className="text-[#D9D9D9] lg:text-base text-xs border-b-2 border-[#D9D9D9] pb-3 ps-3">ул. Кропоткина, 50, Краснодар</div>
                        <div className="text-[#909090] lg:text-sm text-[0.6rem] ps-3 pt-1">Объект</div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="text-[#D9D9D9] lg:text-base text-xs  border-b-2 border-[#D9D9D9] pb-3 ps-3">VR-бизнес</div>
                        <div className="text-[#909090] lg:text-sm text-[0.6rem] ps-3 pt-1">Бизнес</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="border-b-2 lg:text-base text-xs border-[#D9D9D9] pb-3 pe-3">
                            <a className="hover:text-[#B5B5B5] transition-all" href="/analysis">Показать</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>;
}