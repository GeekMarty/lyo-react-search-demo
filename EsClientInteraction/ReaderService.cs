using System;
using System.Collections.Generic;
// using System.ComponentModel.Design;
using System.Linq;
using LyoES.Document.Deal;
using LyoES.Document.DealerSearchEntry;
using LyoES.Models;
using Nest;

namespace LyoES.EsClientInteraction
{
	public class ReaderService : IReaderService
	{
		private readonly Uri _lyoEsNode = new Uri("yourConnectionUrl");
		private readonly ElasticClient _lyoEsClient;
		private readonly DealerSearchEntryOperations _dealerSearchEntryOperations;
		private readonly DealOperations _dealOperations;
		
		public ReaderService()
		{
			ConnectionSettings esSettings = new ConnectionSettings(_lyoEsNode)
				//.DefaultIndex("dealersearchentries") Optional. Wir geben den Index explizit bei jeder Query an
				//.MapDefaultTypeIndices(x => x.Add(typeof(DealerSearchEntry), "dealersearchentries"))
				.DefaultFieldNameInferrer(f => f.ToLower()) // Übernimmt den Namen des Fields im Model 1:1 für die Suche (zB CreatedBy -> "CreatedBy", default ist "createdBy" (camelCase))
				//.BasicAuthentication("elastic", "uns4f3") Ohne X-Pack Security nicht notwendig
				.RequestTimeout(TimeSpan.FromSeconds(5))
				.DisableDirectStreaming();

			_lyoEsClient = new ElasticClient(esSettings);
			_dealerSearchEntryOperations = new DealerSearchEntryOperations(_lyoEsClient);
			_dealOperations = new DealOperations(_lyoEsClient);
		}

		public virtual ISearchResponse<T> SearchInElastic<T>(string searchTerm, string userLanguageID) where T : class
		{
			object response = null;

			if (typeof(T) == typeof(DealerSearchEntry))
			{
				response = _dealerSearchEntryOperations.SearchInElastic(searchTerm, userLanguageID);
			}

			if (typeof (T) == typeof (Deal))
			{
				response = _dealOperations.SearchInElastic(searchTerm, userLanguageID);
			}

			if (response == null)
			{
				throw new InvalidOperationException("Type not supported '" + nameof(T) + "'");
			}

			return response as ISearchResponse<T>;
		}
	}
}
