function getId(): string {
	const randomStr: string = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
	return randomStr;
}







export class User {
	id: string = '';

	constructor(public name: string, public email: string) {
	    // this.id = getId();
	}

}