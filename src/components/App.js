// create your App component here
import React, {useEffect, useState} from "react"

function App() {

    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setImage(data.message)
                console.log(image)
            })
    }, [])

   if (!image) {
    return (<p>Loading ...</p>)
   } else {
    return (<img src={image} alt="A Random Dog"></img>)
   }
}

export default App