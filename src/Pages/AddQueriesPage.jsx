import { Link } from "react-router-dom";
import UseAuth from "../hookPersonal/UseAuth";


const AddQueriesPage = () => {

    const { user } = UseAuth();

    const currentDate = new Date(Date.now());
    const formattedDate = currentDate.toLocaleDateString('en-US');


    const handleAddQuery = (e) => {
        e.preventDefault();
        const form = e.target;

        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageURL = form.productImageURL.value;
        const queryTitle = form.queryTitle.value;
        const boycottingReasonDetails = form.boycottingReasonDetails.value;
        const userEmail = user.email;
        const name = user.displayName;
        const image = user.photoURL;
        const dateTime = formattedDate;
        const recommendationCount = 0;

        console.log(
            productName,
            productBrand,
            productImageURL,
            queryTitle,
            boycottingReasonDetails,
            userEmail,
            name,
            image,
            dateTime,
            recommendationCount
        )
    }





    return (
        <div>
            <div className="bg-white border-4 rounded-lg shadow relative m-10">
                <form onSubmit={handleAddQuery}>
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Add My Queries
                        </h3>
                        <Link to={'/myQueries'}>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                            </button>
                        </Link>
                    </div>

                    <div className="p-6 space-y-6">

                        <div className="grid grid-cols-6 gap-6">

                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple 27" name="productName" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Brand Name</label>
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" name="productBrand" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Product Image-URL</label>
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="photo.jpj" name="productImageURL" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Query Title</label>
                                <input type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Query TItle" name="queryTitle" required />
                            </div>



                            <div className="col-span-full">
                                <label className="text-sm font-medium text-gray-900 block mb-2">Boycotting Reason Details</label>
                                <textarea id="product-details" rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" name="boycottingReasonDetails" placeholder="Details" required ></textarea>
                            </div>
                        </div>

                    </div>

                    <div className="p-6 border-t border-gray-200 rounded-b">
                        {/* <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button> */}

                        <div className="flex rounded-full bg-gradient-to-tr from-[#660746] via-[#660746] to-[#660746] p-1 shadow-lg w-36">
                            <button className="flex-1 font-bold text-base bg-white px-4 py-1 rounded-full" type="submit">
                                Add Query
                            </button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddQueriesPage;