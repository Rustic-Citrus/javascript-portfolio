import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout.jsx";
import ReadMe from "./pages/ReadMe.jsx";
import CaesarCipher from "./pages/CaesarCipher.jsx";
import CashRegisterComponent from "./pages/CashRegisterComponent.jsx";
import PalindromeChecker from "./pages/PalindromeChecker.jsx";
import RomanNumeralConverter from "./pages/RomanNumeralConverter.jsx";
import TelephoneNumberValidator from "./pages/TelephoneNumberValidator.jsx";
import NoPage from "./pages/NoPage.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReadMe />} />
          <Route path="caesar-cipher" element={<CaesarCipher />} />
          <Route path="cash-register" element={<CashRegisterComponent />} />
          <Route path="palindrome-checker" element={<PalindromeChecker />} />
          <Route path="roman-numeral-converter" element={<RomanNumeralConverter />} />
          <Route path="telephone-number-validator" element={<TelephoneNumberValidator />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
