using System.Collections.Generic;

namespace LyoES.EsClientInteraction
{
    public static class IndexConfig
	{
		public static IDictionary<string, string> TypeToIndexNameAssignments = new Dictionary<string, string>();

		static IndexConfig()
		{
			TypeToIndexNameAssignments.Add("DealerSearchEntry", "dealersearchentries");
			TypeToIndexNameAssignments.Add("Deal", "deals");
			TypeToIndexNameAssignments.Add("DealerBuyingCustomer", "dealerbuyingcustomers");
			TypeToIndexNameAssignments.Add("CustomerDealerRegistration", "customerdealerregistrations");
		}

		public static string GetIndexName<T>()
		{
			return TypeToIndexNameAssignments[typeof(T).Name];
		}
	}
}
