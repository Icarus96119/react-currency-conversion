import React from 'react';

import { Layout } from './layout/Layout';
import { Converter } from './components/converter/Converter';
import { Rates } from './components/rates/Rates';

import { ActionTypeProvider } from './core/context-provider/action-status/ActionTypeProvider';
import { CurrencyRateProvider } from './core/context-provider/currency-rate/CurrencyRateProvider';
import { ActionTypeContext } from './core/context-provider/action-status/ActionTypeContext';
import { ActionType } from './core/enums/action-type';

export const App = () => {

  return (
    <ActionTypeProvider>
      <CurrencyRateProvider>
        <ActionTypeContext.Consumer>
          {
            ({ actionType }) => {
              return (
                <Layout>
                  {actionType === ActionType.Converter ? <Converter/> : <Rates/>}
                </Layout>
              );
            }
          }
        </ActionTypeContext.Consumer>
      </CurrencyRateProvider>
    </ActionTypeProvider>
  );

}
