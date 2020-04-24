
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import loginContainer from './container/loginContainer';
import createaccountContainer from './container/createaccountContainer';
import carContainer from './container/carContainer';
import homeContainer from './container/homeContainer';
import fix1Container from './container/fix1Container';
import fix2_1Container from './container/fix2_1Container';
import fix2_2Container from './container/fix2_2Container';
import fix2_3Container from './container/fix2_3Container';
import fix2_4Container from './container/fix2_4Container';
import fix2_5Container from './container/fix2_5Container';
import fix2_6Container from './container/fix2_6Container';
import fix2_7Container from './container/fix2_7Container';
import fix2_8Container from './container/fix2_8Container';
import fix2_9Container from './container/fix2_9Container';
import fix3Container from './container/fix3Container';
import locationContainer from './container/locationContainer';
import meContainer from './container/meContainer';
import serviceContainer from './container/serviceContainer';
import detailContainer from './container/detailContainer';
import myjobContainer from './container/myjobContainer';
import chatComponents from './components/chatComponents';
import SplashScreen from './SplashScreen';
import maps from './components/maps';
import detialinfo from './components/detialinfo';
import chatio from './components/chatio';
import backservice from './components/backservice';
import Chatinwork from './components/chatinwork';
import priceContainer from './container/priceContainer';
import addline from './components/addline';
import p1 from './components/price/p1';
import p2_1 from './components/price/p2_1';
import p2_2 from './components/price/p2_2';
import p2_3 from './components/price/p2_3';
import p2_4 from './components/price/p2_4';
import p2_5 from './components/price/p2_5';
import p2_6 from './components/price/p2_6';
import p2_7 from './components/price/p2_7';
import p2_8 from './components/price/p2_8';
import p2_9 from './components/price/p2_9';
import p2_10 from './components/price/p2_10';
import p2_11 from './components/price/p2_11';
import p2_1_1 from './components/price/p2_1.1';
import p2_1_2 from './components/price/p2_1.2';
import p2_1_3 from './components/price/p2_1.3';
import p2_1_4 from './components/price/p2_1.4';
import p2_1_5 from './components/price/p2_1.5';
import p2_1_6 from './components/price/p2_1.6';
import p2_1_7 from './components/price/p2_1.7';
import sound from './components/sound';
import pinmap from './components/pinmap';
import medetial from './components/medetial';
import reload from './components/reload';

import achatComponents from './components/chatComponents/a.';

const SwitchNav = createSwitchNavigator(
	{
		SplashScreen,
		Login: loginContainer,
		Createaccount: createaccountContainer,
		Home: homeContainer,
		Fix1: fix1Container,
		Fix2_1: fix2_1Container,
		Fix2_2: fix2_2Container,
		Fix2_3: fix2_3Container,
		Fix2_4: fix2_4Container,
		Fix2_5: fix2_5Container,
		Fix2_6: fix2_6Container,
		Fix2_7: fix2_7Container,
		Fix2_8: fix2_8Container,
		Fix2_9: fix2_9Container,
		Fix3: fix3Container,
		Location: locationContainer,
		Me: meContainer,
		Service: serviceContainer,
		Detail: detailContainer,
		Myjob: myjobContainer,
		Chat: chatComponents,
		maps,
		addline,
		detialinfo,
		backservice, 
		chatio,
		Chatinwork,
		Price: priceContainer,
		addline,
		p1,
		p2_1,
		p2_2,
		p2_3,
		p2_4,
		p2_5,
		p2_6,
		p2_7,
		p2_8,
		p2_9,
		p2_10,
		p2_11,
		p2_1_1,
		p2_1_2,
		p2_1_3,
		p2_1_4,
		p2_1_5,
		p2_1_6,
		p2_1_7,
		sound,
		pinmap,
		achatComponents,
		medetial,
		reload,

	},
	{
		initialRouteName: 'SplashScreen'
	}
)

export default createAppContainer(SwitchNav);

