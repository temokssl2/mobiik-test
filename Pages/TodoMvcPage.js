const SeleniumActions = require('../utils/SeleniumActions');

class TodoMvcPage {
  constructor(seleniumActions) {
    this.seleniumActions = seleniumActions;
  }

  _header = { xpath: "//h1[text()='todos']" };
  _inputTextField = { xpath: "//input[@placeholder='What needs to be done?']" };
  _newTaskCreated(taskName) { return { xpath: `//label[text()='${taskName}']` }; }
  _taskToggleButton(taskName) { return { xpath: `//*/label[text()='${taskName}']/preceding-sibling::input` }; }
  _taskToggleButtonChecked(taskName) { return { xpath: `//*/label[text()='${taskName}']/ancestor::li[@class='completed']` }; }
  _completedButton = { xpath: "//*/li/a[text()='Completed']" };
  _completedTasks = { xpath: "//label[@data-testid='todo-title']" };

  async isDisplayed() {
    return await this.seleniumActions.isWebElementDisplayed(this._header);
  }

  async writeTaskName(taskName) {
    console.log(`Creating task: ${taskName}`);
    await this.seleniumActions.writeAndValidate(taskName, this._inputTextField);
  }

  async createANewTask(taskName) {
    await this.writeTaskName(taskName);
    await this.seleniumActions.sendEnter();
  }

  async isTaskCreated(taskName) {
    return await this.seleniumActions.isWebElementDisplayed(this._newTaskCreated(taskName));
  }

  async clickTaskToggleButton(taskName) {
    const toggleButton = this._taskToggleButton(taskName);
    await this.seleniumActions.click(toggleButton);
  }

  async isTaskToggleButtonChecked(taskName) {
    let s = this._taskToggleButtonChecked(taskName);
    let x = await this.seleniumActions.isWebElementDisplayed(s);
    return x;
  }

  async completeTask(taskName) {
    await this.seleniumActions.waitFor(
      async () => await this.clickTaskToggleButton(taskName),
      async () => await this.isTaskToggleButtonChecked(taskName)
    );
  }

  async clickCompletedButton() {
    await this.seleniumActions.click(this._completedButton);
  }

  async areCompletedTasksDisplayed() {
    return await this.seleniumActions.isWebElementDisplayed(this._completedTasks);
  }

  async displayCompletedTasks() {
    await this.seleniumActions.waitFor(
      async () => await this.clickCompletedButton(),
      async () => await this.areCompletedTasksDisplayed()
    );
  }

  async areCompletedTasksCorrect(taskNames) {
    const completedTasks = await this.seleniumActions.findElements(this._completedTasks);
    const completedTaskNames = await Promise.all(completedTasks.map(async (task) => {
      return await task.getText();
    }));
    return await taskNames.every(taskName => completedTaskNames.includes(taskName));
  }
}

module.exports = TodoMvcPage;