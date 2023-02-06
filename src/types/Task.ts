export type TaskProps = {
  id: string;
  content?: string;
  status: 'completed' | 'in progress';
};

export type TaskPropsWithFunctions = TaskProps & {
  onDelete: (task: string) => void;
  onUpdate: (task: string) => void;
};
