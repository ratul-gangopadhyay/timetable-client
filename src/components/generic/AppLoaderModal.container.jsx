import React from 'react';
import AppLoaderModal from './AppLoaderModal';
import commonSelector from '../../redux/store/common/commonSelector';
import { useSelector } from 'react-redux';

const AppLoaderModalContainer = () => {
  const { active, message } = useSelector(commonSelector.loader);
  return <AppLoaderModal message={message} active={active} />;
};

export default AppLoaderModalContainer;
