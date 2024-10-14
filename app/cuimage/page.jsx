"use client";
import React from "react";
import Link from "next/link";
import { ImagCuV } from "./img-cv";


// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <>
            <div className="background_revancha">
            <ImagCuV/>        
            <Link href="/">Return To Page
</Link>
            </div>
        </>
    );
}
