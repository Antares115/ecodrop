
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Barcode } from "lucide-react";

const ScannerPage = () => {
  const [scanning, setScanning] = useState(false);
  const [scannedItem, setScannedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  // Simulated scanning function
  const handleScan = () => {
    setScanning(true);
    
    // Simulate scanning delay
    setTimeout(() => {
      setScanning(false);
      // Simulate finding an item (in a real app, this would be based on the barcode scanned)
      setScannedItem("1"); // This corresponds to the smartphone item ID
    }, 2000);
  };
  
  // If an item is "found", navigate to its details
  if (scannedItem) {
    navigate(`/items/${scannedItem}`);
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-2xl font-bold mb-8 text-center text-eco-dark">Barcode Scanner</h1>
      
      <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg mb-8 relative overflow-hidden">
        {scanning ? (
          <>
            <div className="absolute inset-0 bg-eco-neutral opacity-50"></div>
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-eco-primary animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-eco-primary font-medium">Scanning...</p>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center">
            <Barcode className="w-24 h-24 mb-4 text-gray-400" />
            <p className="text-gray-500 text-center px-6">
              Position a product barcode within the scanning area
            </p>
          </div>
        )}
      </div>
      
      <Button
        onClick={handleScan}
        disabled={scanning}
        className="bg-eco-primary hover:bg-eco-secondary"
        size="lg"
      >
        {scanning ? "Scanning..." : "Scan Barcode"}
      </Button>
      
      <div className="mt-8 text-center text-gray-600">
        <p className="mb-2">How it works:</p>
        <ol className="text-sm list-decimal text-left inline-block">
          <li className="mb-1">Point your camera at a product barcode</li>
          <li className="mb-1">Hold steady until the barcode is recognized</li>
          <li>Get recycling information specific to the product</li>
        </ol>
      </div>
    </div>
  );
};

export default ScannerPage;
