using API.DTOs;
using API.Entities;

namespace API.Interfaces;

public interface IUserRepository
{
    void Update(AppUser user);
    Task<bool> SaveAllAsynk();
    Task<IEnumerable<AppUser>> GetUsersAsynk();
    Task<AppUser?> GetUserByIdAsynk(int id);
    Task<AppUser?> GetUserByUsernameAsynk(string username);
    Task<IEnumerable<MemberDto>?> GetMembersAsynk();
    Task<MemberDto?> GetMemberAsynk(string username);

}
