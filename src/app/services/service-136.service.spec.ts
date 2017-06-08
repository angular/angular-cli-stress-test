/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service136Service } from './service-136.service';

describe('Service136Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service136Service]
    });
  });

  it('should ...', inject([Service136Service], (service: Service136Service) => {
    expect(service).toBeTruthy();
  }));
});
