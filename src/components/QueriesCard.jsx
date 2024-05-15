import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';





const QueriesCard = ({ singleDataComingFromAppJsx }) => {


    // console.log(singleDataComingFromAppJsx)


    const {
        _id,
        productName,
        productBrand,
        productImageURL,
        queryTitle,
        // boycottingReasonDetails,
        // userEmail,
        // name,
        // image,
        // dateTime,
        recommendationCount,
    } = singleDataComingFromAppJsx;

    return (
        <div className="w-full mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-12">
            <div className="relative w-full">
                <img className="w-full h-[200px]" src={productImageURL} alt="Product Image" />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{productBrand}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{productName}</h3>
                <p className="text-gray-600 text-sm mb-4">{queryTitle}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Alternative items : {recommendationCount}</span>
                    <Link to={`/queryDetails/${_id}`} >
                        <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-24 md:w-36 overflow-hidden border border-[#0a3d62] bg-white px-3 text-[#0a3d62] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#0a3d62] before:transition-all before:duration-500 hover:text-white hover:shadow-[#0a3d62]hover:before:left-0 hover:before:w-full font-extrabold">
                            <span className="relative z-10">View Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

QueriesCard.propTypes = {
    singleDataComingFromAppJsx: PropTypes.obj
};

export default QueriesCard;