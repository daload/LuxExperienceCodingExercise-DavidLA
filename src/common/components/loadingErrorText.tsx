import { Text } from 'react-native'

import { loadingErrorTextStyles } from './loadingErrorTextStyles'

interface Props {
    text: string
}
const LoadingErrorText = ({ text }: Props) => {
    return (
        <Text style={loadingErrorTextStyles.errorText}>
            {text}
        </Text>
    )
}

export default LoadingErrorText