/*
  In your new language, the only way to assign a binding a value is 'define'.
  This construct acts as a way both to define new bindings and give existing ones
  a new value.

  This ambiguity causes a problem.  If you try to give a nonlocal binding a new value,
  you'll end up creating a new local binding with the same name.

  Add a special form 'set', similar to 'define', which gives a binding a new value,
  updating the binding in an outer scope if it doesn't already exist in the inner
  scope.
  
  If the binding is not defined at all, throw a ReferenceError().
*/

specialForms.define = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of Define");
  }
  let value = evaluate(args[1], scope);
  scope[args[0].name] = value;
  return value;
};

specialForms.set = (args, scope) => {
  if(args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of Set");
  };

  let key = args[0].name;
  let value = evaluate(args[1], scope);

  for(let env = scope; env; env = Object.getPrototypeOf(env)) {
    if(Object.prototype.hasOwnProperty.call(env, key)) {
      env[key] = value;
      return value;
    };
  };

  throw new ReferenceError("Attempted to set an undefined variable: " + key);
};