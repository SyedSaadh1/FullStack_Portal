"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function CourseDetailsCard() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <Card className="w-[820px] p-8 hover:shadow-xl items-center">
            <CardContent className="flex justify-between items-center">
                <Collapsible
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    className="w-[350px] space-y-2"
                >
                    <CollapsibleTrigger>
                        <div className="flex justify-between">
                            <section className="flex justify-between gap-2">
                                <img src="" alt="#" />
                                <h3 className="text-xl">HTML Basics</h3>
                            </section>
                            <p className="text-xl">4 Lessons</p>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex space-y-2 ">
                        <h3 className="text-2xl">Html Tags</h3>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    )
}
