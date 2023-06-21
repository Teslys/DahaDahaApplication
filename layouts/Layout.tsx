import BottomNavigator from './navigator/BottomNavigator';
import Router from '../router/router';
import Header from './header/Header';
import {useSelector} from 'react-redux';

function LayoutScreen(): JSX.Element {
  let selectedNavigation = useSelector(state => state.navigator.selected);
  return (
    <>
      {selectedNavigation == -1 ? null : <Header />}
      <Router />
      {selectedNavigation == -1 ? null : <BottomNavigator />}
    </>
  );
}

export default LayoutScreen;
