const _ = require('lodash');
const bbcDataset = require('./bbc.json');
const mediumDataset = require('./medium.json');
const notJobDatasetRaw = _.uniq([].concat(bbcDataset, mediumDataset));
const jobsDatasetRaw = _.uniq(require('./jobs.json'));

console.log('notJobDataset: ' + notJobDatasetRaw.length);
console.log('jobsDataset: ' + jobsDatasetRaw.length);

function splitDataset(dataset) {
    const sliceIndex = parseInt(dataset.length * .8);
    return {
        train: dataset.slice(0, sliceIndex),
        test: dataset.slice(sliceIndex, dataset.length)
    };
}

const notJobDataset = splitDataset(notJobDatasetRaw);
const jobsDataset = splitDataset(jobsDatasetRaw);

module.exports = { notJobDataset, jobsDataset };
