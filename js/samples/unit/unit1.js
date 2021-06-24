/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if (name === "Alexandra") {
        return "Bonjour Alexandra"
    }

    return `Hello, ${name}`
}
