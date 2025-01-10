import {SignedIn, SignedOut} from "@clerk/nextjs";
import {getMyImages} from "~/server/db/queries";
import Image from "next/image";
export const dynamic = 'force-dynamic'

export async function Images() {
    const images = await getMyImages();

    return (
        <div className='flex flex-wrap justify-center gap-6'>
            {images.map((img) => (
                <div key={img.id} className='w-48 h-48 flex flex-col'>
                    <Image
                        src={img.url}
                        style={{objectFit: 'contain'}}
                        width={200}
                        height={200}
                        alt="img not found"/>
                    <div>{img.name}</div>
                </div>
            ))}
        </div>
    )
}

export default function HomePage() {
  return (
    <main className="">
        <SignedOut>
            <div className='w-full h-full text-2xl text-center'>Please Sign in above</div>
        </SignedOut>
        <SignedIn>
            <Images/>
        </SignedIn>
    </main>
  );
}
