import React from "react";
import { useLoaderData } from "react-router-dom";

const ref = React.createRef();

export default function Pdf() {
    const pdf = useLoaderData()
    const { Instructor, name, picture, _id, details } = pdf
    return (
        <div className="App">
            {/* <Print targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generador de Pdf</button>}
            </Print>
            <div ref={ref}>
                <h1>React to pdf 2</h1>
            </div> */}
        </div>
    );
}
