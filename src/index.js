import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.people()}
        author="Sam"
        timeAgo="Today at 4:55PM"
        comment="Awesome. Nice blog post!"
      />
      <CommentDetail
        avatar={faker.image.nightlife()}
        author="Alex"
        timeAgo="Today at 2:00PM"
        comment="I like the subject."
      />
      <CommentDetail
        avatar={faker.image.abstract()}
        author="Jane"
        timeAgo="Yesterday at 6:30PM"
        comment="Cool!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
