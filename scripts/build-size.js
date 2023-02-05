import getFolderSize from 'get-folder-size';
import path from 'path';
import fs from 'fs';

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
  return {
    size: {
      bytes: size,
      readableString: readableSize,
    },
  };
};

(async () => {
  const result = await getSize();
  const filePath = path.resolve('./stats.json');
  fs.writeFileSync(filePath, `${JSON.stringify(result)}`);
})();
