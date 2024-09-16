import React from 'react'
import { Redirect } from 'expo-router';
import useAuth from '../hooks/useAuth';

export default function Root() {
    const { user } = useAuth();

    return user ? <Redirect href={"/home"} /> : <Redirect href={"/welcome"} />
}