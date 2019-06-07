const types = [
	'add',
    'build',
	'ci',
	'doc',
	'fix',
    'improve',
	'perf',
	'refactor',
	'revert',
	'style',
	'test'
];

module.exports.rules = {
	'type-enum': [2, 'always', types]
};

module.exports.value = () => types;
