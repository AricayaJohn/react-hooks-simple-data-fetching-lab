import React, { useState, useEffect } from "react";

function App () {

    const [ dogImg, setDogImg ] = useState('');
    const [ isImgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImg(data.message)
            setImgLoaded(true);
        });
    }, []);

        if(!isImgLoaded) return <p>Loading...</p>;

    return (
        <div>
           <img src = {dogImg} alt = "A Random Dog"/>
        </div>
    )
}

export default App;