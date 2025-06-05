function deepClone(obj) {
    // Return a deep copy of obj
    return structuredClone(obj)
  }

//   Why use structuredClone?
// It handles most data types, including nested objects, arrays, Maps, Sets, and more.

// It's built into modern browsers and Node.js (v17.0+ with --experimental or v18+ stable).

// No external libraries required.