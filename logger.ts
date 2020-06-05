export default function Logger(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log(target);
    // console.log(propertyKey);
    // console.log(descriptor);

    const mainFunction = descriptor.value;

    descriptor.value = (...args: any[]) => {
        // logging
        const d: Date = new Date();
        console.log(d);
        console.log(`Method name: ${propertyKey}`);
        console.log(args);

        mainFunction.apply(target, args);
    };

    return descriptor;
}