/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service605Service } from './service-605.service';

describe('Service605Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service605Service]
    });
  });

  it('should ...', inject([Service605Service], (service: Service605Service) => {
    expect(service).toBeTruthy();
  }));
});
