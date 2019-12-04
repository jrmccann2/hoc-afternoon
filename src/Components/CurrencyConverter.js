import React, { Component } from "react";

const withCurrency = BaseComponent => {
	return class Currency extends Component {
		constructor() {
			super();

			this.state = {
				currencyChosen: false,
				selectedCurrency: "Select Currency",
				amount: 0
			};
		}

		render() {
			const { selectedCurrency, amount, currencyChosen } = this.state;

			const currencyData = [
				{ name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
				{ name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
				{ name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
				{ name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
				{ name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
			];

			const mappedCurrencyData = currencyData.map((currency, index) => (
				<option key={currency.id} value={index}>
					{currency.name}
				</option>
			));

			return (
				<>
					<select value={selectedCurrency}>
						<option value="Select Currency">Select Currency</option>
						{mappedCurrencyData}
					</select>
					<div>
						<button className="minus">-</button>
						<button className="add">+</button>
					</div>
					<BaseComponent
						currency={currencyData[selectedCurrency]}
						amount={amount}
					/>
				</>
			);
		}
	};
};
