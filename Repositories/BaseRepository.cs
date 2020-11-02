using Microsoft.Extensions.Configuration;
using Npgsql;

namespace SocialMediaArchive.Repositories
{
  public class BaseRepository
  {
    protected readonly string ConnectionString;

    public BaseRepository(IConfiguration configuration)
    {
      ConnectionString = configuration.GetValue<string>("DBInfo:ConnectionString");
    }

    protected NpgsqlConnection Connection => new NpgsqlConnection(ConnectionString);
  }
}

