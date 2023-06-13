const fs = require('fs')
const readline = require('readline')

class Parser {
  constructor (input, output) {
    this.input = input;
    this.output = output;
    this.rl = readline.createInterface({
      input: fs.createReadStream(this.input)
    })
  }

  /**
   * Read input-file, parse, format and write log-types to output-file
   */
  parse () {
    let jsonOutput = [];
    this.rl.on('line', line => {
      if (!line) {return 'Empty line'};
      let lineString = line.toString();
      if (!this.validate(lineString)) {
        return `invalid log-line`;
      }
      let lineObject = this.formatLine(lineString);
      jsonOutput.push(lineObject);
    })
    this.rl.on('close', () => {
      this.#printToFile(JSON.stringify(jsonOutput))
    })

    console.log(typeof this.rl, "asdfgdgsdgggsdfgf");
  }

  /**
   * parse and format single error log-line
   * @param {string} lineString - single line from the input log file
   * @returns loglevel Json Object
  //  */
  // getLineObject (lineString) {
  //   try {
  //     console.log(typeof this.formatLine(lineString), "lineObject");
  //     return this.formatLine(lineString);
  //   } catch (error) {
  //     console.log(error)
  //     throw new Error(error)
  //   }
  // }

  formatLine(lineString){
    let [timestamp, loglevel, details] = lineString.split(' - ');
    let detailsObject = JSON.parse(details);

    return {
      ...Object.fromEntries([
        ['timestamp', timestamp],
        ['loglevel', loglevel]
      ]),
      ...detailsObject
    }
  }

  /**
   * print string to file
   * @param {string} jsonString
   */
  #printToFile (jsonString) {
    fs.writeFile(this.output, jsonString, 'utf8', err => {
      if (err) {
        return err
      }
      console.log('Saved data to file.')
    })
  }

  // meet constraints
  validate (lineString) {
    return this.constraints(lineString);
  }

  constraints(lineString){
    return this.logLineFormat(lineString);
  }

  /**
   * check if lineString conforms to log format
   * @param {string} lineString
   */
   logLineFormat (lineString) {
     console.log(lineString, "accepted string");
    return lineString.split(' - ').length === 3
  }
}

class ErrorParser extends Parser {
  constructor (input, output) {
    super(input, output);
    this.logLevelType = 'error';
    this.omittedKeys = ['code'];
  }

  formatLine(lineString){
    let lineObject = super.formatLine(lineString);
    if (this.omittedKeys) {
      this.omittedKeys.forEach(key => delete lineObject[key]);      
    }
    let epochTime = this.convertISOToEpoch(lineObject['timestamp']); 
    lineObject['timestamp'] = epochTime;
    return lineObject;
  }

  /**
   * @param {Date} isoTimestamp
   * @returns { time } milliseconds since Jan 1, 1970, 00:00:00.000 GMT
   */
   convertISOToEpoch (isoTimestamp) {
    const date = new Date(isoTimestamp)
    return date.getTime()
  }

  constraints(lineString){
    return (this.includesLogLevel(lineString) && super.logLineFormat(lineString));
  }

  includesLogLevel (lineString) {
    return lineString.includes(` ${this.logLevelType} `, 26);
  }
}


// get arguments from process.argv;
const fileArgs = process.argv.slice(2)
console.log(Object.keys(fileArgs), "ggggg");
if (!fileArgs) {
  return ;
}
// get input and output files
const createFileMap = args => {
  const argMap = new Map();
  for (let i = 0; i <= args.length - 2; i += 2) {
    argMap.set(args[i].toString().slice(2), args[i + 1].toString())
  }
  return argMap
}

const fileMap = createFileMap(fileArgs)
let inputFile = fileMap.get('input')
let outputFile = fileMap.get('output')
const parser = new ErrorParser(inputFile, outputFile)
// const parser = new Parser(inputFile, outputFile)


console.log(parser.parse());
['code'].forEach(i => console.log(typeof i), "vino loggeee");
