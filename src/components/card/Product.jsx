// --- Screen: Product.jsx
export default function Product({item}) {
	return (
		<a href="/" className="card product">
			<div className="product_thumbnail">
				<span>{item.category}</span>
				<img src={item.image} alt=""/>
			</div>
			<div className="product_info">
				<h3>{item.name}</h3>
				<p>A partie de <span>{item.price}€</span></p>
			</div>
		</a>
	)
}