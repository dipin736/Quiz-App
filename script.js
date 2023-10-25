const quiz = [
    {
      Question: "Which is the purpose of JavaScript?",
      a: "To style HTML Pages",
      b: "To add interactivity to HTML pages",
      c: "To perform server-side scripting operations",
      ans: "ans2"
    },
    {
      Question: "To insert JavaScript into an HTML page, which tag is used?",
        a: "<script='java'>",
        b: "<javascript>",
        c: "<script>",
        ans: "ans3"
    },
    {
      Question: "Which of the following is correct to write “Hello World” on the web page?",
        a: "print('Hello World')",
        b: "document.write('Hello World')",
        c: "response.write('Hello World')",
        ans: "ans2"
    },
    {
      Question: "Which of these are the variables in JavaScript?",
        a: "var",
        b: "int",
        c: "float", 
        ans: "ans1"
    }
  ];
  
  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const submit = document.querySelector('#submit');
  const scoreElement = document.getElementById('showscore');
  

  let currentQuestionIndex = 0;
  const loadingQuiz = () => {

    const questionlist = quiz[currentQuestionIndex];
        console.log('sds',questionlist.c)


        question.innerText=questionlist.Question
        option1.innerText=questionlist.a
        option2.innerText=questionlist.b
        option3.innerText=questionlist.c    

  }

  
  loadingQuiz();
  