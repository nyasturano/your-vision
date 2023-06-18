'use client';

import Header from "@/Components/Header";
import '../main.css';
import dynamic from 'next/dynamic'
import { useCallback, useState } from "react";
import { useEffect } from "react";

const Map = dynamic(() => import('../../Components/Map'), {
    ssr: false,
})


async function getObjects(rad, lat,lng, setNodes){
    const res = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];(nwr[amenity](around:${rad}, ${lat}, ${lng});nwr[shop](around:${rad}, ${lat}, ${lng}););out geom;`).then((response) => response.json()).then((data) => {
          var t = []
          data.elements.forEach(el => {
            if(el.lat){
            t.push(el)}
          });
          setNodes(t);
          console.log(t);
        });
}
  


export default function Page() {

    


    return <div className='h-full'>
        <Header/>

        <div className="h-[800px] flex">
            <div className="h-full bg-[#353535] w-[500px]">

            </div>
            <Map/>
        </div>
        
    </div>;
}