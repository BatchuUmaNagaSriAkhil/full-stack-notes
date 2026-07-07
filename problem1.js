let students = [
  {
    id: 1,
    name: "Akhil",
    age: 21,
    course: "JavaScript",
    marks: [90, 80, 85, 95, 88],
    address: {
      city: "Guntur",
      state: "AP"
    }
  },
  {
    id: 2,
    name: "Rahul",
    age: 22,
    course: "Python",
    marks: [70, 75, 80, 72, 78],
    address: {
      city: "Hyderabad",
      state: "Telangana"
    }
  }
];


marks = []

const Average = (marks) => {

    let sum = 0;

    for (let mark of marks) {
        sum = sum + mark;
    }

    return sum / marks.length;
};
let addStudent =({
    id:3,
    name:"Kiran",
    age:20,
    course:"React",
    marks:[95, 90, 92, 91, 96],
    address:{
        city:"Vijayawada",
        state:"AP"
    }

})
students.push({ ...addStudent });

const Topper = () => {

    let topper = students[0];

   for (let student of students) {

    if (Average(student.marks) > Average(topper.marks)) {
        topper = student;
    }

}
    console.log(`Topper : ${topper.name}`);
};

for (let student of students){
    console.log(
  student.id,
  student.name,
  student.course,
  student.address.city,
  Average(student.marks)
)
};
Topper();

