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
  test('Update complete status', () => {
    const newItem = new ToDo('some text');
    expect(newItem.complete).toBeFalsy();
    newItem.update();
    expect(newItem.complete).toBeTruthy();
  });

  test('Edit item', () => {
    edit(0, 'edited text');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage[0].description).toBe('edited text');
  });

  test('Delete all completed', () => {
    deleteAllCompleted(ToDo);
    ToDo.list.forEach((item) => {
      expect(item.complete).toBeFalsy();
    });
  });
});