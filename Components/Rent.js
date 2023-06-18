import rent from '../app/img/rent.png'
import Image from "next/image";


export default function Rent() {

    return <div className="content">
      <Image className="mx-auto" src={rent} width={1200} height={1000}/>
    </div>;
}
  