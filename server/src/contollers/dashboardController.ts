import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma= new PrismaClient();

export const getDashboardMetrics= async(
    req:Request,
    res:Response,
): Promise<void>=>{
    try{
          const popularProduct= await prisma.products.findMany({
            take:15,
            orderBy:{
                stockQuantity:"desc",
            },
          });
          const salesSummary= await prisma.salesSummary.findMany({
            take:15,
            orderBy:{
                date:"desc",
            },
          });
          const purchaseSummary= await prisma.salesSummary.findMany({
            take:5,
            orderBy:{
                date:"desc",
            },
          });
          const expenseSummary= await prisma.expenseSummary.findMany({
            take:5,
            orderBy:{
                date:"desc",
            },
          });
          const expenseByCategorySummary = await prisma.expenseByCategory.findMany().then((items) =>
            items.map((item) => ({
                ...item,
                amount: item.amount.toString(),
            }))
          );

          res.json({
            popularProduct,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
         
          });
        
    }catch(error){
        res.status(500).json(console.log(error));
    }
};