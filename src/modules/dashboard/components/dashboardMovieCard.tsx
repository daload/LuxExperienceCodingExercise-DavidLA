import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { dashboardMovieCardStyles } from './dashboardMovieCardStyles'
import { type Movie } from '../types/moviesTypes'
import { BASE_IMG_URL, SCREEN_NAMES } from '../../../common/constants'
import { AppNavigationProp } from '../../../common/types/navigationTypes'
import { useCallback } from 'react'


interface Props {
    movie: Movie
}

const DashboardMovieCard = ({ movie }: Props) => {
    const navigation = useNavigation<AppNavigationProp>()
    const imgUrl = `${BASE_IMG_URL}${movie.poster_path}`

    const handleOnPress = useCallback(() => {
        navigation.navigate(SCREEN_NAMES.MOVIE_DETAILS_SCREEN, { movieTitle: movie.title, movie })
    }, [movie])

    return (
        <TouchableOpacity style={dashboardMovieCardStyles.container} onPress={handleOnPress}>
            <View style={dashboardMovieCardStyles.posterContainer}>
                <Image
                    style={dashboardMovieCardStyles.poster}
                    source={{ uri: imgUrl }}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={dashboardMovieCardStyles.title}>
                    {movie.title}
                </Text>
            </ScrollView>
        </TouchableOpacity>
    )
}

export default React.memo(DashboardMovieCard)