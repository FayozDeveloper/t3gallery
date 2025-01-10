import {SignedIn, SignedOut} from "@clerk/nextjs";
import {db} from "~/server/db";
export const dynamic = 'force-dynamic'

export async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, {desc}) => desc(model.id)
    })

    return (
        <div className='flex flex-wrap gap-4'>
            {images.map((img) => (
                <div key={img.id} className='w-48 flex flex-col'>
                    <img src={img.url} alt="img not found"/>
                    <div>{img.id}</div>
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
