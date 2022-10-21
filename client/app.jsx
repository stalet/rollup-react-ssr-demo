import React, {useEffect, useState} from 'react';

export default function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setTimeout(() => setValue(oldValue => oldValue+1), 1000);
    })

    return <div className="container pt-24 px-6 mx-auto flex flex-wrap flex-col md:items-start items-center">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Rollup
            test page</h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Counter with no
            flickering!</p>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Value {value}</p>
    </div>;
}
