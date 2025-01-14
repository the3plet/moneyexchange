type Tcurrency = {
    flag: string;
    currency: string;
    buyRate: number;
    sellRate: number;
  };
  
  const currencyData: Tcurrency[] = [
    {
      flag: "https://flagcdn.com/us.svg",
      currency: "USD",
      buyRate: 8200.50,
      sellRate: 8300.50,
    },
    {
      flag: "https://flagcdn.com/eu.svg",
      currency: "EUR",
      buyRate: 8900.75,
      sellRate: 9000.75,
    },
    {
      flag: "https://flagcdn.com/gb.svg",
      currency: "GBP",
      buyRate: 1035.25,
      sellRate: 1040.25,
    },
    {
      flag: "https://flagcdn.com/au.svg",
      currency: "AUD",
      buyRate: 5350.45,
      sellRate: 5450.45,
    },
    {
      flag: "https://flagcdn.com/jp.svg",
      currency: "JPY",
      buyRate: 100.1250,
      sellRate: 101.1250,
    },
    {
      flag: "https://flagcdn.com/ca.svg",
      currency: "CAD",
      buyRate: 6200.35,
      sellRate: 6300.35,
    },
    {
      flag: "https://flagcdn.com/ch.svg",
      currency: "CHF",
      buyRate: 9100.85,
      sellRate: 9200.85,
    },
    {
      flag: "https://flagcdn.com/sg.svg",
      currency: "SGD",
      buyRate: 6000.95,
      sellRate: 6100.95,
    },
    {
      flag: "https://flagcdn.com/nz.svg",
      currency: "NZD",
      buyRate: 5200.15,
      sellRate: 5300.15,
    },
    {
      flag: "https://flagcdn.com/se.svg",
      currency: "SEK",
      buyRate: 880.10,
      sellRate: 890.10,
    },
    {
      flag: "https://flagcdn.com/za.svg",
      currency: "ZAR",
      buyRate: 450.30,
      sellRate: 460.30,
    },
    {
      flag: "https://flagcdn.com/cn.svg",
      currency: "CNY",
      buyRate: 730.25,
      sellRate: 740.25,
    },
  ];
  
  
  const GridCard = () => {
    return (
      <div className="grid grid-cols-2 gap-6 gap-y-5 px-4">
        {currencyData.map((data, index) => (
          <div
          className={`flex items-center p-1 rounded-lg shadow-md py-3 ${
            Math.floor(index / 2) % 2 === 0 ? "bg-[#ECEBDE]" : ""
          }`}
            key={data.currency}
          >
            <div className="flex flex-col items-center px-4 pr-3">
              <img
                src={data.flag}
                className="w-12 h-10  rounded-lg object-cover "
              />
              <div className="">
                <h1 className="text-2xl font-mono font-extrabold">{data.currency}</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-left flex flex-col items-start gap-1">
                <h1 className="text-lg font-sans font-bold">
                  {data.buyRate ? "Sell" : "Loading..."}
                </h1>
                <h1 className="text-3xl font-bold font-sans">{data.buyRate}</h1>
              </div>
              <div className="text-left flex flex-col items-start gap-1">
                <h1 className="text-lg text-gray-500 font-sans font-bold">
                  {data.sellRate ? "Buy" : "Loading..."}
                </h1>
                <h1 className="text-3xl text-gray-500 font-bold font-sans">{data.sellRate}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default GridCard;
  