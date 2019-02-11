import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import headshot_photo from "../../img/professional_photo.png";

import { Page, Name, Description, Section, Headshot, Link } from "./style";

const App = () => {
	return (
		<div className="App">
			<Page>
				<Section>
					<Headshot img={headshot_photo} />
					<div>
						<Name>Elis Jones.</Name>
						<Description>
							Web Developer, based in London.
						</Description>
						<Link href="https://github.com/ej14433">
							<IoLogoGithub />
						</Link>
						<Link href="https://www.linkedin.com/in/elis-jones/">
							<IoLogoLinkedin />
						</Link>
					</div>
				</Section>
			</Page>
		</div>
	);
};

export default App;
