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

import { ConversationResponse } from '../models/ConversationResponse';
import { HttpFile } from '../http/http';

export class ConversationsPagination {
    /**
    * The list of conversations returned.
    */
    'items': Array<ConversationResponse>;
    /**
    * The current index of the page selected.
    */
    'index': number;
    /**
    * The total number of conversations.
    */
    'hasMore': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ConversationResponse>",
            "format": ""
        },
        {
            "name": "index",
            "baseName": "index",
            "type": "number",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConversationsPagination.attributeTypeMap;
    }

    public constructor() {
    }
}

