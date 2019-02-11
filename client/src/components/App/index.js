import React, { useState } from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import headshot_photo from "../../img/professional_photo.png";

import {
	Page,
	Name,
	Description,
	Section,
	Headshot,
	Link,
	Button,
	Details,
	Option,
	OptionContainer
} from "./style";

const App = () => {
	const [detailsHeight, setDetailsHeight] = useState("100vh");

	const toggleHeight = () => {
		if (detailsHeight !== "0") setDetailsHeight("0");
		else setDetailsHeight("100vh");
	};

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
					<Button onClick={() => toggleHeight()}>
						{detailsHeight !== "0" ? "Hide" : "Details"}
					</Button>
				</Section>
				<Details height={detailsHeight}>
					<OptionContainer>
						<Option>Work</Option>
						<Option>Education</Option>
						<Option>Recreation</Option>
					</OptionContainer>
				</Details>
			</Page>
		</div>
	);
};

export default App;
