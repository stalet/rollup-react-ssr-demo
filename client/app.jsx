import React, {useEffect, useState} from 'react';

export default function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setTimeout(() => setValue(oldValue => oldValue+1), 1000);
    })

    return <div>Value {value}</div>;
}
