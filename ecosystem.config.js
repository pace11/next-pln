module.exports = {
    apps: [
      {
        name: 'home-pln', 
        script: 'npm', 
        args: 'run start', 
        instances: 2, 
        exec_mode: 'cluster',
      },
    ],
  };