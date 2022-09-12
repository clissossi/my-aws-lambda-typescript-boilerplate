import { APIGatewayEvent } from 'aws-lambda';
import { helloWorld } from './helpers';


export async function main(event : APIGatewayEvent, { success, fail }){
    helloWorld()
    success({ statusCode : 200 });
}