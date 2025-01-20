import FullImagePageView from "~/common/full-image-page";

export default async function PhotoPage({
    params: {id: photoId}
}:{
    params: {id: string};
}) {

    return (
        <div className='w-full h-full'>
            <FullImagePageView photoId={photoId}/>
        </div>
    )
}
