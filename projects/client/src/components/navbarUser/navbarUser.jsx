import { Link } from "react-router-dom";
import { MdSearch, MdFavorite, MdShoppingBag, MdPerson } from 'react-icons/md'
// import { useState } from "react";

export default function NavbarUser() {

    return (
        <>
            <div className="flex justify-around items-center bg-neutral-900 text-white font-semibold fixed w-full z-10 h-20">
                <div className="flex items-center">
                    <Link to='/'>
                        <div className="mr-10">
                            <button className="text-3xl">
                                iFrit
                            </button>
                        </div>
                    </Link>
                    <Link to='/iphone'>
                        <div className="group relative dropdown px-4 py-7 text-white hover:bg-neutral-500 hover:text-neutral-900 cursor-pointer tracking-wide">
                            <div>iPhone</div>
                            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                                <ul className="mt-7 w-48 -ml-4 bg-white shadow py-5 px-3 bg-opacity-80 rounded-b">
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 14 Pro
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 14
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 13 Pro
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 13
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 12 Pro
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 12
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone SE 3rd Gen
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 11
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                    <Link to='/ipad'>
                        <div className="group relative dropdown px-4 py-7 text-white hover:bg-neutral-500 hover:text-neutral-900 cursor-pointer tracking-wide">
                            <div>iPad</div>
                            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                                <ul className="mt-7 w-48 -ml-4 bg-white shadow py-5 px-3 bg-opacity-80 rounded-b">
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPad Pro 6th Gen
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPad Pro 5th Gen
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPhone 13 Pro
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPad Air 5th Gen
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPad 10th Gen
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPad 9th Gen
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iPad Mini 6th Gen
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                    <Link to='/watch'>
                        <div className="group relative dropdown px-4 py-7 text-white hover:bg-neutral-500 hover:text-neutral-900 cursor-pointer tracking-wide">
                            <div>Mac</div>
                            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                                <ul className="mt-7 w-60 -ml-4 bg-white shadow py-5 px-3 bg-opacity-80 rounded-b">
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Macbook Air (M2)
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Macbook Air (M1)
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Macbook Pro 13" (M2)
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Macbook Pro 13" (M1)
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Macbook Pro 14" and 16"
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            iMac (M1)
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Mac Mini (M1)
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Mac Studio
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                    <Link to='/accessories'>
                        <div className="group relative dropdown px-4 py-7 text-white hover:bg-neutral-500 hover:text-neutral-900 cursor-pointer tracking-wide">
                            <div>Accessories</div>
                            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                                <ul className="mt-7 w-48 -ml-4 bg-white shadow py-5 px-3 bg-opacity-80 rounded-b">
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Airpods Max
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Airpods Pro
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Airpods
                                        </div>
                                    </li>
                                    <li className="py-3">
                                        <div className="block text-neutral-800 text-base hover:text-neutral-500 cursor-pointer">
                                            Airtag
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex gap-5 text-2xl">
                    <button>
                        <MdSearch />
                    </button>
                    <button>
                        <MdFavorite />
                    </button>
                    <Link to='/cart'>
                            <button>
                                <MdShoppingBag />
                            </button>
                    </Link>
                    <Link to='/login'>
                            <button>
                                <MdPerson />
                            </button>
                    </Link>
                </div>
            </div>
        </>
    )
}