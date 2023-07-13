import Image from "next/image"
import { SponsorType } from '../_template_data/Sponsor';


export default function Sponsors({ data }: { data: SponsorType[] }) {
    return (
        <div className='page component'>
            <p className='title'>Sponsors</p>
            <div className='row w-full'>
                {data.map((obj, i) => (
                    <div key={i} className='row justify-start m-10'>
                        <Image
                            src={obj.img}
                            alt="sponsor img"
                            width={200}
                            height={160}
                            className="w-[25vh] object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
