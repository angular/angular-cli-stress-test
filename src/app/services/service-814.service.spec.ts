/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service814Service } from './service-814.service';

describe('Service814Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service814Service]
    });
  });

  it('should ...', inject([Service814Service], (service: Service814Service) => {
    expect(service).toBeTruthy();
  }));
});
