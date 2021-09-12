using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using System;

namespace DemoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public IActionResult GetRandomNumber()
        {
            HttpContext.VerifyUserHasAnyAcceptedScope("access_as_admin");

            return Ok(new Random().Next());
        }
    }
}
