import React, { useCallback } from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { type Movie } from '../../dashboard/types/moviesTypes'
import { BASE_IMG_URL, ICON_MAP, SCREEN_NAMES } from '../../../common/constants'
import { removeMovieFromWatchlist } from '../actions/actions'
import { AppNavigationProp } from '../../../common/types/navigationTypes'
import Icon from '../../../common/components/icon'

import { watchlistListItemStyles } from './watchlistListItemStyles'

interface Props {
    movie: Movie
}
const watchlistListItem = ({ movie }: Props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation<AppNavigationProp>()

    const handleRemoveMovie = useCallback(() => {
        dispatch(removeMovieFromWatchlist(movie.id))
    }, [movie.id])

    const handleNavigateToMovieDetails = useCallback(() => {
        navigation.navigate(SCREEN_NAMES.MOVIE_DETAILS_SCREEN, { movieTitle: movie.title, movie })
    }, [movie])

    return (
        <View style={watchlistListItemStyles.container}>
            <TouchableOpacity style={watchlistListItemStyles.leftSectionContainer} onPress={handleNavigateToMovieDetails}>
            <View style={watchlistListItemStyles.posterContainer}>
                <Image
                    style={watchlistListItemStyles.poster}
                    source={{ uri: `${BASE_IMG_URL}${movie.poster_path}` }}
                />
            </View>
            <View style={watchlistListItemStyles.dataContainer}>
                <Text style={watchlistListItemStyles.movieTitle}>{movie.title}</Text>
                <Text>{movie.release_date.slice(0, 4)}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRemoveMovie}>
                <Icon icon={ICON_MAP.WATCHLIST_REMOVE} size='large' color='black' />
            </TouchableOpacity>           
        </View>
    )
}

export default React.memo(watchlistListItem)