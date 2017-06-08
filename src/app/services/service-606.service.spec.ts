/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service606Service } from './service-606.service';

describe('Service606Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service606Service]
    });
  });

  it('should ...', inject([Service606Service], (service: Service606Service) => {
    expect(service).toBeTruthy();
  }));
});
