import React, { useCallback } from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { useDispatch } from 'react-redux'

import DashboardCarousel from '../components/dashboardCarousel'
import { fetchMovieList } from '../actions/actions'

import { dashboardStyles } from './dashboardScreenStyles'
const DashboardScreen = () => {
	const dispatch = useDispatch()

	const handleRefresh = () => {
        dispatch(fetchMovieList('nowPlaying'))
        dispatch(fetchMovieList('popular'))
        dispatch(fetchMovieList('topRated'))
        dispatch(fetchMovieList('upcoming'))
    }

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={dashboardStyles.container}
			refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={handleRefresh}
                    tintColor="#000000"
                />
            }
		>
			<DashboardCarousel title='Now Playing' listName='nowPlaying' />
			<DashboardCarousel title='Popular' listName='popular' />
			<DashboardCarousel title='Top Rated' listName='topRated' />
			<DashboardCarousel title='Upcoming' listName='upcoming' />
		</ScrollView>
	)
}

export default DashboardScreen