import { useState } from "react";
import { Tooltip, Carousel, Image } from "antd";
import './resume.css';

const PopupCarousel = ({title, items, seconds}) => {
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const handleImageLoad = () => {
        setImagesLoaded(imagesLoaded + 1);
    };

    return (
        <>
        {imagesLoaded === items.length && 
        <Tooltip destroyTooltipOnHide placement="bottom" title={
            <Carousel autoplay infinite autoplaySpeed={seconds * 1000} arrows fade>
                {items.map((item) => (
                    <div key={item.image}>
                        <p className="tooltip-caption">{item.caption}</p>
                        <Image onLoad={handleImageLoad} style={{ margin: 'auto' }} preview={false} src={item.image} />
                    </div>
                ))}
            </Carousel>
        }>
            {title}
        </Tooltip>
        }
        </>
    )
}

export default PopupCarousel;
