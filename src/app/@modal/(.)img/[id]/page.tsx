import {Modal} from "~/app/@modal/(.)img/[id]/modal";
import FullImagePageView from "~/common/full-image-page";

export default async function PhotoModal({params: {id: photoId}}:{
    params: {id: string};
}) {

    return (
        <Modal>
            <FullImagePageView photoId={photoId}/>
        </Modal>
    )
}
