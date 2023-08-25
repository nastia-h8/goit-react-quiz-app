import { Component } from 'react';
import { nanoid } from 'nanoid';
import { QuizForm } from '../QuizForm/QuizForm';
import { QuizList } from '../QuizList/QuizList';
import { SearchBar } from '../SearchBar/SearchBar';

import initialQuizItems from '../../quiz-items.json';

import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';

export class App extends Component {
  state = {
    quizItems: initialQuizItems,
    filters: {
      topic: '',
      level: 'all',
    },
  };
  onFormSubmit = data => {
    this.setState(prevState => ({
      quizItems: [...prevState.quizItems, { id: nanoid(), ...data }],
    }));
  };

  deleteQuiz = quizId => {
    this.setState(prevState => ({
      quizItems: prevState.quizItems.filter(item => item.id !== quizId),
    }));
  };

  changeLevelFilter = newLevel => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        level: newLevel,
      },
    }));
  };
  changeTopicFilter = newTopic => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        topic: newTopic,
      },
    }));
  };

  getVisibleItems = () => {
    const { quizItems, filters } = this.state;

    return quizItems.filter(item => {
      const hasTopic = item.topic
        .toLowerCase()
        .includes(filters.topic.toLowerCase());

      if (filters.level === 'all') {
        return hasTopic;
      }

      return hasTopic && item.level === filters.level;
    });
  };

  render() {
    const { filters } = this.state;

    const visibleQuizItems = this.getVisibleItems();

    return (
      <Layout>
        <QuizForm onFormSubmit={this.onFormSubmit} />
        <SearchBar
          level={filters.level}
          topic={filters.topic}
          onChangeLevel={this.changeLevelFilter}
          onChangeTopic={this.changeTopicFilter}
        />
        <QuizList items={visibleQuizItems} onDelete={this.deleteQuiz} />
        <GlobalStyle />
      </Layout>
    );
  }
}
