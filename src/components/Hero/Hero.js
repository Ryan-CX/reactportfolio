import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Hi, I'm Chen
			</SectionTitle>
			<SectionText>
				I'm Chenguang Xu, a software engineer in Brooklyn, NY. <br />I enjoy
				making complex problems simple, elegant and crafting clean &
				user-friendly experiences.
				<br /> <br />
				You can find my resume{' '}
				<a
					href='https://drive.google.com/file/d/1m8--nC-XmY5MCMaOpKgR1oTKEfbvuczH/view?usp=sharing'
					target='_blank'
					style={{ color: 'white' }}
				>
					here.
				</a>
			</SectionText>
		</LeftSection>
	</Section>
);

export default Hero;
