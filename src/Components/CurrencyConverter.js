import React, { Component } from "react";

export const withCurrency = BaseComponent => {
	return class Currency extends Component {
		constructor() {
			super();

			this.state = {
				currencyChosen: false,
				selectedCurrency: "Select Currency",
				amount: 0
			};
		}

		handleAmountIncrease = () => {
			this.setState(prevState => {
				return { amount: prevState.amount + 1 };
			});
		};

		handleAmountDecrease = () => {
			this.setState(prevState => {
				return { amount: prevState.amount - 1 };
			});
		};

		handleOptionSelect = evt => {
			const { value } = evt.target;
			this.setState({
				selectedCurrency: value,
				currencyChosen: value === "Select Currency" ? false : true
			});
		};

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
					<select onChange={this.handleOptionSelect} value={selectedCurrency}>
						<option value="Select Currency">Select Currency</option>
						{mappedCurrencyData}
					</select>
					<div>
						<button onClick={this.handleAmountDecrease} className="minus">
							-
						</button>
						<button onClick={this.handleAmountIncrease} className="add">
							+
						</button>
					</div>
					{currencyChosen ? (
						<BaseComponent
							currency={currencyData[selectedCurrency]}
							amount={amount}
						/>
					) : (
						<p>Please Select Currency</p>
					)}
				</>
			);
		}
	};
};
