
export function safeType<T>(unknownElement: unknown, field: string) {

	let errorMessage = ""
	if (field.trim().length === 0)
		errorMessage = `field is empty`
	else if (unknownElement === undefined)
		errorMessage = `element is undefined`
	else if (unknownElement === null)
		errorMessage = `element is null`
	else if (typeof unknownElement !== "object")
		errorMessage = `element is not an object`
	else if (!(field in unknownElement))
		errorMessage = `The field ${field} does not exist in provided element`
	else
		// @ts-expect-error unknownElement has been already checked for being 
		// an object and for having the requested field in it.
		return (unknownElement)[field] as T

	throw new Error(`safeType: ${errorMessage}`)
}