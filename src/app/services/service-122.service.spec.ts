/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service122Service } from './service-122.service';

describe('Service122Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service122Service]
    });
  });

  it('should ...', inject([Service122Service], (service: Service122Service) => {
    expect(service).toBeTruthy();
  }));
});
