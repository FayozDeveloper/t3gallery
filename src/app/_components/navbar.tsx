'use client'
import {SignedOut, SignInButton, UserButton, SignedIn} from "@clerk/nextjs";
import {UploadButton} from "~/utils/uploadthing";
import {useRouter} from "next/navigation";

export function Navbar() {
    const router = useRouter()
    return(
        <nav className='w-full flex items-center justify-between p-4 border-b text-xl font-semibold'>
            <div>Gallery</div>
            <div className='flex flex-row'>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UploadButton
                        endpoint='imageUploader'
                        onClientUploadComplete={() => {
                            router.refresh()
                        }}
                    />
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}
