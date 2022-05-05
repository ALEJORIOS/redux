import { Action } from '@ngrx/store';
export const INCREMENTAR = '[Contador] Incremementar';
export const DECREMENTAR = '[Contador] Decremementar';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}