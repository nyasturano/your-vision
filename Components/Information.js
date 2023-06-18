'use client';

import { useState } from "react";
import Point from "./Point";

export default function Information() {

    
    const [pros, setPros] = useState([
        "Очень высокий пешеходный трафик - 2 377 чел/час", 
        "Средний 518 (район Южное Медведково)", 
        "Рядом есть 472 парковочных мест",
        "Расстояние по прямой до ближайшей парковки - 68 м",
        "Есть ТЦ в радиусе 300 метров. Площадь - 11 240м²",
        "Поблизости расположено 6 продуктовых магазинов",
        "Рядом есть 5 аптек",
        "Поблизости 15 пунктов выдачи заказов. Есть 4 алкомаркета",
        "Рядом расположено 14 точки питания. Плотность населения выше среднего - 19 622",
        "Средняя плотность 10 182 (район Южное Медведково)",
        "Рядом есть 9 остановок общественного транспорта"

    ]);

    const [cons, setCons] = useState(["Рядом нет станций метро."]);

    return <div className="content">
        <div className="flex justify-start">
            <div className="flex flex-col items-start">
                <div className="text-3xl pb-10 font-bold text-[#BED82F]">ПЛЮСЫ</div>
                <div>
                    {pros.map((elem, idx) => <Point key={idx}>{elem}</Point> )}
                </div>
            </div>
            <div className="flex flex-col items-start">
            <div className="text-3xl pb-10 font-bold text-[#BED82F]">МИНУСЫ</div>
                <div>
                    {cons.map((elem, idx) => <div key={idx}>{elem}</div> )}
                </div>
            </div>
        </div>

    </div>; 
}