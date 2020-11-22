using GraphQL;
using GraphQL.Types;
using SocialMediaArchive.GraphQL.Types;
using SocialMediaArchive.Repositories;

namespace SocialMediaArchive.GraphQL
{
  public class FacebookQuery : ObjectGraphType
  {
    public FacebookQuery(PostRepository repository)
    {
      int id;

      Name = "Query";

      Field<ListGraphType<PostType>>(
        name:"posts", resolve: context => repository.FindAll());

      Field<PostType>(
        name: "post",
        arguments: new QueryArguments(new 
          QueryArgument<IntGraphType> { Name = "id" }),
        resolve: context =>
        {
          id = context.GetArgument<int>("id");
          return repository.FindById(id);
        }
      );

      Field<UserType>(
        name: "user",
        arguments: new QueryArguments(new 
          QueryArgument<IntGraphType> { Name = "id" }),
        resolve: context =>
        {
          id = context.GetArgument<int>("id");
          return repository.FindUserById(id);
        }
      );
      
    }
  }
}
