<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-use-set/main/banner.svg" alt="vue-use-set" width="100%" />
</p>

<h1 align="center">vue-use-set</h1>

<p align="center">A Vue 3 composition API utility providing shorthand for setting values. Supports set(ref, value) for ref.value assignment and set(object, key, value) for object property setting.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-use-set"><img src="https://img.shields.io/npm/v/vue-use-set.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-use-set"><img src="https://img.shields.io/npm/dm/vue-use-set.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-use-set
```

## Usage

```ts
import { set } from 'vue-use-set'
import { ref } from 'vue'

const count = ref(0)
set(count, 5)
console.log(count.value) // 5

const obj = { name: 'John' }
set(obj, 'name', 'Jane')
console.log(obj.name) // 'Jane'
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
