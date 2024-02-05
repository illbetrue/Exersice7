/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
  const person = {
    firstName: 'John',
    lastName: 'Doe',

    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };


  console.log(person.getFullName());


/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
  {
    const student = Object.create(person);
    student.grade = 'A';
    student.getGrade = function() {
      return this.grade;
    };

  
    console.log(student.getFullName());
    console.log(student.getGrade());
  }



/**
 * create new instance of student using Object.create
 */
  const student = Object.create(person);
  student.grade = 'A';
  
  student.getGrade = function() {
    return this.grade;
  };

  const student2 = Object.create(student);
  student2.grade = 'B';


  console.log(student2.getFullName());
  console.log(student2.getGrade());


module.exports = {
  person,
  student,
  student2,
};
