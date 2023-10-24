function introduction(Aki) {
    // Use backticks for template literals to create the greeting phrase
    const greeting = `Hi, my name is ${Aki}.`;
  
    // Return the greeting phrase
    return greeting;
  }


  // Define the introductionWithLanguage function
function introductionWithLanguage(name, language) {
    // Use string interpolation to create the greeting phrase with name and language
    const greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return greeting;
  }
  
  // Your test case using a testing framework (Jasmine-like syntax)
  

  // Define the introductionWithLanguageOptional function
function introductionWithLanguageOptional(name, language = "JavaScript") {
    // Use string interpolation to create the greeting phrase with name and language
    const greeting = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return greeting;
  }
  
  // Your test case using a testing framework (Jasmine-like syntax)
  