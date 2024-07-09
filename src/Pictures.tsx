import PictureCard from "./PictureCard";

interface PicturesProps {
    pictures: string[];
}

function Pictures({pictures}: PicturesProps) {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pictures.map((picture, index) => (
                    <PictureCard key={index} src={picture} alt={`Picture ${index + 1}`}/>
                ))}
            </div>
        </div>
    )
}

export default Pictures;