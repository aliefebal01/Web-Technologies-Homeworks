


// Aufgabe 3.1.1
function notGoodGrades(grades) {
  grades = grades.filter(a => parseFloat(a.grade) >= 3 )
  //grades = grades.map(a => grades.filter(parseFloat(a.grade) > 3))
  return grades
    // TODO: implement me
}
//console.log(notGoodGrades(grades))
//console.log(+("3.3"))



// Aufgabe 3.1.2
function gradeOverview(students, grades) {
  students = students.map(stu => ({student:stu, grades:grades.filter(grade => grade.matrikelnummer === stu.matrikelnummer)}))
  return students
    // TODO: implement me
}
//a = gradeOverview(students, grades)
//console.log(gradeOverview(students, grades))
//console.log(a[1].grades)


// Aufgabe 3.1.3
function duplicateStudents(students) {
  students = students.map(matrik => ({matrikelnummer: matrik.matrikelnummer, students:students.filter(stu => matrik.matrikelnummer == stu.matrikelnummer )}))
  students = students.filter((val, ind, kend) => ind != kend.findIndex((ana) => (ana["matrikelnummer"] === val["matrikelnummer"]))).filter(a => a.students.length>1)
  return students
    // TODO: implement me
}
//console.log(duplicateStudents(students))

// Aufgabe 3.1.4
function invalidGrades(grades) {
  return grades
    .map((s) => {
      // TODO: implement me
      grades.filter(hata => s.matrikelnummer === hata.matrikelnummer && s.course === hata.course &&  (parseFloat(hata.grade) == 5 || parseFloat(s.grade == 5)) )

      return {
        matrikelnummer: s.matrikelnummer /* TODO: replace */,
        grades: grades.filter(anan => anan.matrikelnummer === s.matrikelnummer) /* TODO: replace */,
      };
    })
    .filter((e) => e.grades.length > 0)
}
