import React, {useEffect, useRef, useState} from "react";
import {useIntersector} from "../../custom-hooks/use-intersector";
import {ImageLoader} from "../Image-loader";
import styles from "./style.module.css";

export const ImagePagination = props => {
    const imageContainerRef = useRef(null);
    const [entry, setReference] = useIntersector(imageContainerRef?.current);
    const [currentAnimal, setCurrentAnimal] = useState(null);
    const [imageRepo, setImageRepo] = useState([]);

    const loadedImages = useRef({});

    const getImageList = () => imageRepo.map((data, index) => <li className={styles.listItem} key={`${data.url}-${index}`}><ImageLoader data={data} /> </li>);
    const getImageFromSource = animal => fetch(`/get-animal/${animal}`).then(res => res.json());


    const setAnimal = event => {
        const animalName = event.target.getAttribute("data-animal");
        setImageRepo([]);
        loadedImages.current = {};
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
            /* TODO: Break if no uniques appear */
            return loadAnimal();
        };

        if(currentAnimal && entry && entry.isIntersecting){
            loadAnimal();
        }
    }, [currentAnimal, entry, imageRepo]);


    const renderAnimals = () => (
        <div>
            <ul className={`${styles.resetMargin} ${styles.headerOptions}`}>
                <li className={styles.headerItems} data-animal="dog" onClick={setAnimal}>Load Dog</li>
                <li className={styles.headerItems} data-animal="cat" onClick={setAnimal}>Load Cat</li>
                <li className={styles.headerItems} data-animal="wolf" onClick={setAnimal}>Load Wolf</li>
            </ul>
            <ul className={`${styles.resetMargin} ${styles.listContainer}`}>{getImageList()}</ul>
            <div ref={imageContainerRef} className={styles.intersector} />
        </div>
    );

    useEffect(() => {
        setReference(imageContainerRef.current);
    }, [setReference, entry]);


    return <div>
        {renderAnimals()}
    </div>
};
