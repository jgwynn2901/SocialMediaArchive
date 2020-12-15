using Dapper;
using Microsoft.Extensions.Configuration;
using SocialMediaArchive.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace SocialMediaArchive.Repositories
{
  public class PostRepository : BaseRepository, IRepository<Post>
  {
    private const string Query =
      "select id, user_id as UserId, title, timestamp, post as Text, uri from \"Facebook\".posts";
    private const string UserQuery =
      "select id, name, email from \"Facebook\".users";
    private const string MediaQuery =
      "select id, post_id as PostId, Uri, Thumbnail from \"Facebook\".media";


    public PostRepository(IConfiguration configuration) : base(configuration)
    {
    }

    public int Add(Post item)
    {
      throw new NotImplementedException();
    }

    public bool Remove(int id)
    {
      throw new NotImplementedException();
    }

    public bool Update(Post item)
    {
      throw new NotImplementedException();
    }

    public Post FindById(int id)
    {
      var sql = $"{Query} where id= {id}";
      using var dbConnection = Connection;
      dbConnection.Open();
      var result = dbConnection.Query<Post>(sql).FirstOrDefault();
      Debug.Assert(result != null, nameof(result) + " != null");
      result.Media = GetMediaByPostId(result.Id);
      return result;
    }

    public IEnumerable<Post> FindAll()
    {
      const string sql = Query + " order by timestamp desc LIMIT 25";
      using var dbConnection = Connection;
      dbConnection.Open();
      return dbConnection.Query<Post>(sql);
    }
    public User FindUserById(int id)
    {
      var sql = $"{UserQuery}  where id= {id}";
      using var dbConnection = Connection;
      dbConnection.Open();
      var result = dbConnection.Query<User>(sql).FirstOrDefault();
      return result;
    }

    public List<Media> GetMediaByPostId(long id)
    {
      var sql = $"{MediaQuery} where post_id= {id}";
      using var dbConnection = Connection;
      dbConnection.Open();
       return dbConnection.Query<Media>(sql).ToList();
    }
  }
}
