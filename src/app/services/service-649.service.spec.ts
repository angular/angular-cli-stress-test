/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service649Service } from './service-649.service';

describe('Service649Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service649Service]
    });
  });

  it('should ...', inject([Service649Service], (service: Service649Service) => {
    expect(service).toBeTruthy();
  }));
});
