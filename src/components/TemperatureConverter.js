import { useState } from "react";

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
	const scaleName = {
		c: "Celsius",
		f: "Fahrenheit",
	};

	return (
		<fieldset>
			<legend>Enter Temperature in {scaleName[scale]}:</legend>
			<input
				type="number"
				value={temperature}
				onChange={(e) => onTemperatureChange(e.target.value)}
			/>
		</fieldset>
	);
}
function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
	return (celsius * 9) / 5 + 32;
}
function TemperatureConverter() {
	const [temperature, setTemperature] = useState("");
	const [scale, setScale] = useState("c");

	const handleCelsiusChange = (value) => {
		setScale("c");
		setTemperature(value);
	};

	const handleFahrenheitChange = (value) => {
		setScale("f");
		setTemperature(value);
	};

	const celsius = scale === "f" ? toCelsius(temperature) : temperature;
	const fahrenheit = scale === "c" ? toFahrenheit(temperature) : temperature;

	return (
		<div>
			<TemperatureInput
				scale="c"
				temperature={celsius}
				onTemperatureChange={handleCelsiusChange}
			/>
			<TemperatureInput
				scale="f"
				temperature={fahrenheit}
				onTemperatureChange={handleFahrenheitChange}
			/>
		</div>
	);
}

export default TemperatureConverter;
