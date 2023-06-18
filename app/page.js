import dynamic from 'next/dynamic'
    // import OpenStreetMap from '../component/OpenStreetMap'
    const Map = dynamic(() => import('../Components/Map'), {
      ssr: false,
    })
export default function Page() {

  return (
    <main className='h-full'>
      <Map interactive={true} />
    </main>
  );

}