**NOTICE:** This is a draft of the JSONT Specification and is subject to change.

## Summary

JSONT (JSON with Trailing commas) is an extension of [JSONC (JSON with Comments)](https://jsonc.org) that explicitly allows trailing commas within [JSON (JavaScript Object Notation)](https://www.json.org/json-en.html) data. This specification defines the syntax and semantics of JSONT.

## Syntax

JSONT follows all the syntax rules of JSON and JSONC, with the addition of trailing commas in arrays and objects.

### Trailing commas in Arrays

<!-- deno-fmt-ignore -->
```jsonc
{
  // Trailing comma after the last item in an array is allowed
  "array": [
    "item1",
    "item2",
    "item3",
  ]
}
```

### Trailing commas in Objects

<!-- deno-fmt-ignore -->
```jsonc
{
  "object": {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    /* Trailing comma after the last key-value pair in an object is allowed */
  }
}
```

## File extensions

The recommended file extension for JSONT files is `.jsont`.

The extension `.json` should be avoided, as it supports neither comments nor trailing commas. Similarly, `.jsonc` is not recommended because it does not support trailing commas (although many `jsonc` parsers can be configured to support trailing commas).

## Tools and Libraries

While JSONT is not widely recognized as a standard format, many JSON and JSONC parsers can be configured to support trailing commas.

Here's a non-exhaustive list:

- [microsoft/node-jsonc-parser](https://github.com/microsoft/node-jsonc-parser) with `allowTrailingComma: true`
- [dprint/dprint-plugin-json](https://github.com/dprint/dprint-plugin-json) with `"jsonTrailingCommaFiles": ["**/*.jsont"]`

## Main Use Cases

- Easier line reordering: moving lines up or down in lists or objects doesn't require adding or removing commas.
- Better diffs: adding or removing items at the end of lists or objects results in cleaner diffs.
