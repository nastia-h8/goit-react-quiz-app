import { Container, Title, Button, Label } from './QuizCard.styled';
import { HiArchiveBoxXMark } from 'react-icons/hi2';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  return (
    <Container>
      <Title>{topic}</Title>
      <div>
        <p>
          <Label>Level:</Label> {level}
        </p>
        <p>
          <Label>Time:</Label> {time}
        </p>
        <p>
          <Label>Questions:</Label> {questions}
        </p>
      </div>
      <Button type="button" onClick={() => onDelete(id)}>
        <HiArchiveBoxXMark size={20} />
      </Button>
    </Container>
  );
};
