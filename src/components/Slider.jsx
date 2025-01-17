import { IoArrowUndoSharp } from "react-icons/io5";
import { IoArrowRedo } from "react-icons/io5";



const Slider = () => {
    return (
        <div className="carousel w-full my-4">
            <div id="slide1" className="carousel-item relative h-[450px] w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/05/95/55/79/1000_F_595557946_KBmXMGiAhsiZi0cx4f66IFgNd6nrHlPC.jpg" className="w-full object-fill" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide2" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[450px] w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/03/01/63/07/1000_F_301630780_LBEZ3kJpRBWVszVmtIZZYgCasuOHqmh1.jpg" className="w-full object-fill" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide1" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide3" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[450px] w-full">
                <img src="https://as1.ftcdn.net/v2/jpg/05/07/37/40/1000_F_507374083_mot31nCk3t3VDx3IhaaifKDT6omtfCFf.jpg" className="w-full object-fill" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide4" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative object-cover h-[450px] w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/06/27/56/79/1000_F_627567912_Vr5NIO9W9OqJEwBV67el0bm044dzF4pe.jpg" className="w-full object-fill" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle"><IoArrowUndoSharp className="text-[#660746]" size={20} /> </a>
                    <a href="#slide1" className="btn btn-circle"><IoArrowRedo className="text-[#660746]" size={20} /></a>
                </div>
            </div>

        </div>
    );
};

export default Slider;