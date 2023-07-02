import React, { createContext, useState } from 'react';

const CompanyProfileContext = createContext();

const CompanyProfileProvider = ({ children }) => {
  const [companyProfile, setCompanyProfile] = useState({
    companyName: 'ABC Corporation',
    yearEst: '2005',
    companySize: 'Large',
    noOfEmployees: '500+',
    industry: 'Technology',
    productsAndServices: 'Software Development',
    areasServed: 'Global',
    taxID: '123456789',
    poDeliveryEmail: 'info@abccorp.com',
    ownershipType: 'Public',
  });

  const updateCompanyProfile = (newProfile) => {
    setCompanyProfile((prevProfile) => ({
      ...prevProfile,
      ...newProfile,
    }));
  };

  return (
    <CompanyProfileContext.Provider value={{ companyProfile, updateCompanyProfile }}>
      {children}
    </CompanyProfileContext.Provider>
  );
};

export { CompanyProfileContext, CompanyProfileProvider };
