export const GenerateId = (length) => {
  const id = Array(length)
    .fill('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    .map((x) => {
      return x[Math.floor(Math.random() * x.length)];
    })
    .join('');

  return id;
};

export const ValidateExtension = (ext) => {
  const extensions = ['PNG', 'JPEG', 'JPG'];
  if (!ext) return false;
  return extensions.includes(ext.toUpperCase());
};

export const GetBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
