/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service866Service } from './service-866.service';

describe('Service866Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service866Service]
    });
  });

  it('should ...', inject([Service866Service], (service: Service866Service) => {
    expect(service).toBeTruthy();
  }));
});
