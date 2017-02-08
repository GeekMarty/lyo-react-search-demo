using LyoES.EsClientInteraction;
using Nest;

namespace LyoES.Document.DealerSearchEntry
{
	public class DealerSearchEntryOperations
	{
		private readonly ElasticClient _lyoEsClient;

		public DealerSearchEntryOperations(ElasticClient lyoEsClient)
		{
			_lyoEsClient = lyoEsClient;
		}

		public virtual ISearchResponse<Document.DealerSearchEntry.DealerSearchEntry> SearchInElastic(string searchTerm, string userLanguageID)
		{
			int potentialDealerNumber;
			int.TryParse(searchTerm, out potentialDealerNumber);

			ISearchResponse<Document.DealerSearchEntry.DealerSearchEntry> response = _lyoEsClient.Search<Document.DealerSearchEntry.DealerSearchEntry>(s => s
				.Index(IndexConfig.GetIndexName<Document.DealerSearchEntry.DealerSearchEntry>())
				.From(0)
				.Size(10)
				.Query(q => q
					.Bool(b => b
					.Should(
						o => o.Term(t => t.Field(p => p.DealerNumber).Value(potentialDealerNumber).Boost(2)),
						o => o.Match(m => m.Field(p => p.DisplayedCompanyName).Query(searchTerm).Boost(1.5)),
						o => o.Match(m => m.Field(p => p.ShortDescription).Query(searchTerm)),
						o => o.Match(m => m.Field(p => p.DetailedDescription).Query(searchTerm)),
						o => o.Match(m => m.Field(p => p.CategoryKeywords).Query(searchTerm))
					)
				.Filter(f => f.Term(t => t.Field(p => p.LanguageID).Value(userLanguageID)))
			)));

			return response;
		}
	}
}
