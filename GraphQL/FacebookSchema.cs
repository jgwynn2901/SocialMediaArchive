using System;
using GraphQL.Types;
using GraphQL.Utilities;

namespace SocialMediaArchive.GraphQL
{
  public class FacebookSchema : Schema
  {
    public FacebookSchema(IServiceProvider  resolver) :base(resolver)
    {
      Query = resolver.GetRequiredService<FacebookQuery>();
    }
  }
}
