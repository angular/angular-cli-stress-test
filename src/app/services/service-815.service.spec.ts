/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service815Service } from './service-815.service';

describe('Service815Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service815Service]
    });
  });

  it('should ...', inject([Service815Service], (service: Service815Service) => {
    expect(service).toBeTruthy();
  }));
});
