const Banner = () => {
  return (
    <div className="h-[40vh] flex flex-col justify-center items-center">
      <h2 className="text-5xl mb-6 font-bold ">
        I Grow By Helping People In Need
      </h2>
      <div className="join w-1/3">
        <input className="input w-full input-bordered join-item focus:outline-none" placeholder="Search here...." />
        <button className="btn font-semibold text-white join-item rounded-md bg-[#FF444A]" >Search</button>
      </div>
    </div>
  );
};

export default Banner;
