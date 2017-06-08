/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service681Service } from './service-681.service';

describe('Service681Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service681Service]
    });
  });

  it('should ...', inject([Service681Service], (service: Service681Service) => {
    expect(service).toBeTruthy();
  }));
});
