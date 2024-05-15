
const OurFeatures = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto text-[#333] font-[sans-serif] p-4 mt-10 md:my-14">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-xl font-extrabold text-center mb-4">Our Exclusive Features</h2>
                    <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
                </div>
                <div className="mt-16">
                    <div className="grid md:grid-cols-2 items-center gap-16">
                        <div>
                            <img src="https://readymadeui.com/image-1.webp" className="w-full object-contain rounded-md shadow-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold mb-4">Customization</h3>
                            <p className="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
                            <button type="button"
                                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
                                Read More
                            </button>
                        </div>
                        <div className="max-md:order-1">
                            <h3 className="text-2xl font-extrabold mb-4">Performance</h3>
                            <p className="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
                            <button type="button"
                                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
                                Read More
                            </button>
                        </div>
                        <div>
                            <img src="https://readymadeui.com/contact.webp" className="w-full object-contain rounded-md shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default OurFeatures;