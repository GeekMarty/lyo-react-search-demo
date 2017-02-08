using LyoES.EsClientInteraction;
using Nest;

namespace LyoES.Document.Deal
{
	public class DealOperations
	{
		private readonly ElasticClient _lyoEsClient;

		public DealOperations(ElasticClient lyoEsClient)
		{
			_lyoEsClient = lyoEsClient;
		}

		public virtual ISearchResponse<Deal> SearchInElastic(string searchTerm, string userLanguageID)
		{
			int potentialFriendlyID;
			int.TryParse(searchTerm, out potentialFriendlyID);

			ISearchResponse<Deal> response = _lyoEsClient.Search<Deal>(s => s
				.Index(IndexConfig.GetIndexName<Deal>())
				.From(0)
				.Size(10)
				.Query(q => q
					.Bool(b => b
					.Should(
						o => o.Term(t => t.Field(p => p.FriendlyID).Value(potentialFriendlyID).Boost(2)),
						o => o.Match(m => m.Field(p => p.DealerID).Query(searchTerm)),
						// o => o.Match(m => m.Field(p => p.Name).Query(searchTerm))
						o => o.MatchPhrasePrefix(m => m.Field(p => p.Name).Query(searchTerm).MaxExpansions(50))
					)
			)));

			return response;
		}
	}
}
