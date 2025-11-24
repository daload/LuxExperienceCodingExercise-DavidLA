import React, { useEffect, useCallback } from 'react'
import { Text, ScrollView, View, Image, TouchableOpacity, Linking } from 'react-native'
import { type RouteProp } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import { HomeStackParamList } from '../../../common/types/navigationTypes'
import { fetchMovieData } from '../actions/actions'
import { selectMovieById, selectMovieDataFetchStatus } from '../selectors/moviesSelector'
import { BASE_IMG_URL, LOADING_STATUS } from '../../../common/constants'
import LoadingActivityIndicator from '../../../common/components/loadingActivityIndicator'
import LoadingErrorText from '../../../common/components/loadingErrorText'

import { movieDetailsScreenStyles } from './movieDetailsScreenStyles'

interface Props {
    route: RouteProp<HomeStackParamList, 'MovieDetailsScreen'>
}

const MovieDetailScreen = ({ route }: Props) => {
    const { movie, movieTitle } = route?.params
    const movieData = useSelector((state) => selectMovieById(state, movie?.id))
    const movieDataStatusFetch = useSelector(selectMovieDataFetchStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!movieData) dispatch(fetchMovieData(movie?.id))
    }, [])

    const handleOpenMovieLink = useCallback(async () => {
        const supported = await Linking.canOpenURL(movieData?.homepage)
        if (supported) {
            await Linking.openURL(movieData?.homepage)
        } else {
            console.log(`Cannot open link of ${movieTitle}`)
        }
    }, [movieData, movieTitle])

    const renderScreenContent = useCallback(() => {
        switch(movieDataStatusFetch) {
            case LOADING_STATUS.ERROR:
                return (
                    <LoadingErrorText text={`Error fetching ${movieTitle} data. Try again later.`} />
                )
            case LOADING_STATUS.SUCCESS:
                return (
                    <>
                        <View style={movieDetailsScreenStyles.posterSectionContainer}>
                            <View style={movieDetailsScreenStyles.posterContainer}>
                                <Image
                                    style={movieDetailsScreenStyles.poster}
                                    source={movieData?.poster_path ? { uri: `${BASE_IMG_URL}${movieData.poster_path}` } : require('../../../assets/common.png')}
                                />
                            </View>
                            <View style={movieDetailsScreenStyles.mainDataContainer}>
                                <Text style={movieDetailsScreenStyles.movieTitle}>{movieTitle}</Text>
                                <Text style={movieDetailsScreenStyles.mainDataText}>{movieData?.release_date.slice(0, 4)} · Status: {movieData?.status}</Text>
                                <Text style={movieDetailsScreenStyles.mainDataText}>Duration: {movieData?.runtime} min</Text>
                                <TouchableOpacity style={movieDetailsScreenStyles.movieLinkButton} onPress={handleOpenMovieLink}>
                                    <Text style={movieDetailsScreenStyles.movieLinkText}>🌎 Site</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={movieDetailsScreenStyles.sectionContainer}>
                            <Text>Synopsis:</Text>
                            <Text>{movieData?.overview}</Text>
                        </View>
                        <View style={movieDetailsScreenStyles.sectionContainer}>
                            <Text>Genres:</Text>
                            <Text>
                                {movieData && movieData.genres.map((genreEntry, idx) => 
                                    `${genreEntry.name}${idx === (movieData.genres.length - 1) ? '' : ', '}`
                                )}
                            </Text>
                        </View>
                    </>
                )
            case LOADING_STATUS.LOADING:
            default: 
                return(
                    <LoadingActivityIndicator />
                )
        }
    }, [movieDataStatusFetch, movieTitle, movieData, handleOpenMovieLink])

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={movieDetailsScreenStyles.scrollContainer}>
            {renderScreenContent()} 
        </ScrollView>
    )
}

export default MovieDetailScreen