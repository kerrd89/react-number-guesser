import React from 'react';

import UserMessage from './UserMessage';
import InputFields from './InputFields';
import Submit from './Submit';

class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='Application'>
          <h1>React Number Guesser</h1>
          <UserMessage />
          <InputFields />
          <Submit />
      </section>
    )
  }
}

export default Application;
