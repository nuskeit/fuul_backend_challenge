import { IFactory } from "./IFactory.js";

export class Factory<T> implements IFactory<T> {

	/**
	 * static create() is to access the child create() method.
	 * @param typeName 
	 * @param paramsObject 
	 */
	static create<T>(typeName?: string, paramsObject?: unknown): T {
		return new this().create(typeName, paramsObject) as unknown as T
	}

	/**
	 * create() must be overriden in the child class.
	 * @param typeName 
	 * @param paramsObject 
	 */
	create(typeName?: string, paramsObject?: unknown): T {
		throw new Error("Factory: create() method not implemented in the child class. " +
			"create() must be overriden in the child class.");
	}

}