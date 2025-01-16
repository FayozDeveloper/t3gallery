import {getImage} from "~/server/db/queries";

export default async function FullImagePageView(props: { id: number}) {
    const image = await getImage(props.id);
    return (
        <div>
            <img src={image?.url} className='w-96' alt='img not found'/>
        </div>
    )
}
