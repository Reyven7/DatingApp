using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController(DataContext context) : BaseApiController
{
    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetAuth()
    {
        return "secret text";
    }

    [HttpGet("no-found")]
    public ActionResult<AppUser> GetNotFound()
    {
        var things = context.Users.Find(-1);
        if (things != null) return NotFound();
        return things;
    }

    [HttpGet("server-error")]
    public ActionResult<AppUser> GetServerError()
    {
        var things = context.Users.Find(-1) ?? throw new Exception("A bad thing has happend");

        return things;
    }

    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {

        return BadRequest("This was not a good request");
    }
}
