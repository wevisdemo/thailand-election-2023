import { NestedPeoplePartyHistory } from "@thailand-election-2023/database";
import { ImageAttachment } from "@thailand-election-2023/database/dist/models/image";

export interface PersonCustom {
  Id: number;
  Title: string;
  Name: string;
  IsMp: boolean;
  IsSenator: boolean;
  IsActive: boolean;

  // custom field
  Images: ImageAttachment[] | string | null;
  PeoplePartyHistory?: NestedPeoplePartyHistory[];
  Party: {
    Id: number;
    Name: string;
    Color?: string | null;
    Images?: string | null;
  } | null;
  countDirector: number;
  countCompShare: number;
  totalValueShare: number;
  totalPctShare: number;
}

export interface CredenData {
  full_address: string;
  financial: {
    year: string;
    income: number;
  }[];
  value_share: number;
  submit_obj_big_type: string;
  company_name_th: string;
  pct_share: number;
  obj_tname: string;
  company_id: string;
  reg_date: string;
  company_name_en: string;
  tsic: string;
  cap_amt: number;
  company_value: number;
  company_type_th: string;
  company_shareholder?: {
    Lastname: string;
    value_share: number;
    Nationality: string;
    pct_share: number;
    count_share: number;
    Firstname: string;
  }[];
  count_shareholder: number;
  gov_fund_proj: []
}