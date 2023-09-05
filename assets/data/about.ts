import { FounderCardType, CardFounderPosition } from '@/types/Cards';

const photo = 'staff-photo.png';
const samad = {
    id: 0,
    photo,
    name: 'Faheem Samad',
    certified: ['Chief Executive Officer', 'Certified Book-keeper'],
    desc: "the accounting powerhouse and CEO of Calibreon International, provides top-tier accounting support, helping small to enterprise-level businesses streamline their financial operations for long-term success. He gained invaluable insights into financial management as a budget forecaster at Nestle Pakistan and played a crucial role in Gold Roof Pvt Ltd's growth as a business analyst. Faheem's skills and experience in financial reporting, budgeting, technology automation, labor expense reduction, and tax planning ensure that CEOs stay on top of their finances, setting him apart from the competition.",
    position: CardFounderPosition.top,
};
const sultan = {
    id: 1,
    photo,
    name: 'Amjad sultan',
    certified: ['Operational Head', 'Software Specialist'],
    desc: 'Meet Amjad Sultan, a detail-oriented Accounts Analyst with a proactive approach to prudent accounts management. Amjad is an ambitious and disciplined leader, compassionate team leader, and mentor who encourages personal and professional growth. He excels in Xero, MyOB, Excel, Quickbooks, account reconciliation, payables and receivables, payroll administration, rectification of errors, and financial analysis. Amjad is a consensus builder who engages multiple stakeholders to achieve consistent results. Trust him to handle accounting and finance needs with efficiency and expertise.',
    position: CardFounderPosition.left,
};
const irfan = {
    id: 2,
    photo,
    name: 'Raja Irfan',
    certified: ['Strategic Executive Officer'],
    desc: "Raja Irfan is an MBA qualified finance professional with over a decade of experience in the field. He has worked as a Finance Officer for multiple organizations and also served as an Asst. Program Officer for an NGO under AKDN for over three years. Currently, he is the Co-founder and Managing Director of an established BPO firm CaliberOn International, where he is responsible for devising strategies for the firm's growth. With expertise in accounting, financial analysis, forecasting, and research, Raja is passionate about contributing to society and making a significant impact.",
    position: CardFounderPosition.right,
};
const khan = {
    id: 3,
    photo,
    name: 'Sarbaz Khan',
    certified: ['Finance Executive Officer', 'Payroll Expert'],
    desc: 'As a seasoned Quickbooks bookkeeper and accountant, Sarbaz simplifies complex financial information for small and medium-sized businesses. He offers a comprehensive range of services including setting up and running accounting systems, managing cash flow, payroll, inventory, budgets, forecasts, and preparing tax accounts. Since 2014, he has empowered business owners by handling bookkeeping and operational support functions, freeing up time to focus on core business. Sarbaz is skilled in Xero, Quickbooks, Wave, Zoho, and MYOB platforms for streamlined accounting and timely financial reporting, enabling businesses to make informed decisions for growth and success.',
    position: CardFounderPosition.bottom,
};

export const founderList: FounderCardType[] = [samad, sultan, irfan, khan];
