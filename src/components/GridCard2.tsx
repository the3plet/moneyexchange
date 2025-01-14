type Tcurrency = {
    flag: string;
    currency: string;
    buyRate: number;
    sellRate: number;
    lastUpdated: string;
  };
  
  const currencyData: Tcurrency[] = [
    {
      flag: "https://flagcdn.com/us.svg",
      currency: "USD",
      buyRate: 82.5,
      sellRate: 83.5,
      lastUpdated: "a second ago",
    },
    {
      flag: "https://flagcdn.com/eu.svg",
      currency: "EUR",
      buyRate: 89.5,
      sellRate: 90.5,
      lastUpdated: "5 minutes ago",
    },
    {
      flag: "https://flagcdn.com/gb.svg",
      currency: "GBP",
      buyRate: 103.5,
      sellRate: 104.5,
      lastUpdated: "10 minutes ago",
    },
    {
      flag: "https://flagcdn.com/in.svg",
      currency: "INR",
      buyRate: 1.0,
      sellRate: 1.0,
      lastUpdated: "30 minutes ago",
    },
    {
      flag: "https://flagcdn.com/au.svg",
      currency: "AUD",
      buyRate: 53.5,
      sellRate: 54.5,
      lastUpdated: "1 hour ago",
    },
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
  