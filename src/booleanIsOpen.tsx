import { Action } from "redux";
// types.tsxから、DrowertState型をimport
import { Drower } from "./types";

export const OPEN = "OPEN" as const;
export const CLOSE = "CLOSE" as const;

// interfaceでOpenActionを定義
interface OpenAction extends Action {
  type: typeof OPEN
  payload: Drower
}

// 引数はクリックで発火するだけなので無し、戻り値をOpenActionで定義
export const open = (): OpenAction => ({
  type: OPEN,
  payload: {
    isOpen: true
  }
})

// interfaceでCloseActionを定義
interface CloseAction extends Action {
  type: typeof CLOSE
  payload: Drower
}

// 戻り値をCloseActionで定義
export const close = (): CloseAction => ({
  type: CLOSE,
  payload: {
    isOpen: false
  }
})

// Actionの型をまとめた、DrowerActions型をエクスポート
// 複数ある場合、union型で繋ぐ
export type DrowerActions = OpenAction | CloseAction;

//////////////////
// Reducer
//////////////////

// initialStateには、DrowerState型をあてはめる
const initialState: Drower = {
  isOpen: false
}

// reducerの型
export default function isOpenDrower(
  state: Drower = initialState,
  action: DrowerActions
) {
  switch (action.type) {
    default:
      return state;
    case OPEN:
      return {
        isOpen: false
      }
    case CLOSE:
      return {
        isOpen: true
      }
  }
}
