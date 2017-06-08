/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service261Service } from './service-261.service';

describe('Service261Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service261Service]
    });
  });

  it('should ...', inject([Service261Service], (service: Service261Service) => {
    expect(service).toBeTruthy();
  }));
});
