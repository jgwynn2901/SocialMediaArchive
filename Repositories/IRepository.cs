using SocialMediaArchive.Models;
using System.Collections.Generic;

namespace SocialMediaArchive.Repositories
{
  public interface IRepository<T> where T : BaseModel
  {
    int Add(T item);
    bool Remove(int id);
    bool Update(T item);
    T FindById(int id);
    IEnumerable<T> FindAll();
  }
}
