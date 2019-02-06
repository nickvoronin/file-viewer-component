import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.licenseMessage} />
        <sup>&#9400;</sup>
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: (
              <A href="https://www.linkedin.com/in/nicolaivoronin/">
                Nicolai Voronin
              </A>
            ),
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
