###############################################################################
#
# This file is part of CMake configuration for SOCI library
#
# Copyright (C) 2010 Mateusz Loskot
# Distributed under the Boost Software License, Version 1.0.
# (See accompanying file LICENSE_1_0.txt or copy at
# http://www.boost.org/LICENSE_1_0.txt)
#
###############################################################################

set(CMAKE_POSITION_INDEPENDENT_CODE ON)
add_library(soci_mysql STATIC
        blob.cpp common.cpp common.h factory.cpp row-id.cpp session.cpp standard-into-type.cpp
        standard-use-type.cpp statement.cpp vector-into-type.cpp vector-use-type.cpp)
target_include_directories(soci_mysql PUBLIC ../soci/core)

#add_subdirectory(test)

