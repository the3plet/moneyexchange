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
    <div className="flex flex-col">
      {currencyData.map((data) => (
        <div className="flex">
          <div>
            <img
              src={data.flag}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h1>{data.country}</h1>
              <h1>{data.currency}</h1>
            </div>
          </div>
          <div>
            <h1>{data.buyRate}</h1>
            <h1>{data.lastUpdated}</h1>
          </div>
          <div>
            <h1>{data.sellRate}</h1>
            <h1>{data.lastUpdated}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardUI;
