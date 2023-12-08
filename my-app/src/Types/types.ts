export type FilmsProps = {
  description: string;
  id: string;
  image: string;
  original_title: string;
  release_date: string;
  title: string;
};

export type MenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
