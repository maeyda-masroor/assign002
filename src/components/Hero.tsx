import Image from "next/image"
import Hero1 from '../public/philip-oroni-VfOGf5RWkeg-unsplash 1.png'
export default function hero(){
    return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 text-black p-10 place-content-center">
            <div className="p-20 text-white">
                <h1 className="text-4xl text-black">Welcome to Website</h1>
                <p className="text-2xl text-black">Lorem Ipsum is simply dummy text of 
                the printing and typesetting industry. 
                Lorem Ipsum has been the industry's 
                standard</p>
                <button className="text-white bg-black w-1/2 p-10">Contact us</button>
            </div>
            <div className="p-4 text-white">
                <Image src={Hero1} alt="c" width={500} height={500}/>
            </div>
           </div>
}