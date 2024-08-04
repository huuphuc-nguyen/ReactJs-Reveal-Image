import { useEffect, useState } from 'react';

const useDeviceType = () => { 
    const [deviceType, setDeviceType] = useState('desktop');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDeviceType('mobile');
            } else {
                setDeviceType('desktop');
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [deviceType]);

    return deviceType;
 }

 export default useDeviceType;