/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service675Service } from './service-675.service';

describe('Service675Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service675Service]
    });
  });

  it('should ...', inject([Service675Service], (service: Service675Service) => {
    expect(service).toBeTruthy();
  }));
});
