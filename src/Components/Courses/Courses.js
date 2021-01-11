import React from "react";
import HTabs from "../UI/htabs/htabs";
import Vtabs from "../UI/Vtabs/vtabs";
import { useMediaQuery } from "react-responsive";
import classes from "./Courses.module.css";

const Courses = () => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const courses = {
    "CS 135": {
      title: "Designing Functional Programs",
      desc: "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Syntax and semantics of a functional programming language. Tracing via substitution. Design, testing, and documentation. Linear and nonlinear data structures. Recursive data definitions. Abstraction and encapsulation. Generative and structural recursion.",
      link: "https://uwflow.com/course/cs135"
    },
    "CS 136": {
      title: "Elementary Algorithm Design and Data Abstraction",
      desc: "This course builds on the techniques and patterns learned in CS 135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.",
      link: "https://uwflow.com/course/cs136"
    },
    "CS 246": {
      title: "Object Oriented Software Develepment",
      desc: "Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.",
      link: "https://uwflow.com/course/cs246"
    },
    "CS 245": {
      desc: "Propositional and predicate logic. Soundness and completeness and theirimplications. Unprovability of formulae in certain systems. Undecidability of problems in computation, including the halting problem. Reasoning about programs. Correctness proofs for both recursive and iterative program constructions.",
      title: "Logic and Computation",
      link: "https://uwflow.com/course/cs245"
    },
    "MATH 136": {
      desc: "Systems of linear equations, matrix algebra, elementary matrices, computational issues. Real n-space, vector spaces and subspaces, basis and dimension, rank of a matrix, linear transformations, and matrix representations. Determinants, eigenvalues and diagonalization, applications.",
      title: "Linear Algebra 1 for Honours Mathematics",
      link: "https://uwflow.com/course/math136"
    },
    "MATH 235": {
      desc: "Orthogonal and unitary matrices and transformations. Orthogonal projections, Gram-Schmidt procedure, best approximations, least-squares. Inner products, angles and orthogonality, orthogonal diagonalization, singular value decomposition, applications.",
      title: "Linear Algebra 2 for Honours Mathematics",
      link: "https://uwflow.com/course/math235"
    }
  }

  const online = {
    "React": {
      title: "React - The Complete Guide (incl Hooks, React Router Redux)",
      desc: "A course about the popular framework ReactJS covering advanced React concepts, Hooks, React Router, Axios, forms and much more",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux"
    },
    "MERN": {
      title: "React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
      desc: "A course covering the conecepts of building fullstack web applications using the MERN stack",
      link: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/"
    },
    "PostgreSQL": {
      title: "SQL & PostgreSQL for Beginners: Become an SQL Expert",
      desc: "A course covering the relational databases concepts with the popular PostgreSQL management system",
      link: "https://www.udemy.com/course/sql-and-postgresql-for-beginners/"
    },
    "C++": {
      title: "Beginning C++ Programming - From Beginner to Beyond",
      desc: "A course covering C++ and Object Oriented concepts including pointers, classes, STL, inheritance, polymorphism and much more",
      link: "https://www.udemy.com/course/beginning-c-plus-plus-programming/"
    },

  }


  return (
    <div id="courses" className={classes.Courses}>
      <h1>Courses I've Taken</h1>
      <h3 className={classes.Section}> University Courses</h3>
      {isSmallScreen ? (
        <HTabs courses={courses} />
      ) : (
          <Vtabs className={classes.Vtabs} courses={courses} />
        )}
      <h3 className={classes.Section}> Online Courses</h3>
      {isSmallScreen ? (
        <HTabs courses={online} />
      ) : (
          <Vtabs className={classes.Vtabs} courses={online} />
        )}

    </div>
  );
};

export default Courses;
