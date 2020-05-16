import React, {useEffect, useRef, useState} from "react";
import {useIntersector} from "../../custom-hooks/use-intersector";
import {ImageLoader} from "../Image-loader";

export const ImagePagination = props => {
    const imageContainerRef = useRef(null);
    const [entry, setReference] = useIntersector(imageContainerRef?.current);
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [imageRepo, setImageRepo] = useState([]);

    const loadedImages = useRef({});

    const getImageList = () => imageRepo.map((data, index) => <li key={`${data.url}-${index}`}><ImageLoader data={data} /> </li>);
    const getImageFromSource = animal => fetch(`/get-animal/${animal}`).then(res => res.json());


    const setAnimal = event => {
        const animalName = event.target.getAttribute("data-animal");
        setImageRepo([]);
        setCurrentAnimal(animalName);
    };


    useEffect(() => {
        const loadAnimal = async () => {
            const data = await getImageFromSource(currentAnimal);
            if(!loadedImages?.current[data.url]){
                setImageRepo([...imageRepo, ...[data]]);
                loadedImages.current[data.url] = true;
                return true;
            }
            /* Break if no uniques appear */
            return loadAnimal();
        };

        if(currentAnimal && entry && entry.isIntersecting){
            loadAnimal();
        }
    }, [currentAnimal, entry, imageRepo]);


    const renderAnimals = () => (
        <div>
            <button data-animal="dog" onClick={setAnimal}>Load Dog</button>
            <button data-animal="cat" onClick={setAnimal}>Load Cat</button>
            <button data-animal="wolf" onClick={setAnimal}>Load Wolf</button>
            <ul>{getImageList()}</ul>
            <div ref={imageContainerRef} />
        </div>
    );

    useEffect(() => {
        setReference(imageContainerRef.current);
    }, [setReference, entry]);


    return <div style={{width: "100%"}}>
        {renderAnimals()}
    </div>
};
