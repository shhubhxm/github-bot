const jsonfile = require('jsonfile');
const moment = require('moment');
const SimpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';

const makeCommit = n => {
    if (n === 0) return SimpleGit().push();
    const x = random.int(0, 54); //days
    const y = random.int(0, 6); //weeks
    const DATE = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = {
        date: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, () => {
        // git commit --date="monday 28th"
        SimpleGit().add((FILE_PATH)).commit(DATE, { '--date': DATE },
        makeCommit.bind(this, --n));
    }); 
}

// makeCommit(comlumnsFrom[0]index,rowFrom[-1]index)
// numberOfCommits 
makeCommit(34);

