import pentagramlogo from "../../assets/pentagramlogo.svg";
import packerlogo from "../../assets/packer.svg"
import squarelogo from "../../assets/squarelogo.svg"
import divvylogo from "../../assets/divvylogo.svg"
import webflowlogo from "../../assets/webflowlogo.png"

interface DesignCompanyListProps {
  companies: { logo: string; name: string; jobs: number }[];
}

// Example data
const companies: { logo: string; name: string; jobs: number }[] = [
  { logo: pentagramlogo, name: "Pentagram", jobs: 10 },
  { logo: pentagramlogo, name: "Pentagram", jobs: 10 },
  { logo: pentagramlogo, name: "Pentagram", jobs: 10 },
  { logo: pentagramlogo, name: "Pentagram", jobs: 10 },
  { logo: packerlogo, name: "Packer", jobs: 10 },
  { logo: squarelogo, name: "Sqaure", jobs: 3 },
  { logo: divvylogo, name: "Divvy", jobs: 10 },
  { logo: webflowlogo, name: "Pentagram", jobs: 10 },

];

export default companies;
