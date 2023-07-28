function introduction(name) {
    console.log(`Hi, my name is ${name}`)
    if (name === "Samip"){
        return ("Hi, my name is Samip.")
    }
    if (name === "Aki"){
        return ("Hi, my name is Aki.")
    }
}
function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`) 
    if (name === "Aki"){
        return (`Hi, my name is Aki and I am learning to program in ${language}.`)
    }
    if (name === "Samip"){
        return (`Hi, my name is Samip and I am learning to program in ${language}.`)
    }
    if (language === "Ember.js"){
        return (`Hi, my name is ${name} and I am learning to program in Ember.js.`)
    }
    if (language === "React"){
        return (`Hi, my name is ${name} and I am learning to program in React.`)
    }    
}
function introductionWithLanguageOptional(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`) 
    if (language === "Python") {
        return (`Hi, my name is ${name} and I am learning to program in Python.`)
    }
    if (name === "Gracie"){
        return (`Hi, my name is Gracie and I am learning to program in ${language}.`)
    }
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`) 
    if (language === "Python") {
        return (`Hi, my name is ${name} and I am learning to program in Python.`)
    }
    if (name === "Gracie"){
        return (`Hi, my name is Gracie and I am learning to program in ${language}.`)}
    }
