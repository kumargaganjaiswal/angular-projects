using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CityInfo.API.Controllers
{
    [Route("api/files")]
    [ApiController]
    public class FilesController : ControllerBase
    {


        [HttpGet("{fileId}")]
        public IActionResult GetFile(string fileId)
        {
            // Simulate a file retrieval process
            var filePath = Path.Combine("D:\\", fileId + ".pdf");
            if (!System.IO.File.Exists(filePath))
            {
                return NotFound(new ProblemDetails
                {
                    Title = "File not found",
                    Detail = $"The file with ID {fileId} was not found.",
                    Status = StatusCodes.Status404NotFound,
                    Instance = HttpContext.Request.Path
                });
            }
            var fileBytes = System.IO.File.ReadAllBytes(filePath);
            return File(fileBytes, "application/octet-stream", fileId);
        }

        //[HttpPost]
        //[RequestSizeLimit(10 * 1024 * 1024)] // Optional: limit request size to 10MB
        //[Consumes("multipart/form-data")]
        //public async Task<IActionResult> UploadPdf([FromForm] IFormFile file)
        //{
        //    // Validate file presence
        //    if (file == null || file.Length == 0)
        //    {
        //        return BadRequest(new ProblemDetails
        //        {
        //            Title = "No file uploaded",
        //            Detail = "Please upload a PDF file.",
        //            Status = StatusCodes.Status400BadRequest,
        //            Instance = HttpContext.Request.Path
        //        });
        //    }

        //    // Validate file type
        //    if (!file.ContentType.Equals("application/pdf", StringComparison.OrdinalIgnoreCase) &&
        //        !file.FileName.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase))
        //    {
        //        return BadRequest(new ProblemDetails
        //        {
        //            Title = "Invalid file type",
        //            Detail = "Only PDF files are allowed.",
        //            Status = StatusCodes.Status400BadRequest,
        //            Instance = HttpContext.Request.Path
        //        });
        //    }

        //    // Validate file size (e.g., max 5MB)
        //    const long maxFileSize = 5 * 1024 * 1024;
        //    if (file.Length > maxFileSize)
        //    {
        //        return BadRequest(new ProblemDetails
        //        {
        //            Title = "File too large",
        //            Detail = $"Maximum allowed file size is {maxFileSize / (1024 * 1024)} MB.",
        //            Status = StatusCodes.Status400BadRequest,
        //            Instance = HttpContext.Request.Path
        //        });
        //    }

        //    // Generate GUID-based filename
        //    var guid = Guid.NewGuid().ToString();
        //    var fileName = $"{guid}.pdf";
        //    var filePath = Path.Combine("D:\\", fileName);

        //    // Save the file
        //    using (var stream = new FileStream(filePath, FileMode.Create))
        //    {
        //        await file.CopyToAsync(stream);
        //    }

        //    // Return the GUID as the file ID
        //    return CreatedAtAction(nameof(GetFile), new { fileId = guid }, new { fileId = guid });
        //}
    }
}
