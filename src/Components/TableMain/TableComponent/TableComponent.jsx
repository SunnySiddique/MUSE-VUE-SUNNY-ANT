import { Card, Col, Row } from "antd";
import Header from "../../HeaderMain/Header/Header";
import TableHeader from "../../TableHeader/TableHeader";
import AuthorsTable from "./AuthorsTable/AuthorsTable";
import ProjectsTable from "./ProjectsTable/ProjectsTable";

const TableComponent = () => {
  return (
    <>
      <Header title="Table" smallTitle="Table" />
      <main>
        <section className="section">
          <Row gutter={[12, 12]}>
            <Col xxl={24} xl={24} lg={24} sm={24} xs={24}>
              <Card className="box-shadow">
                <TableHeader
                  title="Authors Table"
                  options={[
                    {
                      label: "All",
                      value: "All",
                    },
                    {
                      label: "ONLINE",
                      value: "ONLINE",
                    },
                  ]}
                />
                <AuthorsTable />
              </Card>
            </Col>
            <Col xxl={24} xl={24} lg={24} sm={24} xs={24}>
              <Card className="box-shadow">
                <TableHeader
                  title="Projects Table"
                  options={[
                    {
                      label: "All",
                      value: "All",
                    },
                    {
                      label: "ONLINE",
                      value: "ONLINE",
                    },
                    {
                      label: "STORES",
                      value: "STORES",
                    },
                  ]}
                />
                <ProjectsTable />
              </Card>
            </Col>
          </Row>
        </section>
      </main>
    </>
  );
};

export default TableComponent;
