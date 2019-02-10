import React from "react";
import headshot_photo from "./img/professional_photo.png";

import {
	Page,
	Name,
	Description,
	Section,
	Headshot,
	StyledGithub,
	StyledLinkedIn
} from "./style";

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
						<StyledGithub />
						<StyledLinkedIn />
					</div>
				</Section>
			</Page>
		</div>
	);
};

export default App;
