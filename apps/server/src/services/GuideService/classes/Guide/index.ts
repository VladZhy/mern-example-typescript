import type { IGuide } from './types';

class Guide implements IGuide {
	private readonly _id: string;
	private readonly _title: string;
	private readonly _description: string;
	private readonly _thumbnail: string;

	constructor(
		id: string,
		title: string,
		description: string,
		thumbnail: string
	) {
		this._id = id;
		this._title = title;
		this._description = description;
		this._thumbnail = thumbnail;
	}

	public get id(): string {
		return this._id;
	}

	public get title(): string {
		return this._title;
	}

	public get description(): string {
		return this._description;
	}

	public get thumbnail(): string {
		return this._thumbnail;
	}
}

export default Guide;

export type { IGuide };
