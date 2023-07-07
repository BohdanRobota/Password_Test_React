import React, { useState } from 'react';

const useInput = (initialValue: string): [string, React.ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return [value, handleChange];
}

export default useInput; 