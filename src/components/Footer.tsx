import React from "react";
import {useThemeConfig} from '@docusaurus/theme-common';

export const Footer = (props) => {
  const {footer} = useThemeConfig();
  const columns = props.columns || [];
  const emailItems = props.emailItems || [];
  const socialItems = props.socialItems || [];
  const contactsColumnTitle = props.contactsColumnTitle || "";
  const addressItems = props.addressItems || [];
 
  if (!footer) {
    return null;
  }
  const {copyright} = footer;

  return (
    <footer id="footer-3" className="pt-100 footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-xl-3">
            <div className="footer-info">
              <img
                className="footer-logo"
                src={props.logoSrc}
                alt="footer-logo"
              />
            </div>
          </div>

          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={`col-sm-12 col-md-3 col-xl-3`}>
              <div className={`footer-links fl-${columnIndex + 1}`}>
                {column.map((link, index) => (
                  <React.Fragment key={index}>
                    {index === 0 && <h6 className="s-17 w-700">{link.title}</h6>}
                    <ul className="foo-links clearfix">
                      <li key={index}>
                        <p>
                          <a
                            style={{ color: "gray", textDecoration: "none" }}
                            href={link.url}
                          >
                            {link.linkTitle}
                          </a>
                        </p>
                      </li>
                    </ul>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}

          <div className="col-sm-12 col-md-3 col-xl-3">
            <div className="footer-links fl-4">
              <h6 className="s-17 w-700">{contactsColumnTitle}</h6>

              {addressItems.map((address) => (
                  <div>{address}</div>
              ))}
              <br/>
              {emailItems.map((email) => (
                  <p className="footer-mail-link ico-25">
                    <a href={email.emailLink}>{email.email}</a>
                  </p>
              ))}
              
              <ul className="footer-socials ico-25 text-center clearfix">
                {socialItems.map((social, index) => (
                  <li key={index}>
                    <a href={social.url}>
                      <span
                        style={{ color: "gray", textDecoration: "none" }}
                        className={social.icon}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            <div className="col">
              <div className="footer-copyright">
                <p className="p-sm">{copyright}</p>
              </div>
            </div>

            <div className="col">
              <div className="bottom-secondary-link ico-15 text-end">
                <p className="p-sm">
                  <a href={props.copyrightSecondaryTextUrl}>
                    {props.copyrightSecondaryText}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
