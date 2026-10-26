import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  WidthType,
  ShadingType,
  PageNumber,
} from 'docx';
import fs from 'node:fs';
import path from 'node:path';

const domain = 'aashish-nyk.vercel.app';
const dateStr = '2026-10-27';

// Colors
const NAVY = '1B2A4A';
const ACCENT_BLUE = '2563EB';
const GREEN = '16A34A';
const AMBER = 'D97706';
const RED = 'DC2626';
const ROW_BG = 'F8F9FA';
const BORDER_COLOR = 'E2E8F0';
const TEXT_DARK = '1E293B';
const BOX_BG = 'EFF6FF';
const WHITE = 'FFFFFF';
const GRAY_TEXT = '94A3B8';

const cellBorder = {
  top: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
  bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
  left: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
  right: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR },
};

const emptyBorder = {
  top: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  left: { style: BorderStyle.NONE, size: 0, color: 'auto' },
  right: { style: BorderStyle.NONE, size: 0, color: 'auto' },
};

// Cover page section
const coverSection = {
  properties: {
    page: {
      size: { width: 12240, height: 15840 },
      margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
    },
  },
  children: [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 1800, after: 200 },
      children: [
        new TextRun({
          text: domain,
          bold: true,
          size: 72, // 36pt
          font: 'Arial',
          color: NAVY,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
      children: [
        new TextRun({
          text: 'SEO / GEO / AEO Comprehensive Audit & Action Plan',
          bold: true,
          size: 36, // 18pt
          font: 'Arial',
          color: ACCENT_BLUE,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 800 },
      children: [
        new TextRun({
          text: 'FULL AUDIT & IMPLEMENTATION STRATEGY FOR SOFTWARE ENGINEER BRANDING',
          bold: true,
          size: 22, // 11pt
          font: 'Arial',
          color: TEXT_DARK,
        }),
      ],
    }),
    // 3 score cards table
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: emptyBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 3120, type: WidthType.DXA },
              shading: { type: ShadingType.CLEAR, fill: RED },
              margins: { top: 300, bottom: 300, left: 200, right: 200 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: 'SEO', bold: true, size: 20, color: WHITE, font: 'Arial' })],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: '3 / 10', bold: true, size: 60, color: WHITE, font: 'Arial' })],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: 'Critical Issues (Noindex)', italics: true, size: 18, color: WHITE, font: 'Arial' })],
                }),
              ],
            }),
            new TableCell({
              width: { size: 3120, type: WidthType.DXA },
              shading: { type: ShadingType.CLEAR, fill: AMBER },
              margins: { top: 300, bottom: 300, left: 200, right: 200 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: 'GEO', bold: true, size: 20, color: WHITE, font: 'Arial' })],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: '4 / 10', bold: true, size: 60, color: WHITE, font: 'Arial' })],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: 'Missing Entity Graph', italics: true, size: 18, color: WHITE, font: 'Arial' })],
                }),
              ],
            }),
            new TableCell({
              width: { size: 3120, type: WidthType.DXA },
              shading: { type: ShadingType.CLEAR, fill: RED },
              margins: { top: 300, bottom: 300, left: 200, right: 200 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: 'AEO', bold: true, size: 20, color: WHITE, font: 'Arial' })],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: '3 / 10', bold: true, size: 60, color: WHITE, font: 'Arial' })],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [new TextRun({ text: 'Zero Structured Q&A', italics: true, size: 18, color: WHITE, font: 'Arial' })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 2400, after: 100 },
      children: [
        new TextRun({
          text: `Audit Date: ${dateStr} • Target: Personal Brand & Client Acquisition`,
          size: 18,
          color: GRAY_TEXT,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: 'Audited & Prepared for Aashish Nayak — Software Engineer',
          size: 18,
          color: GRAY_TEXT,
          font: 'Arial',
        }),
      ],
    }),
  ],
};

// Main body section
const mainSection = {
  properties: {
    page: {
      size: { width: 12240, height: 15840 },
      margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
    },
  },
  headers: {
    default: new Header({
      children: [
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({ text: `${domain}  |  `, size: 18, color: GRAY_TEXT, font: 'Arial' }),
            new TextRun({ text: 'SEO / GEO / AEO Audit Report', bold: true, size: 18, color: NAVY, font: 'Arial' }),
          ],
        }),
      ],
    }),
  },
  footers: {
    default: new Footer({
      children: [
        new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({ text: 'Page ', size: 18, color: GRAY_TEXT, font: 'Arial' }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: GRAY_TEXT, font: 'Arial' }),
            new TextRun({ text: ' of ', size: 18, color: GRAY_TEXT, font: 'Arial' }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, color: GRAY_TEXT, font: 'Arial' }),
          ],
        }),
      ],
    }),
  },
  children: [
    // 1. Executive Summary
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 200, after: 200 },
      children: [new TextRun({ text: '1. Executive Summary', bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: BOX_BG },
              margins: { top: 200, bottom: 200, left: 240, right: 240 },
              children: [
                new Paragraph({
                  spacing: { after: 140 },
                  children: [
                    new TextRun({
                      text: "Aashish Nayak's portfolio showcases exceptional genuine engineering work (5+ years in Laravel, API integrations, real-time WebSockets, WebAssembly, and AI applications), a clean aesthetic, and great responsiveness. However, the production deployment is currently completely invisible to search engines due to a hardcoded or fallback 'noindex, follow' tag and a robots.txt 'Disallow: /' directive caused by an unconfigured SITE_URL environment variable.",
                      size: 22,
                      font: 'Arial',
                      color: TEXT_DARK,
                    }),
                  ],
                }),
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "Furthermore, the site is under-optimized for modern AI search engines (Perplexity, ChatGPT Search, Gemini) and featured answers (AEO). By setting the proper canonical URL, fixing crawler directives, publishing an XML sitemap, embedding comprehensive JSON-LD schemas (Person, WebSite, ProfessionalService, ProfilePage, SoftwareApplication, and FAQ), and adding high-impact technical keywords tailored to hiring managers and client founders, this portfolio will become an authoritative digital brand asset that attracts both recruiters and freelance clients.",
                      size: 22,
                      font: 'Arial',
                      color: TEXT_DARK,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    new Paragraph({ spacing: { after: 200 } }),
    // Scores Table
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: NAVY },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: 'Dimension', bold: true, color: WHITE, font: 'Arial', size: 20 })] })],
            }),
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: NAVY },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: 'Score', bold: true, color: WHITE, font: 'Arial', size: 20 })] })],
            }),
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: NAVY },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: 'Status', bold: true, color: WHITE, font: 'Arial', size: 20 })] })],
            }),
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: NAVY },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: [new Paragraph({ children: [new TextRun({ text: 'Key Takeaway', bold: true, color: WHITE, font: 'Arial', size: 20 })] })],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'SEO (Search Engines)', bold: true, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3 / 10', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Needs Urgent Fix', font: 'Arial', size: 20 })] })] }),
            new TableCell({ margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Blocked by robots.txt Disallow and noindex tag; sitemap.xml 404.', font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'GEO (Generative Engines)', bold: true, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: AMBER }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '4 / 10', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Below Average', font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Missing entity graph, service offerings, and citation-friendly factual data.', font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'AEO (Answer Engines & Voice)', bold: true, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '3 / 10', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Needs Work', font: 'Arial', size: 20 })] })] }),
            new TableCell({ margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'No question-phrased headings, direct answer paragraphs, or FAQ schema.', font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Combined Index', bold: true, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: '10 / 30', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Significant Opportunity', bold: true, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 100, bottom: 100, left: 160, right: 160 }, children: [new Paragraph({ children: [new TextRun({ text: 'Immediate 3x upside upon executing the implementation plan.', font: 'Arial', size: 20 })] })] }),
          ],
        }),
      ],
    }),

    // 2. Pages Audited
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      children: [new TextRun({ text: '2. Pages Audited Across the Property', bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'URL Route', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Type', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Findings & Signal Observations', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Homepage', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Rich experience & skills info; blocked by noindex; lacks services & FAQ section.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/about/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'About & E-E-A-T', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Good biography and timeline; needs client service clarity and expanded credentials.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/projects/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Case Studies', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '14 documented projects with filtering; lacks SoftwareApplication structured data.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/projects/[slug]/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Deep Project Pages', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'High engineering depth (InterPrep, Worldlytic, Wickto); need breadcrumb & tech tags.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/experience/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Work History', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Strong verifiable roles (Fondos Tech, AddWeb, Scrum Digital); needs schema worksFor.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/resume/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Recruiter Resume', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Concise summary of experience, education, skills, and contact points.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: '/contact/', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Inquiries & Leads', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Good clipboard copy & email CTA; needs service inquiry guidance & ContactPoint.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
      ],
    }),

    // 3. Technical SEO Analysis
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      children: [new TextRun({ text: '3. Technical SEO Deep Dive', bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Signal', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Observed Finding', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Status', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Robots Crawlability', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Robots.txt returns 'Disallow: /' and layout renders 'noindex, follow' on all pages because SITE_URL defaults to undefined.", font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'CRITICAL', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'XML Sitemap', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Sitemap returns 404 Not Found on Vercel because Astro sitemap integration was conditional on site config.", font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'CRITICAL', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Canonical Tags', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Canonical link tag omitted when site origin is not defined.', font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'HIGH', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'OpenGraph & Twitter Card', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "og:image and og:url omitted; twitter:card is generic 'summary' without rich image preview or creator handle.", font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: AMBER }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'ATTENTION', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Keyword Targeting', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Mentions 'software engineer' but misses high-intent hiring & client terms ('Freelance Full-Stack Developer', 'Hire Laravel Consultant', 'Jaipur Software Engineer').", font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: AMBER }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'OPPORTUNITY', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
          ],
        }),
      ],
    }),

    // 4. GEO Analysis
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      children: [new TextRun({ text: '4. GEO (Generative Engine Optimization) Assessment', bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Paragraph({
      spacing: { after: 140 },
      children: [
        new TextRun({
          text: 'AI engines like Perplexity, ChatGPT Search, and Google Gemini do not just match strings—they resolve entities. To position Aashish Nayak as an authoritative answer when someone queries "Who is a top Laravel developer for contract work in Jaipur?" or "Full-stack engineer with real-time WebSocket experience", the site must express structured entity relations.',
          size: 22,
          font: 'Arial',
        }),
      ],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'GEO Pillar', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Current State', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Strategic Fix', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'E-E-A-T & Authority', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Basic 'Person' schema with name and GitHub/LinkedIn only.", font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Expand JSON-LD with 'alumniOf', 'knowsAbout', 'worksFor', 'award', and geo coordinates for Jaipur, India.", font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Factual Density & Proof', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Features are described qualitatively without citable production statistics.", font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Embed concrete benchmarks (e.g. 137 questions, 5+ yrs experience, BillDesk JWS signing, Sub-100ms real-time latency).", font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Client Offer Catalog', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Site reads predominantly as a resume; unclear what a business or founder can hire Aashish for.", font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Add structured 'hasOfferCatalog' / ProfessionalService definition highlighting MVP engineering, API architecture, and AI integrations.", font: 'Arial', size: 19 })] })] }),
          ],
        }),
      ],
    }),

    // 5. AEO Analysis
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      children: [new TextRun({ text: '5. AEO (Answer Engine Optimization) Assessment', bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Paragraph({
      spacing: { after: 140 },
      children: [
        new TextRun({
          text: 'Answer Engines (Google Featured Snippets, Siri, Google Assistant, Voice Queries) pull 40-60 word definitive paragraphs following question-phrased headers. Adding an explicit FAQ section with FAQPage schema unlocks direct featured answers.',
          size: 22,
          font: 'Arial',
        }),
      ],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Question Opportunity (AEO Target)', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Direct Answer Snippet Target', bold: true, color: WHITE, font: 'Arial', size: 20 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'What services does Aashish Nayak offer?', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Aashish Nayak provides backend engineering (PHP/Laravel), full-stack web application development (Vue.js, React, TypeScript), third-party API integrations (payments, insurance), and AI engineering (Gemini API, LLM workflows).', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Is Aashish Nayak available for freelance or contract roles?', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: ROW_BG }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Yes, Aashish is available for selective contract consulting, MVP builds for founders, backend system optimizations, and full-time senior software engineering opportunities globally.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'What is Aashish Nayak’s tech stack?', bold: true, font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: 'Core backend stack: PHP, Laravel, REST APIs, SQL query optimization, WebSockets. Frontend: Vue.js, React 19, TypeScript, Astro, Tailwind CSS. Cloud & AI: Vercel, Firebase, Google Gemini API, WebAssembly.', font: 'Arial', size: 19 })] })] }),
          ],
        }),
      ],
    }),

    // 6. Priority Recommendations Matrix
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      children: [new TextRun({ text: '6. Priority Recommendations & Action Plan', bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Priority', bold: true, color: WHITE, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Action Item', bold: true, color: WHITE, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Dimension', bold: true, color: WHITE, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Effort', bold: true, color: WHITE, font: 'Arial', size: 19 })] })] }),
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: NAVY }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Impact', bold: true, color: WHITE, font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'CRITICAL', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Hardcode site origin default to https://aashish-nyk.vercel.app in astro.config.mjs to unlock sitemap & robots.txt', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Technical SEO', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Low', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Massive', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: RED }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'CRITICAL', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Switch robots meta tag to index, follow on all public pages; verify sitemap generation in dist output', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Technical SEO', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Low', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Massive', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: AMBER }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'HIGH', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Inject comprehensive JSON-LD schemas: Person, ProfessionalService, WebSite, Breadcrumbs, and FAQs', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'GEO / AEO', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Medium', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'High', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: AMBER }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'HIGH', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Add Social Sharing OpenGraph & Twitter Cards with 1200x630 preview image and rich titles', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Brand SEO', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Low', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'High', font: 'Arial', size: 19 })] })] }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({ shading: { type: ShadingType.CLEAR, fill: GREEN }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'QUICK WIN', bold: true, color: WHITE, font: 'Arial', size: 18 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Optimize desktop & mobile performance: preconnect fonts, optimize image decoding, font-display swap, and touch targets', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Performance', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'Low', font: 'Arial', size: 19 })] })] }),
            new TableCell({ margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: 'High', font: 'Arial', size: 19 })] })] }),
          ],
        }),
      ],
    }),

    // 7. What's Working Well
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 200 },
      children: [new TextRun({ text: "7. What's Working Well", bold: true, size: 48, color: NAVY, font: 'Arial' })],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      borders: cellBorder,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { type: ShadingType.CLEAR, fill: 'F0FDF4' },
              margins: { top: 160, bottom: 160, left: 200, right: 200 },
              children: [
                new Paragraph({
                  spacing: { after: 100 },
                  children: [new TextRun({ text: '• Outstanding Authentic Engineering Portfolio:', bold: true, color: GREEN, font: 'Arial', size: 21 }), new TextRun({ text: ' Projects like InterPrep (@php-wasm WebAssembly runner), Worldlytic, Wickto (real-time scoring), and TuCO2 prove deep full-stack mastery.', font: 'Arial', size: 20 })],
                }),
                new Paragraph({
                  spacing: { after: 100 },
                  children: [new TextRun({ text: '• Clean HTML5 & Semantic Landmark Elements:', bold: true, color: GREEN, font: 'Arial', size: 21 }), new TextRun({ text: ' <header>, <nav>, <main>, <article>, <figure>, <footer> are used correctly across all routes.', font: 'Arial', size: 20 })],
                }),
                new Paragraph({
                  spacing: { after: 100 },
                  children: [new TextRun({ text: '• Modern Static Site Architecture (Astro):', bold: true, color: GREEN, font: 'Arial', size: 21 }), new TextRun({ text: ' Zero JavaScript hydration overhead on static pages, resulting in instantaneous server responses and tiny payload weights.', font: 'Arial', size: 20 })],
                }),
                new Paragraph({
                  children: [new TextRun({ text: '• Responsive Handcrafted Design System:', bold: true, color: GREEN, font: 'Arial', size: 21 }), new TextRun({ text: ' Distinctive polaroid, notebook, and sticky-note theme with dark/light mode toggle and accessible contrast.', font: 'Arial', size: 20 })],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
};

const doc = new Document({
  sections: [coverSection, mainSection],
});

const outDir = path.resolve('docs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const filePath = path.join(outDir, `seo-audit-aashish-nyk-vercel-app-${dateStr}.docx`);

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(filePath, buffer);
  console.log('DOCX written successfully to', filePath);
});
