import React from "react";
import { ModalHeaderWrapper } from "src/styled components/modal styles/ModalHeaderWrapper";
import { LOGO_IMG_LINK } from "src/sdk constants/assets_link";

type Props = {
  header_open: boolean,
};

export const ModalHeader: React.FC<Props> = ({ header_open}) => {
 
  return (
    <>
      <ModalHeaderWrapper>          
          
            <div className="logo_container">
              <img className="logo" src={LOGO_IMG_LINK} alt="feexpay" />
            </div>
            <div className="header_text">
              MARCHAND : E-Services SONEB <br />D : udozdhjmm_njdz:kjdsyasv
            </div>

     </ModalHeaderWrapper>  
         
       
    </>
  );
};
