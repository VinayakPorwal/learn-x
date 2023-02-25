---
sidebar_position: 4
---

# Polymorphism

Polymorphism is one of the fundamental concepts of object-oriented programming (OOP). It is the ability of an object to take on multiple forms. In OOP, polymorphism refers to a single function or method that can be used to handle multiple data types or objects.

Polymorphism can be achieved in two ways:

- Compile-time polymorphism and
- Runtime polymorphism.

:::tip Compile-time polymorphism
> Compile-time polymorphism is also known as method overloading in Python. In this type of polymorphism, multiple methods with the same name are defined in a class, but with different parameters. When a method is called, the compiler determines which method to call based on the number and type of arguments.
:::
:::tip Run-time polymorphism
> Runtime polymorphism: Runtime polymorphism is also known as method overriding in Python. In this type of polymorphism, a subclass provides a new implementation of a method that is already defined in its parent class. When an object is created from the subclass, it can call the new implementation of the method, which is determined at runtime.
:::
However, they both are Related with Method overloading and Method Overriding.

So Eventually,
Polymorphism can be achieved through method overloading or method overriding.

## Method overloading

This is a feature that allows a class to have multiple methods with the same name, but with different parameters.

```py title="In Python"
class Shape:
    def area(self, length, width=None):
        if width is None:
            return length * length
        else:
            return length * width

rectangle = Shape()
print("Area of rectangle: ", rectangle.area(10, 20))

square = Shape()
print("Area of square: ", square.area(10))
```

In this example, the area method in the Shape class can handle two different parameters. If only one parameter is provided, it calculates the area of a square. If two parameters are provided, it calculates the area of a rectangle.

## Method overriding

This is a feature that allows a subclass to provide a new implementation of a method that is already defined in its parent class.

```py title="In Python"
class Animal:
    def makeSound(self):
        print("Some animal sound")

class Dog(Animal):
    def makeSound(self):
        print("Bark")

class Cat(Animal):
    def makeSound(self):
        print("Meow")

dog = Dog()
dog.makeSound()

cat = Cat()
cat.makeSound()
```

In this example, the makeSound method is defined in the parent Animal class. The Dog and Cat classes inherit the Animal class and provide their own implementation of the makeSound method, which demonstrates method overriding.

Polymorphism allows us to write more flexible and generic code that can handle multiple types of objects and data. This makes our code more maintainable and reusable.

## 🎉 Congratulations! You have learned OOPS concepts. 🎉
