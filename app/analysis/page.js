"use client";

import '../main.css';

import { Unbounded } from 'next/font/google';
import location from '../img/location.png';
import { useState } from 'react';
import { Fragment } from 'react';

import Header from '@/Components/Header';
import Image from 'next/image';
import Map from '@/Components/Map';
import { Tab } from '@headlessui/react';

import map1 from '@/app/img/map1.png';
import map2 from '@/app/img/map2.png';
import Point from '@/Components/Point';

const unbounded = Unbounded({ subsets: ['cyrillic'] })
const categories_ru = ['Магазины', 'Кафе', 'Рестораны', 'Фаст-фуд', 'Аптеки', 'Бары', 'Школы', 'Банки', 'Банкоматы', 'Кинотеатры', 'Театры'];
const categories = ['shop', 'cafe', 'restaurant', 'fast_food', 'pharmacy', 'bar', 'school', 'bank', 'atm', 'cinema', 'theatre']



export default function Page() {
    const [nodes, setNodes] = useState([]);
    const [checks, setChecks] = useState([true, true, true, true, true, true, true, true, true, true, true]);
    const [filteredNodes, setFilteredNodes] = useState([]); 

    const filterNodes = () => {
        let filtered = [];
        nodes.forEach((node, idx) => {
            let category = undefined;
            if (node.tags.amenity) {
                category = node.tags.amenity;   
            }
            if ('shop' in node.tags) {
                category = 'shop'
            }

            if (category) {
                if (!filtered[category]) {
                    filtered[category] = [];
                } 
                filtered[category].push(node);
            }
        })
        return filtered;
    };

    const render = () => {
        let filtered = filterNodes();
        let new_filtered = filtered.filter((item, idx) => checks[idx] == true);
        console.log(checks);
        console.log(new_filtered);
        setFilteredNodes(filtered.filter((item, idx) => checks[idx]));
    }

    console.log(filterNodes())

    return <div className="content">
        <Header/>

        <div className="flex flex-col lg:flex-row lg:items-center items-start my-10 lg:space-x-16">
            <div className={unbounded.className}><div className="lg:text-3xl text-[#BED82F]"> Анализ точки: </div></div>
            <div className="flex space-x-5 items-center">
                <div className="shrink-0"><Image src={location} width={16} height={16}/></div>
                <div> ул. Кропоткина, 50, Краснодар, Краснодарский край</div>
            </div>
        </div>

        <div className="flex w-full">
           
            <div className="flex flex-col w-full">
                {/* tabs */}
                <div>
                    <Tab.Group>
                        <Tab.List className="tabs-wrapper">
                            <div className="h-[80px] flex justify-between border-b-2 border-[#2c2c2c]">
                            <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Окружение</button>)}</Tab>
                            <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Зона охвата</button>)}</Tab>
                            <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Проходимость</button>)}</Tab>
                            </div>
                        </Tab.List>   
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="flex flex-col lg:flex-row w-full lg:h-[600px] h-[800px]">
                                    {/* map */}
                                    <div className="w-full h-full">
                                        <Map interactive={false} callback={setNodes}/>
                                    </div>
                                    {/* filter */}
                                    <div className="bg-[#3C3C3C] p-8 lg:w-[400px] w-full">
                                        {
                                            categories.map((filter, f_idx) => {
                                                return <div>
                                                    <div className="flex justify-between">
                                                        <div>{categories_ru[f_idx]}</div>
                                                        <input type="checkbox" checked={checks[f_idx]} 
                                                            onChange={() => {setChecks(checks.map((f, i) => {
                                                                if (i == f_idx) {
                                                                    return !f;
                                                                } else {
                                                                    return f;
                                                                }
                                                            })); render();}}></input>
                                                    </div>

                                                    <div>
                                                        {nodes.map((node, n_idx) => {
                                                                if (node.tags.amenity == filter && node.tags.name)
                                                                    return <div className="ps-4 text-[#D9D9D9]">{node.tags.name}</div>
                                                        })}
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                
                                </div>
                            </Tab.Panel>

                            <Tab.Panel className="bg-[#E0E4E4]">
                                <Image className="mx-auto" src={map1} height={1000} width={1000}></Image>
                            </Tab.Panel>

                            <Tab.Panel className="bg-[#E0E4E4]">
                                <Image className="mx-auto" src={map2} height={1000} width={1000}></Image>
                            </Tab.Panel>

                        </Tab.Panels>      
                    </Tab.Group>
                </div>
            </div>
        </div>

        <div className="my-[180px]">
            {/* Справка о помещении */}

            <div>

            </div>

            

            {/* Плюсы и минусы */}
            <div className="flex rounded-[25px] px-5 bg-[#3C3C3C] sh p-5">
                <div className="w-full border-r-2 border-dashed border-[#BED82F] ps-5">
                    <div className={unbounded.className}><div className="lg:text-3xl text-[#BED82F]"> Плюсы </div></div>
                    <div>
                        <Point>
                            Очень высокий пешеходный трафик - 2 377 чел/час.
                        </Point>
                        <Point>
                    Средний 518<br/>
                        </Point>
                        <Point>
                    Рядом есть 472 парковочных мест. <br/>
                        </Point>
                        <Point>
                    Расстояние по прямой до ближайшей парковки - 68 м. <br/>
                        </Point>
                        <Point>
                    Есть ТЦ в радиусе 300 метров. Площадь - 11 240м². <br/>
                        </Point>
                        <Point>
                    Поблизости расположено 6 продуктовых магазинов. <br/>
                        </Point>
                        <Point>
                    Рядом есть 5 аптек. <br/>
                        </Point>
                        <Point>
                    Поблизости 15 пунктов выдачи заказов. Есть 4 алкомаркета. <br/>
                        </Point>
                        <Point>
                    Рядом расположено 14 точки питания. Плотность населения выше среднего - 19 622 <br/>
                        </Point>
                        <Point>
                    Средняя плотность 10 182.<br/>
                        </Point>
                        <Point>
                    Рядом есть 9 остановок общественного транспорта. <br/>
                        </Point>


                    </div>

                </div>
                <div className="w-full ps-5">
                    <div className={unbounded.className}><div className="lg:text-3xl text-[#BED82F]"> Минусы </div></div>
                    <div>
                        <Point>Поблизости нет станций метро.</Point>
                    </div>

                </div>
            </div>
        </div>




    </div>;
}