/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service205Service } from './service-205.service';

describe('Service205Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service205Service]
    });
  });

  it('should ...', inject([Service205Service], (service: Service205Service) => {
    expect(service).toBeTruthy();
  }));
});
