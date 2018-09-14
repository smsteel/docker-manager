import { GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS, OPEN_REPOSITORY, GET_TAGS_REQUEST, GET_TAGS_SUCCESS } from './types'
import { callRegistryAPI } from '../api'

export const getCatalog = () => async dispatch => {
  dispatch({ type: GET_CATALOG_REQUEST })
  const data = await callRegistryAPI('/_catalog')
  dispatch({ type: GET_CATALOG_SUCCESS, data })
}

export const openRepository = name => dispatch => {
  dispatch({ type: OPEN_REPOSITORY, data: name })
}

export const getTags = repository => async dispatch => {
  dispatch({ type: GET_TAGS_REQUEST })
  const data = await callRegistryAPI(`/${repository}/tags/list`)
  dispatch({ type: GET_TAGS_SUCCESS, data })
}
