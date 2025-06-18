export interface IRepository<T> {
	getAll(): Promise<T[]>
	getSingle(key: string | number): Promise<T | undefined>
}