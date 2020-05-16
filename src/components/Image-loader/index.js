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
           <img style={{visibility: "hidden"}} onLoad={chooseLoader} width={200} height={200} src={url}/>
           <div>
               <LoadingIndicator color={"blue"} />
           </div>
       </>;
    };

    return chooseRender();

};
