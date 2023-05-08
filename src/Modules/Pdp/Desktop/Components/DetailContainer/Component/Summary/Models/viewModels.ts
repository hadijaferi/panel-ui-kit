import { IMieter } from "../../../../../../../../infrastructure/Models/Entity/IMieter";

export interface PdpDetailSummaryProps {
  selectedProductCountToAdd: number;
  setSelectedProductCountToAdd: Function;
  mieter: IMieter;
}
