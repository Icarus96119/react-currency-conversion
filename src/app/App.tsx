import React from 'react';

import { Layout } from './layout/Layout';
import { Converter } from './components/converter/Converter';
import { Rates } from './components/rates/Rates';

import { ActionStatusProvider } from './core/context-provider/action-status/ActionStatusProvider';
import { CurrencyRateProvider } from './core/context-provider/currency-rate/CurrencyRateProvider';
import { useActionStatus } from './core/context-provider/action-status/ActionTypeContext';
import { ActionTypeContext } from './core/context-provider/action-status/ActionTypeContext';
import { ActionType } from './core/enums/action-type';

export const App = () => {

  return (
    <ActionStatusProvider>
      <CurrencyRateProvider>
        <ActionTypeContext.Consumer>
          {
            ({ actionType, setActionType }) => {
              return (
                <Layout>
                  {actionType === ActionType.Converter ? <Converter></Converter> : <Rates></Rates>}
                </Layout>
              );
            }
          }
        </ActionTypeContext.Consumer>
      </CurrencyRateProvider>
    </ActionStatusProvider>
  );

}
