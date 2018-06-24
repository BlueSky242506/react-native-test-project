import { Navigation } from 'react-native-navigation';
import Main from "./Main";
import List from "./List";

export function register_screens(store, Provider) {

  Navigation.registerComponent(
    'inkind.test.List',
    () => List,
    store,
    Provider
  );

  Navigation.registerComponent(
    'inkind.test.Main',
    () => Main,
    store,
    Provider
  );
  
};
