import React from "react";

const CurrencyRate = ({ bdt, usd }) => {
    return (
        <section className="text-slate-200 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/3 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-slate-200">
                            1.00 €
                        </h2>
                        <p className="leading-relaxed text-slate-300 font-semibold">
                            Euro
                        </p>
                    </div>
                    <div className="p-4 sm:w-1/3 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-slate-200">
                            {bdt} <span className="font-bold">৳</span>
                        </h2>
                        <p className="leading-relaxed text-slate-300 font-semibold">
                            BDT
                        </p>
                    </div>
                    <div className="p-4 sm:w-1/3 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-slate-200">
                            {usd} $
                        </h2>
                        <p className="leading-relaxed text-slate-300 font-semibold">
                            USD
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrencyRate;
