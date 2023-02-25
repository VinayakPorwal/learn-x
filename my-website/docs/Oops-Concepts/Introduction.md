---
sidebar_position: 1
---

# Introduction

Let's discover **OOPS in less than 5 minutes**.

> ###  A Clear and Friendly Guide

<!-- Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**. -->

### Definition

Object-Oriented Programming (OOP) is a programming paradigm that focuses on the concept of "objects".
Objects are instances of classes, which contain both data (attributes) and code (methods) to manipulate that data.

<!-- ![Oops](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1w3JEbEvFOmhuw8Z5J0YT9PKbT2AUfiH0g&usqp=CAU) -->
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1w3JEbEvFOmhuw8Z5J0YT9PKbT2AUfiH0g&usqp=CAU" className="advaImg"/>

<br/>

Here's an simple example that compares OOP and non-OOP in Python:

```py title="In Python"
# Non-OOP implementation
def add_numbers(a, b):
    return a + b

print(add_numbers(2, 3))

# OOP implementation
class Calculator:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def add(self):
        return self.a + self.b

calculator = Calculator(2, 3)
print(calculator.add())

```

In the non-OOP implementation, the add_numbers function takes two numbers as inputs and returns their sum.

In the OOP implementation, the Calculator class is defined with an add method that performs the same calculation as the add_numbers function. The add method is called on an instance of the Calculator class, which is created using the calculator variable.

This example demonstrates how OOP can make code more organized and reusable, as well as allow for encapsulation and inheritance.

Still not get it, Don't worry let's look into it with an Example:

### Undesrtand through Example

Have you ever played with building blocks? Just like building blocks have different shapes and colors, objects in Object-Oriented Programming (OOP) have their own unique data (attributes) and actions (methods).

Let's say you're creating a program for a library to keep track of its books. Each book in the library can be represented as an object with its own attributes, such as title, author, and ISBN number. And each object can have methods, like checking if a book is available to be checked out.

Think of the class as the mold for the objects. Just like you use the same mold to make multiple building blocks, you can use a class to create multiple objects with the same attributes and methods.

In OOP, you can use inheritance to create new classes based on existing classes. For example, you could create a new class for audiobooks that inherits from the original book class, but adds additional attributes like the narrator and length of the audiobook.

By using OOP, you can create a structured and organized program that is easy to understand and maintain. And just like how you can use different building blocks to build different structures, you can use objects and classes to create complex programs.
