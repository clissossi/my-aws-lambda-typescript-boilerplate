#!/bin/bash
npm i @types/aws-lambda\
    @types/node\
    aws-sdk\
    firebase-admin\
    typescript\
    ts-loader\
    webpack\
    webpack-cli\
    webpack-node-externals
\
mkdir services types helpers
touch tsconfig.json webpack.config.js
mv lambda.js lambda_src.ts