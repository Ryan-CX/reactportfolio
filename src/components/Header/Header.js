import Link from 'next/link';
import React from 'react';
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from 'react-icons/ai';
import { MdLocalCafe } from 'react-icons/md';

import {
	Container,
	Div1,
	Div2,
	Div3,
	Span,
	NavLink,
	SocialIcons,
} from './HeaderStyles';
//navbar
const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: 'white',
						marginBottom: '20px',
					}}
				>
					<MdLocalCafe size='4rem' />
					<Span></Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>Project</NavLink>
				</Link>
			</li>

			<li>
				<Link href='#tech'>
					<NavLink>Technologies</NavLink>
				</Link>
			</li>

			<li>
				<Link href='#about'>
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
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
		</Div3>
	</Container>
);

export default Header;
