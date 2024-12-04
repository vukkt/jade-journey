import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [name, setName] = useState("");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(
			`Thank you, ${formData.name}! We will respond to your email: ${formData.email}`
		);
	};
	return (
		<div>
			<h1>Contact Us</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
					/>
				</label>
				<br />
				<label>
					Message:
					<textarea
						name="message"
						value={formData.message}
						onChange={handleInputChange}
					/>
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
			<p>{formData.name && `Your name is: ${formData.name}`}</p>
		</div>
	);
}
