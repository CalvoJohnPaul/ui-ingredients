import {createContext} from 'svelte';
import type {Accessor} from '../types.js';
import type {CreatePresenceReturn, PresenceStrategyProps} from './createPresence.svelte.js';

export const [getPresenceContext, setPresenceContext] =
  createContext<Accessor<CreatePresenceReturn>>();
export const [getPresenceStrategyPropsContext, setPresenceStrategyPropsContext] =
  createContext<Accessor<PresenceStrategyProps>>();
