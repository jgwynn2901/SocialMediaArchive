using GraphQL.Types;
using SocialMediaArchive.Models;

namespace SocialMediaArchive.GraphQL.Types
{
  public sealed class MediaType : ObjectGraphType<Media>
  {
    public MediaType()
    {
      Field(t => t.Id).Description("Media's Id (Primary Key)");
      Field(t => t.PostId).Description("Id of Post");
      Field(t => t.Thumbnail).Description("Thumbnail");
      Field(t => t.Uri).Description("path to media");
    }
  }
}
