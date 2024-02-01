const FooterComponent = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-light pt-3 px-2 text-center fs-small" id="footer">
      <p>
        © {year} WaveCheck -{" "}
        <a href="https://portfolio-emanuele-syrbe.vercel.app/" target="_blank" rel="noreferrer">
          Emanuele Syrbe
        </a>
      </p>
      <p>
        Powered by{" "}
        <a href="https://open-meteo.com/en/docs" target="_blank" rel="noreferrer">
          OpenWeatherAPI
        </a>
      </p>
    </footer>
  );
};
export default FooterComponent;
