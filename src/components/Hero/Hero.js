import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi, I'm Chen
			</SectionTitle>
			<SectionText>
				I'm Chenguang Xu, a software engineer and sports enthusiast in Brooklyn,
				NY. <br />I enjoy making complex problems simple, elegant and crafting
				clean & user-friendly experiences.
			</SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
