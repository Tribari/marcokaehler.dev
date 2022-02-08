import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FaPlusCircle, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import imageLoader from '@/lib/imgloader'

type Props = {
    images: string[]
}

const GalleryComponent = ({images}: Props) => {
    const [showFull, setShowFull] = useState(false)
    const [imageList, setImageList] = useState(images)
    const [image, setImage] = useState('')
    const [curIndex, setCurIndex] = useState(0)

    const previousImage = () => {
        curIndex - 1 < 0 ? setCurIndex(imageList.length - 1) : setCurIndex(curIndex-1)
    }

    const nextImage = () => {
        curIndex + 1 > imageList.length - 1 ? setCurIndex(0) : setCurIndex(curIndex+1)
    }

    const checkKeyPress = (e: KeyboardEvent) => {
        const { key } = e;
        key === "ArrowRight" ? nextImage() : null
        key === "ArrowLeft" ? previousImage() : null
        key === "Escape" ? setShowFull(false) : null
    }

    useEffect(()=>{
        window.addEventListener("keydown", checkKeyPress)
        return ()=>{
            window.removeEventListener("keydown", checkKeyPress)
        }
    })

    useEffect(() => {
        setImage(imageList[curIndex])
    }, [curIndex, imageList])

    const gallery = imageList.map((image, index) => {

        const showImage = () => {
            setCurIndex(index)
            setShowFull(true)
        }

        return (
            <div key={index} className="relative flex-none w-1/2 md:w-1/4 lg:w-1/2 xl:w-1/4 cursor-pointer" onClick={() => showImage()}>
                <div className="relative h-40 sm:h-60 md:h-40 lg:h-44 xl:h-28">
                    <Image loader={imageLoader} src={image} alt="" layout="fill" objectFit="cover" loading="lazy"/>
                </div>
                <div className="absolute inset-0 align-middle text-center bg-lime-200 dark:bg-lime-700 opacity-0 hover:opacity-90 transition-opacity duration-500">
                    <FaPlusCircle className="m-auto h-full"/>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="pt-4 flex flex-row flex-wrap">
                <div className=""></div>
                {gallery}
                <div className="grow"></div>
            </div>
            {showFull &&
                <div>
                    <div className="fixed z-30 inset-0 bg-black dark:bg-slate-900 opacity-90"></div>
                    <div className="fixed z-40 inset-4 lg:inset-10 bg-black">
                        {image &&
                            <Image loader={imageLoader} src={image} alt="" layout="fill" objectFit="contain" loading="lazy"/>
                        }
                    </div>
                    <div className="fixed z-50 inset-10 text-right flex flex-col">
                        <div className="flex-grow ">
                            <div className="cursor-pointer rounded-full inline-block m-4 p-4 bg-white dark:bg-slate-900 hover:bg-slate-200 hover:dark:bg-slate-800" onClick={() => setShowFull(false)}>
                                <FaTimes/>
                            </div>
                        </div>
                        <div className="flex-none inset-0 flex flex-col justify-end">
                            <div className="flex flex-row justify-around">
                                <div className="cursor-pointer rounded-full inline-block m-4 p-4 text-white text-4xl" onClick={() => previousImage()}>
                                    <FaChevronLeft/>
                                </div>
                                <div className="cursor-pointer rounded-full inline-block m-4 p-4 text-white hover:text-slate-200 text-4xl" onClick={() => nextImage()}>
                                    <FaChevronRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default GalleryComponent