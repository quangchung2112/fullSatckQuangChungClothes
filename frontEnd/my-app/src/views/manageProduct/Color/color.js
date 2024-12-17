import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { createColor, getAllColors } from "../../../service/API";
import { converName } from "../../../shared";

const ManageColor = () => {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [listColors, setListColors] = useState("");
  const [count, setCount] = useState(0);
  const handleCreate = async (e) => {
    e.preventDefault();
    let result = converName(color);
    if (result) {
      try {
        let data = await createColor(result, hex);
        setCount((preCount) => preCount + 1);
        toast.success(data.data.errMess);
      } catch (err) {
        toast.error(err.response.data.errMess);
      }
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin.");
    }
  };

  const fetchData = async () => {
    let result = await getAllColors();

    setListColors(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [count]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form className="">
              <div className="row">
                <div className="col-6">
                  <div class="form-group">
                    <label for="color">Màu Sắc</label>
                    <input
                      type="text"
                      id="color"
                      class="form-control"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div class="form-group">
                    <label for="hex">hex</label>
                    <input
                      type="text"
                      value={hex}
                      id="hex"
                      class="form-control"
                      onChange={(e) => setHex(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleCreate}
              >
                Tạo
              </button>
            </form>
          </div>
        </div>

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Hex</th>
            </tr>
          </thead>
          <tbody>
            {listColors && listColors.length > 0
              ? listColors.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.hex}</td>
                    </tr>
                  );
                })
              : "Không có dữ liệu"}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageColor;
