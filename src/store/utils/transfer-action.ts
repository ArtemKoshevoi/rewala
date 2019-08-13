import { ofType } from 'redux-observable';
import { PayloadMetaAction } from 'typesafe-actions';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export function transferActionEpicFactory<InputAction extends PayloadMetaAction<any, any, any>, OutputAction>(
  inputActionType: string,
  outputActionCreator: (payload: any, meta?: any) => OutputAction,
  initialActionType?: string,
) {
  return (action$: Observable<any>) =>
    action$.pipe(
      ofType(inputActionType),
      filter((action: InputAction) => initialActionType ? initialActionType === action.meta : true),
      map(({ payload, meta }: InputAction) => outputActionCreator(payload, meta)),
    );
}
