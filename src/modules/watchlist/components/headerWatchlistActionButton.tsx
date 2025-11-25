import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addMovieToWatchlist, removeMovieFromWatchlist } from '../actions/actions'
import { selectIsMovieInWatchlist } from '../selectors/watchlistSelector'
import { Movie } from '../../dashboard/types/moviesTypes'
import Icon from '../../../common/components/icon'
import { ICON_MAP } from '../../../common/constants'

interface Props {
    movie: Movie
}

const HeaderWatchlistActionButton = ({ movie }: Props) => {
    const isMovieInWatchlist = useSelector((state) => selectIsMovieInWatchlist(state, movie?.id))
    const dispatch = useDispatch()

    const handlePress = useCallback(() => {
        if (movie) {
            if (!isMovieInWatchlist) {
                dispatch(addMovieToWatchlist(movie))
            }
            else {
                dispatch(removeMovieFromWatchlist(movie.id))
            }
        } else {
            console.error('Cannot add/remove to watchlist: Movie title is missing.')
        }
    }, [isMovieInWatchlist, movie])

    return (
        <TouchableOpacity onPress={handlePress}>
            <Icon icon={isMovieInWatchlist ? ICON_MAP.WATCHLIST_REMOVE : ICON_MAP.WATCHLIST_ADD} size='large' color='black'/>
        </TouchableOpacity>
    )
}

export default React.memo(HeaderWatchlistActionButton)