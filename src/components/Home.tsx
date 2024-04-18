const Home = () => {
  return (
    <div>
      <div className="p-2 chaos py-10">
        <TopTechBar />
      </div>
    </div>
  );
};

export default Home;

const TopTechBar = () => {
  return (
    <div>
      <div className="w-[80%] m-auto p-2">
        <div className="w-full backdrop-blur-sm border bg-[#ffffff51] border-gray-300 shadow-sm rounded-xl p-5 flex flex-col">
          <span className="text-transparent font-extrabold bg-gradient-to-r from-mel via-tea to-sky bg-clip-text text-2xl bagest">
            Top Tech
          </span>
          <div className="mt-2">
            <div className="w-[200px] h-[150px] bg-rose-500 rounded-lg relative overflow-hidden">
              <span className="absolute px-2 bg-green-500 bottom-0 font-play text-xl">#1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
