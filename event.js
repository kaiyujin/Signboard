'use strict';

const Slack = require('./slack.js');
const token = '';
const url = '';
const slack = new Slack(url,token);

function ok() {
    slack.changeStatus(':ok:','話しかけても大丈夫です！');
}
function ng() {
    slack.changeStatus(':x:','本番作業中。障害対応以外は後にしてください。');
}
function busy() {
    slack.changeStatus(':warning:','集中して作業中。できれば後にしてください。');
}
function break_() {
    slack.changeStatus(':coffee:','休憩中です。');
}
