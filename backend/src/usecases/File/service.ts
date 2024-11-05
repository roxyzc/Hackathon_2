import { extname, join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';

export const saveFile = (file: Express.Multer.File): string => {
  const uploadsDir = join(process.cwd(), 'uploads');

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const fileName = `${uuidv4()}${extname(file.originalname)}`;
  const filePath = join(uploadsDir, fileName);

  fs.writeFileSync(filePath, file.buffer);

  return `http://localhost:5000/uploads/${fileName}`;
};

export const deleteFile = (url: string) => {
  const split_url = url.split('uploads')[1];

  const oldFilePath = join(process.cwd(), `uploads/${split_url}`);
  fs.unlinkSync(oldFilePath);
};
