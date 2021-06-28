import React from 'react';
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:973-454-6977'>973-454-6977</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href='mailto:ryancx.dev@gmail.com'>
						ryancx.dev@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>2021. Chenguang Xu</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/Ryan-CX' target='_blank'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons
						href='https://www.linkedin.com/in/chenguang-xu-01b8b9140/'
						target='_blank'
					>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://twitter.com/xcg1234' target='_blank'>
						<AiFillTwitterCircle size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
