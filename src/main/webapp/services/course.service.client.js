function CourseServiceClient() {
  this.createCourse = createCourse;
  this.findAllCourses = findAllCourses;
  this.findCourseById = findCourseById;
  this.deleteCourse = deleteCourse;
  this.updateCourse = updateCourse;
  this.url = 'https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses';
  var self = this;
  function createCourse(course) {
    return fetch(self.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(function (response) {
      return response.json()
    })
  }
  function findAllCourses() {
    return fetch(self.url)
      .then(function (response) {
        return response.json()
    })
  }
  function findCourseById(courseId) {

  }
  function updateCourse(courseId, course) {
    return fetch(`${self.url}/${courseId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(course)
    }).then(response => response.json())
  }
  function deleteCourse(courseId) {
    return fetch(`${self.url}/${courseId}`,
      {method: 'DELETE'})
  }
}
