import React, {useState} from "react";
import {LoadingIndicator} from "../Loading-Indicator";

export const ImageLoader = ({data = {}, width, height}) => {
    const {url, type} = data;
    const [isLoading, setIsLoading] = useState(true);

    const chooseLoader = () => {
        setIsLoading(false);
    };

    const chooseRender = () => {
       if(type === "video") {
           return <video  width={200} height={200} controls>
               <source src={url} />
           </video>;
       }
       return <>
           <img alt="" style={{visibility: isLoading ? "hidden": "visible"}} onLoad={chooseLoader} width={200} height={200} src={url}/>
           {isLoading && <LoadingIndicator color={"blue"} />}
       </>;
    };

    return chooseRender();

};
