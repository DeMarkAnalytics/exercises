# Data Team Exercise

```shell script
./start_cassandra.sh
pyspark --packages com.datastax.spark:spark-cassandra-connector_2.12:3.0.1,com.datastax.spark:spark-cassandra-connector-driver_2.12:3.0.1 --conf spark.cassandra.connection.host=0.0.0.0
```

Use tmate to share two terminals. In one terminal open up the pyspark shell and in the other exec into the cassandra docker container. 
They will then be able to see the schema of the table and have access to the pyspark shell.

## Task 1
Read the data set from the csv. Set the following variable for them in the pyspark shell:
```python
data_set_home = "/home/byblakeorriver/Code/exercises/data/data-set.csv"
```

## Task 2
Load the data frame into cassandra.

## Task 3
Answer the following questions:
1. How many are chocolate?
2. How many are chocolate and not caramel?
3. Which competitorname has the highest winpercent?

# Solution

```python

// Read data-set
data_set_home = "/home/byblakeorriver/Code/exercises/data/data-set.csv"
df = spark.read.option("header", True).csv(data_set_home)

// Load data set
from pyspark.sql.functions import *
from pyspark.sql.types import *
from pyspark.sql.window import Window
def int_to_boolean(i):
    if i==1:
        return True
    else:
        return False

int_to_boolean_udf = udf(lambda row: int_to_boolean(row), BooleanType())

df2 = df.withColumn("chocolate",int_to_boolean_udf(col("chocolate").cast(IntegerType()))).withColumn("caramel",int_to_boolean_udf(col("caramel").cast(IntegerType()))).withColumn("sugarpercent",col("sugarpercent").cast(DoubleType())).withColumn("winpercent",col("winpercent").cast(DoubleType()))     

df2.write.format("org.apache.spark.sql.cassandra").mode('append').options(table="candy",keyspace="candy_keyspace").save()

//How many are chocolate (37)
df2.where(col("chocolate") == True).count()

//How many are chocolate and not caramel (27)
df2.where((col("chocolate") == True) & (col("caramel") == False)).count()

// Find name with highest winpercent
df2.orderBy(col('winpercent').desc()).show(1, False)
OR
max_win = df2.select(max("winpercent")).collect()[0][0]
df2.select('name').where(col('winpercent') == max_win).show(10, False)


// add a new column, sugary, if less than 33% low, 33 - 66 medium, over 66 high
df3 = df2.withColumn("sugary", when(col("sugarpercent") < 0.33, "LOW").when((col("sugarpercent") >= 0.33) & (col("sugarpercent") < 0.66), "MEDIUM").otherwise("HIGH"))

//rank the high, medium and low sugary

df4 = df3.withColumn("rank", row_number().over(Window.partitionBy("sugary").orderBy(col("winpercent").desc())))
df4.select("name","sugarpercent","sugary","winpercent","rank").where(col("rank") == 1).show(85,False)
```



