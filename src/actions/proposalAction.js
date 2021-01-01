import axios from 'axios'
import {
  GET_PROPOSAL_FAIL,
  GET_PROPOSAL_REQUEST,
  GET_PROPOSAL_SUCCESS,
} from '../constants/proposalConstant'
export const proposalDetail = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROPOSAL_REQUEST,
    })

    const { data } = await axios.get('/api/proposals')
    dispatch({
      type: GET_PROPOSAL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_PROPOSAL_FAIL,
      payload: error,
    })
  }
}
