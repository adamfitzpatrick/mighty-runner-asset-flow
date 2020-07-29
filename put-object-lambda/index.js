const AWSXRay = require('aws-xray-sdk-core');
const AWS = AWSXRay.captureAWS(require('aws-sdk'));
AWS.config.region = 'us-west-2'
const s3 = new AWS.S3()

exports.handler = (event) => {
    return s3.putObject({
        Bucket: 'dev-mighty-runner-static-assets',
        Key: 'thing.txt',
        Body: Buffer.from('thing')
    }).promise()
        .then(() => ({ statusCode: 200 }))
        .catch(err => {
            throw err
        })
}