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
        };

        // Call handleResize once to set the initial device type
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceType;
};

export default useDeviceType;
