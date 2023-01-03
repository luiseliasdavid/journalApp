import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

import { useDispatch } from 'react-redux';
import { checkingCredentials } from '../../store/authSlice/authSlice';
import { checkingAuthentication} from '../../store/thunks/thunks';
import { startGoogleSignIn } from '../../store/thunks/thunks';

export const LoginPage = () => {

  const { status } = useSelector(state => state.auth)
  
  const dispatch = useDispatch()

  const {email, password, onInputChange} = useForm( {
    email: 'luis@gmail.com',
    password: '123456'
  })
  const isAuthenticated = useMemo( ()=> status === 'checking' , [status]);
  const onSubmit = (event) => {
    event.preventDefault();
   dispatch( checkingAuthentication() )
  }

  const onGoogleSingIn = () => {
    
    dispatch( startGoogleSignIn() )
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                name='email'
                onChange={ onInputChange }
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                name='password'
                onChange={onInputChange}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                type='submmit' 
                variant='contained' 
                fullWidth
                disabled={isAuthenticated}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button  
                onClick={ onGoogleSingIn } 
                variant='contained' 
                fullWidth
                disabled={isAuthenticated}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
