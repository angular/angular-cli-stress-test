/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service897Service } from './service-897.service';

describe('Service897Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service897Service]
    });
  });

  it('should ...', inject([Service897Service], (service: Service897Service) => {
    expect(service).toBeTruthy();
  }));
});
