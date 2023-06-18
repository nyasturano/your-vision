'use client'
import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents, Popup, CircleMarker, Circle, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

async function getWays(rad, lat,lng, setWays){
  const res = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];way(around:${rad}, ${lat}, ${lng});out geom;`).then((response) => response.json()).then((data) => {
        var t = []
        data.elements.forEach(el => {
          if('tags' in el && ('building' in el.tags)){
          t.push(el)}
        });
        // console.log(t)
        setWays(t);
      });
}


async function getObjects(rad, lat,lng, setNodes, setWays, callback){
  const res = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];(nwr[amenity](around:${rad}, ${lat}, ${lng});nwr[shop](around:${rad}, ${lat}, ${lng}););out geom;`).then((response) => response.json()).then((data) => {
        var t = []
        data.elements.forEach(el => {
          if(el.lat){
          t.push(el)}
        });
        setNodes(t);
        if (callback) {
          callback(t);
        }
      });
  getWays(rad, lat, lng, setWays )
}


export default function Map({callback, interactive}) {
  const kras = [45.0430196, 38.9493056];
  const [position, setPosition] = useState({ lat: kras[0], lng: kras[1] })
  const [nodes, setNodes] = useState([])
  const [ways, setWays] = useState([])
  const ZOOM_LEVEL = 15
  const mapRef = useRef()
  const [radius, setRadius] = useState(400)
  const [pointR, setPointR] = useState(10)
  const [circlePos, setCirclePos] = useState([position.lat, position.lng])
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(true)
  window.oncontextmenu = function (e) {
    e.preventDefault()
  }
  function getLength(filt){
    if(filt=='all'){
     return nodes.length
    }
    if(filt=='shop'){
      return nodes.filter(x=>'shop' in x.tags).length
    }
    return nodes.filter(x=>x.tags.amenity==filt).length
  }
  function getFiltered(){
    if(filter=='all'){
      return nodes
     }
     if(filter=='shop'){
       return nodes.filter(x=>'shop' in x.tags)
     }
     return nodes.filter(x=>x.tags.amenity==filter)
  }
const filters = ['all', 'shop', 'cafe', 'restaurant', 'fast_food', 'pharmacy', 'bar', 'school', 'bank', 'atm', 'cinema', 'theatre']
  
  const filtered = getFiltered() 

  useEffect(() => {
    getObjects(400, ...kras, setNodes, setWays, callback);
  }, []);
  
  return (
    <div className='flex lg:flex-row flex-col min-h-full p-[-5]'>

      {interactive ? 
        <div className=' lg:w-1/5 w-full p-11'>
            <p>Радиус: {radius} метров</p>
            <input type='range' min={20} max={2000} value={radius} onMouseUp={()=>getObjects(radius, circlePos[0], circlePos[1], setNodes, setWays, callback)}  onChange={(ev)=>{setRadius(ev.target.value)}}/>
            <br/>
            <p>Радиус точек: {pointR} метров</p>
            <input type='range' min={1} max={20} value={pointR} onChange={(ev)=>{setPointR(ev.target.value)}}/>
            <br/>
            <button type='button' onClick={()=>{setVisible(!visible)}}>Отображение объектов</button>
            <ul>
              {filters.map((filt) => 
                <li key={filt} className={filter==filt?'cursor-pointer bg-slate-500' :'cursor-pointer hover:bg-slate-500'} onClick={()=>setFilter(filt)}>{filt} : {getLength(filt)}</li>
              )}
            </ul>
          </div> : ""}


    <div className={interactive ? "w-full h-[500px] lg:h-auto" : "w-full h-[500px] lg:h-auto"}>
      <MapContainer className='h-full w-full'  center={position} zoom={ZOOM_LEVEL} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Circle center={circlePos} pathOptions={{color:'blue', opacity:0.5, fillOpacity:0.12}} radius={radius}/>
        {ways.map((el)=>{
      var t = []
      el.geometry.forEach(elem => {
        t.push([elem.lat, elem.lon])
      });
    return <Polygon key={el.geometry[0].lat.toString()+el.geometry[0].lon} pathOptions={{color:'#88888850', stroke:'#888'}} positions={t}>
      <Popup>
        {Object.keys(el.tags).map((key) => 
        <div key={key}>{key} = {el.tags[key.toString()]}</div>
        )}
      </Popup>
    </Polygon>
    })}
    {visible?filtered.map((el)=>
    <Circle key={el.lat.toString()+el.lon} center={[el.lat,el.lon]} pathOptions={{color:'red'}} radius={pointR}>
      <Popup>
        {Object.keys(el.tags).map((key) => 
        <div key={key}>{key} = {el.tags[key.toString()]}</div>
        )}
        <div>lat: {el.lat}</div>
        <div>lon: {el.lon}</div>
      </Popup>
    </Circle>
    ):''}
    
        {location.loaded && !location.error && (
          <Marker
            position={[
              location.coordinates.lat,
              location.coordinates.lng,
            ]}
          ></Marker>
        )}
        <MyComponent circlePos={circlePos} setWays={setWays} setNodes={setNodes} rad={radius} setCirclePos={setCirclePos} callback={callback} interactive={interactive}/>
      </MapContainer>
      </div>
    </div>
  )
}

function MyComponent({setNodes, setCirclePos, rad, setWays, callback, interactive}) {
  const map = useMapEvents({
    click: (ev) => {
      console.log(ev)
      if (interactive) {
        setCirclePos([ev.latlng.lat, ev.latlng.lng])
        getObjects(rad, ev.latlng.lat, ev.latlng.lng, setNodes, setWays, callback);
      }
    },
    // locationfound: (location) => {
    //   console.log('location found:', location)
    // },
  })
  return null
}

/*

nwr[shop]({south},{west},{north},{east});out geom;

area[name="Краснодар"];nwr[shop][name="Магнит"](area);out geom;



nwr["addr:street"="Красная улица"]["addr:housenumber"="77"]
   ({{bbox}}) -> .office;
nwr[amenity=cafe](around.office:500);
out geom;
*/
