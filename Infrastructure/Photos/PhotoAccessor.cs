using Application.Interfaces;
using Application.Photos;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Infrastructure.Photos
{
    public class PhotoAccessor : IPhotoAccessor
    {
        private readonly Cloudinary _cloudinary;
        public PhotoAccessor(IOptions<CloudinarySettings> config)
        {
            var account = new Account(
                config.Value.CloudName,
                config.Value.ApiKey,
                config.Value.ApiSecret
            );
            _cloudinary = new Cloudinary(account);
        }

        // public async Task<PhotoUploadResult> AddPhoto(IFormFile file)
        // {
        //     if (file.Length > 0)
        //     {
        //         await using var stream = file.OpenReadStream();
        //         var uploadParams = new ImageUploadParams
        //         {
        //             File = new FileDescription(file.FileName, stream),
        //             Transformation = new Transformation().Height(500).Width(500).Crop("fill")
        //         };

        //         var uploadResult = await _cloudinary.UploadAsync(uploadParams);

        //         if (uploadResult.Error != null)
        //         {
        //             throw new Exception(uploadResult.Error.Message);
        //         }

        //         return new PhotoUploadResult
        //         {
        //             PublicId = uploadResult.PublicId,
        //             Url = uploadResult.SecureUrl.ToString()
        //         };
        //     }
        //    return null;
        // }

        public async Task<PhotoUploadResult> AddPhoto(IFormFile file)
        {
            try
            {
                if (file == null) throw new ArgumentNullException(nameof(file), "File must not be null in Interface.");
                if (file.Length == 0) throw new Exception("File is empty.");

                await using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    Transformation = new Transformation().Height(500).Width(500).Crop("fill")
                };

                var uploadResult = await _cloudinary.UploadAsync(uploadParams);
                if (uploadResult == null || uploadResult.Error != null)
                {
                    throw new Exception(uploadResult?.Error?.Message ?? "Upload failed without an error message.");
                }

                return new PhotoUploadResult
                {
                    PublicId = uploadResult.PublicId,
                    Url = uploadResult.SecureUrl.ToString()
                };
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while uploading the photo: " + ex.Message, ex);
            }
        }
        public async Task<string> DeletePhoto(string publicId)
        {
            var deleteParams = new DeletionParams(publicId);
            var result = await _cloudinary.DestroyAsync(deleteParams);
            return result.Result == "ok" ? result.Result : null;
        }
    }
}