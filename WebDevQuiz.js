window.onload = function () {
  
    var questionPosition = document.getElementsByClassName('Questions')[0],
        answerPosition   = document.getElementsByClassName('Answers')[0],
        checker      = document.getElementsByClassName('Checker')[0],
        current      = 0,
    
       // an object that holds all of the questions and potential answers.
       //  last number gives the position of the correct answer in the array
        allQuestions = {
          'Who Does Mike End Up Marrying?' : ['Donna', 'Rachel', 'Jessica', 1],
          
          'Which Of These People Make Name Partner First?' : ['Harvey', 'Louis' , 'Katrina', 0],
          
          'Who Is Benjamin? ' : ['A Secretary', 'The IT Technician', 'A Lawyer', 1],

          'What Is The Name Of Harveys Therapist?' : ['Scottie', 'Dr.Lipschitz', 'Paula', 2],

          'What Falls Out of Mikes Briefcase At The Start Of His Interview With Harvey?' : ['Weed', 'Money', 'A Gun', 0],
        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionPosition.innerHTML = '';
      questionPosition.innerHTML = question;    
    }
    
    // Function that generates all of the possible answers of the question at hand
    // It makes use of the needed answer-array with help from the current-variable
    
    function loadAnswers(curr) {
        
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerPosition.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerPosition.appendChild(createDiv);
      }
    }
    
       // This function will run when one of the potential answers is clicked by the user
      // It checks if the answer chosen by the user is the same as the correct answer
      // The function then checks if the question is the last one within the quiz
      // If so, the area where answers are displayed is cleared and the user is informed that the quiz is over

    function checkAnswer(i, arr) {
         
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionPosition.innerHTML = 'Quiz Complete! View Your Score Below:';
          answerPosition.innerHTML = '';
        }
                                
      };
    }
    
     // This function adds a div element to the page
    // This div element is used to see if each answer selected is correct or false
    function addChecker(bool) {
       
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Allows the user to start the quiz as soon as they load the webpage
    loadQuestion(current);
    loadAnswers(current);
    
  };