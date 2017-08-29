export class User {
	id: number;

	constructor(public name: string, public email: string) {
		this.id = Math.floor((Math.random() * 10) + Math.random());
	}

}