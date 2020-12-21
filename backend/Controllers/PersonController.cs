using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;
namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        private OfficeDao officeDao = new OfficeDao();

        [HttpGet]
        [HttpOptions] 
        public IActionResult Get()
        {
            return Ok(new{ data = officeDao.GetAll() , status = 200 , message = "Ok"});
        }
    }

    
}
