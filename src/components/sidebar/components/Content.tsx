// chakra imports
import { Box, Flex, Stack } from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import { IRoute } from 'types/navigation';
import {
	RiHome4Line,
	RiTeamLine,
	RiCalendar2Line,
	RiFolder2Line,
	RiUserFollowLine,
	RiPlantLine,
	RiStackLine,
	RiUserUnfollowLine
  } from "react-icons/ri";

// FUNCTIONS

interface SidebarContentProps {
	routes: IRoute[];
}

function SidebarContent(props: SidebarContentProps) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px' overflowY="scroll" scrollPadding="0">
			<Brand />
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>

			<Box ps='20px' pe={{ lg: '16px', '2xl': '20px' }} mt='60px' mb='40px' borderRadius='30px'>
				{/* <SidebarCard /> */}
			</Box>
		</Flex>
	);
}

export default SidebarContent;
