import type {ItemProps} from '@zag-js/file-upload';
import {createContext} from 'svelte';
import type {Accessor} from '$lib/types.js';
import type {CreateFileUploadReturn} from './createFileUpload.svelte.js';

export const [getFileUploadContext, setFileUploadContext] =
  createContext<Accessor<CreateFileUploadReturn>>();
export const [getFileUploadItemPropsContext, setFileUploadItemPropsContext] =
  createContext<Accessor<ItemProps>>();
