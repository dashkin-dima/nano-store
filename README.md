# Liten-store
Very little store for React.

## Motivation
I was inspired by recoil, but I didn't like the size and number of ways to solve one problem, I wanted to do something super small to communicate a couple of components in React.

## 📦 Installation
### `npm i liten-store`

## The Basics
Let’s take a look at the basic usage:

### Step 1: Create your store

```ts
// file stores/counterStore.ts

const counterStore = createStore(0);
```

### Step 2: Use hook useStore to get value and setter 
The setter interface fully corresponds to the react setter interface.

```ts
// in your component

const [value, setValue] = useStore<number>(counterStore);
```

Enjoy)


