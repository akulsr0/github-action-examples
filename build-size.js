const getFolderSize = require('get-folder-size');

function humanFileSize(size) {
  var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}

const getSize = async () => {
  const size = await getFolderSize.loose('./dist');
  const readableSize = humanFileSize(size);
  console.log('---> 1', size, readableSize);
  return {
    size: {
      bytes: size,
      readableString: readableSize,
    },
  };
};

module.exports = { getSize };
