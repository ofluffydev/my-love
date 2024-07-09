import React from 'react';
import { InView } from "react-intersection-observer";

interface PictureCardProps {
    alt: string;
    src: string;
}

const PictureCard: React.FC<PictureCardProps> = ({ alt, src }) => (
    <InView threshold={0.1}>
        {({ inView, ref }) => (
            <div
                ref={ref}
                className={`bg-gradient-to-br from-purple-700 to-indigo-800 rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${
                    inView ? 'opacity-100 animated-list-item' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex items-center justify-center h-48 overflow-hidden rounded-md">
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
        )}
    </InView>
);

export default PictureCard;