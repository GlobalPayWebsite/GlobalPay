import React from 'react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <div className="page__header">
      <div className="container">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <h6>
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                <a href={breadcrumb.href}>{breadcrumb.label}</a>
                {index < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
