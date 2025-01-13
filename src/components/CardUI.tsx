import React from "react";

type Tcurrency = {
  country: string;
  flag: string;
  currency: string;
  buyRate: number;
  sellRate: number;
  lastUpdated: string;
};

const currencyData: Tcurrency[] = [
  {
    country: "United States",
    flag: "https://flagcdn.com/us.svg",
    currency: "USD",
    buyRate: 82.5,
    sellRate: 83.5,
    lastUpdated: "a second ago",
  },
  {
    country: "European Union",
    flag: "https://flagcdn.com/eu.svg",
    currency: "EUR",
    buyRate: 89.5,
    sellRate: 90.5,
    lastUpdated: "5 minutes ago",
  },
  {
    country: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    currency: "GBP",
    buyRate: 103.5,
    sellRate: 104.5,
    lastUpdated: "10 minutes ago",
  },
  {
    country: "India",
    flag: "https://flagcdn.com/in.svg",
    currency: "INR",
    buyRate: 1.0,
    sellRate: 1.0,
    lastUpdated: "30 minutes ago",
  },
  {
    country: "Australia",
    flag: "https://flagcdn.com/au.svg",
    currency: "AUD",
    buyRate: 53.5,
    sellRate: 54.5,
    lastUpdated: "1 hour ago",
  },
];

type Props = {};

const CardUI = (props: Props) => {
  return (
    <div className="flex flex-col space-y-6 px-8">
      {currencyData.map((data,index) => (
        <div 
        className={`flex items-center justify-between p-4 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-[#ECEBDE]' : null}`}        key={data.currency}>
          <div className="flex items-center gap-4">
            <img
              src={data.flag}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="">
              <h1 className="text-xl font-bold font-serif">{data.country}</h1>
              <h1 className="text-2xl font-mono">{data.currency}</h1>
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold font-sans">{data.buyRate}</h1>
            <h1 className="text-xl font-mono">{data.lastUpdated}</h1>
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold font-sans">{data.sellRate}</h1>
            <h1 className="text-xl font-mono">{data.lastUpdated}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUI;
