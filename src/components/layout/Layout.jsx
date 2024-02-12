import Cards from "../cards/Cards";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
	return (
		<div>
			<Header />
			<main>
				<Cards />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
