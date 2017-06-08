/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service95Service } from './service-95.service';

describe('Service95Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service95Service]
    });
  });

  it('should ...', inject([Service95Service], (service: Service95Service) => {
    expect(service).toBeTruthy();
  }));
});
