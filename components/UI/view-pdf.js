import { useRouter } from 'next/router';
import { Document, Page } from 'react-pdf';

function ViewPdf({ pdfUrl }) {
  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default function ViewPdfPage() {
  const router = useRouter();
  const { pdfUrl } = router.query;

  return <ViewPdf pdfUrl={pdfUrl} />;
}
