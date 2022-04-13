export interface OBTurType {
  id: number;
  text: string;
  element: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  showNext: boolean;
  actionElement: boolean;
  pushPage: string;
  targetElement?: string;
}
