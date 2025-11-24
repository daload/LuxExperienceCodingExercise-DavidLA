import React, { useEffect, useCallback } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { ListNameType } from '../types/moviesTypes'
import DashboardMovieCard from './dashboardMovieCard'
import { selectMovieList, selectMovieListFetchStatus } from '../selectors/moviesSelector'
import { LOADING_STATUS } from '../../../common/constants'
import LoadingErrorText from '../../../common/components/loadingErrorText'
import LoadingActivityIndicator from '../../../common/components/loadingActivityIndicator'
import { fetchMovieList } from '../actions/actions'

import { dashboardCarouselStyles } from './dashboardCarouselStyles'


interface Props {
    title: string
    listName: ListNameType
}

const DashboardCarousel = ({ title, listName }: Props) => {
    const movieList = useSelector((state) => selectMovieList(state, listName))
    const loadingState = useSelector((state) => selectMovieListFetchStatus(state, listName))
    const dispatch = useDispatch()
        
    useEffect(() => {
        dispatch(fetchMovieList(listName))
    }, [])

    const renderCarouselContent = useCallback(() => {
        switch(loadingState) {
            case LOADING_STATUS.ERROR:
                return (
                    <LoadingErrorText text={`Error fetching ${title} movies. Try again later`} />
                )
            case LOADING_STATUS.SUCCESS:
                return (
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={dashboardCarouselStyles.carouselContainer} >
                        {movieList.map((movie, idx) => {
                            return (
                                <DashboardMovieCard key={idx} movie={movie} />
                            )
                        })}
                    </ScrollView>
                )
            case LOADING_STATUS.LOADING:
            default: 
                return(
                    <LoadingActivityIndicator />
                )
        }
    }, [loadingState, title, movieList])

    return (
        <View style={dashboardCarouselStyles.container}>
            <View>
                <Text style={dashboardCarouselStyles.title}>
                    {title}
                </Text>
            </View>
            {renderCarouselContent()}
        </View>
    )
}

export default React.memo(DashboardCarousel)