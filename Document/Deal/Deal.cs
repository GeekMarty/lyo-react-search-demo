using System;

namespace LyoES.Document.Deal
{
	public class Deal
	{
		public Guid DealerID { get; set; }
		public Guid DealerBonusID { get; set; }
		public int DisplayTypeENUM { get; set; }
		public Guid TemplateID { get; set; }
		public Guid TargetGroupID { get; set; }
		public int DealTypeID { get; set; }
		public string Name { get; set; }

		//Mapping auch als int-Wert für Grid-Filterung
		public int DealDiscountTypeENUM { get; set; }
		public decimal StandardPrice { get; set; }
		public decimal ReducedPrice { get; set; }
		public string CurrencyID { get; set; }
		public decimal DiscountPercentage { get; set; }
		public decimal DiscountAmount { get; set; }
		public decimal MinimumTurnoverAmount { get; set; }
		public decimal ShoppingPointAmount { get; set; }
		public Guid EventDateID { get; set; }
		public int ValidityWeeks { get; set; }
		public Guid ValidityPeriodID { get; set; }
		public DateTime ValidityEnd { get; set; }
		public DateTime ActiveFrom { get; set; }
		public DateTime ActiveTo { get; set; }
		public int CountLimitation { get; set; }
		public Guid ValidationConditionID { get; set; }
		public string TextConditions { get; set; }
		public bool IsActive { get; set; }
		public Guid ActiveBy { get; set; }
		public DateTime ActiveOn { get; set; }
		public Guid DeactivatedBy { get; set; }
		public DateTime DeactivatedOn { get; set; }
		public bool IsDeleted { get; set; }
		public Guid DeletedBy { get; set; }
		public DateTime DeletedOn { get; set; }
		public bool IsDistributionCompleted { get; set; }
		public DateTime DistributionCompletedOn { get; set; }
		public DateTime CreatedOnLocalTime { get; set; }
		public DateTime ModifiedOnLocalTime { get; set; }
		public Guid DealerFileID { get; set; }
		public int FriendlyID { get; set; }
		public string InternNote { get; set; }
		public bool IsMultiplePickingAllowed { get; set; }
		public bool IsHiddenInSearch { get; set; }
		public int AvailableDeals { get; set; }
		public DateTime DisplayFrom { get; set; }
		public DateTime DisplayTo { get; set; }
		public bool IsPromotionDeal { get; set; }
		public Guid ConditionsOfParticipationFileID { get; set; }
		public string TargetGroupName { get; set; }
		public bool IsNewCustomerTarget { get; set; }
		public bool IsRegisteredCustomerTarget { get; set; }
		public bool IsLostCustomerTarget { get; set; }
		public int NoTurnoverDurationMonths { get; set; }
		public decimal TurnoverAmount { get; set; }
		public string TargetGroupCurrencyID { get; set; }
		public bool AllRegisteredCustomers { get; set; }
		public bool IsLyoness { get; set; }
		public bool IsLyconet { get; set; }
		public bool IsTriggeredByCooperation { get; set; }
		public bool IsCooperationCardAdded { get; set; }
		public bool NoAgeGroups { get; set; }
	}
}
