
const OurNewsLetters = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-[#2e0249] to-[#680871] py-16 px-6 font-[sans-serif]">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h2 className="md:text-5xl text-4xl font-extrabold mb-6">Join Our Exclusive Newsletter</h2>
                    <p className="text-xl text-gray-300">Be part of our elite community. Get VIP access to curated content, early product releases, and special promotions.</p>
                    <div className="bg-slate-200 shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center">
                        <input type="email" placeholder="Enter your email" className="w-full md:w-96 bg-transparent border-b-2 border-[#a91079] py-3 px-4 text-[#2e0249] text-base focus:outline-none placeholder-[#a91079] placeholder-opacity-70" />
                        <button className="max-md:mt-6 md:ml-4 bg-[#a91079] hover:bg-[#680871] text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurNewsLetters;