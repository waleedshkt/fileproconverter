import { useEffect, useState } from "react";

const SCREEN_SIZE = 596;

const useIsSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen ] = useState(window.innerWidth <= SCREEN_SIZE);

    useEffect(() => {
        const onWindowResize = () => {
            clearTimeout(window.resizeListener);
            window.resizeListener = setTimeout(() => {
                delete window.resizeListener;
                setIsSmallScreen(window.innerWidth <= SCREEN_SIZE);
            }, 200);
        };
    
        onWindowResize();
        window.addEventListener('resize', onWindowResize);

        return () => window.removeEventListener('resize', onWindowResize);      
    }, []);

    return isSmallScreen;
};

export default useIsSmallScreen;