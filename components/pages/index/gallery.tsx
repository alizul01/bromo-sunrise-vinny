import React from "react";

const Gallery: React.FC = () => {
    return (
        <div className={'container mx-auto mt-20'}>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery