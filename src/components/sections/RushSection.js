import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const RushSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Rush Kappa Sigma",
    paragraph:
      "We are the largest college fraternity in the world, and our network is scattered throughout North America. We have 305 active chapters and colonies, more than 17,000 undergraduate members, and at least 200,000 living alumni. We are a volunteer-driven organization, with each chapter having its own individual alumni support. Choosing Kappa Sigma is more than joining a fraternity; it is a life-changing decision that ultimately will better your life.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <hr className="r" />
                <h3 className="mt-0 mb-12">What is Rush?</h3>
                <p className="m-0">
                  Recruitment for Kappa Sigma at the University of British
                  Columbia is an ongoing year-round process. However, Rush is a
                  period that runs one to two weeks in September and then
                  optionally again in January in which fraternities at UBC
                  conduct their annual or semi-annual new member recruitment.
                  Such weeks are filled with social functions with Sorority
                  organizations, social gathering with brothers, and a Formal
                  invite only event. Kappa Sigma runs a Fall and Winter Rush,
                  allowing for two cohorts of new potential brothers each year.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/rush-img-01.jpeg")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <hr className="w" />
                <h3 className="mt-0 mb-12">Formal Rush</h3>
                <p className="m-0">
                  Formal Rush occurs on the final evening of our rush. It is
                  invite-only and has a formal dress code, in addition to being
                  typically held at various locations throughout Vancouver. In
                  the past, Kappa Sigma has held Formal Rush at Alumni's private
                  venues, and other exclusive locations. In order to be extended
                  a Formal Rush invitation, a prospective new member (also
                  called a Rushee) must impress upon a fraternity that he is
                  worthy of the gesture. If you are unsure if you have been
                  extended a Formal Rush invitation, ask. In all likelihood,
                  however, you will know when you are invited. Typically,
                  Rushees arrive at the Fraternity house and are provided
                  transportation to and from the Formal Rush event that they are
                  attending. If you do choose to accept two Formal Rush
                  invitations that are on the same day, transportation will be
                  provided between the two events. Kappa Sigma strongly
                  recommends attending its Formal Rush after that of another
                  fraternity.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/rush-img-04.jpeg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <hr className="g" />
                <h3 className="mt-0 mb-12">Bids Day</h3>
                <p className="m-0">
                  When the rush process is over, the members of the different
                  fraternity and sorority chapters will meet and decide whether
                  not they want to extend a bid, or invitation, to students who
                  they think will pledge their organization. Those who
                  successfully receive a bid will know the following day after
                  the Formal Rush event, as Kappa Sigma's Rush Chair(s) will
                  contact you with further instruction. Once a student accepts a
                  bid to a certain organization, the pledging process begins.
                  This can range from a couple of weeks to an entire semester,
                  In our Chapter it is a 8-9 week process. During this time our
                  pledges get to build strong relationships with the members of
                  our Chapter, as well as those joining with them, and Kappa
                  Sigma's traditions, values, history, etc. At the end of the
                  pledge period, the new members are officially initiated into
                  the chapter and enjoys all the benefits of being a Brother of
                  Epsilon Epsilon Chapter, and a Kappa Sigma initiate.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/rush-img-02.jpeg")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

RushSection.propTypes = propTypes;
RushSection.defaultProps = defaultProps;

export default RushSection;
