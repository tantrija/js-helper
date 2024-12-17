# **@tantrija/helper-functions**

### A comprehensive collection of 500+ helper functions for **strings**, **arrays**, **numbers**, **objects**, and **dates**.

![npm version](https://img.shields.io/npm/v/@tantrija/helper-functions) 
![downloads](https://img.shields.io/npm/dm/@tantrija/helper-functions)
![license](https://img.shields.io/npm/l/@tantrija/helper-functions)
![GitHub stars](https://img.shields.io/github/stars/tantrija/js-helper)

---

## **Table of Contents**

1. [Overview](#overview)  
2. [Installation](#installation)  
3. [Features](#features)  
4. [Function Categories](#function-categories)  
5. [Quick Examples](#quick-examples)  
6. [API Reference](#api-reference)  
7. [Contributing](#contributing)  
8. [Support](#support)  
9. [License](#license)

---

## **Overview**

`@tantrija/helper-functions` is a **type-safe, modular utility library** containing **500+ helper functions** for day-to-day development tasks, including:

✅ **Strings**: Manipulate, format, and validate strings.  
✅ **Arrays**: Sort, group, and flatten arrays efficiently.  
✅ **Numbers**: Perform calculations, validations, and conversions.  
✅ **Objects**: Merge, flatten, and transform objects.  
✅ **Dates**: Format, calculate, and manipulate dates easily.

This library is optimized for **JavaScript** and **TypeScript** projects, focusing on performance, type safety, and simplicity.

---

## **Installation**

Install via npm or yarn:

### **Using npm**:
```bash
npm install @tantrija/helper-functions
```

### **Using yarn**:
```bash
yarn add @tantrija/helper-functions
```

---

## **Features**

- 📦 **500+ Helper Functions**: Prebuilt utilities to simplify repetitive tasks.
- ⚡ **Modular Imports**: Import only the functions you need to optimize bundle size.
- 🛠️ **Type-Safe**: Fully written in **TypeScript** for better IntelliSense and static checks.
- 🚀 **Performance Optimized**: Functions are lightweight and efficient.
- ✅ **Well-Tested**: Includes extensive test coverage to ensure reliability.
- 📚 **Easy Documentation**: Organized functions with clear usage examples.

---

## **Function Categories**

Each category contains **100+ functions** to streamline your workflow:

| Category        | Description                                   | Examples of Functions             |
|-----------------|-----------------------------------------------|----------------------------------|
| **Strings**     | String manipulation, formatting, and validation. | `capitalize`, `toSnakeCase`, `trim`, `truncate` |
| **Arrays**      | Array sorting, filtering, and transformations. | `flattenToDepth`, `uniqueByKey`, `groupByKey` |
| **Objects**     | Object merging, validation, and key-value operations. | `deepMerge`, `pickKeys`, `flattenObject` |
| **Numbers**     | Number calculations, formatting, and utilities. | `isPrime`, `factorial`, `randomInRange` |
| **Dates**       | Date formatting, comparison, and manipulation. | `formatDate`, `addDays`, `isLeapYear` |

---

## **Quick Examples**

### **1. String Utilities**

```typescript
import { capitalize, toSnakeCase } from '@tantrija/helper-functions/string';

console.log(capitalize('hello world')); // Output: "Hello world"
console.log(toSnakeCase('Hello World Example')); // Output: "hello_world_example"
```

### **2. Array Utilities**

```typescript
import { flattenToDepth, uniqueByKey } from '@tantrija/helper-functions/array';

const nestedArray = [1, [2, [3, [4]]]];
console.log(flattenToDepth(nestedArray, 2)); // Output: [1, 2, 3, [4]]

const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
console.log(uniqueByKey(data, 'id'));
// Output: [{ id: 1 }, { id: 2 }]
```

### **3. Object Utilities**

```typescript
import { deepMerge, flattenObject } from '@tantrija/helper-functions/object';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };

console.log(deepMerge(obj1, obj2));
// Output: { a: 1, b: { c: 2, d: 3 } }

console.log(flattenObject({ a: { b: { c: 1 } } }));
// Output: { "a.b.c": 1 }
```

### **4. Number Utilities**

```typescript
import { isPrime, factorial } from '@tantrija/helper-functions/number';

console.log(isPrime(7)); // Output: true
console.log(factorial(5)); // Output: 120
```

### **5. Date Utilities**

```typescript
import { formatDate, addDays } from '@tantrija/helper-functions/date';

console.log(formatDate(new Date(), 'YYYY-MM-DD')); // Output: "2024-06-15"
console.log(addDays(new Date(), 7)); // Adds 7 days to the current date.
```

---

## **API Reference**

For the **full list of 500+ functions** and their usage, visit the:  
📖 [Full API Documentation](https://github.com/tantrija/js-helper#readme)  

The documentation includes detailed descriptions, parameter explanations, and usage examples for each function.

---

## **Contributing**

We welcome contributions! To contribute:

1. Fork the repository on GitHub.
2. Clone the forked repository:
   ```bash
   git clone https://github.com/tantrija/js-helper.git
   cd js-helper
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Add or modify functions under `src/` and write tests in `tests/`.
5. Run tests to ensure everything works:
   ```bash
   npm test
   ```

6. Submit a **Pull Request**.

For detailed contribution guidelines, see the [CONTRIBUTING.md](https://github.com/tantrija/js-helper/blob/main/CONTRIBUTING.md).

---

## **Support**

For issues, feature requests, or questions:

- **Open an Issue**: [GitHub Issues](https://github.com/tantrija/js-helper/issues)  
- **Contact Support**: [admin@tantrija.com](mailto:admin@tantrija.com)

---

## **License**

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

**If you find `@tantrija/helper-functions` helpful, please ⭐ star the repository on [GitHub](https://github.com/tantrija/js-helper). 🚀**

---

### **Future Enhancements**  
- Additional utility functions for other data types.  
- Support for performance monitoring and optimization.  
- Integration with other frameworks like React and Node.js.  
