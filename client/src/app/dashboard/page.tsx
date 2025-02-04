"use client"

import CardSalesSummary from "./cardSalesSummary";
import CardPopularProducts from "./cartPopularProducts";
import CardExpenseSummary from "./cardExpenseSummary";
import CardPurchaseSummary from "./cardPurchaseSummary";
import StatCard from "./statCard";
import { Package, TrendingDown, TrendingUp } from "lucide-react";

const Dashboard=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
        <CardPopularProducts/>
        <CardSalesSummary/>
        <CardPurchaseSummary/>
        <CardExpenseSummary/>
        <StatCard
          title="Customer & Expenses"
          primaryIcon={<Package className="text-blue-600 w-6 h-6"/>}
          dateRange="22 - 29 October 2023"
          details={[
             {
                title:"Customer Growth",
                amount:"175.00",
                changePercentage:131,
                IconComponent:TrendingUp,
             },
             {
                title:"Expenses",
                amount:"10",
                changePercentage:-56,
                IconComponent:TrendingDown,
             },

          ]}
        />
        <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>
        <div className="md:row-span-1 xl:row-span-2 bg-gray-500"/>

    </div>;
};

export default Dashboard; 