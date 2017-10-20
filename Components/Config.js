import { StackNavigator } from 'react-navigation';
import CardList from './CardList';
import ExpandCard from './ExpandCard';

export const Root = StackNavigator({
  CardList: {
    screen: CardList,

  },
  ExpandCard: {
    screen: ExpandCard,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name
    }),
  },

});
