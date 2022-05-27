call func.addoc(1, 'копия паспорта',  'C:\Games\voenic.docx'); --2

copy (select documents from stud.doc where id_doc = 15) TO 'C:\Games\n.docx' (FORMAT binary)