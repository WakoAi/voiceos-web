/**
 * VoiceOS
 * VoiceOS API
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ChatGPT } from '../models/ChatGPT';
import { OpenAIFunction } from '../models/OpenAIFunction';
import { HttpFile } from '../http/http';

export class OpenAI {
    /**
    * The lnaguage model provider.
    */
    'provider'?: OpenAIProviderEnum;
    /**
    * The OpenAI Chat GPT model to use
    */
    'model'?: ChatGPT;
    /**
    * The list of OpenAI function calls.
    */
    'functions'?: Array<OpenAIFunction>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OpenAIProviderEnum",
            "format": ""
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "ChatGPT",
            "format": ""
        },
        {
            "name": "functions",
            "baseName": "functions",
            "type": "Array<OpenAIFunction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OpenAI.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum OpenAIProviderEnum {
    Openai = 'openai'
}
