import React from "react";

const CurrencyDisplay = ({ currency, amount }) => (
	<p>
		US Dollar ${amount.toFixed(2)} - {currency.name} {currency.symbol}
		{(amount * currency.rate).toFixed(2)}
	</p>
);

export default CurrencyDisplay;
