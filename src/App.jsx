import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import CurrencyRate from "./components/CurrencyRate";
import TransactionInput from "./components/transaction/TransactionInput";
import TransactionHisotry from "./components/transaction/TransactionHisotry";

// Styles
import "./index.css";

const App = () => {
    const [bdt, setBdt] = useState(0);
    const [usd, setUsd] = useState(0);

    useEffect(() => {
        const getRates = async () => {
            const response = await axios.get(
                "https://api.exchangerate-api.com/v4/latest/euro"
            );
            const data = await response.data;
            const { BDT, USD } = data.rates;

            setBdt(BDT);
            setUsd(USD);
        };

        getRates();
    }, []);

    return (
        <main className="bg-slate-900 h-screen w-screen text-slate-200">
            {/* Currency Rate */}
            <CurrencyRate bdt={bdt} usd={usd} />
            {/* Send Money Inputs */}
            <TransactionInput bdt={bdt} usd={usd} />
        </main>
    );
};

export default App;
