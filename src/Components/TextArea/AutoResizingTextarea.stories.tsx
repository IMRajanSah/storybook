import { useState } from 'react';
import { AutoResizingTextarea } from './AutoResizingTextarea';

export default {
  title: 'Components/AutoResizingTextarea',
  component: AutoResizingTextarea,
};

export const Default = () => {
  const [text, setText] = useState('');
  return (
    <AutoResizingTextarea
      value={text}
      onChange={setText}
      placeholder="Type something..."
    />
  );
};
