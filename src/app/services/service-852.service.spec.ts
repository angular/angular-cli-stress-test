/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service852Service } from './service-852.service';

describe('Service852Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service852Service]
    });
  });

  it('should ...', inject([Service852Service], (service: Service852Service) => {
    expect(service).toBeTruthy();
  }));
});
