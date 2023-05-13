import Image from "next/image"
import Link from "next/link"
import { useUser } from "@auth0/nextjs-auth0/client"

export const AppLayout = ( {children} ) => {
    const {user} = useUser()

    return (
    <div className="flex border h-screen bg-gray-200 overflow-hidden">
            <div className="w-2/6 flex flex-col text-white h-screen xl:w-1/6">

                <div className="min-h-1/4 bg-slate-800 px-5 py-1 text-center py-5">
                    <div className="font-heading text-3xl">
                        <Link href="/">BlogCreator</Link>
                    </div>
                    <div>
                        <Link className="bg-green-500 hover:bg-green-700 rounded p-1 w-full uppercase text-bold my-2 inline-block"                        
                            href="new"
                        >
                            new post
                        </Link>
                    </div>
                    <div>
                        <Link href="token-topup.js">56 tokens available</Link>
                    </div>    
                                                 
                </div>

                <div className="h-full bg-gradient-to-b from-slate-800 to-cyan-800 overflow-auto px-5 py-1">
                    <p className="w-full border rounded p-1 mb-2">list osdfxhgchffgfgff post</p>
                    <p className="w-full border rounded p-1 mb-2">list of post</p>
                    <p className="w-full border rounded p-1 mb-2">list of post</p>
                    <p className="w-full border rounded p-1 mb-2">list of post</p>

                </div>

                <div className="min-h-1/4 bg-slate-900 px-5 py-5">
                    {!!user&&(
                        <div className="flex gap-2 items-center">
                            <div>
                                <Image
                                    className="rounded-full"
                                    src={user.picture}
                                    alt={user.name}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="text-xs">
                                <div>{user.email}</div>
                                <Link href="/api/auth/logout" className="font-bold text-red-600 hover:text-red-400">LogOut</Link>
                            </div>
                        </div>
                    )} 
                </div>

        </div>
        <div className="w-4/6 xl:w-5/6">
            {children}
        </div>

    </div>
    )
}

