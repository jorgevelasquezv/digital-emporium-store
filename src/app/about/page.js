const logo = '/images/logotipo.png';

const About = () => {
    return (
        <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-8">
                <img
                    src={logo}
                    alt="Digital Emporium Store"
                    className="w-96 mx-auto mb-4 rounded-full shadow-lg bg-blue-700"
                />
                <h2 className="text-5xl font-bold text-gray-800">About Us</h2>
            </div>
            <p className="text-gray-700 leading-loose mb-6">
                Welcome to Digital Emporium Store, your go-to destination for
                cutting-edge electronic products. We're passionate about
                providing you with the ultimate online shopping experience,
                offering a diverse range of innovative tech products.
            </p>
            <p className="text-gray-700 leading-loose mb-6">
                At Digital Emporium Store, we embrace quality, innovation, and
                outstanding customer service. Our goal is to bring the latest
                tech trends directly to your doorstep, ensuring you discover the
                products you need before you even realize you need them.
            </p>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Our Mission
            </h2>
            <p className="text-gray-700 leading-loose mb-6">
                Our mission is to deliver high-quality electronic products that
                enrich your daily life. We strive to be industry leaders,
                providing innovation, reliability, and excellence in every
                product we offer.
            </p>
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Our Commitment
            </h2>
            <p className="text-gray-700 leading-loose mb-6">
                We are dedicated to ensuring customer satisfaction. Our
                commitment is to surpass your expectations and provide
                exceptional customer service at every stage of your shopping
                experience. Your satisfaction is our top priority.
            </p>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Contact</h2>
            <p className="text-gray-700 leading-loose mb-6">
                We'd love to hear from you! For any questions, comments, or
                concerns, feel free to reach out to our customer support team.
            </p>
            <p className="text-blue-500 font-semibold">
                Email: info@digitalemporiumstore.com
            </p>
        </div>
    );
};

export default About;
