// String index
// Never used in real QA work, but it’s a good example of how interfaces can define dynamic keys.
interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {
    hello: "world",
    foo: "bar"
};