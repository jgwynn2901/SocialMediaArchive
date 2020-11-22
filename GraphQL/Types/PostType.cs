using GraphQL.Types;
using SocialMediaArchive.Models;

namespace SocialMediaArchive.GraphQL.Types
{
  public sealed class PostType : ObjectGraphType<Post>
  {
    public PostType()
    {
      Field(t => t.Id).Description("Post's Id (Primary Key)");
      Field(t => t.Title).Description("Title of Post");
      Field(t => t.Text).Description("Text of Post");
      Field(t => t.Timestamp).Description("Unix Timestamp => to be converted");
      Field(t => t.Uri).Description("path to media");
    }
  }
}
