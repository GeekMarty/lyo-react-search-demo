using Nest;

namespace LyoES
{
    public interface IReaderService  
    {
        ISearchResponse<T> SearchInElastic<T>(string searchTerm, string userLanguageID) where T : class;
    }
}
