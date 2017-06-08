/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service544Service } from './service-544.service';

describe('Service544Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service544Service]
    });
  });

  it('should ...', inject([Service544Service], (service: Service544Service) => {
    expect(service).toBeTruthy();
  }));
});
