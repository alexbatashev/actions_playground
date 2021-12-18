const github = require('@actions/github');

require('child_process').execSync('rm -rf ' + process.env.GITHUB_WORKSPACE + '/*');
