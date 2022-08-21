import React from 'react';
import { CDBBox,CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

function Footer () {
  return (
        <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="logo.png"
                width="80px"
              />
            </a>
          </CDBBox>
          <CDBBox display="flex" style={{ width: '50%' }} justifyContent="between">
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Info
              </p>
              <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">About Us</CDBFooterLink>
                <CDBFooterLink href="/">Contact</CDBFooterLink>
                <CDBFooterLink href="/">Blog</CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Facilities
              </p>
              <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Buy</CDBFooterLink>
                <CDBFooterLink href="/">Sell</CDBFooterLink>
                <CDBFooterLink href="/">Logistics</CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4" justifyContent="between">
          <small className="ml-2">&copy; indhan, 2022. All rights reserved.</small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
}

export default Footer;