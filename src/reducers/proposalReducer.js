import {
  GET_PROPOSAL_FAIL,
  GET_PROPOSAL_REQUEST,
  GET_PROPOSAL_SUCCESS,
} from '../constants/proposalConstant'
export const getProposalReducer = (state = { proposal: [] }, action) => {
  switch (action.type) {
    case GET_PROPOSAL_REQUEST:
      return { loading: true, proposal: [] }
    case GET_PROPOSAL_SUCCESS:
      return { loading: false, proposal: action.payload }
    case GET_PROPOSAL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
