import React, {useEffect, useRef, useState} from "react";
import {useIntersector} from "../../custom-hooks/use-intersector";
import {ImageLoader} from "../Image-loader";

export const ImagePagination = props => {
    const imageContainerRef = useRef(null);
    const [entry, setReference] = useIntersector(imageContainerRef?.current);
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [imageRepo, setImageRepo] = useState([]);

    const getImageList = () => imageRepo.map((data, index) => <div key={`${data.url}-${index}`}><ImageLoader data={data} /> </div>);
    const getImageFromSource = animal => fetch(`/get-animal/${animal}`).then(res => res.json());


    const loadAnimal = async currentAnimal => {
        const data = await getImageFromSource(currentAnimal);
        setImageRepo([...imageRepo, ...[data]]);
    };

    const setAnimal = event => {
        const animalName = event.target.getAttribute("data-animal");
        setImageRepo([]);
        setCurrentAnimal(animalName);
    };


    useEffect(() => {
        if(currentAnimal && entry && entry.isIntersecting){
            loadAnimal(currentAnimal);
        }
    }, [currentAnimal, entry]);


    const renderAnimals = () => (
        <div>
            <button data-animal="dog" onClick={setAnimal}>Load Dog</button>
            <button data-animal="cat" onClick={setAnimal}>Load Cat</button>
            <button data-animal="wolf" onClick={setAnimal}>Load Wolf</button>
            <div>{getImageList()}</div>
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
