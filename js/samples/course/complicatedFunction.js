/**
 * @description une fonction trop complexe
 * @param {*} data 
 * @returns 
 */
const findLargestInArray = data => {
    // On regarde si le tableau est composé uniquement de chiffres
    if (!data.some(isNaN)) {
        // Si oui, alors on récupère le nombre le plus grand
        let largestNumber = 0;
        
        for (let i = 0; i < data.length; i++) {
            if (largestNumber < data[i]) {
                largestNumber = data[i]       
            }
        }
        
        // On retourne le nombre le plus grand
        return largestNumber
    
    } else {
        // Sinon, ça veut dire qu'on a un tableau de mots
        // On cherche le plus grand
        let largestWord = ""
        for (let i = 0; i < data.length; i++) {
            if (largestWord.length < data[i].length) {
                largestWord = data[i]       
            }
        }
        
        // On retourne le mot le plus grand
        return largestWord
    }
}

