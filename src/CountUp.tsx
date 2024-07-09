import React, {useEffect, useState} from 'react';

interface CountUpProps {
    startDate: Date;
}

const CountUp: React.FC<CountUpProps> = ({startDate}) => {
    const [timeDiff, setTimeDiff] = useState<string>('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeDiff(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [startDate]);

    return (
        <div className="text-center p-4 m-3 bg-black rounded-lg shadow">
            <p className="text-4xl font-mono">{timeDiff}</p>
        </div>
    );
};

export default CountUp;