import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {auth} from "@clerk/nextjs/server";
import {db} from "~/server/db";
import {images} from "~/server/db/schema";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 30 } })
        .middleware(async ({ req }) => {
            const user = auth();

            if (!user) throw new UploadThingError("Unauthorized");

            return { userId: user };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            await db.insert(images).values({
                name: file.name,
                url: file.url,
                userId: metadata.userId
            })
            // console.log('File url', file.url)
            return { uploadedBy: metadata.userId };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;