import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'


const CreditCard = ({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) => {

	const divStyle = {
		backgroundColor: bgColor,
		color: color
	};

	return (
		<div className="credit-card-container" style={divStyle}>
			<div className="credit-card-logo" >
				<img src={type === 'visa' ? visa : mastercard} alt="" />
			</div>
			<h1>
				{'•'.repeat(4)} {'•'.repeat(4)} {'•'.repeat(4)} {number.slice(-4)}
			</h1>
			<div className="credit-card-footer">
				<p><span>Expired: {expirationMonth}/{expirationYear}</span><span>{bank}</span></p>
				<p>{owner}</p>
			</div>
		</div >
	)
}

export default CreditCard
