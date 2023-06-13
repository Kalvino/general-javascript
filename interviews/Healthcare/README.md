# Log parser app

Develop the command line node.js application, which parses the input log file. 

The application should find all the log messages with the level error and print them into the output file. Formats of input and outfit files are described below.
Requirements
TypeScript OOP project.
Node.js v10+.
Designed in accordance with OOD principles (DRY, SLAP, SOLID, etc).
Unit-testing ready (or partially covered by tests)
Flexibility of the architecture. Application should be easy to extend and modify.
Usage
> node parser.js --input ./app.log --output ./errors.json
Input
Format
<ISO Date> - <Log Level> - {"transactionId: "<UUID>", "details": "<message event/action description>", "err": "<Optionall, error description>", ...<additional log information>}
Example

2021-08-09T02:12:51.253Z - info - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Service is started"}

2021-08-09T02:12:51.254Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"About to 
"2012-02-10T13:19:11+0000"
request the user information","userId": 10}

Output

Format
[{"timestamp": <Epoch Unix Timestamp>, "loglevel": "<loglevel>", "transactionId: "<UUID>", "err": "<Error message>" ]

Example
[{"timestamp":1628475171259,"loglevel":"error","transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","err":"Not found"}]

TODO
test: 
typescript  
print line after read
modules

make nodejs app

create new error type depending on the output file