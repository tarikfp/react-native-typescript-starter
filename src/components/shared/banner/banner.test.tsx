/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import Banner from "./banner";

const onPressMock = jest.fn();

const BANNER_TITLE = "Banner title";
const BANNER_SUBTITLE = "Banner subtitle";
const BANNER_BUTTON_LABEL = "Banner button label";

const props: React.ComponentProps<typeof Banner> = {
  title: BANNER_TITLE,
  subtitle: BANNER_SUBTITLE,
  buttonLabel: BANNER_BUTTON_LABEL,
  onPress: onPressMock,
};

const component = <Banner {...props} />;

// ... button tests
