export type TaskProps = {
  id: string;
  content?: string;
  status: 'completed' | 'in progress';
};

export type TaskPropsWithDelete = TaskProps & {
  onDelete: (task: string) => void;
};
