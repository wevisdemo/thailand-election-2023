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