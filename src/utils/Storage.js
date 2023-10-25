export default class Storage {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify({ value }));
  }

  get(key) {
    const value = localStorage.getItem(key) || '{}';

    return JSON.parse(value).value;
  }
}