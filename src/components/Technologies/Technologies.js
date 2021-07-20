import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of front-end and back-end technologies.
		</SectionText>
		<List>
			<ListItem>
				<DiReact size='3rem' />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>React/HTML/CSS/Bootstrap/Semantic UI</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<FaNodeJs size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>JavaScript/Node.js/Express.js/Python</ListParagraph>
				</ListContainer>
			</ListItem>

			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Database</ListTitle>
					<ListParagraph>MongoDB/MySQL/PostgreSQL</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
