import React, { FC } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import XLayout from '@/pages/Xlayout';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppStore } from '@/stores/AppStore';

moment.locale('zh-cn');

const app = AppStore.create({});

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider app={app}>
        <Router basename="/gatekeeper/supply-chain-manage">
          <XLayout />
        </Router>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
