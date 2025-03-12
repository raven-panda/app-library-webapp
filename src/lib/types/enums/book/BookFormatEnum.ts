export type BookFormatType =
// Physical
| "PAPERBACK"
| "POCKET"
// Ebook
| "EPUB"
| "PDF"
| "AUDIO"
| "DAISY";

export const BookFormatLabels: Record<BookFormatType, string> = {
  PAPERBACK: "Grand format / Broché",
  POCKET: "Poche",
  EPUB: "EPUB",
  PDF: "PDF",
  // MP3, WAV or AAC
  AUDIO: "Format audio",
  DAISY: "Daisy"
};