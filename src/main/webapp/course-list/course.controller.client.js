// alert("Welcome to JavaScript!!!")
// console.log("Welcome to JavaScript!!!")
var addCourseBtn = jQuery("#wbdv-create-course")
function addCourse() {
  createCourse({
    title: 'NEW COURSE',
    seats: 100,
    semester: 'Fall'
  })
}
addCourseBtn.click(addCourse)
var courses = [
  {title: 'CS5610', seats: 20, semester: 'Spring'},
  {title: 'CS3200', seats: 23, semester: 'Spring'},
  {title: 'CS4550', seats: 34, semester: 'Fall'},
  {title: 'CS5200', seats: 45, semester: 'Summer'},
  {title: 'CS4500', seats: 56, semester: 'Summer'},
  {title: 'CS1800', seats: 67, semester: 'Fall'}
];
// console.log(courses)

var theHeading = jQuery("h1#the-course-list-heading")
// theHeading.remove()
theHeading
  .html("Course List Editor")
  .css("background-color", "blue")
  .css("color", "yellow")
  .append(" - add, remove courses!")
  .append("<button>Go!</button>")

var theTableBody = jQuery("tbody")

function createCourse(course) {
  courses.push(course)
  renderCourses(courses)
}

createCourse({title: 'CS1111', seats: 11, semester: 'Fall'})
createCourse({title: 'CS2222', seats: 22, semester: 'Fall'})
createCourse({title: 'CS3333', seats: 33, semester: 'Fall'})
createCourse({title: 'CS4444', seats: 44, semester: 'Fall'})

function renderCourses(courses) {
  theTableBody.empty()
  for (var i = 0; i < courses.length; i++) {
    var course = courses[i]
    theTableBody
      .prepend(`
    <tr>
        <td>${course.title}</td>
        <td>${course.seats}</td>
        <td>${course.semester}</td>
        <td>
            <button class="wbdv-delete" id="${i}">Delete</button>
            <button>Select</button>
        </td>
    </tr>
  `)
  }
  jQuery(".wbdv-delete")
    .click(function (event) {
      console.log(event.target)
    })
}
renderCourses(courses)
