import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  LabelName,
  Input,
  SelectInput,
  Button,
  Message,
} from './QuizForm.styled';

const schema = Yup.object().shape({
  topic: Yup.string()
    .min(3, 'At least 3 characters!')
    .max(70, 'Too Long!')
    .required('Required'),
  time: Yup.number()
    .min(5, 'At least 5 min!')
    .max(60, '60 min at max!')
    .integer()
    .required('Required'),
  questions: Yup.number()
    .min(5, 'At least 8 questions!')
    .max(30, '30 questions at max!')
    .integer()
    .required('Required'),
  level: Yup.string().oneOf(['beginner', 'intermediate', 'advanced']),
});

const initialValues = {
  topic: '',
  time: 0,
  questions: 0,
  level: 'beginner',
};

export const QuizForm = ({ onFormSubmit }) => {
  const onSubmit = (values, actions) => {
    console.log(actions);
    onFormSubmit(values);
    actions.resetForm();
  };
  return (
    <>
      <h2>Add your quiz</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        <StyledForm autoComplete="off">
          <label>
            <LabelName>Topic</LabelName>
            <Input type="text" name="topic" />
            <Message name="topic" component="p" />
          </label>
          <label>
            <LabelName>Time</LabelName>
            <Input type="number" name="time" />
            <Message name="time" component="p" />
          </label>
          <label>
            <LabelName>Questions</LabelName>
            <Input type="number" name="questions" />
            <Message name="questions" component="p" />
          </label>
          <label>
            <LabelName>Level</LabelName>
            <SelectInput as="select" name="level">
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </SelectInput>
            <Message name="level" component="p" />
          </label>

          <Button type="submit">Add quiz</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
