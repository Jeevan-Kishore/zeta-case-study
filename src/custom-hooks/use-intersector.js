import {useEffect, useRef, useState} from "react";

export const useIntersector = incomingRef => {
    const [reference, setReference] = useState(incomingRef);
    const [entry, setEntry] = useState(null);
    const observer = useRef(null);


    const intersectionCallback = entries => {
        const [entry] = entries;
        entry && setEntry(entry);
    };

    useEffect(() => {
        if(observer.current) observer.current.unobserve(reference);

        /* eslint-disable no-unused-expressions */
        observer.current = new window.IntersectionObserver(intersectionCallback, {
            rootMargin: '0px',
            threshold: 0.5
        });
        reference && observer?.current?.observe(reference);
        return () => {
            reference && observer?.current?.unobserve(reference)
        }
    }, [reference]);

    return [entry, setReference];

};
