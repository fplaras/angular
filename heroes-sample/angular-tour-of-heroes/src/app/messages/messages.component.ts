import { Component, OnInit } from "@angular/core";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  // The property must be public because to bind to it in the template
  // Angular only binds to public component properties
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
