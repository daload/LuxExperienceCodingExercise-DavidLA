import { BASE_URL, API_KEY_SUFFIX} from '../constants'

export const getUrlFromEndpoint = (endpoint: string): string => {
    return `${BASE_URL}${endpoint}${API_KEY_SUFFIX}`
}