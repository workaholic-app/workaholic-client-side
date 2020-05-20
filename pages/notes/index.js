import Nav from '../../components/Nav';
import FullPageModal from '../../components/FullPageModal';
import Notes from '../../components/NotesContainer';

export default function NotesIndex() {
  return (
    <>
      <Nav />
      <FullPageModal>
        {/* <p>Hello Next.js</p> */}
        <Notes />
      </FullPageModal>
    </>
  )
}