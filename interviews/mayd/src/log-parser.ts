import fs from 'fs'
import readline from 'readline'
import { LineJson } from './interfaces'
import { printToFile, ValidationError } from './app.modules'

export class LogParser {
  input: string
  outputFilePath: string
  rl
  logLevelType: string | null

  constructor (input: string, output: string) {
    this.input = input
    this.outputFilePath = output
    this.rl = readline.createInterface({
      input: fs.createReadStream(this.input)
    })
    this.logLevelType = null
  }

  /**
   * Read input-file, parse, format and write log-types to output-file
   */
  parse () {
    let jsonOutput: LineJson[] = []
    this.rl.on('line', (line: any) => {
      if (!line) {
        return 'Empty line'
      }
      let lineString: string = line.toString()
      if (!this.validateLogLine(lineString)) {
        return `invalid log-line`
      }
      let lineObject: LineJson = this.parseLine(lineString)
      jsonOutput.push(lineObject)
    })
    this.rl.on('close', () => {
      printToFile(this.outputFilePath, JSON.stringify(jsonOutput))
    })
  }

  /**
   * parse and format single error log-line
   * @param {string} lineString - single line from the input log file
   * @returns {LineJson} - loglevel Json Object
   */
  parseLine (lineString: string): LineJson {
    try {
      let [timestamp, loglevel, details] = lineString.split(' - ')
      let detailsObject = JSON.parse(details)

      const parsedObject: LineJson = {
        ...Object.fromEntries([
          ['timestamp', timestamp],
          ['loglevel', loglevel]
        ]),
        ...detailsObject
      }
      return parsedObject
    } catch (error) {
      throw new ValidationError("LineString couldn't be parsed successfully!")
    }
  }

  validateLogLine (lineString: string): Boolean {
    return lineString.split(' - ').length === 3
  }
}
