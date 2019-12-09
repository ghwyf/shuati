/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (typeof numCourses !== 'number' || !Array.isArray(prerequisites)) {
    return false
  }

  if (numCourses === 0 && prerequisites.length === 0) {
    return true
  }

  var postCourse = []
  var preCourse = []
  var totalCourse = { total: 0 }
  var outLoop = true
  prerequisites.forEach((item, idx) => {
    if (!Array.isArray(item)) {
      return
    }
    if (item[0] === item[1]) {
      outLoop = false
    }
    if (totalCourse[item[0]] === undefined) {
      totalCourse[item[0]] = true
      totalCourse.total++
    }
    if (totalCourse[item[1]] === undefined) {
      totalCourse[item[1]] = true
      totalCourse.total++
    }

    postCourse[postCourse.length] = item[0]
    preCourse[preCourse.length] = item[1]
  })

  if (outLoop === false || numCourses !== totalCourse.total) {
    return false
  }

  var tmpCourses
  var examfunc = (courses1, courses2, arrNum, idx) => {
    tmpCourses = arrNum === 1 ? courses1 : courses2
    if (tmpCourses[idx] === false) {
      return idx === 0
    }
    tmpCourses[idx] = false
    if (tmpCourses[idx] === undefined) {
      return true
    }

    return examfunc(courses1, courses2, arrNum === 1 ? 2 : 1, idx)
  }

  for (let i = 0; i < postCourse.length; i++) {
    var tmpPost = [...postCourse]
    var tmpPre = [...preCourse]
    if (false === examfunc(tmpPost, tmpPre, 1, i)) {
      return false
    }
  }

  return true
};


console.time('time')
// console.log(canFinish(0, [])) // true
// console.log(canFinish(1, 1))  // false
// console.log(canFinish(1, [0, 0])) // false
// console.log(canFinish(1, [1])) // false
// console.log(canFinish(2, [[1, 0]])) // true
// console.log(canFinish(4, [0, [1, 2], [2, 3]])) // false
console.log(canFinish(3, [[1, 2], [2, 3]])) // true
console.log(canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]])) // true
console.timeEnd('time')

