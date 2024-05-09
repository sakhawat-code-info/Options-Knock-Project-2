import { IoArrowUndoSharp } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";
const Slider = () => {
    return (
        <div className="carousel w-full my-4">
            <div id="slide1" className="carousel-item relative h-[450px] w-full">
                <img src="https://source.unsplash.com/random/1920x1080?nature" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide2" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[450px] w-full">
                <img src="https://source.unsplash.com/random/1920x1080?nature" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide1" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide3" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[450px] w-full">
                <img src="https://source.unsplash.com/random/1920x1080?nature" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide4" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-[450px] w-full">
                <img src="https://source.unsplash.com/random/1920x1080?nature" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide1" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>

        </div>
    );
};

export default Slider;