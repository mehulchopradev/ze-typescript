export default function Currency(countryCode: string) {

    return function (target: Object, key: string) {
        // console.log(target);
        // console.log(key);

        let value;

        const getter = () => {
            let symbol;
            if (countryCode == 'US') {
                symbol = '$';
            } else {
                symbol = 'Rs';
            }
            return `${symbol} ${value}`;
        }

        const setter = (val) => {
            value = val;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    }
}