export class Activity {

    name : string; // holds task. Example "Read Chaper 4 in Chem Book"

    priority : string; // holds how an important task. scale 1 - 10
    // alphabet determines ties with priority

    listname: string; // name of list

    time: string; // time

    button : string; // true if hidden. false otherwise

    constructor(itemName: any, listName: string, priorityNum:string) {
      this.name = itemName;
      this.time = "-1";
      this.priority = priorityNum;
      this.button = "false";
      this.listname = listName;
    }

}
