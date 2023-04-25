import React, {useState, useContext} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange && onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#767577', true: colors.primary}}
      thumbColor={isEnabled ? colors.notification : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
