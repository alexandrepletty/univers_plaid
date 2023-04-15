// --- Screen: Product.jsx
export default function Product({item}) {
	return (
		<div className="card info">
			<div className="info_icon">
				<i className={`fi ${item.icon}`} />
			</div>
			<div className="info_content">
				<p>{item.title}</p>
				<span>{item.text}</span>
			</div>
		</div>
	)
}