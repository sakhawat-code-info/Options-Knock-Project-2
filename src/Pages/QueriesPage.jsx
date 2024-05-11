import { IoShareSocialOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const QueriesPage = () => {

    const allQueryData = useLoaderData();
    console.log(allQueryData);


    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-10">



                    {/* single content  */}
                    {
                        allQueryData?.map(singleDate =>
                            <div key={singleDate._id}
                                className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 shadow-lg dark:bg-gray-800  rounded-xl">
                                <div className="p-2 sm:w-1/2">
                                    <img className="rounded object-cover w-full sm:h-80 h-60" src="https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg" alt="Article" />
                                </div>
                                <div className="sm:p-4 px-2 sm:w-1/2 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between">
                                            <span href="#"
                                                className=" justify-end rounded-l-full px-3 py-1 sm:mt-2 text-sm font-semibold text-gray-800 dark:text-white bg-gray-300 text-right">{singleDate.productName}
                                            </span>
                                            <span href="#"
                                                className=" justify-end rounded-r-full px-3 py-1 sm:mt-2 text-sm font-semibold text-white dark:text-white bg-red-700 text-right">{singleDate.productBrand}
                                            </span>
                                        </div>
                                        <a href="#"
                                            className="block mt-2 text-2xl font-semibold text-gray-50 dark:text-white hover:text-gray-600 hover:underline capitalize">{singleDate.queryTitle.slice(0, 17)} . . .
                                        </a>



                                        <p className="mt-2 text-sm text-gray-200 dark:text-gray-400">
                                            <span className="text-red-500 font-extrabold">Alternation Reason : </span> {singleDate.boycottingReasonDetails}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <div className="flex items-center justify-center">
                                            <div className="flex items-center flex-1">
                                                <img className="object-cover h-10 w-10 rounded-xl" src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg" alt="Avatar" />
                                                <div className="flex flex-col mx-2">
                                                    <a href="#" className=" font-semibold text-gray-50 dark:text-gray-200">{singleDate.name}</a>
                                                    <span className=" text-xs text-gray-400 dark:text-gray-300">{singleDate.dateTime.slice(0, 17)}</span>
                                                </div>
                                            </div>
                                            <p className="text-white mr-2"> {singleDate.recommendationCount} </p>

                                            <Link to={`/queryDetails/${singleDate._id}`} className="text-white">
                                                <IoShareSocialOutline size={20} />
                                            </Link>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }





                </div>
            </div>


        </div>
    );
};

export default QueriesPage;