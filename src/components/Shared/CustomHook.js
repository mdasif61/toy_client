import { useEffect } from "react";

const dynamicTitle=(title)=>{
    useEffect(()=>{
        document.title='Sports | '+ title
    },[])
}

export default dynamicTitle;