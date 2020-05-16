import React, {useEffect, useRef, useState} from "react";
import {useIntersector} from "../../custom-hooks/use-intersector";

export const ImagePagination = props => {
    const imageContainerRef = useRef(null);
    const [entry, setReference] = useIntersector(imageContainerRef?.current);

    const [imageRepo, setImageRepo] = useState([]);

    const getImageList = () => imageRepo.map(imgSrc => <img src={imgSrc}/>);

    const getImageFromSource = url => {
      return fetch(url).then(res => res.json());
    };

    useEffect(() => {
        const promiseArray = ["https://aws.random.cat/meow", "https://random.dog/woof.json", "https://randomfox.ca/floof/"]
            .map(url => getImageFromSource(url));

        Promise.all(promiseArray).then(res => console.log(res));

    }, []);

    useEffect(() => {
        setReference(imageContainerRef.current);
    }, [setReference, entry]);


    return <div ref={imageContainerRef}>
        {getImageList()}
    </div>
};
