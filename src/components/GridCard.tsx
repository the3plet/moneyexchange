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
      buyRate: 820.50,
      sellRate: 830.50,
    },
    {
      flag: "https://flagcdn.com/eu.svg",
      currency: "EUR",
      buyRate: 890.75,
      sellRate: 900.75,
    },
    {
        flag: "https://flagcdn.com/gb.svg",
        currency: "GBP",
        buyRate: 305.25,
        sellRate: 400.25,
      },
    {
      flag: "https://flagcdn.com/au.svg",
      currency: "AUD",
      buyRate: 535.45,
      sellRate: 545.45,
    },
    {
      flag: "https://flagcdn.com/jp.svg",
      currency: "JPY",
      buyRate: 100.13,
      sellRate: 101.13,
    },
    {
      flag: "https://flagcdn.com/ca.svg",
      currency: "CAD",
      buyRate: 620.35,
      sellRate: 630.35,
    },
    {
      flag: "https://flagcdn.com/ch.svg",
      currency: "CHF",
      buyRate: 910.85,
      sellRate: 920.85,
    },
    {
      flag: "https://flagcdn.com/sg.svg",
      currency: "SGD",
      buyRate: 600.95,
      sellRate: 610.95,
    },
    {
      flag: "https://flagcdn.com/nz.svg",
      currency: "NZD",
      buyRate: 520.15,
      sellRate: 530.15,
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
    <div className="grid grid-cols-2 gap-6 gap-y-4 px-4">
      {currencyData.map((data, index) => (
        <div
          className={`flex items-center p-1 rounded-lg shadow-md border-2 py-3 justify-between ${
            Math.floor(index / 2) % 2 === 0 ? "bg-[#F2EFE5]" : ""
          }`}
          key={data.currency}
        >
          <div className="flex flex-col items-center gap-x-4 ml-6">
            <img
              src={data.flag}
              className="w-12 h-10  rounded-lg object-cover "
            />
            <div className="">
              <h1 className="text-2xl font-mono font-extrabold opacity-55">
                {data.currency}
              </h1>
            </div>
          </div>
          <div className="flex gap-4 justify-between gap-x-6 mr-6">
            <div className="text-left flex flex-col items-end ">
              <h1 className="text-lg font-bold text-gray-500 ">
                {data.sellRate ? "Buy" : "Loading..."}
              </h1>
              <h1 className="text-4xl font-bold font-Barlow">
                {data.sellRate}
              </h1>
            </div>
            <div className="text-left flex flex-col items-end ">
              <h1 className="text-lg font-sans text-gray-500 font-bold">
                {data.buyRate ? "Sell" : "Loading..."}
              </h1>
              <h1 className="text-4xl font-bold font-Barlow">{data.buyRate}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
