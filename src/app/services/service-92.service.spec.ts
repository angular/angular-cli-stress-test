/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service92Service } from './service-92.service';

describe('Service92Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service92Service]
    });
  });

  it('should ...', inject([Service92Service], (service: Service92Service) => {
    expect(service).toBeTruthy();
  }));
});
