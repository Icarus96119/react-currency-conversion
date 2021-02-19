import React, { useState } from 'react';

import { ActionTypeContext } from './ActionTypeContext';
import { ActionType } from '../../enums/action-type';

export const ActionStatusProvider = (props: React.PropsWithChildren<{}>) => {
  const [actionType, setActionType] = useState<ActionType>(ActionType.Converter);
  return (
    <ActionTypeContext.Provider value={{ actionType, setActionType }}>
      { props.children }
    </ActionTypeContext.Provider>
  );
}
