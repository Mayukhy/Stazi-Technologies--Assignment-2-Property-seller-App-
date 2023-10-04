import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function PropertyTabs({ stateProperties }) {
  const [value, setValue] = React.useState('Overview');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    "Overview",
    "Property",
    "Contact"
  ]

  return (
    <Box sx={{ color: 'white' }}>
      <Tabs textColor='inherit' TabIndicatorProps={{ sx: { bgcolor: 'white' } }} sx={{ background: 'transtarent', color: 'white' }} value={value} onChange={handleChange}>
        {tabs?.map((tab) => (
          <Tab sx={{ color: 'whitesmoke' }} label={tab} value={tab} />
        ))}
      </Tabs>

      <div className=' h-[175px] overflow-y-auto scroll-smooth '>
        {value === 'Overview' &&
          <p className=' mt-2'>
            Location : {stateProperties?.name}, {stateProperties?.location} is a ready-to-move housing society.
            <br />
            <br />
            Features :
            <br />
            • It offers apartments in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and conveniences.
            <br />
            • There are 2BHK and 3BHK apartments available nearby.
            <br />
            • This housing society is now ready to be called home as families have started moving in.
          </p>}
        {value === 'Property' &&

          <div className=' mt-2 flex flex-col gap-2'>
            <p>• 2 Rooms</p>
            <p>• 4 Bed </p>
            <p>• 1 Bathroom</p>
            <p>• Area {stateProperties?.size} SFT</p>
          </div>
        }

        {value === 'Contact' &&

          <div className=' mt-2 flex flex-col gap-2'>
            <p>Contact No : +91 8420636379</p>
          </div>
        }
      </div>


    </Box>
  );
}
