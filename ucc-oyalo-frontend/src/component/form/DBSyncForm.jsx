import { Dialog, DialogContent,TextField,InputLabel,InputAdornment,Button,Avatar } from '@mui/material'
import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import { User,Mail,Phone,MapPin } from 'lucide-react'


export default function DBSyncForm() {
    const { user } = useUser()
    const [formdata,setformdata] = useState({
        name: user.fullName,
        phone:'',
        email: user.emailAddresses[0].emailAddress,
        address:'',
        image:'',
        clerkId:'',
    })

  return (
    <Dialog open={true} fullWidth>
      <DialogContent>
        <h1 className='text-3xl font-poppins font-bold'>
            Welcome to Oyalo
        </h1>
        <p className='mb-10 font-nunito font-medium text-gray-500'>Complete your registration to start your journey</p>
        <form action="" className='grid grid-cols-2 gap-6'>
            <div className='flex items-center justify-center col-span-2'>
                <Avatar sx={{width:124, height:124}}/>
            </div>
            <div className='col-span-2'>
                <InputLabel>Your name*</InputLabel>
                <TextField
                    size='small'
                    fullWidth
                    disabled
                    type='text'
                    value={formdata.name}
                    onChange={(e)=>setformdata({...formdata, name:e.target.value})}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment>
                                <User className='mr-2'/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div>
                <InputLabel>Your Email*</InputLabel>
                <TextField
                    size='small'
                    fullWidth
                    disabled 
                    type='email'
                    value={formdata.email}
                    onChange={(e)=>setformdata({...formdata, email:e.target.value})}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment>
                                <Mail className='mr-2'/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div>
                <InputLabel>Your Phone Number*</InputLabel>
                <TextField
                    size='small'
                    fullWidth
                    type='tel'
                    value={formdata.phone}
                    onChange={(e)=>setformdata({...formdata, phone:e.target.value})}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment>
                                <Phone className='mr-2'/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div>
                <InputLabel>Your Address*</InputLabel>
                <TextField
                    size='small'
                    fullWidth
                    type='tel'
                    value={formdata.address}
                    onChange={(e)=>setformdata({...formdata, address:e.target.value})}
                    InputProps={{
                        startAdornment:(
                            <InputAdornment>
                                <MapPin className='mr-2'/>
                            </InputAdornment>
                        )
                    }}
                />
            </div>

            <div className='col-span-2 bg-secondary rounded-md'>
                <Button fullWidth sx={{py:2, color:'black'}}>
                    Confirm
                </Button>
            </div>

        </form>

      </DialogContent>
    </Dialog>
  )
}
