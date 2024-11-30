export class CustomError extends Error {
	public time: string;

	public status: number;

	public constructor(message: string, status: number) {
		super(message);
		this.time = new Date().toDateString();
		this.status = status;
	}
}
