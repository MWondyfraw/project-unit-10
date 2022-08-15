import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Courses({ context }) {
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    context.actions
      .allCourses()
      .then((courses) => {
        if (courses === null) {
          setErrors(() => ["No Course Found!!"]);
        } else {
          console.log(`courses retrieved successfully!`);
        }
      })
      .catch((err) => {
        console.log(err);
        history.push("/error");
      });
  }, []);

  return (
    <main>
      <div className="wrap main--grid">
        {context.courses.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            className="course--module course--link"
            key={course.id}
          >
            <h2 className="course--label">Course</h2>
            <h3 className="course-title">{course.title}</h3>
          </Link>
        ))}

        <Link
          className="courses--module course--add--moudle"
          to={"/courses/create"}
        >
          <span className="course--add--title">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 13 13"
              className="add"
            >
              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6"></polygon>
            </svg>
            {""}
            New Course
          </span>
        </Link>
      </div>
    </main>
  );
}
