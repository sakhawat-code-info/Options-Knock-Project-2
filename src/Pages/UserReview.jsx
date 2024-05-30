
import Swal from "sweetalert2";
import UseAuth from "../hookPersonal/UseAuth";
import { useLoaderData } from "react-router-dom";




const UserReview = () => {

    const reviewsAllData = useLoaderData();

    // console.log(reviewsAllData)
    const { user } = UseAuth();

    const handleReviewData = (e) => {
        e.preventDefault();
        const form = e.target;

        const rating = form.rating.value;
        const comment = form.comment.value;


        const reviewerEmail = user.email;
        const reviewerName = user.displayName;
        const reviewerProfileImg = user.photoURL;


        const reviewData = {

            rating,
            comment,

            reviewerEmail,
            reviewerName,
            reviewerProfileImg,

        }
        // console.log(reviewData);

        fetch('https://b9a11-server-side-sakhawat-code-info.vercel.app/review', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData),
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Review Saved Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                form.reset();
            })

    }



    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {/* single card  */}

                {
                    reviewsAllData?.map(review =>
                        <div key={review._id} className="flex items-start shadow-xl p-4">
                            <div className="flex-shrink-0">
                                <div className="inline-block relative">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src={review.reviewerProfileImg} alt="Profile picture" />
                                        <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                    </div>
                                    <svg className="fill-current text-white bg-red-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="ml-6">
                                <p className="flex items-baseline">
                                    <span className="text-gray-600 font-bold">{review.reviewerName}</span>
                                    <span className="ml-2 text-white text-xs">Verified Buyer</span>
                                </p>
                                <div className="flex items-center mt-1">
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                    <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                </div>

                                <div className="mt-3">
                                    <p className="mt-1">{review.comment}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                                    <a href="https://www.facebook.com/groups/webdevelopmentbatch9/">
                                        <button className="flex items-center">
                                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" /></svg>
                                            <span className="ml-2">Share</span>
                                        </button>
                                    </a>
                                    <div className="flex items-center">
                                        <span>Are you agree with this review?</span>
                                        <button className="flex items-center ml-6">
                                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" /></svg>
                                            <span className="ml-2">56</span>
                                        </button>
                                        <button className="flex items-center ml-4">
                                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" /></svg>
                                            <span className="ml-2">10</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }


            </div>



            <div className=" grid grid-cols-2 items-center justify-center gap-4">
                <div>
                    <div className="  px-8 py-10 font-[sans-serif] shadow-2xl">
                        <h2 className="text-[#333] font-bold text-2xl text-center">Rating overview</h2>
                        <div className="text-center my-8">
                            <h3 className="text-[#333] font-extrabold text-5xl">4.0</h3>
                            <div className="flex justify-center space-x-2 my-2">
                                <svg className="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-6 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-6 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>
                            <p className="text-base text-[#333] font-semibold">1,153 ratings</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <p className="text-base text-[#333] font-bold">5.0</p>
                                <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-300 rounded w-full h-4 ml-3">
                                    <div className="w-2/3 h-full rounded bg-[#facc15]"></div>
                                </div>
                                <p className="text-base text-[#333] font-bold ml-3">66%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-base text-[#333] font-bold">4.0</p>
                                <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-300 rounded w-full h-4 ml-3">
                                    <div className="w-1/3 h-full rounded bg-[#facc15]"></div>
                                </div>
                                <p className="text-base text-[#333] font-bold ml-3">33%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-base text-[#333] font-bold">3.0</p>
                                <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-300 rounded w-full h-4 ml-3">
                                    <div className="w-1/6 h-full rounded bg-[#facc15]"></div>
                                </div>
                                <p className="text-base text-[#333] font-bold ml-3">16%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-base text-[#333] font-bold">2.0</p>
                                <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-300 rounded w-full h-4 ml-3">
                                    <div className="w-1/12 h-full rounded bg-[#facc15]"></div>
                                </div>
                                <p className="text-base text-[#333] font-bold ml-3">8%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-base text-[#333] font-bold">1.0</p>
                                <svg className="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-300 rounded w-full h-4 ml-3">
                                    <div className="w-[6%] h-full rounded bg-[#facc15]"></div>
                                </div>
                                <p className="text-base text-[#333] font-bold ml-3">6%</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <form onSubmit={handleReviewData} className=" border-4 rounded-lg shadow px-8 py-6 mt-4">

                        <h3 className="font-os text-lg font-bold text-center">Your Opinions </h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Rating :</label>

                            <div className=" relative ">
                                <select className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="rating" required>
                                    <option value="">
                                        Select
                                    </option>
                                    <option value="1">
                                        01
                                    </option>
                                    <option value="2">
                                        02
                                    </option>
                                    <option value="3">
                                        03
                                    </option>
                                    <option value="4">
                                        04
                                    </option>
                                    <option value="5">
                                        05
                                    </option>
                                </select>
                            </div>
                        </div>



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Comments :</label>
                            <textarea rows="6" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="comment" type="text" placeholder="Recommended Reason" required> </textarea>
                        </div>

                        <div className="flex items-center justify-center mt-8">
                            <button className="bg-[#0a3d62] hover:bg-[#6a9bc3] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UserReview;