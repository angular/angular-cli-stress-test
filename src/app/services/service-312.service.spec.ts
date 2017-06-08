/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service312Service } from './service-312.service';

describe('Service312Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service312Service]
    });
  });

  it('should ...', inject([Service312Service], (service: Service312Service) => {
    expect(service).toBeTruthy();
  }));
});
