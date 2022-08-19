interface ScrollCounerProps {
  sections: ScrollSectionProps[];
}
interface ScrollSectionProps {
  ref: MutableRefObject<HTMLDivElement>;
  isOnScreen: boolean;
}
