/**
 * VoiceOS
 * VoiceOS API
 *
 * OpenAPI spec version: 0.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MethodEnum } from '../models/MethodEnum';
import { PhoneNumberEvents } from '../models/PhoneNumberEvents';
import { HttpFile } from '../http/http';

export class PhoneNumberWebhook {
    /**
    * The events that will trigger the webhook to send a request.
    */
    'events': Array<PhoneNumberEvents>;
    /**
    * The url of the webhook. Where the requests will be sent.
    */
    'url': string;
    /**
    * The method of the webhook.
    */
    'method': MethodEnum;
    /**
    * The headers of the webhook. Use the headers to authenticate requests to your backend.
    */
    'headers'?: { [key: string]: string; };
    /**
    * The filter for the webhook events. Use to filter events with conditional statements.
    */
    'filter'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<PhoneNumberEvents>",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "MethodEnum",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PhoneNumberWebhook.attributeTypeMap;
    }

    public constructor() {
    }
}



