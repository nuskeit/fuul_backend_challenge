export abstract class IFactory<T> {
	abstract create(typeName?: string, paramsObject?: unknown): T
}

