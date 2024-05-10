import { Link } from "react-router-dom";
import UseAuth from "../hookPersonal/UseAuth";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdOutlineViewSidebar } from "react-icons/md";


const MyQueriesPage = () => {

    const { data } = UseAuth();

    console.log(data);



    return (
        <div>
            {/* <Link to={"/addQueries"} className="flex justify-end mt-4 mr-4 text-right">
                <div className="flex gap-3 max-w-sm text-right">
                    <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">Add Queries</button>
                </div>
            </Link> */}

            <div className="">
                <div className="mx-auto max-w-7xl my-6 px-2 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="flex w-0 flex-1 items-center">
                                <span className="flex rounded-lg bg-indigo-800 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                                </span>
                                <p className="ml-3 truncate font-medium text-white">
                                    <span className="">Hope we can received a good query. right now !</span>
                                </p>
                            </div>
                            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                <Link to={"/addQueries"} className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                                    href="#">Add Queries
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">



                    {/* single content  */}
                    <div className="rounded overflow-hidden shadow-lg">
                        <a href="#"></a>
                        <div className="relative">
                            <a href="#">
                                <img className="w-full"
                                    src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                                    alt="Sunset in the mountains" />
                                <div
                                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </a>
                            <a href="#!">
                                <div
                                    className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    Photos
                                </div>
                            </a>
                            <a href="!#">
                                <div
                                    className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    <span className="font-bold">27</span>
                                    <small>March</small>
                                </div>
                            </a>
                        </div>

                        <div className="px-6 py-4">

                            <a href="#"
                                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                                View in Newyork City</a>
                            <p className="text-gray-500 text-sm">
                                The city that never sleeps
                            </p>
                        </div>
                        <div className="px-6 py-4 flex items-center justify-center gap-5">
                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                <a >
                                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                        <MdOutlineViewSidebar size={20} />
                                    </button>
                                </a>
                                {/* <span className="ml-1">View Details</span> */}
                            </span>

                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                <a >
                                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                        <CiEdit size={20} />
                                    </button>
                                </a>
                                {/* <span className="ml-1">View Details</span> */}
                            </span>

                            <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                <a >
                                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                        <MdOutlineDeleteForever size={20} />
                                    </button>
                                </a>
                                {/* <span className="ml-1">View Details</span> */}
                            </span>

                        </div>
                    </div>





                </div>
            </div>

















        </div>
    );
};

export default MyQueriesPage;