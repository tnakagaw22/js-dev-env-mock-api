export const schema = {
    "type": "object",
    "properties": {
        "properties": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "webId": {
                        "type": "string"
                    },
                    "numBedrooms": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 5
                    },
                    "numBaths": {
                        "type": "number",
                        "minimum": 0,
                        "maximum": 3
                    },
                    "price": {
                        "type": "number",
                        "minimum": 2000,
                        "maximum": 999999
                    }
                },
                "required": ["id", "webId", "numBedrooms", "numBaths", "price"]
            }
        }
    },
    "required": ["properties"]
};
