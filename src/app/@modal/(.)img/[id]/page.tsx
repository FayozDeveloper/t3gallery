import {getImage} from "~/server/db/queries";

export default async function ImageModal({params: {id: imgId}}:{
    params: {id: string};
}) {
    const idAsNumber = Number(imgId);
    if (Number.isNaN(idAsNumber)) throw new Error('Invalid photo id')

    const image = await getImage(idAsNumber);
    return (
        <div>
            <img src={image.url} className='w-96' alt='img not found'/>
        </div>
    )
}