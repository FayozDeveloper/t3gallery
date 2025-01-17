'use client'
import {SignedOut, SignInButton, UserButton, SignedIn} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {CustomUploadButton} from "~/app/_components/custom-upload-button";

export function Navbar() {
    const router = useRouter()
    return(
        <nav className='w-full h-20 flex items-center justify-between p-4 border-b text-xl font-semibold'>
            <Link href='/'>Gallery</Link>
            <div className='flex flex-row items-center gap-4'>
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <CustomUploadButton/>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    )
}
