function Human() {
  this.wakeUp();
}

Human.prototype.wakeUp = () => {
  console.log('Morning!');
};

function Employee() {
  Human.call(this);
}

Employee.prototype = Object.create(Human.prototype);
Employee.prototype.constructor = Employee;

function Developer(hungry = false) {
  Employee.call(this);
  this.hungry = hungry;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = () => {
  if (this.hungry) {
    console.log('Slow coding...');
  } else {
    console.log('Lazy coding...');
  }
};

function JavaDeveloper(hungry) {
  Developer.call(this, hungry);
}

JavaDeveloper.prototype = Object.create(Developer.prototype);
JavaDeveloper.prototype.constructor = JavaDeveloper;

function PythonDeveloper(hungry) {
  Developer.call(this, hungry);
}

PythonDeveloper.prototype = Object.create(Developer.prototype);
PythonDeveloper.prototype.constructor = PythonDeveloper;

function JavaScriptDeveloper(hungry) {
  Developer.call(this, hungry);
  this.language = 'JavaScript';
}

JavaScriptDeveloper.prototype = Object.create(Developer.prototype);
Object.defineProperty(JavaScriptDeveloper.prototype, 'constructor', {
  value: JavaScriptDeveloper,
  enumerable: false,
  configurable: false,
  writable: true,
});
