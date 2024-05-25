import fs from 'fs';
import path from 'path';

const isDirectory = (path) => {
  return fs.lstatSync(path).isDirectory() 
}

const readMdFiles = (filePath, previousData) => {
  const files = fs.readdirSync(filePath);
  return files.reduce(
    (acc, file) => {
      const completePath = path.join(filePath, file);
      if (isDirectory(completePath)) {
        return readMdFiles(completePath, acc);
      }
      if (file.endsWith('.md')) {
        const [fileName] = file.split('.');
        const fileContent = fs.readFileSync(completePath, 'utf-8');
        return {
          ...acc,
          [`${completePath}`]: fileContent,
        };
      }
      return acc;
    },
    previousData
  );
};

const saveFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    
  }
};

const mdToJson = () => {
  const data = readMdFiles('./src/md', {});
  saveFile('./src/md-i18n.json', data);
};

mdToJson();
