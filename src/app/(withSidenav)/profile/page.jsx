'use client';
import { useState } from 'react';
import SectionHeading from '@/app/ui/SectionHeading';
import PricingCard from '@/app/ui/PricingCard';
import Link from 'next/link';
import CancelSubscriptionModal from '@/app/ui/Modals/CancelSubscriptionModal';
import ChangePlanModal from '@/app/ui/Modals/ChangePlanModal';
import Image from 'next/image';

export default function ProfilePage() {
  const [alert, setAlert] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };
  const [activePlan, setActivePlan] = useState(1);
  const handlePlan = tabNumber => {
    setActivePlan(tabNumber);
  };
  return (
    <>
      <SectionHeading title="Personal Account" />
      <div className="nk-block">
        <ul className="nav nav-tabs mb-3 nav-tabs-s1">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 1 ? 'active' : ''}`}
              type="button"
              onClick={() => handleTabClick(1)}
            >
              Profile
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 2 ? 'active' : ''}`}
              type="button"
              onClick={() => handleTabClick(2)}
            >
              Payment & Billing
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 3 ? 'active' : ''}`}
              type="button"
              onClick={() => handleTabClick(3)}
            >
              Payment & Billing v2
            </button>
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 1 && (
            <div className="tab-pane fade show active">
              <div className="d-flex align-items-center justify-content-between border-bottom border-light mt-5 pb-1">
                <h5>Personal Details</h5>
                <Link className="link link-primary fw-normal" href="/profile">
                  Edit Profile
                </Link>
              </div>
              <table className="table table-flush table-middle mb-0">
                <tbody>
                  <tr>
                    <td className="tb-col">
                      <span className="fs-15px text-light">Full Name</span>
                    </td>
                    <td className="tb-col">
                      <span className="fs-15px text-base">Shawn Mahbub</span>
                    </td>
                    <td className="tb-col tb-col-end tb-col-sm" />
                  </tr>
                  <tr>
                    <td className="tb-col">
                      <span className="fs-15px text-light">Email</span>
                    </td>
                    <td className="tb-col">
                      <span className="fs-15px text-base">
                        shawn@websbd.com
                      </span>
                    </td>
                    <td className="tb-col tb-col-end tb-col-sm" />
                  </tr>
                  <tr>
                    <td className="tb-col">
                      <span className="fs-15px text-light">Phone</span>
                    </td>
                    <td className="tb-col">
                      <span className="fs-15px text-base">+88015152088942</span>
                    </td>
                    <td className="tb-col tb-col-end tb-col-sm" />
                  </tr>
                  <tr>
                    <td className="tb-col">
                      <span className="fs-15px text-light">Country</span>
                    </td>
                    <td className="tb-col">
                      <span className="fs-15px text-base">Bangladesh</span>
                    </td>
                    <td className="tb-col tb-col-end tb-col-sm" />
                  </tr>
                  <tr>
                    <td className="tb-col">
                      <span className="fs-15px text-light">Password</span>
                    </td>
                    <td className="tb-col">
                      <span className="fs-15px text-base">
                        <Link
                          className="link link-primary fw-normal"
                          href="/profile"
                        >
                          Change Password
                        </Link>
                      </span>
                    </td>
                    <td className="tb-col tb-col-end tb-col-sm">
                      <span className="fs-13px text-light">
                        Last changed at Feb 10, 2023
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex align-items-center justify-content-between border-bottom border-light mt-4 pb-1">
                <h5>Preferences</h5>
              </div>
              <table className="table table-flush">
                <tbody>
                  <tr>
                    <td className="py-3">
                      <span className="fs-15px text-light">Timezone</span>
                    </td>
                    <td className="py-3">
                      <span className="fs-15px text-base">GMT +06:00</span>
                    </td>
                    <td className="py-3 text-end">
                      <Link
                        className="link link-primary fw-normal"
                        href="/profile"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="fs-15px text-light">Date Format</span>
                    </td>
                    <td className="py-3">
                      <span className="fs-15px text-base">DD/MM/YYYY</span>
                    </td>
                    <td className="py-3 text-end">
                      <Link
                        className="link link-primary fw-normal"
                        href="/profile"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="fs-15px text-light">Language</span>
                    </td>
                    <td className="py-3">
                      <span className="fs-15px text-base">English US</span>
                    </td>
                    <td className="py-3 text-end">
                      <Link
                        className="link link-primary fw-normal"
                        href="/profile"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 2 && (
            <div className="tab-pane fade show active">
              <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom border-light mt-5 mb-4 pb-1">
                <h5 className="mb-0">Your Subscription</h5>
                <ul className="d-flex gap gx-4">
                  <li>
                    <CancelSubscriptionModal btnVariant="link link-danger fw-normal p-0" />
                  </li>
                  <li>
                    <ChangePlanModal btnVariant="link link-primary fw-normal p-0" />
                  </li>
                </ul>
              </div>
              {alert && (
                <div className="alert alert-warning alert-dismissible fade show mb-4 rounded-6">
                  <p className="small mb-0">
                    Save big up to 75% on your upgrade to our{' '}
                    <strong>
                      <Link className="alert-link" href="/pricing-plans">
                        Enterprise plan
                      </Link>
                    </strong>{' '}
                    and enjoy premium features at a fraction of the cost!
                  </p>
                  <div className="d-inline-flex position-absolute end-0 top-50 translate-middle-y me-2">
                    <button
                      type="button"
                      className="btn btn-xs btn-icon btn-warning rounded-pill"
                      onClick={() => setAlert(false)}
                    >
                      <em className="icon ni ni-cross" />
                    </button>
                  </div>
                </div>
              )}

              <div className="row g-gs">
                <div className="col-xl-3 col-sm-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="text-light mb-2">Plan</div>
                      <h3 className="fw-normal">Professional Plan</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="text-light mb-2">Recurring Payment</div>
                      <h3 className="fw-normal">$23/Month</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="text-light mb-2">Next Due Date</div>
                      <h3 className="fw-normal">Mar 15, 2023</h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card shadow-none">
                    <div className="card-body">
                      <div className="text-light mb-2">Payment Method</div>
                      <div className="d-flex align-items-center">
                        <img src="" alt="" className="icon" />
                        <Image
                          className="icon"
                          width={24}
                          height={24}
                          src="/images/icons/paypal.png"
                        />
                        <h3 className="fw-normal ms-2">PayPal</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom border-light mt-5 mb-4 pb-2">
                <h5>Billing History</h5>
              </div>
              <div className="card">
                <table className="table table-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="tb-col">
                        <div className="fs-13px text-base">Subscription</div>
                      </th>
                      <th className="tb-col tb-col-md">
                        <div className="fs-13px text-base">Payment Date</div>
                      </th>
                      <th className="tb-col tb-col-sm">
                        <div className="fs-13px text-base">Total</div>
                      </th>
                      <th className="tb-col tb-col-sm">
                        <div className="fs-13px text-base">Status</div>
                      </th>
                      <th className="tb-col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tb-col">
                        <div className="caption-text">
                          Starter - 12 Months{' '}
                          <div className="d-sm-none dot bg-success" />
                        </div>
                      </td>
                      <td className="tb-col tb-col-md">
                        <div className="fs-6 text-light d-inline-flex flex-wrap gap gx-2">
                          <span>Feb 15,2023 </span> <span>02:31 PM</span>
                        </div>
                      </td>
                      <td className="tb-col tb-col-sm">
                        <div className="fs-6 text-light">$23.00</div>
                      </td>
                      <td className="tb-col tb-col-sm">
                        <div className="badge text-bg-success-soft rounded-pill px-2 py-1 fs-6 lh-sm">
                          Paid
                        </div>
                      </td>
                      <td className="tb-col tb-col-end">
                        <a href="#" className="link">
                          Get Invoice
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="tb-col">
                        <div className="caption-text">
                          Starter - 12 Months{' '}
                          <div className="d-sm-none dot bg-warning" />
                        </div>
                      </td>
                      <td className="tb-col tb-col-md">
                        <div className="fs-6 text-light d-inline-flex flex-wrap gap gx-2">
                          <span>Feb 15,2023 </span> <span>02:31 PM</span>
                        </div>
                      </td>
                      <td className="tb-col tb-col-sm">
                        <div className="fs-6 text-light">$23.00</div>
                      </td>
                      <td className="tb-col tb-col-sm">
                        <div className="badge text-bg-danger-soft rounded-pill px-2 py-1 fs-6 lh-sm">
                          Faild
                        </div>
                      </td>
                      <td className="tb-col tb-col-end">
                        <a href="#" className="link">
                          Get Invoice
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="tab-pane fade show active">
              <div className="d-flex align-items-center justify-content-between border-bottom border-light mt-5 pb-1">
                <h5>Subscription</h5>
              </div>
              <div className="pt-4">
                <h3 className="fw-normal">
                  Basic Plan{' '}
                  <span className="badge border border-light text-light rounded-pill ms-1">
                    Free
                  </span>
                </h3>
                <div className="sub-text">
                  5000 words generation with access of 10 templates.
                </div>
                <div className="progress progress-md bg-primary bg-opacity-10 mt-3">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: '25%' }}
                  />
                </div>
                <div className="d-flex flex-wrap align-items-center mt-2">
                  <div className="caption-text">
                    940 <span className="text-light">of 5000 words used.</span>
                  </div>
                  <div className="sub-text text-dark">
                    To increase your limit, check our{' '}
                    <Link href="/pricing-plans">Pricing & Plans</Link>.
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom border-light mt-5 pb-1">
                <h5>Our Available Plans</h5>
                <Link
                  className="link link-primary fw-normal"
                  href="/pricing-plans"
                >
                  See All
                </Link>
              </div>
              <div className="pt-4">
                <h3 className="fw-normal">Pricing Plans</h3>
                <div className="sub-text">
                  Generate unlimited copy 10X faster with our cost effective
                  plan to write blog posts, social media ads and many more.
                </div>
                <div className="pricing-toggle-wrap mt-4 mb-4">
                  <button
                    className={`pricing-toggle-button ${
                      activePlan === 1 ? 'active' : ''
                    }`}
                    onClick={() => handlePlan(1)}
                  >
                    Monthly
                  </button>
                  <button
                    className={`pricing-toggle-button ${
                      activePlan === 2 ? 'active' : ''
                    }`}
                    onClick={() => handlePlan(2)}
                  >
                    Yearly (Save 25%)
                  </button>
                </div>
              </div>
              {activePlan === 1 && (
                <div className="row g-gs">
                  <div className="col-md-6">
                    <div className="pricing rounded pricing-featured bg-gradient-custom gradient-start-primary-light gradient-middle-primary-light gradient-end-blue-light gradient-angle-90">
                      <PricingCard
                        packageName="Professional"
                        tilte="Unlimited Words"
                        price="$48"
                        duration="/ month"
                        btnText="Upgrade Now"
                        btnNote="Cancel Anytime"
                        featureList={[
                          'Unlimited words generation',
                          'Access to all templates for free',
                          'No project limitation',
                          '30 days of AI generation history',
                          'Wordpress plugin integration',
                        ]}
                        focused={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pricing rounded">
                      <PricingCard
                        packageName="Enterprise"
                        tilte="Customized Plan"
                        price="$225"
                        duration="/ month"
                        btnText="Upgrade Now"
                        btnNote="Cancel Anytime"
                        featureList={[
                          'Unlimited words generation',
                          'Access to all templates for free',
                          'No project limitation',
                          '30 days of AI generation history',
                          'Wordpress plugin integration',
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}
              {activePlan === 2 && (
                <div className="row g-gs">
                  <div className="col-md-6">
                    <div className="pricing rounded pricing-featured bg-gradient-custom gradient-start-primary-light gradient-middle-primary-light gradient-end-blue-light gradient-angle-90">
                      <PricingCard
                        packageName="Professional"
                        tilte="Unlimited Words"
                        price="$348"
                        duration="/ yearly"
                        btnText="Upgrade Now"
                        btnNote="Cancel Anytime"
                        featureList={[
                          'Unlimited words generation',
                          'Access to all templates for free',
                          'No project limitation',
                          '30 days of AI generation history',
                          'Wordpress plugin integration',
                        ]}
                        focused={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="pricing rounded">
                      <PricingCard
                        packageName="Enterprise"
                        tilte="Customized Plan"
                        price="$625"
                        duration="/ yearly"
                        btnText="Upgrade Now"
                        btnNote="Cancel Anytime"
                        featureList={[
                          'Unlimited words generation',
                          'Access to all templates for free',
                          'No project limitation',
                          '30 days of AI generation history',
                          'Wordpress plugin integration',
                        ]}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
