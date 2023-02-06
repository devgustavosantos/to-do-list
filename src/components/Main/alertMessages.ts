import Swal from 'sweetalert2';

import { Colors } from '../../styles/colors';

export function AlertMessages() {
  function taskAdded() {
    Swal.fire({
      position: 'top',
      icon: 'info',
      text: 'Tarefa adicionada com sucesso.',
      showConfirmButton: false,
      timer: 2000,
      background: Colors.gray500,
      color: Colors.gray100,
      toast: true,
      timerProgressBar: true,
    });
  }

  function taskCompleted() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      text: 'Tarefa concluída com sucesso.',
      showConfirmButton: false,
      timer: 2000,
      background: Colors.gray500,
      color: Colors.gray100,
      toast: true,
      timerProgressBar: true,
    });
  }

  async function onDeleteTask() {
    const response = await Swal.fire({
      position: 'center',
      icon: 'question',
      text: 'Tem certeza que deseja excluir a tarefa?',
      background: Colors.gray500,
      color: Colors.gray100,
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
    });

    if (!response.isConfirmed) {
      throw new Error('The user cancelled the deletion.');
    }

    Swal.fire({
      position: 'top',
      icon: 'warning',
      text: 'Tarefa excluída com sucesso.',
      showConfirmButton: false,
      timer: 2000,
      background: Colors.gray500,
      color: Colors.gray100,
      toast: true,
      timerProgressBar: true,
    });
  }

  return { taskAdded, taskCompleted, onDeleteTask };
}
