import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { selectWatchlist } from '../selectors/watchlistSelector'
import WatchlistListItem from '../components/watchlistListItem'



const WatchlistScreen = () => {	
    const watchlist = useSelector(selectWatchlist)
	return (
		<FlatList 
            data={watchlist}
            renderItem={({ item }) => <WatchlistListItem movie={item} />}
        />
	)
}

export default WatchlistScreen