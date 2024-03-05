export const uploadFile = async (file) => {
  if (!file) throw new Error('El archivo no existe');
  const cloudUrl = 'https://api.cloudinary.com/v1_1/vrmedina-cloud/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);
  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });
    if (!resp.ok) throw new Error('No se pudo subir el archivo');
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
