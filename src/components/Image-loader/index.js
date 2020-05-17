import React, {useState} from "react";
import {LoadingIndicator} from "../Loading-Indicator";
import styles from "./style.module.css";

export const ImageLoader = ({data = {}, width, height}) => {
    const {url, type} = data;
    const [isLoading, setIsLoading] = useState(true);

    const chooseLoader = () => {
        setIsLoading(false);
    };

    const chooseRender = () => {
       if(type === "video") {
           return <video className={styles.itemContainer} controls>
               <source src={url} />
           </video>;
       }
       return <>
           <img alt="" className={styles.itemContainer} onLoad={chooseLoader} src={url}/>
           {isLoading && <LoadingIndicator color={"blue"} />}
       </>;
    };

    return chooseRender();

};
