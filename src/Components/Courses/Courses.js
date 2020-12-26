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
    "CS 135":
      "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Syntax and semantics of a functional programming language. Tracing via substitution. Design, testing, and documentation. Linear and nonlinear data structures. Recursive data definitions. Abstraction and encapsulation. Generative and structural recursion.",
    "CS 136":
      "This course builds on the techniques and patterns learned in CS 135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.",
    "CS 246":
      "Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.",
    "CS 245":
      "Propositional and predicate logic. Soundness and completeness and theirimplications. Unprovability of formulae in certain systems. Undecidability of problems in computation, including the halting problem. Reasoning about programs. Correctness proofs for both recursive and iterative program constructions.",
    "MATH 136":
      "Systems of linear equations, matrix algebra, elementary matrices, computational issues. Real n-space, vector spaces and subspaces, basis and dimension, rank of a matrix, linear transformations, and matrix representations. Determinants, eigenvalues and diagonalization, applications.",
    "MATH 235":
      "Orthogonal and unitary matrices and transformations. Orthogonal projections, Gram-Schmidt procedure, best approximations, least-squares. Inner products, angles and orthogonality, orthogonal diagonalization, singular value decomposition, applications.",
  };

  return (
    <div id="courses" className={classes.Courses}>
      <h1>Courses I've Taken</h1>
      {isSmallScreen ? (
        <HTabs courses={courses} />
      ) : (
        <Vtabs courses={courses} />
      )}
      ;
    </div>
  );
};

export default Courses;
