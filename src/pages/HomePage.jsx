import { useChatStore } from '../store/useChatStore'
import ChatContainer from '../components/ChatContainer';
import NoChatSelected from '../components/NoChatSelected';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const {selectedUser} = useChatStore();
  return (
    <div className='h-[638px] bg-blue-100'>
      <div className='flex items-center justify-center px-4' style={{paddingTop: "30px"}}>
        <div className='bg-blue-50 rounded-lg shadow-md w-full max-w-6xl h-[500px]'>
          <div className='flex justify-between h-full rounded-md overflow-hidden'>
            <Sidebar/>
            {!selectedUser? <NoChatSelected/> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage