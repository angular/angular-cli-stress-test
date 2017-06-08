/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service989Service } from './service-989.service';

describe('Service989Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service989Service]
    });
  });

  it('should ...', inject([Service989Service], (service: Service989Service) => {
    expect(service).toBeTruthy();
  }));
});
