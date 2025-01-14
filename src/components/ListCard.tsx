
type Tcurrency = {
  flag: string;
  currency: string;
  buyRate: number;
  sellRate: number;

};

const currencyData = [
  {
    flag: "https://flagcdn.com/us.svg",
    currency: "USD",
    buyRate: 123.45,
    sellRate: 124.55,
    lastUpdated: "a second ago",
  },
  {
    flag: "https://flagcdn.com/eu.svg",
    currency: "EUR",
    buyRate: 234.56,
    sellRate: 235.66,
    lastUpdated: "5 minutes ago",
  },
  {
    flag: "https://flagcdn.com/gb.svg",
    currency: "GBP",
    buyRate: 345.67,
    sellRate: 346.77,
    lastUpdated: "10 minutes ago",
  },
  {
    flag: "https://flagcdn.com/in.svg",
    currency: "INR",
    buyRate: 456.78,
    sellRate: 457.88,
    lastUpdated: "30 minutes ago",
  },
  {
    flag: "https://flagcdn.com/au.svg",
    currency: "AUD",
    buyRate: 567.89,
    sellRate: 568.99,
    lastUpdated: "1 hour ago",
  },
  {
    flag: "https://flagcdn.com/jp.svg",
    currency: "JPY",
    buyRate: 678.91,
    sellRate: 679.01,
    lastUpdated: "2 hours ago",
  },
  {
    flag: "https://flagcdn.com/ca.svg",
    currency: "CAD",
    buyRate: 789.12,
    sellRate: 790.22,
    lastUpdated: "3 hours ago",
  },
  {
    flag: "https://flagcdn.com/ch.svg",
    currency: "CHF",
    buyRate: 891.23,
    sellRate: 892.33,
    lastUpdated: "4 hours ago",
  },
  {
    flag: "https://flagcdn.com/sg.svg",
    currency: "SGD",
    buyRate: 912.34,
    sellRate: 913.44,
    lastUpdated: "5 hours ago",
  },
  {
    flag: "https://flagcdn.com/nz.svg",
    currency: "NZD",
    buyRate: 234.56,
    sellRate: 235.66,
    lastUpdated: "6 hours ago",
  },
  {
    flag: "https://flagcdn.com/se.svg",
    currency: "SEK",
    buyRate: 345.67,
    sellRate: 346.77,
    lastUpdated: "7 hours ago",
  },
  {
    flag: "https://flagcdn.com/za.svg",
    currency: "ZAR",
    buyRate: 456.78,
    sellRate: 457.88,
    lastUpdated: "8 hours ago",
  },
];





const ListCard = () => {
  return (
    <div className="flex flex-col space-y-6 px-8">
      {currencyData.map((data,index) => (
        <div 
        className={`flex items-center justify-start p-1 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-[#ECEBDE]' : null}`}        key={data.currency}>
          <div className="flex items-center gap-3">
            <img
              src={data.flag}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="">
              
              <h1 className="text-2xl font-mono">{data.currency}</h1>
            </div>
          </div>
          <div className="ml-10 gap-10 flex">
            
          <div className="text-left flex gap-4 items-center">
            <h1 className="text-lg font-sans text-gray-500 font-bold">
                {data.buyRate ? "Sell" : "Loading..."}
              </h1>
            <h1 className="text-2xl font-bold font-sans">{data.sellRate}</h1>
          </div>
          <div className="text-left flex gap-4 items-center">
            <h1 className="text-lg font-sans text-gray-500 font-bold">
                {data.buyRate ? "Buy" : "Loading..."}
              </h1>
            <h1 className="text-2xl font-bold font-sans">{data.buyRate}</h1>
          </div>
          <h1 className="font-sans flex items-end opacity-70">
            updated {data.lastUpdated}
          </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
