import { FaRegFaceRollingEyes } from "react-icons/fa6";
import UseAuth from "../hookPersonal/UseAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RecommendationsForMePage = () => {

    const { user } = UseAuth();
    const [recommendationForMe, setRecommendationForMe] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/recommendationForMeWithoutLoginUser/${user.email}`)
            .then(res => res.json())
            .then(data => setRecommendationForMe(data))

    }, [user.email])


    console.log(recommendationForMe)



    return (
        <div className="overflow-x-auto py-8">
            <table className="min-w-full bg-white font-[sans-serif]">
                <thead className="whitespace-nowrap bg-gray-100 rounded">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                            Queries Info
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                            Date & Time
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                            Recommended by
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                            Recommendation Reasons
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="whitespace-nowrap">

                    {
                        recommendationForMe?.map(singleItem =>
                            <tr key={singleItem._id} className="hover:bg-gray-50">
                                <td className="px-6 py-3 text-sm">
                                    <div className="flex items-center cursor-pointer">
                                        <img src={singleItem.recommendedProductImage} className="w-9 h-9 rounded-md shrink-0" />
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{singleItem.recommendationTitle}</p>
                                            <p className="text-xs text-gray-400 mt-1">{singleItem.recommendedProductName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    {singleItem.currentTimeStamp}
                                    <p className="text-xs text-gray-400 mt-1">Posted</p>
                                </td>
                                <td className="px-6 py-3 text-sm">
                                    <div className="flex items-center rounded-full cursor-pointer">
                                        <img src={singleItem.recommenderProfileImg} className="w-9 h-9 rounded-full shrink-0" />
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{singleItem.recommenderName}</p>
                                            <p className="text-xs text-gray-400 mt-1">{singleItem.recommenderEmail}</p>
                                        </div>
                                    </div>
                                </td>


                                <td className="px-6 py-3 text-sm">
                                    {singleItem.recommendedReason}
                                    <p className="text-xs text-gray-400 mt-1"></p>
                                </td>

                                {/* onClick={() => handleDeleteRecommendation(singleItem._id)} */}

                                <td className="px-6 py-3 text-sm">
                                    <Link to={`/queryDetails/${singleItem.queryId}`} className="btn flex items-center p-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                        <FaRegFaceRollingEyes size={20} />
                                    </Link>
                                </td>

                            </tr>

                        )
                    }









                </tbody>
            </table>
            <div className="md:flex mt-4 px-6">
                <p className="text-sm text-gray-400 flex-1">Showind 1 to 5 of 100 entries</p>
                <div className="flex items-center max-md:mt-4">
                    <p className="text-sm text-gray-400">Display</p>
                    <select className="text-sm text-gray-400 border border-gray-400 rounded h-7 mx-4 outline-none">
                        <option>5</option>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <div className="border flex rounded divide-x-2">
                        <button type="button" className="px-4 py-2 hover:bg-gray-200 text-sm">Previous</button>
                        <button type="button" className="px-4 py-2 hover:bg-gray-200 text-sm">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationsForMePage;