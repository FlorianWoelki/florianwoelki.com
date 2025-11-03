import { NextPage } from 'next';

const Imprint: NextPage = () => {
  return (
    <div className="container max-w-6xl px-8 py-16 mx-auto break-words md:px-16">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">Imprint</h1>

      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-900">Contact</h2>
      <div>
        <p>Florian Woelki</p>
        <p>c/o Online-Impressum.de #4758</p>
        <p>Europaring 90</p>
        <p>53757 Sankt Augustin</p>
        <br />
        <p>Contact email: florian1woelki@gmail.com</p>
        <p>Phone: +4915158364185</p>
        <p>TAX ID (USt-IdNr): DE350515153</p>
        <p>Business ID: DE350515153</p>
      </div>

      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-900">
        Responsible Regulatory and Supervisory Authority:
      </h2>
      <div>
        <p>Medienanstalt Berlin-Brandenburg</p>
        <p>Headquarters: Germany</p>
      </div>

      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-900">
        Liability for Content
      </h2>
      <p>
        As a service provider, we are responsible for our own content on these
        pages in accordance with Section 7(1) of the German Telemedia Act (TMG)
        under general laws. However, according to Sections 8 to 10 TMG, as a
        service provider we are not obligated to monitor transmitted or stored
        third-party information or to investigate circumstances that indicate
        illegal activity. Legal obligations to remove or block the use of
        information remain unaffected by this. However, liability in this regard
        is only possible from the time of knowledge of a specific legal
        violation. Upon becoming aware of legal violations, we will remove this
        content immediately.
      </p>

      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-900">
        Liability for Links
      </h2>
      <p>
        Our website contains links to external third-party websites. We have no
        influence over the content of these websites and therefore cannot assume
        any liability for this content. The respective provider or operator of
        the pages is always responsible for the content of the linked pages.
      </p>
      <br />
      <p>
        The linked pages were checked for possible legal violations at the time
        of linking. Illegal content was not recognizable at the time of linking.
        However, permanent monitoring of the content of linked pages is not
        reasonable without concrete evidence of a legal violation. Upon becoming
        aware of legal violations, we will remove such links immediately.
      </p>

      <h2 className="mt-8 mb-4 text-3xl font-bold text-gray-900">Copyrights</h2>
      <p>
        The content and works created by the site operators on these pages are
        subject to German copyright law. Reproduction, editing, distribution,
        and any form of exploitation beyond the limits of copyright law require
        the written consent of the respective author or creator. Downloads and
        copies of this site are only permitted for private use. Commercial use
        of our content without the consent of the author is prohibited.
      </p>
      <br />
      <p>
        Insofar as the content on this site was not created by the operator, the
        copyrights of third parties are respected. Third-party contributions are
        identified as such on this site. Should you nevertheless become aware of
        a copyright infringement, please inform us accordingly. Such content
        will then be removed immediately.
      </p>
    </div>
  );
};

export default Imprint;
