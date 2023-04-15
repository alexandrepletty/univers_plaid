// --- Assets
import hero from '../assets/imgHero.png'
import images from '../assets/images.png'
import images1 from '../assets/images-1.png'
import images2 from '../assets/images-2.png'
import images3 from '../assets/images-3.png'
import about from '../assets/about.png'
import profil1 from '../assets/profil1.png'
import profil2 from '../assets/profil2.png'
import profil3 from '../assets/profil3.png'

// --- Data
let bestSellers = [
	{image:images,name:'Plaid canapé tricoté jaune', category: 'Plaid canape', price:69.90},
	{image:images1,name:'Plaid léger de couleur unie', category: 'Plaid brun', price:49.90},
	{image:images2,name:'Plaid nordique tricoté pour canapé', category: 'Plaid canape', price:89.90},
	{image:images3,name:'Plaid flocon de Noël en polaire bleu', category: 'Plaid imprimé', price:69.90}
]
let info = [
{icon:'fi fi-rr-location-alt', title:'Livraison offerte', text:'À partir de 50 euros d’achat.'},
	{icon:'fi fi-rr-hand-holding-heart', title:'Satisfait ou remboursé', text:'Garantie de retour sous 14 jours'},
	{icon:'fi fi-rr-laugh', title:'Service Client', text:'Un service client réactif.'}
]
let testimonials = [
	{
		client: {
			picture:profil1,
			name:'Rayan Franch',
			location:'Marseille, France'
		},
		comment: 'Je suis très satisfait des marchandises qui sont arrivées exactement comme décrit dans la commande',
		rating: 5
	},
	{
		client: {
			picture:profil2,
			name:'Sophie Laurance',
			location:'Lyon France'
		},
		comment: 'Lors de la commande, vous bénéficiez d\'un excellent service. Lorsque vous recevez vos articles, ils sont toujours parfaits. Si vous avez un problème, il est pris en charge immédiatement.',
		rating: 4
	},
	{
		client: {
			picture:profil3,
			name:'Adrianne Sustello',
			location:'Paris, France'
		},
		comment: 'Travail bien fait et livré dans les délais. Très bon service client et réponse à mes questions par e-mail.',
		rating: 5
	}
]

// --- Components
import ProductCard from '../components/card/Product'
import Info from '../components/card/Info'
import Testimonial from '../components/card/Testimonial'

// --- Screen: HomeScreen.jsx
export default function HomeScreen() {
	return (
		<div className="home">
			<div className="home_header">
				<div className="center">
					<div className="home_split">
						<h2>Offrez vous le plaid réconfortant dont vous avez besoin</h2>
						<p>Nous avons une grande variété de modèles, de couleurs et de textures pour s’adapter à tous les goûts et à tous les styles de décoration.</p>
						<div>
							<button>Explorer maintenant</button>
						</div>
					</div>
					<div className="home_split">
						<img src={hero} alt=""/>
					</div>
				</div>
			</div>
			<div className="home_section">
				<div className="center">
					<div className="home_bestsellers">
						<div className="bestsellers_header">
							<i className="fi fi-rr-diamond" />
							<h2>Les meilleures ventes</h2>
						</div>
						<div className="bestsellers_section">
							{
								bestSellers.map((item, index) => (
									<ProductCard item={item} key={index}/>
								))
							}
						</div>
					</div>
					<div className="home_info">
						{
							info.map((item, index) => (
								<Info item={item} key={index}/>
							))
						}
					</div>
					<div className="home_about">
						<div className="home_split">
							<h2>À propos de nous</h2>
							<p>Notre mission est de vous offrir des produits de qualité à des prix abordables. Nous sommes fiers de nos produits et nous sommes sûrs que vous allez les adorer.</p>
							<div>
								<button>Découvrir nos produits</button>
							</div>
						</div>
						<div className="home_split">
							<img src={about} alt=""/>
						</div>
					</div>
					<div className="home_testimonials">
						<div className="testimonials_header">
							<h2>Ils nous ont fait confiance</h2>
						</div>
						<div className="testimonials_section">
							{
								testimonials.map((item, index) => (
									<Testimonial item={item} key={index}/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}