import { handlerEnricher } from '../lib/logging'

const handler = (event, context, callback, log) => {
    log.info('Echo!')

    const response = {
        statusCode: 200,
        headers: {
            'x-custom-header': 'My Header Value',
        },
        body: JSON.stringify(event),
    }
    callback(null, response)
}

exports.handler = handlerEnricher(handler)
