import { useState } from "react";
import { Switch } from "./components/Switch/Switch";
import { Title } from "./components/Title/Title";
import { Credits } from "./components/Credits/Credits";
import { Assistance } from "./components/Assistance/Assistance";
import { Form } from "./components/Form/Form";
import { GradientButton } from "./components/GradientButton/GradientButton";

function App() {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		company: "",
		email: "",
		phone: "",
		country: "",
		city: "",
		state: "",
		address: "",
		post: "",
	});

	const [cardData, setCardData] = useState({
		number1: "",
		number2: "",
		number3: "",
		number4: "",
		date: "",
		cvv: "",
	});

	const onSubmit = () => {
		console.log(formData);
		console.log(cardData);
	};

	return (
		<div className="container">
			<Title title="Заповніть форму" />
			<Switch dataFirst="Юр. особа" dataSecond="Фіз. особа" />
			<Form data={formData} setData={setFormData} />
			<Title title="Види допомоги" />
			<Title title="Ви можете змінити вид допомоги" type="title__sub" />
			<Assistance />
			<Credits data={cardData} setCartData={setCardData} />
			<GradientButton text="Допомогти" onSubmit={onSubmit} />
		</div>
	);
}

export default App;
