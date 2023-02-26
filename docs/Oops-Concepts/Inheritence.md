---
sidebar_position: 4
---

# Inheritence

Inheritance is a mechanism by which a new class can be derived from an existing class. The derived class inherits all the properties and behaviors of the base class, and can also add new properties and behaviors of its own. Inheritance is a powerful tool for code reuse and organization, as it allows you to define a common set of properties and behaviors for related objects, and then build upon them for more specific objects.

## Types of inheritance

- Single
- Multiple
- Multilevel
- Herarchical
- Hybrid

### Single Inheritance

Single inheritance is a type of inheritance in which a class is derived from only one base class.

Here's an example of single inheritance in Python,

```py title="In Python"
# Base Class
class Animal:
    def __init__(self, name):
        self.name = name
        
    def make_sound(self):
        print("Some animal sound")

# Derived Class
class Dog(Animal):
    def __init__(self, name, breed):
        Animal.__init__(self, name)
        self.breed = breed
        
    def make_sound(self):
        print("Bark")
        
dog = Dog("Rover", "Labrador")
dog.make_sound() # Output : Bark // Because it Overrides the Derived method
```

In this example:
> The **Dog** class is derived from the **Animal** class, so it inherits its properties and methods. The **Dog** class also overrides the **make_sound** method to provide its own implementation.

### Multiple Inheritance

Multiple inheritance is a type of inheritance in which a class is derived from multiple base classes. Here's an example of multiple inheritance in Python

```py title="In Python"
# Base Class 1
class Animal:
    def __init__(self, name):
        self.name = name
        
    def make_sound(self):
        print("Some animal sound")
        
# Base Class 2
class DomesticAnimal:
    def __init__(self, name, owner):
        self.owner = owner
        Animal.__init__(self, name)

    def do_handShake(self):
        print("HandShake")
        
# Derived Class
class Dog(Animal, DomesticAnimal):
    def __init__(self, name, breed, owner):
        Animal.__init__(self, name)
        DomesticAnimal.__init__(self, name, owner)
        self.breed = breed
        
    def make_sound(self):
        print("Bark")
        
dog = Dog("Rover", "Labrador", "John Doe")
dog.do_handShake() # Output: HandShake // Mehtod derived from DomesticAnimal Class
print(dog.name) # Output : Rover // Attribute derived from Animal Class
```

In this example:
>The **Dog** class is derived from both the **Animal** and **DomesticAnimal** classes, so it inherits the properties and methods of both classes.

### Multi-level Inheritance

Multi-level inheritance is a type of inheritance in which a subclass is derived from a base class, which in turn is derived from another base class. Here's an example of multi-level inheritance in Python

```py title="In Python"
# Base Class
class Animal:
    def __init__(self, name):
        self.name = name
    
    def Walk(self):
        print("Walk on Four legs")
        
# Derived Class for Animal Class and Base Class for Dog Class
class DomesticAnimal(Animal):
    def __init__(self, name, owner):
        self.owner = owner
        Animal.__init__(self, name)

# Derived Classs       
class Dog(DomesticAnimal):
    def __init__(self, name, breed, owner):
        DomesticAnimal.__init__(self, name, owner)
        self.breed = breed
        
    def make_sound(self):
        print("Bark")
        
dog = Dog("Rover", "Labrador", "John Doe")
dog.Walk() # Output: Walk on Four legs Derived from Super Base Class - Animal
```

In this example:
> The **Dog** class is derived from the **DomesticAnimal** class, which in turn is derived from the **Animal** class.

> The **Dog** class inherits properties and methods from both the **DomesticAnimal** and **Animal** classes, which demonstrates multi-level inheritance.

### Hierarchical Inheritance

Hierarchical inheritance is a type of inheritance in which multiple subclasses are derived from a single base class. 

Here's an example of hierarchical inheritance in Python

```py title="In Python"
# Base Class
class Animal:
    def __init__(self, name):
        self.name = name
        
    def make_sound(self):
        print("Some animal sound")
        
# Derived Class 1
class Dog(Animal):
    def __init__(self, name, breed):
        Animal.__init__(self, name)
        self.breed = breed
        
    def make_sound(self):
        print("Bark")
        
# Derived Class 2
class Cat(Animal):
    def __init__(self, name, breed):
        Animal.__init__(self, name)
        self.breed = breed
        
    def make_sound(self):
        print("Meow")
        
dog = Dog("Rover", "Labrador")
dog.make_sound() # Output : Bark // Because it Overrides the Derived method

cat = Cat("Fluffy", "Siamese")
cat.make_sound() # Output : Meow // Because it Overrides the Derived method
```

In this example:
 > Both the **Dog** and **Cat** classes are derived from the **Animal** class, so they both inherit its properties and methods. Each class has its own implementation of the **make_sound** method, which demonstrates hierarchical inheritance.

### Hybrid Inheritance

Hybrid inheritance is a combination of multiple inheritance types, such as single, multiple, hierarchical, and multi-level inheritance. Here's an example of hybrid inheritance in Python

```py title="In Python"
# Base Class
class NationalAnimal:
    def __init__(self, counrty):
        self.Country = country

# Base Class
class Animal:
    def __init__(self, name):
        self.name = name
        
    def make_sound(self):
        print("Some animal sound")
        
# Derived Class for Animal Class and Base Class for Dog Class
class DomesticAnimal(Animal):
    def __init__(self, name, owner):
        self.owner = owner
        Animal.__init__(self, name)
        
# Derived Class for Animal Class and Base Class for Lion Class
class WildAnimal(Animal):
    def __init__(self, name, habitat):
        self.habitat = habitat
        Animal.__init__(self, name)
        
# Derived Class
class Dog(DomesticAnimal):
    def __init__(self, name, breed, owner):
        DomesticAnimal.__init__(self, name, owner)
        self.breed = breed
        
    def make_sound(self):
        print("Bark")
        
# Derived Class
class Lion(WildAnimal,NationalAnimal):
    def __init__(self, name, habitat, roar_volume):
        WildAnimal.__init__(self, name, habitat)
        self.roar_volume = roar_volume
        
    def make_sound(self):
        print("Roar")
        
dog = Dog("Rover", "Labrador", "John Doe")
dog.make_sound()

lion = Lion("Simba", "Savanna", "Loud")
lion.make_sound()
```

In this example:

- Single Inheritence
  > the **Dog** class is derived from the **DomesticAnimal** class and
  > the **Lion** class is derived from the **WildAnimal** class.

- Herarchical Inheritence
  > Both *(DomesticAnimal and WildAnimal classes)* derived from the **Animal** class.

- Multi-level Inheritence
  > the **Dog** class is derived from the **DomesticAnimal** class and **DomesticAnimal** class is derived from the **Animal** class.

- Multiple Inheritence
  > the **Lion** class is derived from the **WildAnimal** class and **NationalAnimal** class.
