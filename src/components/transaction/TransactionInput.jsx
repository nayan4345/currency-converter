import React, { useEffect, useState } from "react";

const TransactionInput = ({ bdt, usd }) => {
    const [amount, setAmount] = useState(0);
    const [incentive, setIncentive] = useState(2.5);
    const [currency, setCurrency] = useState("BDT");
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let currencyAmount = 0;
        let percentage = incentive / 100;
        if (currency == "BDT") {
            currencyAmount = bdt;
        } else if (currency == "USD") {
            currencyAmount = usd;
        }

        let totalTransactionValue = amount * currencyAmount * (1 + percentage);

        setTotalAmount(totalTransactionValue.toFixed(2));
    }, [bdt, usd, incentive, amount, currency]);

    return (
        <section className="flex justify-center">
            <div className="" style={{ maxWidth: "500px" }}>
                <div className="flex space-x-3">
                    <div className="relative sm:mb-0 flex-grow w-full">
                        <label className="leading-7 text-sm text-gray-400">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="full-name"
                            name="full-name"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="leading-7 text-sm text-gray-400">
                            Remittance Incentive
                        </label>
                        <input
                            type="number"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={incentive}
                            onChange={(e) => setIncentive(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="leading-7 text-sm text-gray-400">
                            Rate
                        </label>
                        <select
                            className="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-gray-900 appearance-none py-2 focus:outline-none focus:border-indigo-500 text-white pl-3 pr-10"
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value="BDT">BDT</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div className="leading-7 text-sm text-gray-400 mt-5">
                        Total Transaction Amount
                    </div>
                    <h1 className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700   outline-none text-gray-100 py-1 px-3 leading-8 transition-colors text-center text-lg font-bold">
                        {totalAmount} {currency}
                    </h1>
                </div>
                <button className="text-white bg-green-500 border-0 py-2 w-full focus:outline-none hover:bg-green-600 rounded text-medium mt-5">
                    Button
                </button>
            </div>
        </section>
    );
};

export default TransactionInput;
