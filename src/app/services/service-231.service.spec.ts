/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service231Service } from './service-231.service';

describe('Service231Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service231Service]
    });
  });

  it('should ...', inject([Service231Service], (service: Service231Service) => {
    expect(service).toBeTruthy();
  }));
});
