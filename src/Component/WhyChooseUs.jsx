import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const WhyChooseUs = () => {
    return (
        <div className="bg-blue-50 py-16 dark:bg-gray-900 text-black dark:text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* <h2 className="text-3xl font-bold mb-6">Why Choose Crowdcube?</h2> */}
                <Slide direction="left">
                    <h2 className="text-3xl font-bold text-center mb-6">Why Choose Crowdcube</h2>
                </Slide>
                <Fade>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow dark:bg-gray-900 text-black dark:text-white">
                            <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
                            <p className="text-gray-600">
                                Our platform is designed to make creating and managing campaigns simple and intuitive.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow dark:bg-gray-900 text-black dark:text-white">
                            <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
                            <p className="text-gray-600">
                                We ensure that all donations are processed securely for your peace of mind.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded shadow dark:bg-gray-900 text-black dark:text-white">
                            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
                            <p className="text-gray-600">
                                Reach a global audience and maximize the impact of your campaigns.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default WhyChooseUs;