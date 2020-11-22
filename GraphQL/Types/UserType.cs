using GraphQL.Types;
using SocialMediaArchive.Models;

namespace SocialMediaArchive.GraphQL.Types
{
  public sealed class UserType : ObjectGraphType<User>
  {
    public UserType()
    {
      Field(t => t.Id);
      Field(t => t.Name);
      Field(t => t.Password);
      Field(t => t.Email);
    }
  }
}
