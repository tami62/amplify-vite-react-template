// src/aws-exports.ts (or wherever you store your AWS config)
const awsConfig = {
    Auth: {
        identityPoolId: 'ap-south-1:062dd89e-f4a0-4075-b612-be29465a7411', // Your identity pool ID
        region: 'ap-south-1', // Your AWS region
        userPoolId: 'ap-south-1_d7crujs1f', // Your user pool ID
        userPoolWebClientId: '53q16qi4bmlukh2br3gj57i505', // Your app client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'YOUR_BUCKETamplify-d1nr16ehbv2bm5-ma-amplifyteamdrivebucket28-cyqedhj6vj48', // Your S3 bucket name
            region: 'ap-south-1', // Your bucket region
        }
    }
};

export default awsConfig;
