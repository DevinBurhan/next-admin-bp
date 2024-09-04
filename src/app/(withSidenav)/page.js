"use client";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../ui/CustomCard";
import CustomCardStyle4 from "../ui/CustomCard/CustomCardStyle4";
import RecentDocumentTable from "../ui/RecentDocumentTable";
import SectionHeading from "../ui/SectionHeading";

export default function Home() {
  return (
    <>
      <SectionHeading title="Welcome Shawn!" />
      <div className="nk-block">
        <Row className="g-gs">
          <Col sm="6" xxl="3">
            <CustomCard
              cardBgClass="bg-purple"
              title="Words Available"
              infoNumber={452}
              infoText="Words"
              generatedNumber={1548}
              generatedText="/2000 free words generated"
              btnText="See History"
              btnUrl="/history"
              btnColorClass="link-purple"
            />
          </Col>
          <Col sm="6" xxl="3">
            <CustomCard
              cardBgClass="bg-blue"
              title="Drafts Available"
              infoNumber={3}
              infoText="Drafts"
              generatedNumber={7}
              generatedText="/10 free drafts created"
              btnText="See All"
              btnUrl="/document-drafts"
              btnColorClass="link-blue"
            />
          </Col>
          <Col sm="6" xxl="3">
            <CustomCard
              cardBgClass="bg-indigo"
              title="Documents Available"
              infoNumber={6}
              infoText="Documents"
              generatedNumber={4}
              generatedText="/10 free documents created"
              btnText="See All"
              btnUrl="/document-drafts"
              btnColorClass="link-indigo"
            />
          </Col>
          <Col sm="6" xxl="3">
            <CustomCard
              cardBgClass="bg-cyan"
              title="Tools Available"
              infoNumber={12}
              infoText="Tools"
              generatedNumber={4}
              generatedText="/16 free tools used to generate content"
              btnText="All Tools"
              btnUrl="/templates"
              btnColorClass="link-cyan"
            />
          </Col>
        </Row>
      </div>
      <SectionHeading
        title="Popular Templates"
        btnText="Explore All"
        btnUrl="/templates"
      />
      <div className="nk-block">
        <Row className="g-gs">
          <Col sm="6" xxl="3">
            <CustomCardStyle4
              title="Blog Ideas"
              subTitle="Produce trendy blog ideas for your business that engages."
              icon="bulb-fill"
              iconBgClass="text-primary bg-primary"
            />
          </Col>
          <Col sm="6" xxl="3">
            <CustomCardStyle4
              title="Social Media Posts"
              subTitle="Creative and engaging social media post for your brand."
              icon="spark-fill"
              iconBgClass="text-blue bg-blue"
              newBadge={true}
            />
          </Col>
          <Col sm="6" xxl="3">
            <CustomCardStyle4
              title="YouTube Tags Generator"
              subTitle="Generate SEO optimized tags/keywords for your YouTube video."
              icon="youtube-fill"
              iconBgClass="text-red bg-red"
            />
          </Col>
          <Col sm="6" xxl="3">
            <CustomCardStyle4
              title="Website Headlines/Copy"
              subTitle="Generate professional copy for your website that converts users."
              icon="laptop"
              iconBgClass="text-purple bg-purple"
            />
          </Col>
        </Row>
      </div>
      <SectionHeading
        title="Recent Documents"
        btnText="See All"
        btnUrl="/document-saved"
        iconRight="chevron-right"
      />
      <div className="nk-block">
        <div className="card">
          <RecentDocumentTable />
        </div>
      </div>
    </>
  );
}
