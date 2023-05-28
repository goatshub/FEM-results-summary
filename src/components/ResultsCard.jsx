const ResultsCard = ({ items }) => {
  return (
    <div className="md:h-screen md:flex md:items-center md:w-screen md:max-w-1.5xl md:mx-auto">
      <section className="bg-white md:flex md:rounded-3xl md:shadow-2xl md:overflow-hidden z-10">
        <div
          className="bg-gradient-to-b from-gradResult1 to-gradResult2 text-center p-8 text-white rounded-b-3xl md:flex-1 md:rounded-t-3xl 
      md:flex md:flex-col md:justify-center
    "
        >
          <h3 className="mb-6 text-slate-200">Your Result</h3>
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-b from-gradCircle1 to-gradCircle2 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center gap-1 flex-col">
              <p className="text-white font-bold text-5xl mt-2">76</p>
              <p className="text-slate-300 text-sm font-normal">of 100</p>
            </div>
          </div>
          <h2 className="mb-2 text-xl">Great</h2>
          <p className="px-2.5">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-8 md:flex-1">
          <h2 className="font-bold text-slate-700 text-lg mb-6 ">Summary</h2>
          <div className="flex flex-col gap-4 mb-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between p-4 rounded-lg"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <div>
                  <h3
                    className="flex items-center gap-2"
                    style={{ color: `${item.color}` }}
                  >
                    <img src={item.icon} alt={item.category} />
                    {item.category}
                  </h3>
                </div>
                <p className="flex items-center gap-2 text-slate-500">
                  <span className="text-slate-700">{item.score}</span> / 100
                </p>
              </div>
            ))}
          </div>
          <button
            className="bg-slate-700 text-white rounded-full p-3 w-full
        hover:bg-gradient-to-b from-gradResult1 to-gradResult2"
          >
            Continue
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResultsCard;
