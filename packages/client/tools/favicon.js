const icons = {
  yellow: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEU2NUFGRkFDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEU2NUFGRjlDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzY0OWVmMmQtM2VlNy00OWFlLTk1MDUtNTU4ODkwMDU5NGE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VYP/cAAAA2lJREFUeNrsnc9vjEEYx2dFT7Q9E1EORMSVZP1M1N/AXiSr9C4IN4c6Iu6IdRDE38CloRHhJqL2QGnac1tOFa/nyTsrlZB0mXnnmXc/n+R7a/Z9Mp99Z+Z9d2baKIrCwWCwgSZANiAbkA3IBmQDsgHZgGxANiAbkI1sQDYgG5ANyAZkA7IB2YBsQDYgG9mAbEA2IBuQDcgGZAOyAdmAbEA2sgHZgGxANiAbbLDReoHfXSOjxiyQnZAtknHJYckeyS7JJsmoZEnyTdKVvJc8lzyTLNa1MRrWTzj8hzt7SHJKMiE51udQ9UMyLbkneSxZrdOdXSfZ+odtyVXJjgCX/iS5JulICmTbka3d833JwQglzPgvUTd32XWYjWuX/TqSaOc/942kxaNXWs5LHklGIl9nWPJQcgHZadCGv+XH6kqGPMlNyUVm49WO2Sf9bDnFQ3jhu/QnTNDiy97tx+jhhGWtSPZLZpmgxe1KO4lF98bwTqKeZWBktyPOuvulKTnDmB2nG9c3Yx9cmBcmoZjzz/irdONhaRkTrYzl9Pydk+wJ6hqMbnyr5IvRL6f+eLJNskg3HobjhmvVusbpxsNxyHh9R5Edjr3G69uH7HDsNF7fdmSHY9R4fSM5NGIus/Ec/jtsg9l4GJaN17dCNx6OJb6MgyP7o/H6PiM7HO+M1/cW2eF4Yby+aWbj4Wbj+m583tlcLKANqO/GF5iNh2HBleu3LTLj66MbD8hto3XdyaUBc1uporsyxgyVx0qVSGiDThmracr1ufmPO3t9d7bzEzSdmTcNlPbSlYsffzUgd3b4ma+u6Ez9elKv33Z5vLPPVraiC/PPJWzowl9/NreGy3Wvl269uZzo2lfcH7b+IDsuNySXKrzDC3+967k2WB0247f8s+7miGV8lUy6cjPhX2FjX3zZzj/rPpAciFDCK8lpV+5GcTnLrss5aF3/OHbWlS86QjDnP6+5HtF049Xd2WsZ8l27ijri+j8tSY/Iuus4LSkL2WvRc9BOuHLdee8cNB3bdYHgsh+Le+eg6cuap+4/zkFDdlrZlYJsYIIGyAZkA7IB2YBsZNMEyAZkA7IB2YBsQDYgG5ANyAZkA7KRDcgGZAOyAdmAbEA2IBuQDcgGZCMbkA3IBmQDsgHZgGxANiAbkA2/81OAAQB8MsT8ziunpwAAAABJRU5ErkJggg==',
  red: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTEzREY1Q0ZDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTEzREY1Q0VDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzY0OWVmMmQtM2VlNy00OWFlLTk1MDUtNTU4ODkwMDU5NGE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uqJnXAAAA3VJREFUeNrsnc1rE0EYhzeiJ21zVsToISriSU9+4Ff9G2rxILUKvYqKeu4pUIvnalWwUKV/gwoGrSJ6E7HxIFEw59Z6KjT+XvoWPAmV2ezM5nngx0JJZ97M09nNbnanlW63m0F/sIUhQDYgG5ANyAZkA7IB2YBsQDYgG5CNbEA2IBuQDcgGZAOyAdmAbEA2IBvZgGxANiAbkA3IBmQDsgHZgGxANrIB2YBsQDYgG+Jga+pvoD1+p9D+a9MNZEfCTmVIOakcVOrKdqWqLCm/la/KF+W18kLpMLPTYZtyQRlTTv/jUFX17PLXjStrSlN5pDxTVjlmx0lFuay0lFnl7H+8P3v9GeWJtzPm7SI7Iuq+G7YZuTdQm9bOQ2+3juw4sF32B+V4Tu1bux+VEWQX+0n8mjZPlcGcuxpQ5pTryC5GtA38vR4eU62fKeUGsnsrelibuwV1P6kMI7s3ovdrM1Pgp+SK938A2fmKtoF+7MfQIhnwOirIzo/RHD91b5Zjfl6fzoWIVP5HiGa1XRlrBTyPDlKWnYPXphurzOywjEQm2qildP6dkuwx6uqD3bh24fZlxY9I/zjty5Pd2pV3mNlhOBdxrVbXELvxcJyIvL5TyA7HocjrO4zscOyLvL49yA5HNfL6BpHdP4M5gOxwLEde3y9kh2OJP8b+kf0t8vq+IzscnyOv7xOyw/Em8vqayA7HSyXWi/hdrw/ZIahNN35qsxBpeQteH7IDcj/Suh6kMoApybb7w9uR1WT1zCE7/K7cbv2ZiKysiVRuSUptZht2R+fbSGp55/VkyM5ndtsnX7ujs+jLk9b/aMRnCKWY2SZ8UZurBQ501/tfTG3sknz8R8LntblVUPe3lfkUxy3ZB/sk3J71utnDGd71/iZTHbOkH9mVcHuq8qKyknNXK97PVMrjVYaH8W3tkyPK+5zat3aPej8ZsovHVjyyZ6+uZOEuvLS9PWu3VYZBKtMCOnazvq2pYuufXFJe+c8220bTf7/u7a2VZYDKuDSWXdGa9dg6aOez9fvON9ZB25Gt39O27MfijXXQ7GvU5xnroCVL5y/xfU8yj+wCx2xANiAb2YBsQDYgG5ANyAZkA7IB2YBsQDYgG9mAbEA2IBuQDcgGZAOyAdmAbEA2sgHZgGxANiAbkA3IBmQDsgHZgGxkA7KhNPwRYADHXZyNMi8vGAAAAABJRU5ErkJggg==',
  green: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTEzREY1Q0JDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTEzREY1Q0FDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzY0OWVmMmQtM2VlNy00OWFlLTk1MDUtNTU4ODkwMDU5NGE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kpvnRAAAA3RJREFUeNrsnc1rE0EYhzeiJ01zVsSPQ1SCJz35gVbr31CLB4lR8Coqeu+1Fu9+NVio0r9BJQatInqTYuNBomDOrfVU6Pp76RQ8CZXZ7Mzu88CPhZLOvJmns5vd7E4raZomUA62MQTIBmQDsgHZgGxANiAbkA3IBmQDspENyAZkA7IB2YBsQDYgG5ANyAZkIxuQDcgGZAOyAdmAbEA2IBuQDchGNiAbkA3IBmRDGGyP/Q2MLjZz7b/TaCM7EHYrY8pp5YhSV3YqNWVZ+a18Vb4ob5SXyoCZHQ87lItKSzn7j0NVzWWPe911ZV3pKk+U58oax+wwqShXlJ4yq5z7j/dnrx9Vnrp2Wq5dZAdE3e2GbUYe8NSmtfPYtVtHdhjYLvujcjKj9q3dT8oEsvP9JH5Dm2fKSMZdVZU55Say8xFtA39/iMdU62dauYXs4Yoe1+ZeTt1PKePIHo7oQ9o8yvFTcsX1fxjZ2Yq2gZ5xx9A8qbo6KsjOjmaGn7q3ygl3Xh/PhYhY/keIZrVdGet5PI/2Qd/OwTuN9hoz2y8TgYk29sd0/h2T7BZ1lWA3rl24fVnxI9A/TvvyZK925QNmth/OB1yr1TXGbtwfpwKv7wyy/dEIvL6jyPbHwcDr24dsf9QCr28E2eUZzCqy/bESeH2/kO2PZf4YyyP7W+D1fUe2PxYDr+8zsv3xNvD6usj2xysl1Iv4qasP2T7oNNo/tVkItLwFVx+yPfIg0LoexjKAMcm2+8P7gdVk9cwh2/+u3G79mQysrMlYbkmKbWYbdkfnu0Bqee/qSZCdzey2T752R2felyet/2bAZwiFmNkmfEmbazkOdOr6X4pt7KJ8/EfC57W5k1P3d5X5GMct2gf7JNye9bo9xBmeuv6mYh2zqB/ZlXB7qvKSsppxV6uun+mYx6sID+Pb2ifHlA8ZtW/tHnf9JMjOH1vxyJ69upr4u/DSd+1Zu70iDFKRFtCxm/VtTRVb/+Sy8tr9bKttdN3v111760UZoCIujWVXtGZdbB20C8nGfeeb66DtSjbuaVtxx+LNddDsa9QXCeugRcvgL/GlJ5pHdoFjNiAbkI1sQDYgG5ANyAZkA7IB2YBsQDYgG5CNbEA2IBuQDcgGZAOyAdmAbEA2IBvZgGxANiAbkA3IBmQDsgHZgGxANrIB2VAY/ggwACg0nbVqw0xhAAAAAElFTkSuQmCC',
  grey: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAYAAABUx/9/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEU2NUFGRkVDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEU2NUFGRkRDREUyMTFFNTg1NDZDOTUyNzBCRkU3QTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjNjQ5ZWYyZC0zZWU3LTQ5YWUtOTUwNS01NTg4OTAwNTk0YTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzY0OWVmMmQtM2VlNy00OWFlLTk1MDUtNTU4ODkwMDU5NGE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Cq5CmgAAA3NJREFUeNrsnTtrFFEYhmdFK022VsRLsSpipZUXvMWfMMRgITEKtqKifdoY7L2CgShhf4IKLhpFtBMxayGr4NaJsQpkfT/yBayEyJmdc2afB14Gwuacb8+TM7MzO3NS6/V6GQwGmxgCZAOyAdmAbEA2IBuQDcgGZAOyAdnIBmQDsgHZgGxANiAbkA3IBmQDspENyAZkA7IB2YBsQDYgG5ANyAZkIxuQDcgGZAOyIQ42p/4Gms1mqf3neY7sSNiujCgnlANKQ9mq1JVF5bfyVfmivFZeKF1mdjpsUc4rE8qpfxyq6p4d/rqryqrSUh4pz5QVjtlxUlMuKW1lRjnzH+/PXn9aeeLtTHi7yI6Ihu+GbUbuCdSmtfPQ220gOw5sl/1BOVZQ+9buR2UM2eV+Er+mzVNluOCuhpRZ5TqyyxFtA3+3j8dU62dauYHs/ooe1eZOSd1PKaPI7o/ofdo8KPFTcs3734/sYkXbQD/2Y2iZDHkdNWQXx3iBn7o3ylE/r0/nQkQq/yNEs9qujLUDnkeHoGPn4HmerzCzwzIWmWhjd0rn3ynJnqCuAdiNaxduX1b8iPSP07482aldeZeZHYazEddqdY2wGw/H8cjrO4nscByMvL5DyA7H3sjr24XscNQjr28Y2YMzmEPIDsdS5PX9QnY4FvljHBzZ3yKv7zuyw/E58vo+ITscbyKvr4XscLxUYr2I3/P6kB2CPM9/ajMfaXnzXh+yA3Iv0rrupzKAKcm2+8M7kdVk9cwiO/yu3G79mYysrMlUbklKbWYbdkfn20hqeef1ZMguZnbbJ1+7o7Psy5PW/3jEZwiVmNkmfEGbKyUOdM/7X0ht7JJ8/EfC57S5VVL3t5W5FMct2Qf7JNye9brZxxne8/6mUh2zpB/ZlXB7qvKCslxwV8vez3TK41WFh/Ft7ZPDyvuC2rd2j3g/GbLLx1Y8smevLmfhLrx0vD1rt12FQarSAjp2s76tqWLrn1xUXvnPNtpGy3+/4e2tVmWAqrg0ll3RmvHYOmjnsrX7ztfXQduWrd3TtuTH4vV10Oxr1OcZ66AlS/cv8QNPMo/sAsdsQDYgG9mAbEA2IBuQDcgGZAOyAdmAbEA2IBvZgGxANiAbkA3IBmQDsgHZgGxANrIB2YBsQDYgG5ANyAZkA7IB2YBsZAOyoTL8EWAA2cybfeJOR1cAAAAASUVORK5CYII=',
}

export function favicon(state) {
  const icon = document.querySelector('link[rel="icon"]')
  if (!icon) return
  icon.href = icons[state]
}

let states = {
  good: 'green',
  bad: 'red',
  off: 'grey',
  wait: 'yellow',
}

// helpers favicon.good()
Object.keys(states).forEach(key => {
  favicon[key] = () => favicon(states[key])
})
