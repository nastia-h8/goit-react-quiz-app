import { QuizCard } from '../QuizCard/QuizCard';
import { List, Item } from './QuizList.styled';

export const QuizList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};
