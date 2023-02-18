import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Container from './Container'
import { desktopMenuData, womenMobileMenuData } from './assets/data';

const DesktopMenu: React.FC = () => {
    const [show, setShow] = React.useState<boolean>(false)

    const onMouseEnter = () => {
        setShow(true)
    }

    const onMouseLeave = () => {
        setShow(false)

    }

    return (
        <div className="h-[50px] bg-text-500 hidden lg:block">
            <Container>
                <ul className="flex h-full relative">
                    {desktopMenuData.map(({ title }) => (
                        <li
                            key={title}
                            className="flex items-center justify-center transition-all px-4 select-none text-white h-full hover:bg-white hover:text-black"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            {title}
                        </li>
                    ))}

                    {show &&
                        <div
                            className="grid grid-cols-4 absolute left-0 top-[50px] h-[400px] w-full bg-white shadow-lg z-40 py-5 px-6"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <div className="border-r">
                                <h3 className="border-b border-black w-fit text-black font-semibold tracking-widest uppercase">
                                    new products
                                </h3>
                                <ul className="mt-4">
                                    {[
                                        "View all",
                                        "Clothing",
                                        "Shoes",
                                        "Coats & Jackets",
                                        "Hoodies",
                                        "T-Shirts & Vests",
                                        "Sportswear",
                                        "Accessories",
                                        "Face + Body",
                                    ].map((itm) => (
                                        <li key={itm} className="py-2">
                                            <Link href="/">{itm}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-r px-4">
                                <h3 className="border-b border-black w-fit text-black font-semibold tracking-widest uppercase">
                                    shop by brands
                                </h3>
                                <ul className="mt-4">
                                    <Link href="/" className='group'>
                                        <li className="flex items-center">
                                            <span className="w-[40px] h-[40px] overflow-hidden relative rounded-full border border-text-100 group-hover:border-blue-300">
                                                <Image
                                                    src="/images/nav-1.webp"
                                                    fill={true}
                                                    sizes="40px"
                                                    alt="navigation"
                                                />
                                            </span>
                                            <span className="ml-3 h-[40px] border-b px-1 flex items-center group-hover:text-blue-300">
                                                Ski & Snowboard
                                            </span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>

                            <div className="border-r px-4">
                                <h3 className="border-b border-black w-fit text-black font-semibold tracking-widest uppercase">
                                    shop by body fit
                                </h3>
                                <div className="mt-4 flex flex-wrap gap-y-6">
                                    {["ASOS Curve & Plus size", "Maternity", "Petite", "Tall"].map(itm =>
                                        <Link href="/" key={itm} className="flex-[50%] group">
                                            <span className="relative block h-[78px] w-[78px] mx-auto overflow-hidden rounded-full border group-hover:border-blue-300 border-text-200">
                                                <Image src="/images/mw_gbl.webp" fill={true} alt="big bold woman" sizes='78px' />
                                            </span>
                                            <p className="w-4/5 text-center mx-auto mt-1 group-hover:text-blue-300">{itm}</p>
                                        </Link>)}
                                </div>
                            </div>

                            <div className="border-r px-4">
                                <ul className="flex flex-wrap">
                                    <li className="max-w-[289px] flex-1 h-32 border">
                                        <Link href="/" className="block relative w-full h-full after:content-[''] after:absolute after:top-0 after:w-full after:h-full after:bg-[linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,97.3%,.8))]">
                                            <Image src="/images/nyx.webp" alt="nyx" fill={true} sizes="auto" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>}
                </ul>
            </Container>
        </div >
    )
}

export default DesktopMenu