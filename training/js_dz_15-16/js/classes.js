var human = {
	name: 'human',
	age: 0,
	gender: 'man',
	height: 0,
	weight: 0,
	fillUp: function (name, age, gender, height, weight) {
		if (arguments[0]!==null) this.name = name;
		if (arguments[1]!==null) this.age = age;
		if (arguments[2]!==null) this.gender = gender;
		if (arguments[3]!==null) this.height = height;
		if (arguments[4]!==null) this.weight = weight;
	}
};
var worker = {
	job: 'JOB',
	salary: 500,
	toWork:function (job, salary) {
	this.job = job;
	this.salary = salary;
	}
};
var student = {
	study: 'UNIVERSITY',
	grant: 100,
	toWatchTV:function (studyPlace, grant) {
	this.study = studyPlace;
	this.grant = grant;
	}
};


worker.__proto__ = human;
student.__proto__ = human;

//class worker
console.log('class "worker": ', 'name=', worker.name, ' job=', worker.job, ' age=', worker.age);

var worker1  = new worker.toWork('backend-developer', 1230);
worker1.__proto__ = worker;
worker1.fillUp('Jack', 32);
console.log('"worker1": ', 'name=', worker1.name, ' job=', worker1.job, ' age=', worker1.age);

var worker2  = new worker.toWork('fullstack-developer', 2200);
worker2.__proto__ = worker;
worker2.fillUp('Diana', 33, 'woman');
console.log('"worker2": ', 'name=', worker2.name, ' job=', worker2.job, ' age=', worker2.age,
	' gender=', worker2.gender);
//end class worker

console.log('');

//class student
console.log('class "student": name=', student.name, ' study=', student.study, ' grant=', student.grant);

var student1  = new student.toWatchTV('Academy', 230);
student1.__proto__ = student;
student1.fillUp('Cris');
console.log('"student1": name=', student1.name, ' study=', student1.study, ' grant=', student1.grant);

var student2  = new student.toWatchTV('KPI', 220);
student2.__proto__ = student;
student2.name = "Daniels";
console.log('"student2": name=', student2.name, ' study=', student2.study, ' grant=', student2.grant, ' gender=', student2.gender);

//end class student

//show parent classes
console.log('');
console.log('check if parent class has changed:')
console.log('"worker"', 'name=', worker.name, ' job=', worker.job, ' age=', worker.age);
console.log('"human"', 'name=', human.name, ' age=',human.age);
//end show parent classes