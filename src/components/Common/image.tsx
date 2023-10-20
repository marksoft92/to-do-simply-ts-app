import React, { FC } from "react";

interface ImageComponentsProps {
    className?: string;
    src: string;
    alt?: string;
}

const ImageComponents: FC<ImageComponentsProps> = ({ className, src, alt }) => {
    return <img className={className} src={src} alt={alt} />;
};

export default ImageComponents;
