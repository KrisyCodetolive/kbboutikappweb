import {
  Card,
  CardContent,
} from "@/components/ui/card";

function Cardre({quantité} : {quantité : string}) {
    return ( 

        <Card className="bg-gray-50 rounded-3xl p-5 border-none shadow-none flex-none">
            <CardContent className="flex flex-col justify-center items-center ">
                <span className="font-bold text-2xl"> {quantité} </span>
                <p className="text-gray-500 text-sm">Disponible</p>
            </CardContent>
        </Card>
     );
}

export default Cardre;