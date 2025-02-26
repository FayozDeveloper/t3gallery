import {deleteImage, getImage} from "~/server/queries";
import {clerkClient} from "@clerk/nextjs/server";
import {Button} from "~/components/ui/button";
import Image from "next/image";

export default async function FullImagePageView(props: { photoId: string}) {
    const idAsNumber = Number(props.photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

    const image = await getImage(idAsNumber);
    const client = await clerkClient();
    const uploaderInfo = await client.users.getUser(image.userId)


    return (
        <div className='flex w-full h-full min-w-0'>
            <div className='flex flex-1 flex-shrink justify-center items-center p-6'>
                <Image
                    src={image.url}
                    style={{objectFit: 'contain'}}
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                    className='flex-shrink object-contain w-full h-full'
                    alt='img not found'
                />
            </div>
            <div className='w-48 flex flex-col flex-shrink-0 border-l'>
                <div className='text-lg border-b text-center p-2'>{image.name}</div>

                <div className='flex flex-col p-2'>
                    <span>Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>
                <div className='flex flex-col p-2'>
                    <span>Created On:</span>
                    <span>{new Date(uploaderInfo.createdAt).toLocaleDateString()}</span>
                </div>
                <div className='flex flex-col p-2'>
                    <form action={async () => {
                        'use server';

                        await deleteImage(idAsNumber)
                    }}>
                        <Button type='submit' variant='destructive'>Delete</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
