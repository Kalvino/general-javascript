import fs from 'fs'
// get input and output files passed as arguments
export function parseIOArguments (args: string[]): string[] {
  if (!args) {
    throw 'Not valid arguments'
  }
  const argMap = new Map()
  for (let i = 0; i <= args.length - 2; i += 2) {
    argMap.set(args[i].toString().slice(2), args[i + 1].toString())
  }

  let inputFile: string = argMap.get('input')
  let outputFile: string = argMap.get('output')
  let argArray: string[] = [inputFile, outputFile]

  return argArray
}

/**
 * print string to file
 * @param {string} jsonfileName
 * @param {string} jsonString
 */
export function printToFile (jsonfileName: string, jsonString: string) {
  fs.writeFile(jsonfileName, jsonString, 'utf8', err => {
    if (err) {
      throw new Error('Print to file failed')
    }
    console.log('Parsed data printed to output file')
  })
}

/**
 * @param {Date} isoTimestamp
 * @returns { time } milliseconds since Jan 1, 1970, 00:00:00.000 GMT
 */
export function convertISOToEpoch (isoTimestamp: string): number {
  try {
    const date = new Date(isoTimestamp)
    return date.getTime()
  } catch (error) {
    throw new Error('Invalid date!')
  }
}

export class ValidationError extends Error {
  constructor (message: string) {
    super(message) // (1)
    this.name = 'ValidationError' // (2)
  }
}
