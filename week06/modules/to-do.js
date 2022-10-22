export class Task {
  constructor(id, text, completed = false, deleted = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
    this.deleted = deleted;
  }
}

