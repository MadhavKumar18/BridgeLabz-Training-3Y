class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (!Array.isArray(this.marks) || this.marks.length === 0) {
            throw new Error("Marks must be a non-empty array.");
        }

        return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Aman", [85, 90, 88, 92]),
    new Student("Riya", [65, 70, 62, 68]),
    new Student("Karan", [30, 35, 28, 40])
];

students.forEach(student => {
    console.log(
        `${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`
    );
});
