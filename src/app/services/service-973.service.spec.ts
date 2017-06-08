/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service973Service } from './service-973.service';

describe('Service973Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service973Service]
    });
  });

  it('should ...', inject([Service973Service], (service: Service973Service) => {
    expect(service).toBeTruthy();
  }));
});
