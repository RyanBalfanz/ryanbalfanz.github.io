import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "I'm Ryan Balfanz";
  links: {name: string, url: string, network: string}[] = [{
		name: "Facebook",
		url: "https://www.facebook.com/ryanbalfanz",
		network: "facebook",
	}, {
		name: "Twitter",
		url: "https://twitter.com/ryanbalfanz",
		network: "twitter"
	}, {
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/ryanbalfanz",
		network: "linkedin"
	}, {
		name: "GitHub",
		url: "https://github.com/RyanBalfanz",
		network: "github"
	}];
}
