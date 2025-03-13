import { Buffer } from "buffer";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

import { getAuthCredentials } from "../../auth/cognito";

export const processPayment = (info) => {
    return new Promise(async (resolve, reject) => {
        try {

            const awsCred = await getAuthCredentials();
            if(!awsCred) {
                throw awsCred;
            }else {
                
                const client = new LambdaClient({
                    region: process.env.GATSBY_AWS_REGION,  
                    credentials: {
                        accessKeyId: awsCred.AccessKeyId,
                        secretAccessKey: awsCred.SecretKey,
                        sessionToken: awsCred.SessionToken
                    }
                });

                let res = await client.send(new InvokeCommand({
                    FunctionName: process.env.GATSBY_LAMBDA_NAME,
                    LogType: "None",
                    InvocationType: "RequestResponse",
                    Payload: Buffer.from(JSON.stringify(info))
                }));

                resolve();
            }

        }catch(er) {
            reject(er);
        }
    });
};