using System;
using Nest;

namespace LyoES.Document.DealerSearchEntry
{
	public class DealerSearchEntry
	{
		public Guid DealerSearchEntryID { get; set; }
        public Guid DealerID { get; set; }
		public Guid DealerWebSettingID { get; set; }
		public Guid InvoicingDealerID { get; set; }
		public Guid DealerLocationID { get; set; }
		public string CountryID { get; set; }
		public string LanguageID { get; set; }
		public string DealerCountryID { get; set; }
		public long DealerNumber { get; set; }
		public string DisplayedCompanyName { get; set; }
		public int TypeENUM { get; set; }
		public string DealerCurrencyID { get; set; }
		public bool IsCouponSellingPoint { get; set; }
		public bool IsMainLocation { get; set; }
		public string Zip { get; set; }
		public string City { get; set; }
		public string Street { get; set; }
		public string Homepage { get; set; }
		public string ShortDescription { get; set; }
		public string DetailedDescription { get; set; }
		public string Keywords { get; set; }
		public bool IsDefault { get; set; }
        public bool IsRoot { get; set; }
		public double InstantReimbursementPercentage { get; set; }
		public double FriendshipBonusPercentageLevel1 { get; set; }
		public double FriendshipBonusPercentageLevel2 { get; set; }
		public double RemainingDiscountPercentage { get; set; }
		public bool HasCashbackCard { get; set; }
		public bool HasOriginalCoupon { get; set; }
		public bool HasOnlineShopping { get; set; }
		public bool HasMobileCoupon { get; set; }
		public bool IsAddressVisible { get; set; }
		public bool IsDiscountVisible { get; set; }
		public bool IsScrollbarVisible { get; set; }
		public bool IsInternationalScrollbarVisible { get; set; }
		public bool HideDiscountInPublicArea { get; set; }
		public bool IsInpublicAreaHidden { get; set; }
		public bool IsWebVisible { get; set; }
		public string DealerFilesBannerPhysicalFilename { get; set; }
		public string DealerFilesLogoPhysicalFilename { get; set; }
		public int ReimbursementSettingTypeENUM { get; set; }
		public string SpecialHints { get; set; }
		public string CustomContactDetails { get; set; }
		public DateTime WebVisibleOn { get; set; }
		public short RelevanceRanking { get; set; }
		public short Weighting { get; set; }
		public int SortIndex { get; set; }
		public string CategoryKeywords { get; set; }
		public int BusinessSectorID { get; set; }
		public Guid CouponDealerID { get; set; }
		public long CouponDealerNumber { get; set; }
		public bool IsResellerAgreementBoxVisible { get; set; }
		public string Region { get; set; }
		public string District { get; set; }
		public bool IsCardPickupPartner { get; set; }
		public long FulltextIndexKey { get; set; }
		public bool HasB2B { get; set; }
        public bool IsOgv { get; set; }
        public bool IsAppointmentRequired { get; set; }
		public bool HasCbtDeal { get; set; }
		public int SegmentType { get; set; }
		public string DiscountCurrencyID { get; set; }
		public bool IsDiscountSubCurrency { get; set; }
		public bool HasAdditionalSegments { get; set; }
		public long Booster { get; set; }
		public LatLon Location { get; set; }
	}
}