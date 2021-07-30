import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Slider = () => {
  return (
    <div className="mt-10">
      <Carousel showThumbs={false} showStatus={false}>
        {[1,2,3,4,5,6,7,8].map(item => (
          <img key={item} src="https://projectorninja.com/wp-content/uploads/2019/12/03-Projector-Aspect-Ratio-Examples-new.png" />
        ))}
      </Carousel>
    </div>
  );
};