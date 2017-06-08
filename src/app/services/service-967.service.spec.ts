/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service967Service } from './service-967.service';

describe('Service967Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service967Service]
    });
  });

  it('should ...', inject([Service967Service], (service: Service967Service) => {
    expect(service).toBeTruthy();
  }));
});
