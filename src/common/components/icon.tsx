import React from 'react'
import { View, Image, type ImageSourcePropType } from 'react-native'

import { iconStyles } from './iconStyles'

interface Props {
    icon: ImageSourcePropType
    size: 'large' | 'normal'
    color: string
}

const Icon = ({ icon, size, color }: Props) => {
    return (
        <View style={size === 'normal' ? iconStyles.iconContainer : iconStyles.iconContainerLarge}>
             <Image
                style={[iconStyles.icon, { tintColor: color }]}
                source={icon}
                resizeMode="contain"
            />
        </View>
    )
}

export default React.memo(Icon)