###
# check-printers
#
# This script checks the status of printers on the network
###

# Define the printers
declare -A PRINTERS
PRINTERS[Luisa]="192.168.2.154"
PRINTERS[Mulan]="192.168.2.153"
PRINTERS[Woody]="192.168.2.150"
PRINTERS[Maui]="192.168.2.152"
PRINTERS[Elsa]="192.168.2.151"

# Define error
declare -a ERROR

# Loop through the printers table
for PRINTER in "${!PRINTERS[@]}"; do
    echo "---------------------------------------------------"
    # Check if the printer is reachable
    # print printer name and ip address
    echo "Checking $PRINTER at ${PRINTERS[$PRINTER]}"
    if ping -c 1 -W 1 "${PRINTERS[$PRINTER]}" &> /dev/null; then
        echo -e "\e[32m$PRINTER is up\e[0m"
    else
        echo -e "\e[31mError: $PRINTER is down\e[0m"
        # Add error with printer name and ip address to the error message
        ERROR+=("$PRINTER at ${PRINTERS[$PRINTER]}")
    fi
done

echo "---------------------------------------------------"
echo ""
# Print every printers are ok if there are no errors
if [ ${#ERROR[@]} -eq 0 ]; then
    # all printers are up in green color
    echo -e "\e[32mAll printers are up\e[0m"
else
    # some printers are down in red color
    echo -e "\e[31mSome printers are down\e[0m"
    echo ""
    echo "Sugerencias:"
    echo "- ¿todas las impresoras están encendidas"
    echo "- ¿el cable de red esté conectado en todas ellas"
    echo "- ¿el puerto de red de cada una tiene las luces encendidas?"
    echo "- Si alguna no tiene la luz encendida, probablemente se soltó el cable en el switch (el blanco, dentro del gabinete)"

    # Print the error message
    # echo "The following printers are down:"
    # for i in "${ERROR[@]}"; do
    #     echo "$i"
    # done
    # Send an email to the specified address
    #echo "Sending email to $EMAIL"
    #echo "Subject: Printer down" | mail -s "Printer down" $EMAIL
fi

# clear the console, wait 10 seconds and run the whole thing again from the top
sleep 30
clear
exec "$0"
