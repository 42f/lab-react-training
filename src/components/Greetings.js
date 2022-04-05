const Greetings = ({
	lang,
	children
}) => {

	const greetings = [
		{ lang: 'fr', value: 'Bonjour' },
		{ lang: 'de', value: 'Guten Tag' },
		{ lang: 'en', value: 'Hello' },
		{ lang: 'es', value: 'Hola' },
	]
	const greeting = greetings.find(greet => greet.lang === lang);
	return (
		<div className="container">
			<p>
				{(greeting && greeting.value) || 'Hey'} {children}
			</p>
		</div>
	)
}

export default Greetings
