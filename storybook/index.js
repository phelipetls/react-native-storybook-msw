import AsyncStorage from '@react-native-async-storage/async-storage';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';
import {initialize, withMsw} from './mswDecorator';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

initialize();
addDecorator(withMsw);

// import stories
configure(() => {
  require('../src/demos/fetch/App.stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
});

export default StorybookUIRoot;
