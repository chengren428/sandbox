import React, { FC, useState } from 'react';
import { Button, Card } from 'semantic-ui-react';

interface IChildProps {
  a: string;
}

export const Child: FC<IChildProps> = ({ a }) => {
  const [stateA, setStateA] = useState(a);

  const onClickHandler = () => {
    setStateA(stateA.concat('-'));
  };

  console.log(document);

  return (
    <Card>
      <span>Child Prop: {a}</span>
      <span>Child State: {stateA}</span>
      {/* <span>Times Rendered: {timesRendered.current}</span> */}
      <Button onClick={onClickHandler}>Change Child State</Button>
    </Card>
  );
};
