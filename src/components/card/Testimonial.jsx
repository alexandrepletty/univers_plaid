// --- Screen: Testimonial.jsx
export default function Testimonial({item}) {
	return (
		<div className="card testimonial">
			<div className="testimonial_rating">
				{
					[...Array(5)].map((e,i) => <i className={`fi fi-rr-star ${i <= item?.rating-1 ? 'testimonial_check' : ''}`} key={i}/>)
				}
			</div>
			<div className="testimonial_content">
				<p>{item.comment}</p>
			</div>
			<div className="testimonial_author">
				<div className="author_thumbnail">
					<img src={item.client.picture} alt=""/>
				</div>
				<div className="author_info">
					<h3>{item.client.name}</h3>
					<p>{item.client.location}</p>
				</div>
			</div>
		</div>
	)
}