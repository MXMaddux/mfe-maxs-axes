import React, { useContext, useLayoutEffect } from "react";
import {Link} from "react-router-dom";
import { GuitarsContext } from "../store/guitars-context";
// import GuitarForm from "../components/ManageInventory/GuitarForm";
import { storeGuitar } from "../util/http";



function ManageInventory({ route, navigation }) {
  const guitarsCtx = useContext(GuitarsContext);

  const editedGuitarId = route.params?.guitarId;
  const isEditing = !!editedGuitarId;

  const selectedGuitar = guitarsCtx.guitars.find(
    (guitar) => guitar.id === editedGuitarId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Guitar" : "Add Guitar",
    });
  }, [navigation, isEditing]);

  async function deleteGuitarHandler() {
    guitarsCtx.deleteGuitar(editedGuitarId);
    await deleteGuitar(editedGuitarId)
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  const confirmHandler = async (guitarData) => {
    if (isEditing) {
      guitarsCtx.updateGuitar(editedGuitarId, guitarData);
      await updateGuitar(editedGuitarId, guitarData);
    } else {
      const id = await storeGuitar(guitarData);
      guitarsCtx.addGuitar({ guitarData, id: id });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <GuitarForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedGuitar}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <Link
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteGuitarHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageInventory;

const Wrapper = styled.div`

.container {
  flex: 1;
  padding: 24;
  background: var(--clr-primary-2)
}
.deleteContainer {
  margin-top: 16;
  padding-top: 8;
  border-top-width: 2;
  border-top-color: var(--clr-primary-8);
  align-items: "center";
}

` ({
});
