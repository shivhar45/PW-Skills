const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];

  function checkResult(studentList){
    for(let i=0;i<studentList.length;i++){
        const students = studentList[i];
        if(students.marks > 90){
            console.log(`Congratulations ${students.name}! you have cleared the exam!`)
        }
    }
  }
  checkResult("Mithun");