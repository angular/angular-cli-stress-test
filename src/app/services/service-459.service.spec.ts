/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service459Service } from './service-459.service';

describe('Service459Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service459Service]
    });
  });

  it('should ...', inject([Service459Service], (service: Service459Service) => {
    expect(service).toBeTruthy();
  }));
});
