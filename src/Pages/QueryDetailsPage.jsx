import { useLoaderData } from "react-router-dom";
import UseAuth from "../hookPersonal/UseAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const QueryDetailsPage = () => {

    const { user } = UseAuth();
    const queryDetailsData = useLoaderData();

    const {
        _id,
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
    } = queryDetailsData;



    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        dataFetch();
    }, [])

    console.log(recommendation);


    const dataFetch = () => {
        fetch(`http://localhost:5000/showRecommendation/${queryDetailsData._id}`)
            .then(res => res.json())
            .then(data => {
                // const sortByDate = [].concat(data).sort((a, b) => b.dateTime - a.dateTime);
                setRecommendation(data);
            })
    }






    const handleRecommendationData = (e) => {
        e.preventDefault();
        const form = e.target;

        const recommendationTitle = form.recommendationTitle.value;
        const recommendedProductName = form.recommendedProductName.value;
        const recommendedProductImage = form.recommendedProductImage.value;
        const recommendedReason = form.recommendedReason.value;
        const queryId = _id;
        const postCreatorQueryTitle = queryTitle;
        const postCreatorProductName = productName;
        const postCreatorUserEmail = userEmail;
        const postCreatorUserName = name;
        const recommenderEmail = user.email;
        const recommenderName = user.displayName;
        const recommenderProfileImg = user.photoURL;
        const currentTimeStamp = new Date(Date.now());

        const recommendationData = {
            recommendationTitle,
            recommendedProductName,
            recommendedProductImage,
            recommendedReason,
            queryId,
            postCreatorQueryTitle,
            postCreatorProductName,
            postCreatorUserEmail,
            postCreatorUserName,
            recommenderEmail,
            recommenderName,
            recommenderProfileImg,
            currentTimeStamp
        }
        // console.log(recommendationData);

        fetch('http://localhost:5000/recommendation', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recommendationData),
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    dataFetch();
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Recommendation Data Data Saved Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })

    }













    return (
        <div>
            <div className="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
                <div className=" gap-10">
                    <div className="space-y-4 text-center ">
                        <div className="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded">
                            <img src="https://readymadeui.com/images/product14.webp" alt="Product" className="w-full max-h-full object-contain object-top" />
                        </div>


                    </div>

                    <div className="max-w-2xl mx-auto mt-10">
                        <div>

                            <p className="text-sm text-gray-600 mt-2 font-extrabold">{dateTime.slice(4, 24)}</p>
                            <h2 className="text-2xl font-extrabold text-gray-800">{queryTitle}</h2>
                            <p className="text-sm text-gray-600 mt-2 font-extrabold">{productName}</p>
                        </div>

                        <div className="flex space-x-1 mt-4">
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>

                            <button type="button" className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 mr-1" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z" data-original="#000000" />
                                    <path d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z" data-original="#000000" />
                                    <path d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z" data-original="#000000" />
                                </svg>
                                {recommendationCount} Recommendation
                            </button>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-gray-800 text-3xl font-bold">{productBrand}</h3>
                        </div>

                        <div className="mt-8">
                            <ul className="flex border-b">
                                <li
                                    className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                                    Alternation Reason
                                </li>
                            </ul>

                            <div className="mt-8">
                                <p className="text-sm text-gray-600 mt-4">{boycottingReasonDetails}</p>
                            </div>

                            <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                                <li>A pair of gray shoes is a wardrobe essential due to its versatility.</li>
                                <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                                <li>Easy to maintain, they can be machine-washed and dried on low heat.</li>
                                <li>Personalize them with your own designs, patterns, or embellishments to make them uniquely yours.</li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-end mt-8 mb-11">
                            <img src={image ? image : user.photoURL} className="w-20 h-20 rounded-xl border-2 border-white" />
                            <div className="ml-3">
                                <h4 className="text-xl font-bold">{name}</h4>
                                <h4 className="text-sm font-semibold">{userEmail}</h4>
                                <h4 className="text-sm font-semibold"> <span className="text-teal-800 font-extrabold">Posted On: </span> {dateTime.slice(0, 15)}</h4>
                            </div>
                        </div>

                        <form onSubmit={handleRecommendationData} className="bg-white shadow-md rounded px-8 py-6 mt-4">

                            <h3 className="font-os text-lg font-bold">Recommended By</h3>

                            {/* single comment */}

                            {
                                recommendation?.map(singleRecommendations =>
                                    <div key={_id} className="flex my-4 items-center ">
                                        <div className="w-14 h-14 rounded-xl bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                                            <img className="h-20 w-20 rounded-xl object-cover" src={singleRecommendations.recommenderProfileImg} alt="" />
                                        </div>

                                        <div className="ml-3">
                                            <div className="font-medium text-purple-800">{singleRecommendations.recommenderName}</div>
                                            <div className="font-sm font-base">{singleRecommendations.recommenderEmail}</div>
                                            <div className="text-gray-600">Posted on {singleRecommendations.currentTimeStamp}</div>
                                            <div className="mt-2 text-purple-600">{singleRecommendations.recommendedReason}
                                            </div>
                                        </div>
                                    </div>

                                )
                            }



















                            <div className="flex items-center justify-center mt-10">
                                <a className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="#">
                                    {/* Add Recommendation */}
                                </a>
                            </div>



                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Title :</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="recommendationTitle" type="text" placeholder="Recommendation Title" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Name :</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="recommendedProductName" type="text" placeholder="Recommended product Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Image :</label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="recommendedProductImage" type="text" placeholder="Recommended product img link" />
                            </div>


                            <div className="md:flex lg:flex items-center justify-center">
                                <div className="mb-4 md:w-3/5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Reason :</label>
                                    <textarea rows="6" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="recommendedReason" type="text" placeholder="Recommended Reason"> </textarea>
                                </div>

                                <div className="flex items-center justify-center mt-8 md:w-2/5">
                                    <button className="bg-teal-500 hover:bg-teal-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Add Recommendation
                                    </button>
                                </div>
                            </div>

                        </form>









                    </div>
                </div>
            </div>
        </div >
    );
};

export default QueryDetailsPage;