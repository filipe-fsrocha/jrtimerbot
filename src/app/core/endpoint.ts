function endpointFactory() {
    const create = (method, endpoint) => `http://127.0.0.1:8080/api/bot/${method}/${endpoint}`

    return {
        query: create.bind(null, 'queries'),
        action: create.bind(null, 'actions'),
        signal: create.bind(null, 'signal')
    }
}

export const BOT_ENDPOINT = endpointFactory()