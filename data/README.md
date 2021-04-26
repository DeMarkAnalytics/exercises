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
from pyspark.sql.functions import col, udf, max
from pyspark.sql.types import *
def int_to_boolean(i):
    if i==1:
        return True
    else:
        return False

int_to_boolean_udf = udf(lambda row: int_to_boolean(row), BooleanType())

df2 = df.withColumn("chocolate",int_to_boolean_udf(col("chocolate").cast(IntegerType()))).withColumn("fruity",int_to_boolean_udf(col("fruity").cast(IntegerType()))).withColumn("caramel",int_to_boolean_udf(col("caramel").cast(IntegerType()))).withColumn("peanutyalmondy",int_to_boolean_udf(col("peanutyalmondy").cast(IntegerType()))).withColumn("nougat",int_to_boolean_udf(col("nougat").cast(IntegerType()))).withColumn("crispedricewafer",int_to_boolean_udf(col("crispedricewafer").cast(IntegerType()))).withColumn("hard",int_to_boolean_udf(col("hard").cast(IntegerType()))).withColumn("bar",int_to_boolean_udf(col("bar").cast(IntegerType()))).withColumn("pluribus",int_to_boolean_udf(col("pluribus").cast(IntegerType()))).withColumn("sugarpercent",col("sugarpercent").cast(DoubleType())).withColumn("pricepercent",col("pricepercent").cast(DoubleType())).withColumn("winpercent",col("winpercent").cast(DoubleType()))     

df2.write.format("org.apache.spark.sql.cassandra").mode('append').options(table="candy",keyspace="candy_keyspace").save()

//How many are chocolate (37)
df2.select('*').where(col("chocolate") == True).count()

//How many are chocolate and not caramel (27)
df2.select('*').where(col("chocolate") == True).where(col("caramel") == False).count()

// Find competitorname with highest winpercent
max_win = df2.select(max("winpercent")).collect()[0][0]
df2.select('competitorname').where(col('winpercent')==max_win).show()
```



