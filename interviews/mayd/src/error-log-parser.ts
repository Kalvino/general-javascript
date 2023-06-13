import { LogParser } from './log-parser'
import { convertISOToEpoch } from './app.modules'
import { LineJson } from './interfaces'

export class ErrorLogParser extends LogParser {
  logLevelType: string
  omittedKeys: string[]
  constructor (input: string, output: string) {
    super(input, output)
    this.logLevelType = 'error'
    this.omittedKeys = ['details','code']
  }

  parseLine (lineString: string): LineJson {
    try {
      let [timestamp, loglevel, details] = lineString.split(' - ')
      let detailsObject = JSON.parse(details)

      const parsedobject = {
        ...Object.fromEntries([
          ['timestamp', timestamp],
          ['loglevel', loglevel]
        ]),
        ...detailsObject
      }
      if (this.omittedKeys) {
        this.omittedKeys.forEach((key: string) => {
          if (parsedobject.hasOwnProperty(key)) {
            delete parsedobject[key]
          }
        })
      }
      let epochTime = convertISOToEpoch(parsedobject['timestamp'])
      parsedobject['timestamp'] = epochTime
      return parsedobject
    } catch (error) {
      throw error
    }
  }

  // TODO validate through regex
  /**
   * check if lineString conforms to log format and of a given loglevel
   * @param {string} lineString
   * @return {boolean}
   */
  validateLogLine (lineString: string): Boolean {
    return (
      this.includesLogLevel(lineString) && super.validateLogLine(lineString)
    )
  }

  /**
   * check is log line string includes a searchString(e.g log-level)
   * @param {string} lineString - logLine string
   * @param {string} searchString - string to be searched
   * @returns {boolean}
   */
  includesLogLevel (lineString: string): Boolean {
    return lineString.includes(`${this.logLevelType} `, 26)
  }
}
