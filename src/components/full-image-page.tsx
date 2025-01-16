import {getImage} from "~/server/db/queries";

export default async function FullImagePageView(props: { id: number}) {
    const image = await getImage(props.id);
    return (
        <div className='flex w-full h-full min-w-0'>
            <div className='flex flex-shrink justify-center items-center'>
                <img src={image.url} className='flex-shrink object-contain ' alt='img not found'/>
            </div>
            <div className='w-48 flex flex-col flex-shrink-0 border-l'>
                <div className='text-xl font-bold'>{image.name}</div>
            </div>
        </div>
    )
}
