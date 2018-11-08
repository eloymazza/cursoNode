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
                        default: true
                    }
                })
                .command('list', 'List the tasks', {
                    filter : {
                        alias : 'f',
                        default : 'all'
                    }
                })
                .command('delete', 'Delete the task', {
                    description: {
                        alias: 'd'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}
