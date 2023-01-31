const styles = {
  footer: {
    width: '100%',
    left: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
};

export const Footer = () => (
  <footer style={styles.footer}>
    <p>PhoneBook &copy; 2023 by&nbsp;</p>{' '}
    <a
      style={styles.link}
      href="https://github.com/KsushkaKov"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span role="img" aria-label="Telephone icon">
        ☎️{' '}
      </span>{' '}
      Ksenia Kovalenko
    </a>
  </footer>
);
