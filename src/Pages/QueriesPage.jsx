import { IoShareSocialOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { useEffect, useState } from "react";

const QueriesPage = () => {

    const allQueryData = useLoaderData();
    // console.log(allQueryData);

    const [allQueries, setAllQueries] = useState(allQueryData);

    // for search field 
    const [searchBy, setSearchBy] = useState('');

    const handleSearchField = (e) => {
        e.preventDefault();
        const form = e.target;
        const searchData = form.searchData.value;

        setSearchBy(searchData)

    }


    // for search data 
    useEffect(() => {
        searchDataFetch();

    }, [searchBy])


    const searchDataFetch = () => {

        fetch(`https://b9a11-server-side-sakhawat-code-info.vercel.app/allQueryDataBy?productName=${searchBy}`)
            .then(res => res.json())
            .then(data => setAllQueries(data))
    }







    // for layout change
    const [layout, setLayout] = useState(2)
    // layout 
    const handleLayoutBtn = () => {
        if (layout === 2) {
            setLayout(3)
        } else if (layout === 3) {
            setLayout(2)
        }
    }






    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                <div className="flex items-center justify-center">
                    <div id="search-bar" className="w-120 bg-white rounded-md shadow-lg z-10">
                        <form onSubmit={handleSearchField} className="flex items-center justify-center p-2">
                            <input type="text" placeholder="Search here" name="searchData"
                                className="w-full rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" />
                            <button type="submit"
                                className="bg-gray-800 text-white rounded-md px-4 py-1 ml-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                                Search
                            </button>
                        </form>
                    </div>


                </div>


                {/* layout  */}
                <div className="flex justify-end my-10">
                    <LuLayoutPanelLeft size={30} title="Change layout" onClick={handleLayoutBtn} />
                </div>


                <div className={`grid grid-cols-1 md:grid-cols-${layout} sm:grid-cols-${layout} gap-10`}>

                    {/* single content  */}
                    {
                        allQueries?.map(singleDate =>
                            <div key={singleDate._id}
                                className="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 shadow-lg dark:bg-gray-800  rounded-xl">
                                <div className="p-2 w-1/2 flex-1">
                                    <img className="rounded object-cover w-full sm:h-80 h-60" src={singleDate.productImageURL} alt="Article" />
                                </div>
                                <div className="sm:p-4 px-2 w-1/2 flex flex-col justify-between flex-1">
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
                                                <img className="object-cover h-10 w-10 rounded-xl" src={singleDate.image} alt="Avatar" />
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


        </div >
    );
};

export default QueriesPage;