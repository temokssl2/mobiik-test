const Hooks = require('../Configuration/Hooks');
const TodoMvcPage = require('../Pages/TodoMvcPage');
const assert = require('assert');

describe('Mobiik TodoMVC Test', function () {
  this.timeout(40000);
  let driver, seleniumActions, todoPage;

  before(async function () {
    await Hooks.globalSetup(this);
    driver = this.driver;
    seleniumActions = this.seleniumActions;
    todoPage = new TodoMvcPage(seleniumActions);
  });

  after(async function () {
    await Hooks.globalTeardown(this);
  });

  afterEach(async function () {
    await Hooks.afterEach(this, this.currentTest);
  });

  it('should create a todo', async function () {
    let todoMvcUrlPage = 'https://demo.playwright.dev/todomvc/#/';
    await seleniumActions.navigateTo(todoMvcUrlPage);
    await seleniumActions.waitForCondition(() => todoPage.isDisplayed());

    const tasksList = [];
    const completedTasks = [];

    for(let i = 0; i < 5; i++) {
        tasksList.push(`Task ${i + 1}`);
        await todoPage.createANewTask(tasksList[i]);
    }
    for(let i = 0; i < 2; i++) {
        completedTasks.push(tasksList[i]);
        await todoPage.completeTask(tasksList[i]);
    }

    await todoPage.displayCompletedTasks();

    let areCompletedTasksCorrect = await todoPage.areCompletedTasksCorrect(completedTasks);
    assert.strictEqual(areCompletedTasksCorrect, true, 'Completed tasks are not correct, not all the completed tasks are displayed');

  });
});