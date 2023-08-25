import { Wrapper, Input, Select } from './SearchBar.styled';

export const SearchBar = ({ level, topic, onChangeLevel, onChangeTopic }) => {
  return (
    <>
      <h2>Find quiz by topic</h2>
      <Wrapper>
        <Input
          type="text"
          placeholder="Topic filter"
          value={topic}
          onChange={e => {
            onChangeTopic(e.target.value);
          }}
        />
        <Select
          value={level}
          onChange={e => {
            onChangeLevel(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </Select>
      </Wrapper>
    </>
  );
};
