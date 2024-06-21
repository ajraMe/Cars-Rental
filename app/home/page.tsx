'use client'
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import {BookCreatedFlagContext} from "@/context/BookCreatedFlagContext";
import {getCarsList, getStoreLocations} from "@/services";
import {useEffect, useState} from "react";
import {SignedOut, SignIn} from "@clerk/nextjs";


export default function Home() {
    const [storeLocation, setStoreLocation] = useState<any>([]);
    const [carsList, setCarsList] = useState<any>([])
    const [carsOrgList, setCarsOrgList] = useState<any>([])
    const [showToastMsg, setShowToastMsg] = useState<boolean>(false);
    useEffect(() => {
        getCarList_();
        getStoreLocation_();
    }, [])

    const getCarList_ = async () => {
        const result: any = await getCarsList();
        console.log(result, "result get car");

        setCarsList(result?.carLists)
        setCarsOrgList(result?.carLists);
    }

    const getStoreLocation_ = async () => {

        const resp: any = await getStoreLocations();
        setStoreLocation(resp?.storesLocations);
    };
    /*
    const filterCarList = (brand: string) => {
      const filterList = carsOrgList.filter((item: any) =>
        item.carBrand == brand);
      setCarsList(filterList);
    };
    */
    const filterCarList = (brand: string) => {
        if (brand === "") {
            setCarsList(carsOrgList); // Reset to show all cars
        } else {
            const filterList = carsOrgList.filter((item: any) =>
                item.carBrand === brand
            );
            setCarsList(filterList);
        }
    };


    const orderCarList = (order: any) => {
        const sortedData = [...carsOrgList].sort((a, b) =>
            order == -1 ? a.price - b.price : b.price - a.price);
        setCarsList(sortedData);
    }

    useEffect(() => {
        if (showToastMsg) {
            setTimeout(function () {
                setShowToastMsg(false)
            }, 4000);
        }
    }, [showToastMsg])

    return (
        <div className="p-5 sm:px-10 md:px-20">
            <BookCreatedFlagContext.Provider value={{showToastMsg, setShowToastMsg}}>
                <Hero/>
                <SearchInput options={storeLocation}/>
                <CarsFiltersOption carsList={carsOrgList}
                                   orderCarList={(value: string) => orderCarList(value)}
                                   setBrand={(value: string) => filterCarList(value)}/>
                <CarsList carsList={carsList} locations={storeLocation}/>
                {/* {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
        {showToastMsg?<ToastMsg/>:null} */}
            </BookCreatedFlagContext.Provider>
        </div>
    )
}
