/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service228Service } from './service-228.service';

describe('Service228Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service228Service]
    });
  });

  it('should ...', inject([Service228Service], (service: Service228Service) => {
    expect(service).toBeTruthy();
  }));
});
