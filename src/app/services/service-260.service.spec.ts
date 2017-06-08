/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service260Service } from './service-260.service';

describe('Service260Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service260Service]
    });
  });

  it('should ...', inject([Service260Service], (service: Service260Service) => {
    expect(service).toBeTruthy();
  }));
});
