import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>André Mello</h1>
        <h2>@AndreMell</h2>
        <p>Diretor de produção</p>
        <ul>
          <li>
            <LocationIcon />
            Bluemnau, SC
          </li>
          <li>
            <CakeIcon />
            Nascido em 18 de março 1976
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
