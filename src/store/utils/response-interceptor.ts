import { Observable, of, throwError } from 'rxjs';
import { pluck, switchMap, tap } from 'rxjs/operators';

export function responseInterceptor(key: string) {
  return (obs: Observable<{data: any, errors: any}>) => {
    return obs.pipe(
      switchMap((response) => {
        if (response.errors) {
          return throwError(response.errors);
        }
        return of(response.data);
      }),
      pluck(key),
    );
  };
}
