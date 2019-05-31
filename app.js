const imagenVista=document.getElementById("img-vista");
const imagenSubir=document.getElementById("img-subir");
const cargar=document.getElementById("img-bar");

const url="xxxxxxxxx";
const Upload_presets="xxxxxxxx";

imagenSubir.addEventListener('change', async (e)=>
{
  //console.log(e);
  const archivo = e.target.files[0];
  const formData=new FormData();
  formData.append('file', archivo);
  formData.append('upload_preset', Upload_presets); 

   const res = await axios.post(url, formData,
    {
        headers:
        {
            'Content-Type':'multipart/form-data'
        },
        onUploadProgress(e)
        {
            var progress = Math.round((e.loaded * 100.0) / e.total);
            console.log(progress);
            cargar.setAttribute('value', progress);
        }
    });
    
    console.log(res);
    imagenVista.src=res.data.secure_url;
});
