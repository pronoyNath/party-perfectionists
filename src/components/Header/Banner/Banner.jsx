
const Banner = () => {
    return (
        <div data-aos="fade-left">
            <div className="hero h-[300px] md:h-[500px] bg-cover md:bg-contain" style={{ backgroundImage: 'url(https://i.ibb.co/2hZVn1n/groom-bride-s-wedding-table-decorated-with-flowers-candles.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-3xl text-yellow-100 font-light font-youngSerif">May your special day be filled with laughter, love, and unforgettable moments that you'll cherish forever.</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;