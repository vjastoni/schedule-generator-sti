import { useAuth } from '@/hooks/useAuth';
import style from './index.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar/navbar';
import OptionButton from '../../components/button/OptionButton';
import AddSchedule from '../../components/modal/add_schedule/AddSchedule';
import EditSchedule from '../../components/modal/edit_schedule/EditSchedule';
import EditForm from '../../components/modal/edit_schedule/EditForm';
import DeleteSchedule from '../../components/modal/delete_schedule/DeleteSchedule';
import DeleteModal from '../../components/modal/delete_schedule/DeleteModal';
import NewSchedule from '../../components/modal/new_schedule/NewSchedule';
import Calendar from '../../components/calendar/calendar';

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [addSchedModal, setAddSchedModal] = useState(false);
  const [editSchedModal, setEditSchedModal] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [deleteSchedModal, setDeleteSchedModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [newSchedModal, setNewSchedModal] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);

  const addSchedModalHandler = () => {
    setAddSchedModal(!addSchedModal);
  };

  const editSchedModalHandler = () => {
    setEditSchedModal(!editSchedModal);
  };

  const openEditFormHandler = () => {
    setEditForm(!editForm);
    setEditSchedModal(false);
  };

  const deleteSchedModalHandler = () => {
    setDeleteSchedModal(!deleteSchedModal);
  };

  const openDeleteModalHandle = () => {
    setDeleteModal(!deleteModal);
    setDeleteSchedModal(false);
  };

  const newSchedModalHandler = () => {
    setNewSchedModal(!newSchedModal);
  };

  return (
    <div className={style.container}>
      <Navbar />
      {addSchedModal && <AddSchedule onConfirm={addSchedModalHandler} />}
      {editSchedModal && (
        <EditSchedule
          onViewModal={openEditFormHandler}
          onConfirm={editSchedModalHandler}
        />
      )}
      {editForm && <EditForm onConfirm={openEditFormHandler} />}
      {deleteSchedModal && (
        <DeleteSchedule
          onDelete={openDeleteModalHandle}
          onConfirm={deleteSchedModalHandler}
        />
      )}
      {deleteModal && <DeleteModal onConfirm={openDeleteModalHandle} />}
      {newSchedModal && <NewSchedule onConfirm={newSchedModalHandler} />}
      <div className={style.calendar_container}>
        <div className={style.options}>
          <OptionButton
            onClick={addSchedModalHandler}
            image="/add_sched.png"
            label="Add Schedule"
          />
          <OptionButton
            onClick={editSchedModalHandler}
            image="/edit_sched.png"
            label="Edit Schedule"
          />
          <OptionButton
            onClick={deleteSchedModalHandler}
            image="/delete_sched.png"
            label="Delete Schedule"
          />
          <OptionButton image="/save_sched.png" label="Save Schedule" />
          <OptionButton image="/print_sched.png" label="Print" />
          <OptionButton image="/export_sched.png" label="Export" />
          <OptionButton image="/import_sched.png" label="Import" />
          <OptionButton
            onClick={newSchedModalHandler}
            image="/sched.png"
            label="New Schedule"
          />
        </div>
        <div className={style.calendar}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
