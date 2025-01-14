type Tcurrency = {
    flag: string;
    currency: string;
    buyRate: number;
    sellRate: number;
    lastUpdated: string;
  };
  
  const currencyData: Tcurrency[] = [
    
  ];
  
  const GridCard = () => {
    return (
      <div className="flex flex-col space-y-6 px-8">
        {currencyData.map((data, index) => (
          <div
            className={`flex items-center p-4 rounded-lg shadow-md ${
              index % 2 === 0 ? "bg-[#ECEBDE]" : null
            }`}
            key={data.currency}
          >
            <div className="flex flex-col items-center">
              <img
                src={data.flag}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="">
                <h1 className="text-2xl font-mono">{data.currency}</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-left">
                <h1 className="text-2xl font-bold font-sans">{data.buyRate}</h1>
                <h1 className="text-xl font-mono">
                  {data.buyRate ? "Sell Rate" : "Loading..."}
                </h1>
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold font-sans">{data.sellRate}</h1>
                <h1 className="text-xl font-mono">
                  {data.sellRate ? "Buy Rate" : "Loading..."}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default GridCard;
  