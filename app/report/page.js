'use client'

import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import location from '../img/location.png';
import Image from "next/image";

import History from "@/Components/History";
import Rent from "@/Components/Rent";
import Information from "@/Components/Information";

export default function Page() {

  return (
    <div>

      <div className="content flex flex-col lg:flex-row lg:py-14 py-5 items-center justify-between">
        {/* ЗДЕСЬ НАЗВАНИЕ ОБЪЕКТА */}
        <div className="flex mb-5 lg:mb-0 space-x-3 items-center"><Image src={location} width={16} height={16}/><div>ул. Вишняковой, 10</div></div>
        <div className="flex space-y-5 lg:space-x-20 lg:space-y-0 lg:flex-row flex-col">
          <button className="w-48 btn-dark"><a href="/report">Отчет</a></button>
          <button className="w-48 btn-light"><a href="/buisness">Бизес-план</a></button>
        </div>
          <button className="w-48 mt-5 lg:mt-0 btn-light"><a href="/buisness">Главная</a></button>
      </div>

      <Tab.Group>
          <Tab.List className="content tabs-wrapper lg:py-14 py-10">
            <div className="h-[80px] flex justify-between border-b-2 border-[#2c2c2c]">
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>История помещения</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Аренда</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Информация</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Зона охвата</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Проходимость</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Окружение</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Население</button>)}</Tab>
              <Tab as={Fragment}>{({ selected }) => (<button className={selected ? 'btn-tab btn-tab-active' : 'btn-tab'}>Кол-во предприятий</button>)}</Tab>
            </div>
          </Tab.List>          

        <Tab.Panels className="mb-20">
          <Tab.Panel><History/></Tab.Panel>
          <Tab.Panel><Rent/></Tab.Panel>
          <Tab.Panel><Information/></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>



    </div>
  );
}