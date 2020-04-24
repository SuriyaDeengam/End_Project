import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import createContainer from './container/createContainer';
import meContainer from './container/meContainer';
import loginContainer from './container/loginContainer';
import accContainer from './container/accContainer';
import detailContainer from './container/detailContainer';
import homeContainer from './container/homeContainer';
import conContainer from './container/conContainer';
import jobContainer from './container/jobContainer';
import listContainer from './container/listContainer';
import inlistContainer from './container/inlistContainer';
import chatComponents from './components/chatComponents';
import ChatinworkComponents from './components/chatinwork';
import working from './components/working';
import maps from './components/maps';
import info from './components/info';
import how from './components/how';
import setting from './components/setting';
import history from './components/history';
import inwork from './components/inwork';
import mapchung from './components/mapchung';
import loadalllist from './components/loadalllist';
import detialinfo from './components/detialinfo';
import mapsee from './components/mapsee';
import loadwork from './components/loadwork';
import SplashScreen from './SplashScreen'
import reloadjob from './components/reloadjob';
// import reloadlist from './components/reloadlist';

const AppStack = createStackNavigator(
	{
		Home: homeContainer,
		Con: conContainer,
		Job: jobContainer,
		Me: meContainer,
		Detail: detailContainer,
		Acc: accContainer,
		List: listContainer,
		Inlist: inlistContainer,
		Chat: chatComponents,
		Chatinwork: ChatinworkComponents,
		working,
		maps,
		inwork,
		info,
		how,
		setting,
		history,
		mapchung,
		loadalllist,
		detialinfo,
		mapsee,
		loadwork,
		reloadjob,
		// reloadlist,
	},
	{
		initialRouteName: 'Home',
		headerMode: 'none',
		mode: 'card',
	}
);

const AuthStack = createStackNavigator(
	{
		Login: loginContainer,
		Create: createContainer,
		
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none',
		mode: 'card',
	}
);

const SwitchNav = createSwitchNavigator(
	{
		SplashScreen,
		AUTH: AuthStack,
		APP: AppStack
	},
	{
		initialRouteName: 'SplashScreen'
	}
)

export default createAppContainer(SwitchNav);






// const stackauth = createStackNavigator({
//   login1: {
//     screen: loginContainer, navigationOptions: {
//       header: null
//     }
//   },
//   create1: {
//     screen: createContainer, navigationOptions: {
//       header: null
//     }
//   },
// });

// const stackapp = createStackNavigator({
//   me1: {
//     screen: MyMe, navigationOptions: {
//       header: null
//     }
//   },
//   type1: {
//     screen: typeContainer, navigationOptions: {
//       header: null
//     }
//   },
// });

// const navigator = createSwitchNavigator({
//   SplashScreen,
//   AUTH: { screen: stackauth },
//   APP: { screen: stackapp },


// });

// export default createAppContainer(navigator);
