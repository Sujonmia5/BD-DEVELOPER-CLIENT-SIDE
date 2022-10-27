import React, { useContext } from "react";
import Print from 'react-to-pdf'
import Blog from '../Blog/Blog'
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const ref = React.createRef(Blog);

export default function Pdf() {
    const pdf = useLoaderData()
    const { user } = useContext(AuthContext)
    const { Instructor, name, picture, _id, details } = pdf
    return (
        <div className="h-full relative">
            <div ref={ref} className="text-gray-900 ml-10 lg:w-[42%]">
                <p className="text-gray-900 font-medium text-4xl">Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
                <h1 className="text-gray-900 text-3xl mt-5 font-bold">{name}</h1>
                <div className="flex  justify-center mt-10 ">
                    <img className="h-72" src={picture} alt="" />
                </div>
                <p className="text-justify font-serif font-medium mt-5">{details}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia placeat ad corrupti ipsum nisi! Unde error ipsum ad repudiandae consequatur, sunt maxime tempora pariatur! Itaque odit similique ea facilis, numquam et impedit quaerat neque excepturi officiis! Fugit quidem corporis ab labore exercitationem voluptate quibusdam id cupiditate quae in. Qui commodi sint quisquam iusto ad repellendus illum tempore, asperiores exercitationem maxime repellat voluptates laudantium voluptas earum minima nulla recusandae fugit molestiae voluptatem officia. Sint voluptate illum non sapiente eaque officia rerum placeat obcaecati eligendi iusto perspiciatis cupiditate earum eos optio at, deleniti repellat aliquid sequi repellendus? Ex voluptatibus expedita facilis explicabo officia. Facere quidem saepe, asperiores vel nulla odit reiciendis unde vitae eos quisquam earum et laboriosam aliquid recusandae necessitatibus reprehenderit natus impedit quod velit quis. Quo inventore error saepe, hic ipsum vitae doloremque, ut maiores praesentium, amet corporis nemo rem accusamus? Sunt laudantium fugit non, unde hic quam ipsum magni ipsa illum enim repellendus vel nesciunt nobis laboriosam recusandae exercitationem eum omnis architecto voluptate delectus obcaecati odit. Autem voluptatem ullam in aliquid corrupti optio maiores quia atque voluptatum sequi quae consectetur necessitatibus, ad expedita amet! Asperiores sit veniam accusantium
                </p>

                <p className="mt-5 font-medium">Thank you for Downloaded Pdf</p>
            </div>
            <Print targetRef={ref} filename="BD-developer-blog.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="self-start flex flex-row-reverse absolute top-10 lg:left-[50%] items-center px-8 py-2 text-lg font-medium rounded-3xl dark:bg-indigo-400 dark:text-gray-900 hover:bg-indigo-500">Download</button>}
            </Print>
        </div>
    );
}
