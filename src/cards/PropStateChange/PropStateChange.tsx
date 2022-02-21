import React, { FC, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Child } from './Child';

import './styles.scss';

export const PropStateChangeComp: FC = () => {
  const [a, setA] = useState('a');

  const onClickHandler = () => {
    setA(a.concat('+'));
  };

  return (
    <Card className='parent'>
      <h3>Child prop state change</h3>
      <p>
        A state created from a prop variable passed in by parent will
        only be the parent value on child component instantiation.
        Subsequent updates to the prop will not cause the child state
        to update. However, it will cause the child component to
        re-render.
      </p>
      <Child a={a} />
      <Button onClick={onClickHandler}>Parent Change Prop</Button>
    </Card>
  );
};
