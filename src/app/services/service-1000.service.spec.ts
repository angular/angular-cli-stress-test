/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service1000Service } from './service-1000.service';

describe('Service1000Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service1000Service]
    });
  });

  it('should ...', inject([Service1000Service], (service: Service1000Service) => {
    expect(service).toBeTruthy();
  }));
});
