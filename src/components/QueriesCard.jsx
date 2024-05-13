import PropTypes from 'prop-types';





const QueriesCard = ({ singleDataComingFromAppJsx }) => {


    // console.log(singleDataComingFromAppJsx)


    const {
        // _id,
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
        <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-12">
            <div className="relative">
                <img className="w-full" src={productImageURL} alt="Product Image" />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">{productBrand}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{productName}</h3>
                <p className="text-gray-600 text-sm mb-4">{queryTitle}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">${recommendationCount}</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Visit
                    </button>
                </div>
            </div>
        </div>
    );
};
QueriesCard.propTypes = {
    singleDataComingFromAppJsx: PropTypes.obj
};

export default QueriesCard;