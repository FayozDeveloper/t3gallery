import {SignedIn, SignedOut} from "@clerk/nextjs";
import {getMyImages} from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
export const dynamic = "force-dynamic";

export async function Images() {
    const images = await getMyImages();

    return (
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {images.map((img) => (
                <div key={img.id} className='w-48 h-48 flex flex-col'>
                    <Link href={`/img/${img.id}`} scroll={false}>
                        <Image
                            src={img.url}
                            style={{objectFit: 'contain'}}
                            width={200}
                            height={200}
                            priority
                            alt="img not found"
                        />
                    </Link>
                    <div>{img.name}</div>
                </div>
            ))}
        </div>
    )
}

export default function HomePage() {
  return (
    <main>
        <SignedOut>
            <div className='w-full h-full text-2xl text-center'>Please Sign in above</div>
        </SignedOut>
        <SignedIn>
            <Images/>
        </SignedIn>
    </main>
  );
}
