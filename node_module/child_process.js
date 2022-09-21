const spawn = require('child_process').spawn;
const process = spawn('python3', ['child_python.py']);

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data) {
    console.error(data.toString());
});