/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service730Service } from './service-730.service';

describe('Service730Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service730Service]
    });
  });

  it('should ...', inject([Service730Service], (service: Service730Service) => {
    expect(service).toBeTruthy();
  }));
});
