import {useState} from 'react';

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = <K extends Object>(value: K, field: keyof K) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
  };
};
