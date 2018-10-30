const argv = require('yargs')
                .command('create', 'Create Task', {
                    description: {
                        alias: 'd',
                        demand: true
                    },
                    completed: {
                        alias: 'c',
                        default: false
                    }
                })
                .command('update', 'Update Task Status', {
                    description: {
                        alias: 'd',
                        demand: true
                    },
                    completed: {
                        alias: 'c',
                    }
                })
                .command('list', 'List the tasks', {
                    completed: {
                        alias: 'c',
                        default: false
                    },
                    all: {
                        alias: 'a'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}
