import produce from 'immer'

import { IRootState, IAction } from "../interfaces"
import { ACTION_TYPES } from './actions'

export const TOGGLE = "ui/toggle"

const initialState: Partial<IRootState> = {
  topTags: [],
  categories: [],
  blogs: [],
  totalBlogs: 0,
}

const reducer = (
	state: Partial<IRootState> = initialState,
	action: IAction
): Partial<IRootState> => produce(
  state, draftState => {
		switch (action.type) {
			case ACTION_TYPES.SAVE_CATEGORIES:
        break
      case ACTION_TYPES.SAVE_TOP_TAGS:
        break
      case ACTION_TYPES.SAVE_BLOG_FEEDS:
        break
		}
  }
)

export default reducer
