import { useEffect, useState } from "react"

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
        }

        const handleOfline = () => {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOfline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOfline)
        };
    }, []);
    return isOnline;  
}