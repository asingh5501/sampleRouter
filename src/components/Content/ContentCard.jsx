import { Typography } from '@mui/material';

function ContentCard(props) {
  const { txt1, txt2, btnText, imgUrl, bottom } = props
  return (
      <div className=' bg-cover bg-center relative h-screen' style={{ backgroundImage: `url(${imgUrl})`, marginBottom: !bottom ? -250 : 0 }}>
        <div className='text-white absolute mt-16 ml-12'>
          <Typography variant="h4" component="h4" style={{ fontWeight: 'bold' }}>{txt1}
          </Typography>
          <Typography variant="h6" component="h6" style={{ marginTop: 15 }}>{txt2}
          </Typography>
          <button className='bg-blue-400 hover:bg-blue-500 px-14 py-2 rounded-md mt-7'>{btnText}</button>
        </div>
      </div>
  )
}

export default ContentCard