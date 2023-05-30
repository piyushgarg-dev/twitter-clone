"use client";

import TwitterLayout from "@/components/FeedCard/Layout/TwitterLayout";
import React from "react";

interface TwitterLayoutProps {
  children: React.ReactNode;
}

const TwitterLayoutFragment: React.FC<TwitterLayoutProps> = ({ children }) => {
  return (
    <div>
      <TwitterLayout>{children}</TwitterLayout>
    </div>
  );
};

export default TwitterLayout;
