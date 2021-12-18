const github = require('@actions/github');

require('child_process').execSync('rm -rf ' + github.context.workspace + '/*');
