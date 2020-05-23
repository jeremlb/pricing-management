import { Commit, Dispatch, Module } from 'vuex';

/**
 * Tricky helper to get arguments after State
 */
type ArgumentsAfterState<F extends Commit> = F extends (
  _: any,
  ...args: infer P
) => void
  ? P
  : never;

interface Mutations {
  [mutationName: string]: (...args: any[]) => void;
}

interface ActionContext<S, R, M extends Mutations = Mutations> {
  dispatch: Dispatch;
  commit: <A extends keyof M>(
    actionName: A,
    ...payload: ArgumentsAfterState<M[A]>
  ) => void;
  state: S;
  getters: any;
  rootState: R;
  rootGetters: any;
}

type Actions<A extends string, S, R, M extends Mutations = Mutations> = {
  [K in A]: (context: ActionContext<S, R, M>, ...args: any[]) => void;
};

export const createActions = <
  A extends string,
  S,
  R,
  M extends Mutations = Mutations
>() => <X extends Actions<A, S, R, M>>(actions: X) => actions;

export const createMutations = <S, MN extends string>() => <
  M extends { [K in MN]: (state: S, ...args: any[]) => void }
>(
  mutations: M,
) => mutations;

export const createModule = <S>() => <M extends Module<S, S>>(module: M) =>
  module;
