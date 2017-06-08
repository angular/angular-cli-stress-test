/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service946Service } from './service-946.service';

describe('Service946Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service946Service]
    });
  });

  it('should ...', inject([Service946Service], (service: Service946Service) => {
    expect(service).toBeTruthy();
  }));
});
