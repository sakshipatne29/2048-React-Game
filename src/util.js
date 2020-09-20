import { useEffect } from "react"; 
    
export const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
        window.addEventListener(event, handler,passive);

        return function cleanup(){
            window.removeEventListener(event, handler);
        };
    });
};

export const getColors = (num) => {
    switch (num) {
        case 2:
            return "red";
        case 4:
            return "blue";
        case 8:
            return "green";
        case 16:
            return "orange";
        case 32:
            return "indigo";
        case 64:
            return "#F1462C";
        case 128:
            return "#E7C65E";
        case 256:
            return "#E8C350";
        case 512:
            return "#E8BE40";
        case 1024:
            return "#E8BB31";
        case 2048:
            return "#E7B723";
        default:
            return "#C2B3A3"
    }
};