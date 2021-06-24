/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    return `Hello, ${name}`
}
