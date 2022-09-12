![npm](https://img.shields.io/npm/v/@webezy-io/commons?style=plastic)
![ci](https://app.travis-ci.com/Webezy-io/webezy-js-commons.svg?branch=main)

# webezy-io/commons

This is commons modules to be used with [Webezy.io](https://www.webezy.io) project written in TS / JS

# Install

Install the package via npm:
```sh
npm i --save @webezy-io/commons
```

# Usage

@webezy-io/commons is used for common method on Webezy.io projects including with client or server side TS / JS code.

## Validators

This is sample use case if a validator is attached to one of your incoming messages.
It will validate input against the calidator logic, and will fail the request before sending it to server.

```ts
import { utils } from  '@webezy-io/commons';

class project() {
    public SampleRPC(params: SampleMsg, metadata: Metadata = this.metadata): Promise<SampleMsg> {
        utils.validators._min_validator(params.SampleInt, 10.0)
        return promisify<SampleMsg, Metadata, SampleMsg>(this.SampleService_client.sampleRPC.bind(this.SampleService_client))(params, metadata);
    }    
}
```

See [Docs](https://www.webezy.io/docs/validators) on how to attach validators in Webezy.io project.

Use to generate message with extandable fields.
```sh
wz generate --message --field-extension
```


### Available validators

1. webezy.commons.v1.Validators.Email - Email string validator
2. webezy.commons.v1.Validators.RegEx - A custom regular expression validation
3. webezy.commons.v1.Validators.MaxLength - Maximum length of a String or Array
4. webezy.commons.v1.Validators.Max - Minimum value
5. webezy.commons.v1.Validators.Max - Maximum value

# Test

Run test scripts with jest
```sh
npm test
```