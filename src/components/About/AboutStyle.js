import styled from 'styled-components';

export const BioContainer = styled.div`
  white-space: nowrap; /* Prevents wrapping */
  overflow: hidden; /* Ensures content doesn't overflow */
  text-overflow: ellipsis; /* Adds "..." if text overflows */
  max-width: 100%; /* Keeps the container width in check */
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
