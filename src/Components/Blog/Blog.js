import React from 'react';
import Navbar from '../Navbar/Navbar';

const Blog = () => {
    return (
        <>
            <Navbar />
            <section className="bg-gray-100 text-gray-900 pb-44">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Assignment-10 Questions And Answers</h2>
                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 text-xl">
                        <div>
                            <h3 className="font-semibold text-start">1. what is cors?</h3>
                            <p className="mt-1 text-gray-800 text-justify">CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-start">2. Why are you using firebase?</h3>
                            <p className="mt-1 text-gray-800 text-justify">Firebase helps you develop high-quality apps,and highly Secure. Each feature works independently, and they work even better together.

                                <span>

                                </span></p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-start">3. How does the private route work?</h3>
                            <p className="mt-1 text-gray-800 text-justify">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-start">4. What is Node? How does Node work?</h3>
                            <p className="mt-1 text-gray-800 text-justify">Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Blog;