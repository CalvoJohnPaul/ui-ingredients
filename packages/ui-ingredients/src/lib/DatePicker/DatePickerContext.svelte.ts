import type {Accessor} from '$lib/types.js';
import type {DayTableCellProps, TableCellProps, TableProps, ViewProps} from '@zag-js/date-picker';
import {createContext} from 'svelte';
import type {CreateDatePickerReturn} from './createDatePicker.svelte.js';

export const [getDatePickerContext, setDatePickerContext] =
  createContext<Accessor<CreateDatePickerReturn>>();
export const [getDatePickerViewPropsContext, setDatePickerViewPropsContext] =
  createContext<Accessor<ViewProps>>();
export const [getDatePickerTablePropsContext, setDatePickerTablePropsContext] =
  createContext<Accessor<TableProps>>();
export const [getDatePickerTableCellPropsContext, setDatePickerTableCellPropsContext] =
  createContext<Accessor<TableCellProps>>();
export const [getDatePickerDayTableCellPropsContext, setDatePickerDayTableCellPropsContext] =
  createContext<Accessor<DayTableCellProps>>();
