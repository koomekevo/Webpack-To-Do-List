import { add, remove } from '../src/crud';

// Add tests
describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    add('First item');
    add('Second item');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(2);
  });
  test('Should remove an item from the list', () => {
    remove(0);
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(1);
  });
});