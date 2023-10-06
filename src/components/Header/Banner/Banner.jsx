
const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-contain" style={{ backgroundImage: 'url(https://i.ibb.co/2hZVn1n/groom-bride-s-wedding-table-decorated-with-flowers-candles.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl text-yellow-100 font-normal">We're dedicated to making your wedding an unforgettable masterpiece, etching the most beautiful moments into the canvas of your love story.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;