export default function Hero() {
  return (
    <div className="h-screen w-full bg-herobg bg-no-repeat bg-cover bg-center bg-fixed md:bg-top relative">
      <div className="h-full w-full flex items-center">
        <div className="w-full md:w-7/12 lg:w-5/12 ml-6 lg:ml-28 z-10 space-y-2">
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Raining Offers For Hot Summers!
          </h1>
          <p className="text-white font-semibold text-lg md:text-xl">
            25% Off On All Products
          </p>
          <div className="space-x-3">
            <button className="bg-white px-3 py-2 font-semibold rounded-md border-2 border-white hover:bg-transparent hover:text-white md:px-5 md:py-2">
              Shop Now
            </button>
            <button className="bg-white px-3 py-2 font-semibold rounded-md border-2 border-white hover:bg-transparent hover:text-white md:px-5 md:py-2">
              Find More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-60"></div>
    </div>
  );
}
