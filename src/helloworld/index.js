import { handlerEnricher } from '../lib/logging'

const handler = (event, context, callback, log) => {
    log.info('Hello World!')

    const response = {
        statusCode: 200,
        headers: {
            'x-custom-header': 'My Header Value',
        },
        body: JSON.stringify({ message: 'Welcome to WestWorld!' }),
    }

    callback(null, response)
}

exports.handler = handlerEnricher(handler)
