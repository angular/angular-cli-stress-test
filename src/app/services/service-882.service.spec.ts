/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service882Service } from './service-882.service';

describe('Service882Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service882Service]
    });
  });

  it('should ...', inject([Service882Service], (service: Service882Service) => {
    expect(service).toBeTruthy();
  }));
});
