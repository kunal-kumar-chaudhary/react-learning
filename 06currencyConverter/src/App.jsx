import { useContext, useState, useEffect } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import InputAmount from "./components/InputAmount.jsx";
import SelectCountry from "./components/SelectCountry.jsx";
import SwitchCurrency from "./components/SwitchCurrency.jsx";
import { CurrencyContext } from "./context/CurrencyContext.jsx";
import axios from "axios";

function App() {
  const { 
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  } = useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState(0);
  const codeFromCurrency = fromCurrency.split(" ")[1];
  const codeToCurrency = toCurrency.split(" ")[1];
  console.log(resultCurrency)
 
  useEffect(() => { 
    if(firstAmount) {
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "fca_live_krSu73qS4nI78Ym11oDBQl3scLoUs832gTHZMrtK",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency
        }
      }) 
        .then(response => setResultCurrency(response.data.data[codeToCurrency]))
        .catch(error => console.log(error))
    }
  }, [firstAmount, fromCurrency, toCurrency])


  const boxStyles = {
    background: "#fdfdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative",
  };

  return (
    <>
      <Container maxWidth="md" sx={boxStyles}>
        <Typography variant="h5" sx={{ marginBottom: "2rem" }}>
          Stay ahead with accurate conversions
        </Typography>
        <Grid container spacing={2}>
          <InputAmount />
          <SelectCountry
            value={fromCurrency}
            setValue={setFromCurrency}
            label="From"
          />
          <SwitchCurrency />
          <SelectCountry
            value={toCurrency}
            setValue={setToCurrency}
            label="To"
          />

          {firstAmount ? (
            <Box sx={{ textAlign: "left ", marginTop: "1rem"}}>
              <Typography>{firstAmount} {fromCurrency} = </Typography>
              <Typography variant="h5" sx={{ marginTop: "5px", fontSize: "bold"}}>{resultCurrency*firstAmount} {toCurrency}</Typography>
            </Box>

          ) : ""}

        </Grid>
      </Container>
    </>
  );
}

export default App;
