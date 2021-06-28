import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ categories: 'Languages', text: 'JavaScript, Python' },
	{
		categories: 'FW/Libraries',
		text: 'React, Node.js, Express, Bootstrap',
	},
	{ categories: 'Database', text: 'MongoDB' },
	{ categories: 'Others', text: 'Git, Bash, Heroku, Netlify, Rest API' },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Skills</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{card.categories}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
	</Section>
);

export default Acomplishments;
