import { Ref } from 'vue';

declare function set<T>(ref: Ref<T>, value: T): void;
declare function set<O extends object, K extends keyof O>(target: O, key: K, value: O[K]): void;

export { set };
