import React from 'react';
import Image from 'next/image';
import { profileConfig } from '../../libs/profileConfig';

export default function Profile() {
  return (
    <section className="profile-section">
      <div className="profile-card">
        <div className="profile-image">
          {profileConfig.avatar ? (
            <Image
              src={profileConfig.avatar}
              alt={profileConfig.name}
              width={80}
              height={80}
              className="profile-avatar"
            />
          ) : (
            <div className="profile-avatar-placeholder">
              <span className="avatar-text">{profileConfig.name.charAt(0)}</span>
            </div>
          )}
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{profileConfig.name}</h3>
          <p className="profile-bio">{profileConfig.bio}</p>
          <div className="profile-links">
            {profileConfig.links.twitter && (
              <a href={profileConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="profile-link">
                X (Twitter)
              </a>
            )}
            {profileConfig.links.instagram && (
              <a href={profileConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="profile-link">
                Instagram
              </a>
            )}
            {profileConfig.links.linkedin && (
              <a href={profileConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="profile-link">
                LinkedIn
              </a>
            )}
            {profileConfig.links.github && (
              <a href={profileConfig.links.github} target="_blank" rel="noopener noreferrer" className="profile-link">
                GitHub
              </a>
            )}
            {profileConfig.links.website && (
              <a href={profileConfig.links.website} target="_blank" rel="noopener noreferrer" className="profile-link">
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 