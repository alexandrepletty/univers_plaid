// --- Assets
import logo from '../../assets/logo.svg'
import card from '../../assets/card.png'

// --- Component
export default function Header() {
	// --- Return
	return (
		<footer className="footer">
			<div className="center">
				<div className="footer_up">
					<div className="footer_split">
						<img src={logo} alt="Logo"/>
						<p>Notre service client traite vos demandes du lundi au vendredi</p>
						<div className="footer_social">
							<a href="/" target="_blank"><i className="fi fi-brands-facebook"/></a>
							<a href="/" target="_blank"><i className="fi fi-brands-twitter"/></a>
							<a href="/" target="_blank"><i className="fi fi-brands-instagram"/></a>
							<a href="/" target="_blank"><i className="fi fi-brands-pinterest"/></a>
						</div>
					</div>
					<div className="footer_split">
						<div className="footer_title">
							<h2>A propos</h2>
						</div>
						<div className="footer_menu">
							<ul>
								<li><a href="">Mentions Légales</a></li>
								<li><a href="">Conditions Générales de Vente</a></li>
								<li><a href="">Politique de Confidentialité</a></li>
								<li><a href="">Rétractation</a></li>
								<li><a href="">Politique de Remboursement</a></li>
								<li><a href="">Politique de livraison</a></li>
							</ul>
						</div>
					</div>
					<div className="footer_split">
						<div className="footer_title">
							<h2>Lien utiles</h2>
						</div>
						<div className="footer_menu">
							<ul>
								<li><a href="">Mon compte</a></li>
								<li><a href="">F.A.Q.s</a></li>
								<li><a href="">Nous contacter</a></li>
								<li><a href="">Blog</a></li>
							</ul>
						</div>
					</div>
					<div className="footer_split">
						<div className="footer_title">
							<h2>Newsletter</h2>
						</div>
						<p>Inscrivez vous à notre newsletter et profitez de <span>15%</span> sur votre première commande.</p>
						<div className="footer_form">
							<input type="text" placeholder="Adresse mail"/>
							<button><i className="fi fi-rr-arrow-small-right"></i></button>
						</div>
					</div>
				</div>
				<div className="footer_down">
					<p>© {new Date().getFullYear()} Univers-Plaid</p>
					<img src={card} alt="Card"/>
				</div>
			</div>
		</footer>
	)
}