import { parseIOArguments } from './app.modules';
import { ErrorLogParser } from './error-log-parser';

// get arguments from process.argv;
const fileArgs = process.argv.slice(2);
const [ inputFile, outputFile ] = parseIOArguments(fileArgs);

const errParser = new ErrorLogParser(inputFile,outputFile);
errParser.parse();

