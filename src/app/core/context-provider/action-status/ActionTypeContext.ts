import { createContext } from 'react';

import { ActionType } from '../../enums/action-type';

export type ActionTypeContextType = {
  actionType: ActionType,
  setActionType: (actionType: ActionType) => void;
}
export const ActionTypeContext = createContext<ActionTypeContextType>({ actionType: ActionType.Converter, setActionType: actionType => { console.log(actionType); } })
