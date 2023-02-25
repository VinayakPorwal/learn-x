---
sidebar_position: 3
---

# Components

The components of OOP are:  
  [ *Each of them Ellaborated in Above pages ;)* ]

- **Classes**: A class is a blueprint for creating objects, which defines the attributes and behaviors that the objects will have.

- **Objects**: An object is an instance of a class, created at runtime. It contains data and behavior defined by its class.

- **Attributes**: Attributes are data fields within an object that store information about the object.

- **Methods**: Methods are functions associated with a class or object that define the behavior of the object.

- **Inheritance**: Inheritance is the mechanism by which a new class is derived from an existing class, inheriting its attributes and behavior.

- **Polymorphism**: Polymorphism is the ability of objects of different classes to be treated as objects of a common class, allowing for generic code to be written.

## Class

A class is a blueprint or a template for creating objects. It defines the properties and behaviors of objects of that type. For example, you might have a "Person" class that includes properties such as name, age, and address, and behaviors such as speaking and walking. To create an object of the "Person" class, you would instantiate the class, and assign values to its properties.

lets understand with example code:

```js title="In Javascript"
// Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person {
  constructor() {
    // Some attributes/properties
  }

  //--- Some methods ---
  
}

```

```py title="In Python"
# Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person:
  def __init__(self):
    # Someattributes/properties
    
  #--- Some methods ---

```

::

## Attributes

Attributes are the properties or characteristics of an object. They describe the state of the object and are stored as data members within the object. For example, the "Person" class might have the attributes "name", "age", and "address".

lets understand with example code:

```js title="In Javascript"
// Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person {
  constructor(name, age, address) {
    // These are attributes/properties
    this.name = name; 
    this.age = age;
    this.address = address;
  }
}

```

```py title="In Python"
# Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person:
  def __init__(self, name, age, address):
    # These are attributes/properties
    self.name = name
    self.age = age
    self.address = address

```

## Methods

Methods are the behaviors of an object. They define the actions that an object can perform, and are stored as member functions within the object. For example, the "Person" class might have methods such as "speak" and "walk".

lets understand with example code:

```js title="In Javascript"
// Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person {
  constructor(name, age, address) {
    // These are attributes/properties
    this.name = name; 
    this.age = age;
    this.address = address;
  }

  // this is method/function
  speak() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // this is aslo method/function
  walk() {
    console.log(`${this.name} is walking.`);
  }
}

```

```py title="In Python"
# Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person:
  def __init__(self, name, age, address):
    # These are attributes/properties
    self.name = name
    self.age = age
    self.address = address

  # this is method/function
  def speak(self):
    print(f"Hello, my name is {self.name}")
  # this is aslo method/function
  def walk(self):
    print(f"{self.name} is walking.")

```

## Objects

An object is an instance of a class. It is a real-world representation of the class, and contains its own set of properties and behaviors. For example, you might have an object "John" that is an instance of the "Person" class, and has the properties "name = John", "age = 30", and "address = 123 Main Street".

- > If Class is mold then Object is clay in it.
- > Single class can have multiple objects.

lets understand with example code:

```js title="In Javascript"
// Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person {
  constructor(name, age, address) {
    // These are attributes/properties
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // this is method/function
  speak() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // this is aslo method/function
  walk() {
    console.log(`${this.name} is walking.`);
  }
}

// In ordder to use the attributes/properties of 'Person' class we need to create an Instance called Object
const john = new Person("John", 30, "123 Main Street");
john.speak(); // Output: Hello, my name is John
john.walk(); // Output: John is walking.
console.log(john.name); // Output: John
console.log(john.age); // Output: 30
console.log(john.address); // Output: 123 Main Street
```

```py title="In Python"
# Here is Our main class containing the Attributes/properties and functions/methods of Person
class Person:
  def __init__(self, name, age, address):
    # These are attributes/properties
    self.name = name
    self.age = age
    self.address = address

  # this is method/function
  def speak(self):
    print(f"Hello, my name is {self.name}")
  # this is aslo method/function
  def walk(self):
    print(f"{self.name} is walking.")

# In ordder to use the attributes/properties of 'Person' class we need to create an Instance of class called Object
john = Person("John", 30, "123 Main Street")
john.speak() # Output: Hello, my name is John
john.walk() # Output: John is walking.
print(john.name) # Output: John
print(john.age) # Output: 30
print(john.address) # Output: 123 Main Street
```

## Inheritence on next page -
