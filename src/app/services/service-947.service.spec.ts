/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service947Service } from './service-947.service';

describe('Service947Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service947Service]
    });
  });

  it('should ...', inject([Service947Service], (service: Service947Service) => {
    expect(service).toBeTruthy();
  }));
});
