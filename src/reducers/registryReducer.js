import { GET_CATALOG_REQUEST, GET_CATALOG_SUCCESS, OPEN_REPOSITORY, GET_TAGS_REQUEST, GET_TAGS_SUCCESS } from '../actions/types'
import { sortAsc, sortDesc } from '../helpers'

const initialState = {
  isLoading: false,
  repositories: [],
  tags: [],
  openedRepository: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOG_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_CATALOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repositories: action.data.repositories.sort(sortAsc)
      }
    case OPEN_REPOSITORY:
      return {
        ...state,
        openedRepository: action.data
      }
    case GET_TAGS_REQUEST:
      return {
        ...state,
        isLoading: true,
        tags: []
      }
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tags: action.data.tags.sort(sortDesc)
      }
    default:
      return state
  }
}
