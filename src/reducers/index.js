import {combineReducers} from 'redux'
import playlists from './playlists'
import playlist from './playlist'
import currentUser from './currentUser'
import currentUserInfo from './currentUserInfo'

export default combineReducers({
playlists, playlist,currentUser,currentUserInfo })