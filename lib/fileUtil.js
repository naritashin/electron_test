import glob from 'glob';

export default {
  fetchReadmeList: (cb) => {
    glob('node_modules/**/README.md', (err, matches) => {
      if (err) {
        cb(err, null);
        return;
      }

      cd(null, matches);
    });
  }
};
