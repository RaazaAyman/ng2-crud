
function getId(n: number = 7): string {
	const aToZ: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const charSet: string = aToZ + aToZ.toLowerCase() + '1234567890';
	let randomStr: string = '';

	for (let i = 0; i <= n; i++) {
       randomStr += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}

	return randomStr.toLowerCase();
}

export class User {
	id: string;

	constructor(public name: string, public email: string) {
		this.id = getId();
	}

}