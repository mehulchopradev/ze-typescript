export default function Freeze(constructor: Function) {
    Object.freeze(constructor.prototype);
}