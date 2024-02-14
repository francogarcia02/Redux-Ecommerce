import {ADD, REMOVE, REMOVE_ALL, CLEAR, CREATE} from '../types';

export const create = (id) => ({type: CREATE, payload: id})
export const add = (id) => ({type: ADD, payload: id})
export const remove = (id, all = false) =>
    all
    ? {type: REMOVE_ALL, payload: id}
    : {type: REMOVE, payload: id}
export const clear = () => ({type: CLEAR})