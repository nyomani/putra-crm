import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class AddressParser {

    public static void main(String[] args) throws IOException {
        List<List> converted = new ArrayList();
        Files.readAllLines(Path.of("data.tsv")).forEach(s ->
        {
            String[] data = s.split("\t");
            List<String> l = new ArrayList<>(Arrays.asList(data));
            if (data.length < 9) {
                for (int i = data.length; i<9; i++)
                {
                    l.add("");
                }
                l.add("Tanpa Alamat");
            }
            String stateStr = state(l.get(8));
            l.add(stateStr);
            converted.add(l);
        });
        FileWriter fileWriter = new FileWriter("converted-data.csv");
        converted.forEach(line -> {
            StringBuffer sb = new StringBuffer();
            line.forEach(s -> sb.append(s).append(","));
            sb.append("\n");
            try {
                fileWriter.write(sb.toString());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        fileWriter.flush();
    }

    private static String state(String input) {
        String address = input.toUpperCase();
        if (address.contains(" IN ") || address.contains(" INDIANA "))
        {
            return "IN";
        }
        if (address.contains(" IA ") || address.contains(" IOWA "))
        {
            return "IA";
        }
        if (address.contains(" IL ") || address.contains(" ILLINOIS "))
        {
            return "IL";
        }
        if (address.contains(" WI ") || address.contains(" WISCONSIN "))
        {
            return "WI";
        }
        if (address.contains(" MI ") || address.contains(" MICHIGAN "))
        {
            return "MI";
        }
        if (address.contains(" OH ") || address.contains(" OHIO "))
        {
            return "OH";
        }
        if (address.contains(" OK ") || address.contains(" OKLAHOMA "))
        {
            return "OK";
        }
        if (address.contains(" NE ") || address.contains(" NEBRASKA "))
        {
            return "NE";
        }
        if (address.contains(" KY ") || address.contains(" KENTUCKY "))
        {
            return "KY";
        }

        if (address.contains(" MN ") || address.contains(" MINNESOTA "))
        {
            return "MN";
        }

        if (address.contains(" MO ") || address.contains(" MISSOURI "))
        {
            return "MO";
        }

        if (address.contains(" SD ") || address.contains(" SOUTH DAKOTA "))
        {
            return "SD";
        }

        if (address.contains(" ND ") || address.contains(" NORTH DAKOTA "))
        {
            return "ND";
        }

        return "TIDAK DIKETAHUI";
    }
}
