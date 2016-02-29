---
layout: post
title: psycopg2 on Windows - Unresolved External Symbol
---

I utilize the Python [psycopg2](http://initd.org/psycopg/) quite a bit with my Django projects so I can connect the Django framework to a [PostgreSQL](http://www.postgresql.org/) database. I also use Windows, which as you can probably imagine is like using a toothbrush to hammer nails when it comes to this sort of development.

I had a problem install psycopg2 with pip. It wouldn’t install. Nothing was helping.

Here was my scenario:

* I had Visual Studio 10.0 C++ express installed
* I installed the psycopg2 compiled image into my virtual environment.
* I ensured I was in the virtual environment when installing the compiled image above.
* I also ensured I had to use the 32 bit executable.
* This all worked on another machine and also in another virtual environment for another project.

It still wouldn’t work! I’m 2 hours into this! What’s wrong?!

##The fix
The fix was stupidly simple, but hard to pinpoint. Make sure the psycopg2 compiled image version matches your psycopg2 version.

I had pip installing 2.5.4 of pyscopg2, but the compiled image was for 2.6. Silly, yes, but makes sense.

I hope this helps you figure this out, so you can move on!

<video class="gfyVid" autoplay="" loop="" poster="https://thumbs.gfycat.com/ScalyDopeyCoypu-poster.jpg" style="width: 100%; height: auto;"><source src="https://zippy.gfycat.com/ScalyDopeyCoypu.webm" type="video/webm" class="webmsource"><source src="https://zippy.gfycat.com/ScalyDopeyCoypu.mp4" type="video/mp4" class="mp4source"></video>

Here is the error I was receiving by the way. Perhaps one of these keywords brought you here.

{% highlight python %}
pqpath.obj : error LNK2019: unresolved external symbol _PQisBusy referenced
in function _pq_is_busy

pqpath.obj : error LNK2019: unresolved external symbol _PQconsumeInput refer
enced in function _pq_is_busy

pqpath.obj : error LNK2019: unresolved external symbol _PQflush referenced i
n function _pq_flush

connection_int.obj : error LNK2001: unresolved external symbol _PQflush

pqpath.obj : error LNK2019: unresolved external symbol _PQsendQuery referenc
ed in function _pq_send_query

pqpath.obj : error LNK2019: unresolved external symbol _PQfname referenced i
n function __pq_fetch_tuples

pqpath.obj : error LNK2019: unresolved external symbol _PQfmod referenced in
function __pq_fetch_tuples

pqpath.obj : error LNK2019: unresolved external symbol _PQfsize referenced i
n function __pq_fetch_tuples

pqpath.obj : error LNK2019: unresolved external symbol _PQftype referenced i
n function __pq_fetch_tuples

pqpath.obj : error LNK2019: unresolved external symbol _PQbinaryTuples refer
enced in function __pq_fetch_tuples

pqpath.obj : error LNK2019: unresolved external symbol _PQnfields referenced
in function __pq_fetch_tuples

cursor_type.obj : error LNK2001: unresolved external symbol _PQnfields

pqpath.obj : error LNK2019: unresolved external symbol _PQcmdTuples referenc
ed in function __read_rowcount

pqpath.obj : error LNK2019: unresolved external symbol _PQputCopyEnd referen
ced in function __pq_copy_in_v3

pqpath.obj : error LNK2019: unresolved external symbol _PQputCopyData refere
nced in function __pq_copy_in_v3

pqpath.obj : error LNK2019: unresolved external symbol _PQfreemem referenced
in function __pq_copy_out_v3

connection_int.obj : error LNK2001: unresolved external symbol _PQfreemem

adapter_binary.obj : error LNK2001: unresolved external symbol _PQfreemem

pqpath.obj : error LNK2019: unresolved external symbol _PQgetCopyData refere
nced in function __pq_copy_out_v3

pqpath.obj : error LNK2019: unresolved external symbol _PQntuples referenced
in function _pq_fetch

pqpath.obj : error LNK2019: unresolved external symbol _PQoidValue reference
d in function _pq_fetch

pqpath.obj : error LNK2019: unresolved external symbol _PQcmdStatus referenc
ed in function _pq_fetch

pqpath.obj : error LNK2019: unresolved external symbol _PQresStatus referenc
ed in function _pq_fetch

utils.obj : error LNK2019: unresolved external symbol _PQescapeString refere
nced in function _psycopg_escape_string

utils.obj : error LNK2019: unresolved external symbol _PQescapeStringConn re
ferenced in function _psycopg_escape_string

connection_int.obj : error LNK2019: unresolved external symbol _PQnotifies r
eferenced in function _conn_notifies_process

connection_int.obj : error LNK2019: unresolved external symbol _PQparameterS
tatus referenced in function _conn_get_standard_conforming_strings

connection_type.obj : error LNK2001: unresolved external symbol _PQparameter
Status

connection_int.obj : error LNK2019: unresolved external symbol _PQprotocolVe
rsion referenced in function _conn_get_protocol_version

connection_int.obj : error LNK2019: unresolved external symbol _PQserverVers
ion referenced in function _conn_get_server_version

connection_int.obj : error LNK2019: unresolved external symbol _PQgetCancel
referenced in function _conn_setup_cancel

connection_int.obj : error LNK2019: unresolved external symbol _PQfreeCancel
referenced in function _conn_setup_cancel

connection_type.obj : error LNK2001: unresolved external symbol _PQfreeCance
l

connection_int.obj : error LNK2019: unresolved external symbol _PQsetNoticeP
rocessor referenced in function __conn_sync_connect

connection_int.obj : error LNK2019: unresolved external symbol _PQconnectSta
rt referenced in function __conn_sync_connect

connection_int.obj : error LNK2019: unresolved external symbol _PQconnectdb
referenced in function __conn_sync_connect

connection_int.obj : error LNK2019: unresolved external symbol _PQconnectPol
l referenced in function __conn_poll_connecting

connection_int.obj : error LNK2019: unresolved external symbol _PQfinish ref
erenced in function _conn_close_locked

connection_type.obj : error LNK2019: unresolved external symbol _PQtransacti
onStatus referenced in function _psyco_conn_get_transaction_status

connection_type.obj : error LNK2019: unresolved external symbol _PQbackendPI
D referenced in function _psyco_conn_get_backend_pid

connection_type.obj : error LNK2019: unresolved external symbol _PQsocket re
ferenced in function _psyco_conn_fileno

connection_type.obj : error LNK2019: unresolved external symbol _PQcancel re
ferenced in function _psyco_conn_cancel

cursor_type.obj : error LNK2019: unresolved external symbol _PQgetlength ref
erenced in function __psyco_curs_buildrow_fill

cursor_type.obj : error LNK2019: unresolved external symbol _PQgetisnull ref
erenced in function __psyco_curs_buildrow_fill

lobject_int.obj : error LNK2019: unresolved external symbol _lo_open referen
ced in function _lobject_open

lobject_int.obj : error LNK2019: unresolved external symbol _lo_creat refere
nced in function _lobject_open

lobject_int.obj : error LNK2019: unresolved external symbol _lo_create refer
enced in function _lobject_open

lobject_int.obj : error LNK2019: unresolved external symbol _lo_import refer
enced in function _lobject_open

lobject_int.obj : error LNK2019: unresolved external symbol _lo_close refere
nced in function _lobject_close_locked

lobject_int.obj : error LNK2019: unresolved external symbol _lo_unlink refer
enced in function _lobject_unlink

lobject_int.obj : error LNK2019: unresolved external symbol _lo_write refere
nced in function _lobject_write

lobject_int.obj : error LNK2019: unresolved external symbol _lo_read referen
ced in function _lobject_read

lobject_int.obj : error LNK2019: unresolved external symbol _lo_lseek refere
nced in function _lobject_seek

lobject_int.obj : error LNK2019: unresolved external symbol _lo_tell referen
ced in function _lobject_tell

lobject_int.obj : error LNK2019: unresolved external symbol _lo_export refer
enced in function _lobject_export

lobject_int.obj : error LNK2019: unresolved external symbol _lo_truncate ref
erenced in function _lobject_truncate

adapter_binary.obj : error LNK2019: unresolved external symbol _PQescapeByte
a referenced in function _binary_escape

adapter_binary.obj : error LNK2019: unresolved external symbol _PQescapeByte
aConn referenced in function _binary_escape

build\lib.win32-3.4\psycopg2\_psycopg.pyd : fatal error LNK1120: 62 unresolv
ed externals

error: command ‘C:\\Program Files (x86)\\Microsoft Visual Studio 10.0\\VC\\B
IN\\link.exe’ failed with exit status 1120

—————————————-
←[31m Command “c:\projects\garden-tracker\env\Scripts\python.exe -c “import s
etuptools, tokenize;__file__=’C:\\Users\\LEEMA_~1\\AppData\\Local\\Temp\\pip-bui
ld-q_1jzmm5\\psycopg2\\setup.py’;exec(compile(getattr(tokenize, ‘open’, open)(__
file__).read().replace(‘\r\n’, ‘\n’), __file__, ‘exec’))” install –record C:\Us
ers\LEEMA_~1\AppData\Local\Temp\pip-p5tqqhvm-record\install-record.txt –single-
version-externally-managed –compile –install-headers c:\projects\garden-tracke
r\env\include\site\python3.4″ failed with error code 1 in C:\Users\LEEMA_~1\AppD
ata\Local\Temp\pip-build-q_1jzmm5\psycopg2←[0m
(env)
{% endhighlight %}
